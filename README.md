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

- [ ] 适配器模式（Adapter）
- [ ] 装饰器模式（Decorator）
- [ ] 外观模式（Facade）
- [ ] 组合模式（Composite）
- [ ] 代理模式（Proxy）
- [ ] 桥接模式（Bridge）
- [ ] 享元模式（Flyweight）

### 🔄 行为型模式（Behavioral Patterns）

- [ ] 策略模式（Strategy）
- [ ] 观察者模式（Observer）
- [ ] 状态模式（State）
- [ ] 命令模式（Command）
- [ ] 责任链模式（Chain of Responsibility）
- [ ] 模板方法模式（Template Method）
- [ ] 迭代器模式（Iterator）
- [ ] 中介者模式（Mediator）
- [ ] 访问者模式（Visitor）
- [ ] 解释器模式（Interpreter）
- [ ] 备忘录模式（Memento）

📌 每个模式包含以下内容：

- ✅ TypeScript 实现（`src/`）
- ✅ 使用示例（`src/index.ts` / 单测）
- ✅ Mermaid 类图（`UML-PNG/`）
- ✅ 中文注释 + 可视化场景解说
