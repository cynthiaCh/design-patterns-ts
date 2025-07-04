# TypeScript Design Patterns Playground

> 🚀 用 TypeScript 实现 23 种经典设计模式，一边编码一边学习。

本项目旨在用 TypeScript 手动实现常见的设计模式，包括创建型、结构型、行为型三大类，帮助你从实际编码中深入理解每种模式的应用场景与原理。



## ✨ 项目特点

- 使用 TypeScript 强类型约束，规范实现每种模式接口
- 每个模式均提供最小可运行示例
- 部分模式提供对比图示（如 UML）和真实业务应用参考
- 可直接运行（Node.js 原生支持 ESModule）
- 可配合测试工具验证行为（如 Vitest）


## 🔧 快速开始

### 安装依赖

```bash
npm install
```

### 编译 & 运行

```bash
npx tsc
node dist/index.js
```

> 📌 若你使用 ESModule，请在 `package.json` 中添加 `"type": "module"`，并确保 `import` 路径带 `.js` 后缀。

### 开发中调试
```bash
node --loader ts-node/esm src/index.ts
```
### mermaid图
```bash
 mmdc -i diagrams/chain-of-responsibility.mmd -o diagrams/chain-of-responsibility.png
```

## 🗂️ 目录结构

```bash
design-patterns-ts/
├── src/
│   ├── creational/      # 创建型模式
│   │   └── singleton.ts
│   ├── structural/      # 结构型模式
│   └── behavioral/      # 行为型模式
├── tests/               # 可选：Vitest 测试文件
├── dist/                # TypeScript 编译输出
├── tsconfig.json
├── package.json
└── README.md
```
## 🧱 已实现模式（持续更新中）

### ✅ 创建型模式

- [✅] 单例模式（Singleton）
- [✅] 工厂方法模式（Factory Method）
- [✅] 抽象工厂模式（Abstract Factory）
- [✅] 建造者模式（Builder）
- [✅] 原型模式（Prototype）

### 🧱 结构型模式（Structural Patterns）

- [✅] 适配器模式（Adapter）
- [✅] 装饰器模式（Decorator）
- [✅] 外观模式（Facade）
- [✅] 组合模式（Composite）
- [✅] 代理模式（Proxy）
- [✅] 桥接模式（Bridge）
- [✅] 享元模式（Flyweight）

### 🔄 行为型模式（Behavioral Patterns）

- [✅] 策略模式（Strategy）
- [✅] 观察者模式（Observer）
- [✅] 状态模式（State）
- [✅] 命令模式（Command）
- [✅] 责任链模式（Chain of Responsibility）
- [✅] 模板方法模式（Template Method）
- [✅] 迭代器模式（Iterator）
- [✅] 中介者模式（Mediator）
- [✅] 访问者模式（Visitor）
- [✅] 解释器模式（Interpreter）
- [✅] 备忘录模式（Memento）

📌 每个模式包含以下内容：

- ✅ TypeScript 实现（`src/`）
- ✅ 使用示例（`src/index.ts` / 单测）
- ✅ Mermaid 类图（`UML-PNG/`）
- ✅ 中文注释 + 可视化场景解说


## 🧱 设计模式一览
🟩 Singleton 单例模式

    目的：确保一个类只有一个实例，并提供全局访问点。

    示例：Singleton.getInstance() 始终返回相同对象。

🟩 Factory Method 工厂方法模式

    目的：定义一个创建对象的接口，让子类决定实例化哪个类。

    示例：ConcreteCreatorA、ConcreteCreatorB 创建各自产品。

🟩 Abstract Factory 抽象工厂模式

    目的：提供一组相关产品的创建接口，而无需指定其具体类。

    示例：ChinaFruitFactory、USFruitFactory 创建中美风味水果。

🟩 Builder 建造者模式

    目的：将一个复杂对象的构建与其表示分离，使同样的构建过程可以创建不同的表示。

    示例：ConcreteUserProfileBuilder 构建用户简介对象。

🟩 Prototype 原型模式

    目的：通过复制已有实例来创建新对象，而不是通过 new。

    示例：Field.clone() 复制一个表单字段配置对象。

🟦 Adapter 适配器模式（结构型）

    目的：将一个类的接口转换为客户端期望的另一个接口，实现兼容。

    示例：OldCharger 使用 ChargerAdapter 适配为 Charger 接口。

🧁 Decorator 装饰器模式

    目的：在不改变原始类的前提下，动态添加额外功能。

    使用场景：增强功能、添加可选项（如咖啡加糖加奶）。

    示例：Coffee 被逐层包装为 MilkDecorator 和 SugarDecorator。

📸 Facade 外观模式

