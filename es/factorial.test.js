// Gherkin - Given When Then

import { factorial } from './factorial';

describe('Given the factorial function', () => {
  describe('When the argument is 0', () => {
    test('Then result should be 1', () => {
      // Arrange
      const n = 0;
      const expected = 1;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('When the argument is 1', () => {
    test('Then result should be 1', () => {
      // Arrange
      const n = 1;
      const expected = 1;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('When the argument is 5', () => {
    test('Then result should be 120', () => {
      // Arrange
      const n = 5;
      const expected = 120;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('When the argument is 171', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = 171;
      // Act & Assert
      expect(() => factorial(n)).toThrowError('Argumento fuera de rango');
    });
  });

  describe('When the argument is 1.5', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = 1.5;

      // Act & Assert
      expect(() => factorial(n)).toThrowError('No existe el factorial de 1.5');
    });
  });

  describe('When the argument is -1', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = -1;
      // Act & Assert
      expect(() => factorial(n)).toThrowError('No existe el factorial de -1');
    });
  });

  describe('When the argument is null', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = null;
      // Act & Assert
      expect(() => factorial(n)).toThrowError('Argumento invalido');
    });
  });

  describe('When the argument is false', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = false;
      // Act & Assert
      expect(() => factorial(n)).toThrowError('Argumento invalido');
    });
  });

  describe('When the argument is true', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = true;
      // Act & Assert
      expect(() => factorial(n)).toThrowError('Argumento invalido');
    });
  });

  describe('When the argument is undefined', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = undefined;
      // Act & Assert
      expect(() => factorial(n)).toThrowError('Argumento invalido');
    });
  });

  describe('When the argument is a string', () => {
    test('Then it should be throw an error', () => {
      // Arrange
      const n = 'Pepe';
      // Act & Assert
      expect(() => factorial(n)).toThrowError('Argumento invalido');
    });
  });

  describe('When the argument is the string 5', () => {
    test('Then result should be 120', () => {
      // Arrange
      const n = '5';
      const expected = 120;
      // Act
      const result = factorial(n);
      // Assert
      expect(result).toBe(expected);
    });
  });
});
