import { server } from "./src/mocks/browser";

// démarre le serveur mock avant le début des tests
beforeAll(() => server.listen());

// Réinitialise les handlers après chaque test pour éviter les interférences
afterEach(() => server.resetHandlers());

// ferme le serveur mock après tous les tests
afterAll(() => server.close());