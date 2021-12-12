import {ErrorRepository} from './app.js';

const err = new ErrorRepository();
err.add(100, 'Error 100');
err.add(202, 'Error 202');
err.add(301, 'Error 202');

test('Checking added error ', () => {
  expect(err.translate(202)).toEqual('Error 202');
});

test('Checking Unknown error (Throw Error) ', () => {
  const t = () => err.translate(205);
  expect(t).toThrow('Unknown error');
});
