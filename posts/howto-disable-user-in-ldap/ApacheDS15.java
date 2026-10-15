/*    */ package com.atlassian.crowd.directory;
/*    */ 
/*    */ import com.atlassian.crowd.model.user.LDAPUserWithAttributes;
/*    */ import com.atlassian.crowd.model.user.User;
/*    */ import com.atlassian.crowd.password.factory.PasswordEncoderFactory;
/*    */ import com.atlassian.crowd.search.ldap.ActiveDirectoryQueryTranslaterImpl;
/*    */ import com.atlassian.crowd.search.ldap.LDAPQueryTranslater;
/*    */ import com.atlassian.crowd.util.InstanceFactory;
/*    */ import com.atlassian.event.api.EventPublisher;
/*    */ import javax.naming.directory.Attributes;
/*    */ import org.apache.commons.lang3.StringUtils;
/*    */ import org.slf4j.Logger;
/*    */ import org.slf4j.LoggerFactory;
/*    */ import org.springframework.ldap.core.ContextSource;
/*    */ import org.springframework.ldap.core.LdapTemplate;
/*    */ import org.springframework.ldap.core.support.LdapContextSource;
/*    */ import com.atlassian.crowd.directory.ldap.mapper.ContextMapperWithRequiredAttributes;
/*    */ import com.atlassian.crowd.directory.ldap.mapper.UserContextMapperConfig;
/*    */ import com.atlassian.crowd.directory.ldap.mapper.attribute.ActiveDirectoryUserContextMapper;
/*    */ import com.atlassian.crowd.directory.ldap.mapper.attribute.AttributeMapper;
/*    */ import com.atlassian.crowd.directory.ldap.mapper.attribute.UserAccountControlMapper;
/*    */ import com.atlassian.crowd.directory.ldap.mapper.attribute.UserAccountControlUtil;
/*    */ import java.util.*;
/*    */ import javax.naming.directory.*;
/*    */ import com.google.common.collect.*;
/*    */ 
/*    */ public class ApacheDS15 extends ApacheDS {
/* 17 */   private static final Logger logger = LoggerFactory.getLogger(ApacheDS15.class);
/*    */ 
/*    */   
/*    */   public ApacheDS15(ActiveDirectoryQueryTranslaterImpl activeDirectoryQueryTranslater, EventPublisher eventPublisher, InstanceFactory instanceFactory, PasswordEncoderFactory passwordEncoderFactory) {
/* 21 */     super((LDAPQueryTranslater)activeDirectoryQueryTranslater, eventPublisher, instanceFactory, passwordEncoderFactory);
/*    */   }
/*    */   
/*    */   public static String getStaticDirectoryType() {
/* 25 */     return "Apache Directory Server 1.5.x";
/*    */   }
/*    */ 
/*    */   
/*    */   public String getDescriptiveName() {
/* 30 */     return getStaticDirectoryType();
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   protected String getInitialGroupMemberDN() {
/* 42 */     return this.ldapPropertiesMapper.getUsername();
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   protected void getNewUserDirectorySpecificAttributes(User user, Attributes attributes) {
/* 54 */     if (StringUtils.isBlank(user.getLastName())) {
/* 55 */       addDefaultSnToUserAttributes(attributes, " ");
/*    */     }
/*    */ 
/*    */     
/* 59 */     if (StringUtils.isBlank(user.getEmailAddress())) {
/* 60 */       addDefaultValueToUserAttributesForAttribute(this.ldapPropertiesMapper.getUserEmailAttribute(), attributes, " ");
/*    */     }

    /* 606 */     String accountStatus = null;
    /* 607 */     if (user.isActive()) {    // ApacheDS doesn't support bitwise filter, so keep it be 0 or 2
    /* 608 */       accountStatus = "0";    //Integer.toString(8389152);
    /*     */     } else {
    /* 610 */       accountStatus = "2";    //Integer.toString(8389154);
    /*     */     }
    /*     */
    /* 613 */     attributes.put(new BasicAttribute("userAccountControl", accountStatus));

/*    */   }
/*    */ 
/*    */   
/*    */   protected LdapTemplate createChangeListenerTemplate() {
/* 66 */     LdapContextSource contextSource = new LdapContextSource();
/*    */     
/* 68 */     contextSource.setUrl(this.ldapPropertiesMapper.getConnectionURL());
/* 69 */     contextSource.setUserDn(this.ldapPropertiesMapper.getUsername());
/* 70 */     contextSource.setPassword(this.ldapPropertiesMapper.getPassword());
/*    */ 
/*    */     
/* 73 */     contextSource.setBaseEnvironmentProperties(getBaseEnvironmentProperties());
/*    */ 
/*    */     
/* 76 */     contextSource.setPooled(true);
/*    */ 
/*    */ 
/*    */     
/* 80 */     contextSource.setDirObjectFactory(null);
/*    */ 
/*    */     
/*    */     try {
/* 84 */       contextSource.afterPropertiesSet();
/* 85 */     } catch (Exception e) {
/* 86 */       logger.error(e.getMessage(), e);
/*    */     } 
/*    */     
/* 89 */     return new LdapTemplate((ContextSource)contextSource);
/*    */   }


                    @Override
        /*     */   protected List<AttributeMapper> getCustomUserAttributeMappers(UserContextMapperConfig config) {
        /* 627 */     ImmutableList.Builder<AttributeMapper> builder = ImmutableList.builder();
        /* 629 */     builder.addAll(super.getCustomUserAttributeMappers(config));
        /* 633 */     builder.add(new UserAccountControlMapper());
        /*     */
        /* 635 */     return (List<AttributeMapper>)builder.build();
        /*     */   }


                    @Override
        /*     */   public ContextMapperWithRequiredAttributes<LDAPUserWithAttributes> getUserContextMapper(UserContextMapperConfig config) {
        /* 847 */     ImmutableList.Builder mappers = ImmutableList.builder();
        /* 848 */     mappers.addAll(getCustomUserAttributeMappers(config));
        /*     */
        /* 850 */     return (ContextMapperWithRequiredAttributes<LDAPUserWithAttributes>)new ActiveDirectoryUserContextMapper(getDirectoryId(), this.ldapPropertiesMapper, (List)mappers.build());
        /*     */   }


                    @Override
        /*     */   protected List<ModificationItem> getUserModificationItems(User userTemplate, LDAPUserWithAttributes currentUser) {
        /* 874 */     ImmutableList.Builder modificationItems = ImmutableList.builder().addAll(super.getUserModificationItems(userTemplate, currentUser));
        /*     */
        /* 876 */     String currentValue = currentUser.getValue("userAccountControl");
        /*     */
        /*     */
        /* 879 */     String newValue = userTemplate.isActive() ? UserAccountControlUtil.enabledUser(currentValue) : UserAccountControlUtil.disabledUser(currentValue);
        /*     */
        /* 881 */     ModificationItem activeModItem = createModificationItem("userAccountControl", currentValue, newValue);
        /*     */
        /*     */
        /* 884 */     if (activeModItem != null) {
        /* 885 */       modificationItems.add(activeModItem);
        /*     */     }
        /*     */
        /* 888 */     return (List<ModificationItem>)modificationItems.build();
        /*     */   }

                    @Override
        /*     */   public boolean supportsInactiveAccounts() {
        /* 898 */     return true;
        /*     */   }

/*    */ }


/* Location:              /Users/liuyb/tmp/atlassian-crowd-4.1.0/a/crowd-ldap-4.1.0.jar!/com/atlassian/crowd/directory/ApacheDS15.class
 * Java compiler version: 8 (52.0)
 * JD-Core Version:       1.1.3
 */
