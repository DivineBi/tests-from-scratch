import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from '../src/components/UserList';
import { worker } from '../src/mocks/browser';
import { http, HttpResponse } from 'msw';
import '@testing-library/jest-dom';

describe('UserList Component', () => { 
 it('affiche le loader puis la liste d’utilisateurs', async () => { 
  render(<UserList />); 
  
  // 1. Le loader apparaît 
  expect(screen.getByRole('status')).toHaveTextContent('Chargement...'); 
  
  // 2. Attendre que les items s’affichent 
  const items = await screen.findAllByRole('listitem'); 
  expect(items).toHaveLength(2); 
  expect(items[0]).toHaveTextContent('Alice');
  expect(items[1]).toHaveTextContent('Bob'); 
 }); 
 
 it('affiche une erreur si l’API échoue', async () => { 
  // On override le handler pour renvoyer 500 
  worker.use(
   http.get('/users', () => {
    return HttpResponse.json({ error: "Server Error" }, { status: 500 })
   })
  ); 
  
  render(<UserList />); 
  
  // Attendre l’alerte d’erreur 
  const alert = await screen.findByRole('alert'); 
  expect(alert).toHaveTextContent('Erreur : Erreur réseau'); 
 });
});