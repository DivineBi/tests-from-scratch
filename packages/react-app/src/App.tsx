
import { UserList } from './components/UserList';  
import { UserForm } from './components/UserForm';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState<string[]>([]);

    const handleUserCreated = (newUser: string) => {
        setUsers([...users, newUser]);
    };

    return (
      <div>
          <h1>Utilisateurs</h1>  
          <UserForm onCreated={handleUserCreated} />  {/*  Ajout du formulaire */}
          <UserList />  {/*  Ajout de la liste */}
      </div>
  );
}




export default App;
