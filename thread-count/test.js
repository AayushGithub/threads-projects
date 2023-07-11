const request = require('supertest');
const app = require('./index');

describe('Thread Count API', () => {
  it('should return default error badge when /thread-count/ is accessed', async () => {
    const response = await request(app).get('/thread-count/');
    expect(response.status).toBe(400);
    expect(response.header['content-type']).toBe('image/svg+xml; charset=utf-8');
  });

  it('should return default error badge when an invalid username is provided', async () => {
    const response = await request(app).get('/thread-count/invalid_username');
    expect(response.status).toBe(404);
    expect(response.header['content-type']).toBe('image/svg+xml; charset=utf-8');
  });

  it('should return a custom badge with the provided valid username', async () => {
    const response = await request(app).get('/thread-count/zuck');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toBe('image/svg+xml; charset=utf-8');
  });

  it('should return a badge with custom parameters', async () => {
    const response = await request(app)
      .get('/thread-count/zuck')
      .query({
        color: 'red',
        style: 'flat',
        width: 15,
        scale: 2,
        labelColor: 'white',
        icon: false,
        label: 'Followers',
        gradient: false,
      });
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toBe('image/svg+xml; charset=utf-8');
  });

  it('should handle missing page entries', async () => {
    const response = await request(app).get('/missing/');
    expect(response.status).toBe(404);
    expect(response.header['content-type']).toBe('text/html; charset=utf-8');
  });
});
