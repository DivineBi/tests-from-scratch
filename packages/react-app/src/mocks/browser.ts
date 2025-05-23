import { handlers } from './handlers';
import { setupServer } from 'msw/node';


 // setupServer pour Node/jest

export const server = setupServer(...handlers);
