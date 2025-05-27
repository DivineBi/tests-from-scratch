import '@testing-library/jest-dom';
import { Response as NodeFetchResponse } from 'node-fetch';

// Define the global fetch and Response types.
declare global {
  // Extend the global fetch to use node-fetch.
  let fetch: typeof import('node-fetch');
  
  // Define the global Response to match the NodeFetchResponse
  let Response: typeof NodeFetchResponse;
  let Request: typeof Request;
}