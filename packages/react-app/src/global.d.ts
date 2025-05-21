import { Response as NodeFetchResponse } from 'node-fetch';

// Define the global fetch and Response types.
declare global {
  // Extend the global fetch to use node-fetch.
  var fetch: typeof import('node-fetch');
  
  // Define the global Response to match the NodeFetchResponse
  var Response: typeof NodeFetchResponse;
  var Request: typeof Request;
}