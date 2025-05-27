import React from 'react';

// Définition des propriétés attendues par le composant
interface Props {
  users: string[];
}

// Composant qui reçoit la liste des utilisateurs en props
export function UserList({ users }: Props) {
  return (
    <ul>
      {/* On affiche chaque utilisateur dans un <li> */}
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

