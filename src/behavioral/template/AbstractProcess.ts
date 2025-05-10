export abstract class AbstractProcess {
    // 模板方法：不希望子类重写
    public run(): void {
      this.step1();
      this.step2();
      this.step3();
    }
  
    protected step1(): void {
      console.log("通用步骤 1");
    }
  
    // 由子类实现
    protected abstract step2(): void;
  
    protected step3(): void {
      console.log("通用步骤 3");
    }
  }
  