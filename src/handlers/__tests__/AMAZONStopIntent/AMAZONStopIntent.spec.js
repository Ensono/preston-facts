"use strict";
const AMAZONStopIntent = require('../../../index');
const request = require('./__request__/');

let success;
let failure;
let result;

beforeEach((done) => {
  success = false;
  failure = false;
  result = {
    'succeed': function (data) {
      success = data;
      done();
    },
    'fail': function (err) {
      console.log('failure: ' + err);
      failure = true;
      done();
    }
  }
  AMAZONStopIntent['handler'](request, result);
});

test('Request succeeds', () => {
  expect(success).toBeTruthy();
  expect(failure).toBe(false);
});

test('Request returns the correct response', () => {
  expect(success.response.outputSpeech.ssml).toBe('<speak> Goodbye </speak>');
});

test('Request should end the session', () => {
  expect(success.response.shouldEndSession).toBeTruthy();
});

afterEach(() => {
  success = undefined;
  failure = undefined;
  result = undefined;
})