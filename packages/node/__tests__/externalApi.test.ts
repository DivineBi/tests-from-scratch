import * as externalApi from '../src/externalApi'; // Import the module to test

describe('fetchUserData', () => {
  it('should return data for user 1', async () => {
    // espionne la fonction fetchUserData et renvoie une valeur simulée
    const fetchUserDataMock = jest.spyOn(externalApi, 'fetchUserData').mockResolvedValue({ extra: 'données pour user 1' });

    const data = await externalApi.fetchUserData(1);
    
    expect(data).toEqual({ extra: 'données pour user 1' });
    expect(fetchUserDataMock).toHaveBeenCalledWith(1); // Vérifie qu'elle a été appelée avec l'ID 1

    fetchUserDataMock.mockRestore(); // Restaure l'implémentation originale après le test
  });

  it('should return data for user 2', async () => {
    // Mocker la fonction fetchUserData pour renvoyer des données spécifiques pour l'utilisateur 2
    const fetchUserDataMock = jest.spyOn(externalApi, 'fetchUserData').mockResolvedValue({ extra: 'données pour user 2' });

    const data = await externalApi.fetchUserData(2);
    
    expect(data).toEqual({ extra: 'données pour user 2' });
    expect(fetchUserDataMock).toHaveBeenCalledWith(2); // Vérifie qu'elle a été appelée avec l'ID 2

    fetchUserDataMock.mockRestore(); // Restaure l'implémentation originale après le test
  });

  it('should handle failure (error fetching user data)', async () => {
    // Espionne la fonction fetchUserData pour simuler une erreur
    const fetchUserDataMock = jest.spyOn(externalApi, 'fetchUserData').mockRejectedValue(new Error('Failed to fetch data'));

    try {
      await externalApi.fetchUserData(999); // Simule un appel avec un ID invalide
    } catch (error) {
      expect(error).toEqual(new Error('Failed to fetch data'));
    }

    fetchUserDataMock.mockRestore(); // Restaure l'implémentation originale après le test
  });

  // Test pour vérifier que la fonction réelle fonctionne comme prévu:
  it('should call the real fetchUserData function and return expected data', async () => {
    // Pas de mock ici, on teste la fonction réelle
    const result = await externalApi.fetchUserData(1);  // Appel réel à la fonction
    expect(result).toEqual({ extra: 'données pour user 1' });
  });
});

