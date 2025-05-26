import * as http from 'http';
import { startServer, runIfMain, app } from '../src/server';

describe('Server startup', () => {
  it('should start and stop the server without errors', (done) => {
    const server = startServer(4001); // Use a different port to avoid conflicts
    server.close(done); // Close server after test to free resources
  });

  it('should run the server when isMain is true', () => {
    const listenMock = jest.fn((_port, cb) => {
      cb(); // Simulate the callback
      return { close: jest.fn() } as unknown as http.Server;
    });

    // Mock app.listen to use our listenMock
    jest.spyOn(app, 'listen').mockImplementation(listenMock);

    runIfMain(true); // Simule l'appel direct du module


    expect(listenMock).toHaveBeenCalledWith(3001, expect.any(Function));
  });

  it('should NOT start the server when isMain is false', () => {
    const listenMock = jest.fn();

    jest.spyOn(app, 'listen').mockImplementation(listenMock);

   
    // Pass a dummy module to simulate "not run directly"
    runIfMain(false);

    expect(listenMock).not.toHaveBeenCalled();
  });
});
