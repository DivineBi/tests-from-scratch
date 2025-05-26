import express from 'express';
import userRouter from './users';

export const app = express();
app.use(express.json()); // parse les requêtes JSON
app.use('/users', userRouter); // route pour les utilisateurs

// Exporte le serveur pour l'utiliser dans les tests
export function startServer(port = 3001) {
    return app.listen(port, () => {
      console.log(`🚀 Server listening on http://localhost:${port}`);
    });
  }

// Nouvelle fonction pour démarrer le serveur si c'est le module principal
export function runIfMain(isMain: boolean) {
    if (isMain) {
      startServer();
    }
  }

// Utilisation de runIfMain pour démarrer le serveur si ce fichier est exécuté directement
runIfMain(require.main === module);