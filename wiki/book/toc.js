// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="index.html">首页</a></li><li class="chapter-item affix "><li class="part-title">基础知识</li><li class="chapter-item "><a href="00语文/index.html"><strong aria-hidden="true">1.</strong> 语文</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="00语文/名家名著.html"><strong aria-hidden="true">1.1.</strong> 名家名著</a></li><li class="chapter-item "><a href="00语文/音韵学.html"><strong aria-hidden="true">1.2.</strong> 音韵学</a></li></ol></li><li class="chapter-item "><a href="01数学/index.html"><strong aria-hidden="true">2.</strong> 数学</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="01数学/数学分类.html"><strong aria-hidden="true">2.1.</strong> 数学分类</a></li><li class="chapter-item "><a href="01数学/数的分类.html"><strong aria-hidden="true">2.2.</strong> 数的分类</a></li></ol></li><li class="chapter-item "><a href="02外语/index.html"><strong aria-hidden="true">3.</strong> 外语</a></li><li class="chapter-item "><a href="03物理/index.html"><strong aria-hidden="true">4.</strong> 物理</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="03物理/地球在宇宙中的位置.html"><strong aria-hidden="true">4.1.</strong> 地球在宇宙中的位置</a></li></ol></li><li class="chapter-item "><a href="04化学/index.html"><strong aria-hidden="true">5.</strong> 化学</a></li><li class="chapter-item "><a href="05生物/index.html"><strong aria-hidden="true">6.</strong> 生物</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="05生物/生物分类.html"><strong aria-hidden="true">6.1.</strong> 生物分类</a></li></ol></li><li class="chapter-item "><a href="06政治/index.html"><strong aria-hidden="true">7.</strong> 政治</a></li><li class="chapter-item "><a href="07历史/index.html"><strong aria-hidden="true">8.</strong> 历史</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="07历史/中国朝代.html"><strong aria-hidden="true">8.1.</strong> 中国朝代</a></li></ol></li><li class="chapter-item "><a href="08地理/index.html"><strong aria-hidden="true">9.</strong> 地理</a></li><li class="chapter-item affix "><li class="part-title">专业技能</li><li class="chapter-item "><a href="10计算机/index.html"><strong aria-hidden="true">10.</strong> 计算机</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="10计算机/CPlusPlus学习资源.html"><strong aria-hidden="true">10.1.</strong> CPlusPlus学习资源</a></li><li class="chapter-item "><a href="10计算机/CPlusPlus实践.html"><strong aria-hidden="true">10.2.</strong> CPlusPlus实践</a></li><li class="chapter-item "><a href="10计算机/CPlusPlus语法.html"><strong aria-hidden="true">10.3.</strong> CPlusPlus语法</a></li><li class="chapter-item "><a href="10计算机/EDA概览.html"><strong aria-hidden="true">10.4.</strong> EDA概览</a></li><li class="chapter-item "><a href="10计算机/什么是编程.html"><strong aria-hidden="true">10.5.</strong> 什么是编程</a></li></ol></li><li class="chapter-item "><a href="11经济/index.html"><strong aria-hidden="true">11.</strong> 经济</a></li><li class="chapter-item "><a href="12金融/index.html"><strong aria-hidden="true">12.</strong> 金融</a></li><li class="chapter-item "><a href="13法律/index.html"><strong aria-hidden="true">13.</strong> 法律</a></li><li class="chapter-item "><a href="14哲学/index.html"><strong aria-hidden="true">14.</strong> 哲学</a></li><li class="chapter-item "><a href="15医学/index.html"><strong aria-hidden="true">15.</strong> 医学</a></li><li class="chapter-item "><a href="16驾驶/index.html"><strong aria-hidden="true">16.</strong> 驾驶</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="16驾驶/科目一法规.html"><strong aria-hidden="true">16.1.</strong> 科目一法规</a></li></ol></li><li class="chapter-item "><li class="part-title">人文艺术</li><li class="chapter-item "><a href="20美术/index.html"><strong aria-hidden="true">17.</strong> 美术</a></li><li class="chapter-item "><a href="21音乐/index.html"><strong aria-hidden="true">18.</strong> 音乐</a></li><li class="chapter-item "><a href="22体育/index.html"><strong aria-hidden="true">19.</strong> 体育</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="22体育/绳结简介.html"><strong aria-hidden="true">19.1.</strong> 绳结简介</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
