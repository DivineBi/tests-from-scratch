//UserList.tsx
import React from 'react';

//définition des props du composant UserList
interface Props {
  users?: string[];
  loading?: boolean;
  error?: string;
}

export function UserList({ users = [], loading = false, error }: Props) {
  if (loading) {
    return <div role="status">Chargement...</div>;
  }

  if (error) {
    return <div role="alert">Erreur : {error}</div>;
  }

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}


