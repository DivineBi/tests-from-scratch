import { handlers } from './handlers';
import { setupServer } from 'msw/node';


 // setupServer pour Node/jest

export const worker = setupServer(...handlers);
