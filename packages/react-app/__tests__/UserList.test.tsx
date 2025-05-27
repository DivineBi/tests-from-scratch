// UserList.test.tsx
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserList } from '../src/components/UserList';

describe('UserList Component', () => {
  afterEach(cleanup); // nettoie le DOM après chaque test

  test('affiche le loader', async () => {
    render(<UserList loading={true} />);
    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent('Chargement...');
  });

  test('affiche la liste d’utilisateurs', async () => {
    render(<UserList users={['Alice', 'Bob']} />);
    const items = await screen.findAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  test('affiche une erreur si l’API échoue', async () => {
    render(<UserList error="Erreur réseau" />);
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('Erreur : Erreur réseau');
  });
});
