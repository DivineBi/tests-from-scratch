module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest", // Transforme les fichiers TypeScript avec ts-jest
    },
    transformIgnorePatterns: ["node_modules/(?!your-module-to-transform)"], // Permet à Jest de traiter les modules
  };
  