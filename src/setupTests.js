// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

/**
 * Mock Local and Session Storage
 */
class StorageMock {
  store = {};

  getItem(key) {
    return this.store[key] ? this.store[key] : null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  clear() {
    this.store = {};
  }

  removeItem(key) {
    delete this.store[key];
  }
}

Object.defineProperty(window, "localStorage", {
  value: new StorageMock(),
});
