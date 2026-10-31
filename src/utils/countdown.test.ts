import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTimeRemaining, padZero } from './countdown';
import { GOOGLE_FORM_URL } from './constants';

test('calculateTimeRemaining returns positive countdown when target is in the future', () => {
  const now = new Date('2026-10-24T12:00:00Z');
  const target = new Date('2026-10-25T14:30:15Z');
  const result = calculateTimeRemaining(now, target);

  assert.equal(result.isExpired, false);
  assert.equal(result.days, 1);
  assert.equal(result.hours, 2);
  assert.equal(result.minutes, 30);
  assert.equal(result.seconds, 15);
});

test('calculateTimeRemaining returns expired when target is in the past', () => {
  const now = new Date('2026-11-20T12:00:00Z');
  const target = new Date('2026-11-18T23:59:59Z');
  const result = calculateTimeRemaining(now, target);

  assert.equal(result.isExpired, true);
  assert.equal(result.days, 0);
  assert.equal(result.hours, 0);
  assert.equal(result.minutes, 0);
  assert.equal(result.seconds, 0);
});

test('padZero formats numbers less than 10 with leading zero', () => {
  assert.equal(padZero(5), '05');
  assert.equal(padZero(0), '00');
  assert.equal(padZero(12), '12');
});

test('GOOGLE_FORM_URL matches user requested link exactly', () => {
  assert.equal(GOOGLE_FORM_URL, 'https://forms.gle/YwU6YE1A9uueZFTn7');
});
