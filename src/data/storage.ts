/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  set: (key: string, value: any): void => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  },

  get: (key: string): any => {
    const value = localStorage.getItem(key);
    return JSON.parse(value || '[]');
  },
};