- **目的**：为多个复杂子系统提供一个统一的简化接口。
- **使用场景**：客户端只想“一键完成复杂任务”时，如拍照、下单、视频播放等。
- **示例**：`Phone.takePhoto()` 封装了 `Sensor`, `Camera`, `Storage` 的细节。

### 🗂️ Composite 组合模式

- **目的**：统一处理单个对象和组合对象，使它们拥有一致的接口。
- **使用场景**：树形结构（如文件系统、组织架构、GUI 组件树）
- **示例**：`Folder` 和 `File` 都实现了 `Component` 接口，支持递归展示结构。


🟦 代理模式

为某对象提供一个替代对象或占位符，以控制对这个对象的访问。

结构图角色：
- Subject（抽象主题接口）
- RealSubject（真实主题对象）
- Proxy（代理类）

🟦 桥接模式 = 抽象接口 + 实现接口 的解耦组合。

这非常适合当你有多个维度变化（如平台、品牌、类型）时，将它们用组合（而不是继承）方式连接起来。

🟦 享元模式（Flyweight Pattern）

    通过共享大量细粒度对象，减少内存占用，提高性能。

享元模式的确是“创建一个 Map 缓存对象”，但它强调的是：通过分离状态，最大化对象共享，从而压缩内存与提升性能的设计思维，而不仅仅是代码里的 Map。非常适合用于系统中存在大量相似对象，而这些对象中的一部分状态是可以复用的（内部状态），另一部分是每次使用时再提供的（外部状态）。

🟦 策略模式就是把“可变的行为”抽象成策略接口，再通过注入方式让使用者在运行时灵活切换具体算法，从而实现更灵活、更清晰的代码结构。

🟦 观察者模式（Observer Pattern）是一种经典的行为型设计模式，其核心目的是：

    当一个对象状态发生变化时，自动通知并更新所有依赖它的对象，实现“一对多”的低耦合通知机制。
    
🟦 状态模式（State Pattern）

    当一个对象的内部状态发生变化时，允许其改变行为逻辑，就好像它变成了另一个对象一样。

🟦 命令模式（Command Pattern）用于将“请求的发起者”与“请求的执行者”解耦，让你可以将请求封装成对象，从而实现：

    命令的记录（日志、撤销）
    命令的排队（如任务队列）
    命令的组合（宏命令）

🟦 责任链模式是一种行为型设计模式，它使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。请求沿着链传递，直到某个对象处理它为止。

本示例使用 TypeScript 实现了一个简单的责任链模式，包含三个处理者：

- `AuthHandler`：处理认证相关请求
- `LoggingHandler`：处理日志相关请求
- `ErrorHandler`：处理错误相关请求

💡 模式优点
    请求发送者与处理者解耦
    支持动态添加/组合责任处理者
    增强系统的灵活性和可扩展性
⚠️ 模式缺点
    可能导致请求无处理者响应
    调试不方便，尤其是链条较长时难以追踪
    本模式非常适用于权限校验、请求预处理、过滤器链等场景。

🟦 模板方法模式是一种行为型设计模式，它在父类中定义算法骨架，并将部分步骤延迟到子类中实现，使得子类可以在不改变整体结构的情况下，重新定义某些步骤。

🟦 迭代器模式，封装了遍历数据集合的方式，使得集合的内部结构对使用者透明。当你需要“逐步获取数据”的时候（而不是一次性获取全部），迭代器就是你最值得用的抽象工具。

🟦 中介者模式，用于将多个对象之间复杂的交互关系集中封装在一个中介者对象中，从而让对象之间不直接引用，而是通过中介者进行通信，达到解耦合的目的。

🟦 访问者，是把“行为”从对象中抽出来集中管理，让你不必修改类本身，就能增加新的处理方式。当你想对一组对象执行很多不同的操作，但又不想污染这些对象的类时，用访问者模式。适用场景（前端例子）
- AST（抽象语法树）遍历与转换（如 ESLint/TS Compiler 插件）
- 表单项或组件层级结构访问（每种组件逻辑不同）
- UI 渲染与导出 PDF/图片等多种格式

🟦 解释器模式（Interpreter Pattern），用于为语言创建解释器，或者说，它定义了一个语言的文法，并且建立一个解释器来解释这个语言中的句子。
解释器模式的核心类图和组成部分包括：
抽象表达式（AbstractExpression）：定义解释操作的接口。
终结符表达式（TerminalExpression）：实现与文法中的终结符相关的解释操作。
非终结符表达式（NonTerminalExpression）：实现文法中的非终结符规则。
上下文（Context）：包含解释器之外的一些全局信息。

🧠 备忘录模式（Memento Pattern）简介
意图：在不破坏封装的前提下，捕获一个对象的内部状态，并在以后将其恢复（比如“撤销/恢复”功能）。

