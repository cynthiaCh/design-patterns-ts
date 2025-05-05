import { Subject } from './Subject.js';
import { LoggerObserver } from './LoggerObserver.js';
import { AlertObserver } from './AlertObserver.js';

const subject = new Subject();

const logger = new LoggerObserver();
const alerter = new AlertObserver();

subject.attach(logger);
subject.attach(alerter);

subject.notify('你有一条新消息');
