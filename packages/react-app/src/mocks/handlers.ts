import {  http, HttpResponse } from 'msw';
import { User } from '../hooks/useUsers';

const users: User[] = [ 
 { id: 1, name: 'Alice' },    
 { id: 2, name: 'Bob' },
];

 export const handlers = [
    http.get("/users", async () => { //  URL complète pour éviter les problèmes de CORS
      // Simuler une réponse avec des données d'utilisateurs
      await new Promise((r) => setTimeout(r, 100));
      return HttpResponse.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
      ]);
    }),
  
 
  // POST /users 
  http.post('/users', async ({ request }) => { 
   const { name } = (await request.json()) as { name: string }; 
   if (!name) {
    return HttpResponse.json({message: 'name is required'}, {status: 400});     
   }
  
    const newUser = { id: users.length + 1, name }; 
    users.push(newUser); 
    return HttpResponse.json(newUser, { status: 201}); 
   }),
  ];
    