// src/behavioral/chain-of-responsibility/LoggingHandler.ts
import { Handler } from './Handler.js';

export class LoggingHandler extends Handler {
  handle(request: string): void {
    if (request === 'log') {
      console.log('LoggingHandler handled the request.');
    } else {
      super.handle(request);
    }
  }
}
