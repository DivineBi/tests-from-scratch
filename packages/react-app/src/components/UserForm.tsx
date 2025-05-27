import React, { useState } from 'react';

interface Props {
  onCreated: (name: string) => void;
}

export function UserForm({ onCreated }: Props) {
  const [name, setName] = useState('');

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();

        // Vérifie que le champ n’est pas vide ou composé uniquement d’espaces
        if (name.trim()) {
          try {
            // Envoie une requête POST vers le backend pour créer l’utilisateur
            const response = await fetch('/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name }),
            });

            // Si la création a réussi (HTTP 201), appelle le callback fourni
            if (response.status === 201) {
              onCreated(name);
              setName(''); // Réinitialise le champ
            } else {
              console.error('Erreur lors de la création de l’utilisateur');
            }
          } catch (err) {
            console.error('Échec de la requête vers /users', err);
          }
        }
      }}
    >
      <label htmlFor="name">Nom :</label>
      <input
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Créer</button>
    </form>
  );
}
