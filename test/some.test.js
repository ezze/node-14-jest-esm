import { jest } from '@jest/globals';
import { superFn } from "../lib/some";

jest.mock('../lib/some');

describe('some', () => {
  it('superFn', () => {
    console.log(superFn({ mock: true }));
  });
});
