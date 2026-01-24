# C++ 语法

## 数据类型

https://cppreference.com/w/cpp/language/type-id.html

1. 基本类型
	1. 整数： [signed | unsigned] **int** | long | long long
	2. 浮点数：**double**，float, long double
	3. 字符:  **char** (单引号)
	4. 布尔型: **bool** (true, false)
	5. 指针
2. 复合类型
	1. 字符串:  **string**, char*
	2. 数组
	3. 结构体
	4. 联合体
	5. 类
3. auto

## 变量

1. TYPE  name = VAULE;
2. const TYPE name = VALUE;

## 控制结构

1. 顺序
2. 分支
	1. if (COND) { ... } else { ... }
	2. goto
3. 循环
	1. `for(INIT; COND; EXP) { ... }`
	2. `while (COND) { ... }`
	3. `do { ... } while (COND)`
	4. `continue`, `break`

## 操作符

https://cppreference.com/w/cpp/language/expressions.html#Operators

1.  +    -    \*    /    %
2. ++    --
3.  =    +=    -=     \*=     /=   %=
4. ==  !=  >   >=     <    <=   &&   ||     !

## 函数

声明：
```
TYPE name(TYPE name,  ...);
```

定义：
```
TYPE  name(TYPE name, ...) {
      ....;
      return ...;
}
```

主函数:
```
int main(int argc, char** argv) { ... }

int main(int argc, char* argv[]) { ... }

int main() { ... }
```
## 宏

1. 头文件： https://cppreference.com/w/cpp/headers.html
	1. `#include <xxx>`
	2. `#include "xxx"`
	3. `iostream`,  `string`, `cstdlib`, `cstdio`

## 命名空间

1. 使用： `using namespace std;`
2. 定义： `namespace xxx { ... }`
