import { jest } from '@jest/globals';
jest.mock('../lib/some');
import { superFn } from "../lib/some";

describe('some', () => {
  it('superFn', () => {
    // superFn({ mock: true });
  });
});
