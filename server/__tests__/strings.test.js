process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app.js');

const {
  afterAllHook,
  afterEachHook,
  TEST_DATA,
  beforeAllHook,
  beforeEachHook
} = require('./config.js');

beforeAll(async () => {
  await beforeAllHook();
});

beforeEach(async () => {
  await beforeEachHook(TEST_DATA);
});

describe('GET /strings', async () => {
  test('It should respond with an array of strings', async () => {
    const response = await request(app).get('/strings');
    expect(response.body).toHaveLength(3);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('string');
    expect(response.statusCode).toBe(200);
  });
});

afterEach(async () => {
  await afterEachHook();
});

afterAll(async () => {
  await afterAllHook();
});
