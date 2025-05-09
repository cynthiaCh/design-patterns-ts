// src/behavioral/chain-of-responsibility/main.ts
import { AuthHandler } from './AuthHandler.js';
import { LoggingHandler } from './LoggingHandler.js';
import { ErrorHandler } from './ErrorHandler.js';

const auth = new AuthHandler();
const log = new LoggingHandler();
const error = new ErrorHandler();

auth.setNext(log).setNext(error);

// 示例调用
auth.handle('auth');    // AuthHandler handled the request.
auth.handle('log');     // LoggingHandler handled the request.
auth.handle('error');   // ErrorHandler handled the request.
auth.handle('unknown'); // No handler could process the request: unknown
