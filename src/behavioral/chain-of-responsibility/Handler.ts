// src/behavioral/chain-of-responsibility/Handler.ts
export abstract class Handler {
  protected nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log(`No handler could process the request: ${request}`);
    }
  }
}
