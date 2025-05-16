// src/usersStore.ts

export interface User { 
    id: number; 
    name: string;
}

let users: User[] = [];
let nextId = 1;

/** 
 * Renvoie la liste courante des users. 
 */
export function getUsers(): User[] { 
    return users;
}

/** 
 * Crée un utilisateur avec auto-incrémentation des IDs. 
 */
export function createUser(name: string): User { 
    const user = { id: nextId++, name }; 
    users.push(user); 
    return user;
}

/** 
 * Réinitialise l'état du store. 
 * Utile pour isoler chaque test. 
 */
export function resetStore(): void { 
    users = []; 
    nextId = 1;
}