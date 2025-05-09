import { Handler } from './Handler.js';

export class AuthHandler extends Handler {
  handle(request: string): void {
    if (request === 'auth') {
      console.log('AuthHandler handled the request.');
    } else {
      super.handle(request);
    }
  }
}
