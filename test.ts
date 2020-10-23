import { decodeMorse } from './decodemorse';
import { assert } from 'chai';

const Test = {
  expect: (...args: any[]) => (assert as any)(...args),
  assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("Example from description", function() {
    it('HEY JUDE', () => {
      Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    });
  });
  describe("Pass in single word: CODEDOJO", function() {
    it('CODEDOJO', () => {
      Test.assertEquals(decodeMorse('-.-. --- -.. . -.. --- .--- ---'), 'CODEDOJO')
    });
  });
  describe("Pass in single word with space beginning: CODEDOJO", function() {
    it('CODEDOJO', () => {
      Test.assertEquals(decodeMorse(' -.-. --- -.. . -.. --- .--- ---'), 'CODEDOJO')
    });
  });
  describe("Pass in single word with space at ending: CODEDOJO", function() {
    it('CODEDOJO', () => {
      Test.assertEquals(decodeMorse('-.-. --- -.. . -.. --- .--- --- '), 'CODEDOJO')
    });
  });
  describe("Pass in single word with space at beginning and ending: CODEDOJO", function() {
    it('CODEDOJO', () => {
      Test.assertEquals(decodeMorse(' -.-. --- -.. . -.. --- .--- --- '), 'CODEDOJO')
    });
  });