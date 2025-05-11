export interface Mediator {
    notify(sender: Component, event: string): void;
  }
  
  export abstract class Component {
    protected mediator?: Mediator;
  
    setMediator(mediator: Mediator) {
      this.mediator = mediator;
    }
  }
  