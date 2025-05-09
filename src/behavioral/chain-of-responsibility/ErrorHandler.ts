// src/behavioral/chain-of-responsibility/ErrorHandler.ts
import { Handler } from './Handler.js';

export class ErrorHandler extends Handler {
  handle(request: string): void {
    if (request === 'error') {
      console.log('ErrorHandler handled the request.');
    } else {
      super.handle(request);
    }
  }
}
