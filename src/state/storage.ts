/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const appDataKey = '@tinnova/contacts';

export default {
  set: (value: any): void => {
    if (value) {
      localStorage.setItem(appDataKey, JSON.stringify(value));
    } else {
      localStorage.removeItem(appDataKey);
    }
  },

  get: (): any => {
    const value = localStorage.getItem(appDataKey);
    return JSON.parse(value || '[]');
  },
};
