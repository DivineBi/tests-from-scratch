import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserList } from '../src/components/UserList';
import { server } from '../src/mocks/browser';
import { http, HttpResponse } from 'msw';
import '@testing-library/jest-dom';
import { waitFor, act } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";

describe('UserList Component', () => { 
    it('affiche le loader puis la liste d’utilisateurs', async () => { 
        await act(async () => {
            render(<UserList />);
    }); 

    console.log("DOM before checking for loader:");
    // Debug du DOM pour voir l'état initial
    console.log(prettyDOM(document.body)); 

  
    // 1. Le loader apparaît 
    const status = await screen.findByRole("status");
    expect(status).toHaveTextContent('Chargement...'); 
  
    // 2. Attendre que les items s’affichent 
    await waitFor(() => {
        screen.debug();  // Pour voir l'état du DOM après le chargement
        // Vérifier que le loader a disparu
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(2);
    });


    const items = (await screen.findAllByRole('listitem')); 
    expect(items).toHaveLength(2); 
    expect(items?.[0]).toHaveTextContent('Alice');
    expect(items?.[1]).toHaveTextContent('Bob'); 
  }); 
 
    it('affiche une erreur si l’API échoue', async () => { 
  // On override le handler pour renvoyer 500 
        server.use(
            http.get('/users', () => {
                return HttpResponse.json({ error: "Server Error" }, { status: 500 })
            })
    ); 
  
    render(<UserList />); 

    // Debug du DOM pour voir l'état initial
    console.log(prettyDOM(document.body));
  
  // Attendre l’alerte d’erreur 
    const alert = await screen.findByRole('alert'); 
    expect(alert).toHaveTextContent('Erreur : Erreur réseau'); 
    });
});