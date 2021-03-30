import { FormType } from '../../types';

const localStoreKey = 'auth';

export const localStoreGetItem = <T>(): T => {
  return JSON.parse(window.localStorage.getItem(localStoreKey) || 'null');
};
const localStoreSetItem = (arg: FormType) => window.localStorage.setItem(localStoreKey, JSON.stringify(arg));

const localStoreClean = () => window.localStorage.removeItem(localStoreKey);

export const login = async (form: FormType): Promise<FormType> =>
  new Promise((resolve) => {
    localStoreSetItem(form);
    setTimeout(() => {
      return resolve(localStoreGetItem());
    }, 1000);
  });

export const register = async (form: FormType): Promise<FormType> =>
  new Promise((resolve) => {
    localStoreSetItem(form);
    setTimeout(() => {
      return resolve(localStoreGetItem());
    }, 1000);
  });

export const logout = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      localStoreClean();
      resolve(true);
    }, 1000);
  });
};
