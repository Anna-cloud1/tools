import { createTask } from '../createTask.js';

it('should return stored logs', () => {
  const logger = createLogger('user login');
  expect(logger.getLogs()).toEqual([]);
});
