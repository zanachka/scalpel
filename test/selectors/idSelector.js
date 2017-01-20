// @flow

import test from 'ava';
import {
  parse
} from '../helpers';

const validIdNames = [
  'foo',
  'FOO',
  '_0',
  'foo-0'
];

for (const validIdName of validIdNames) {
  test('valid: #' + validIdName, (t): void => {
    t.deepEqual(
      parse('#' + validIdName)[0].body[0],
      {
        name: validIdName,
        type: 'idSelector'
      }
    );
  });
}

const invalidIdNames = [
  '-foo',
  '123'
];

for (const invalidIdName of invalidIdNames) {
  test('invalid: #' + invalidIdName, (t): void => {
    t.throws(() => {
      parse('#' + invalidIdName);
    });
  });
}