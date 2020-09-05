import { Contact } from '../interfaces/contact';
import LocalStorage from '../state/storage';

type Storage = {
  getData: () => Contact[];
  getById: (id: string) => Contact | undefined;
  setData: (contacts: Contact[]) => void;
  add: (contact: Contact) => void;
  update: (contact: Contact) => void;
  remove: (cpf: string) => void;
};

export const useLocalStorage = (): Storage => {
  const getData = (): Contact[] => {
    return LocalStorage.get();
  };

  const getById = (id: string): Contact | undefined => {
    return getData().find((c) => c.cpf === id);
  };

  const setData = (contacts: Contact[]): void => {
    LocalStorage.set(contacts);
  };

  const add = (contact: Contact): void => {
    const contacts = getData();
    setData([...contacts, contact]);
  };

  const update = (newContact: Contact): void => {
    const contacts = getData();
    const contact = contacts.find((c) => c.cpf === newContact.cpf);

    if (contact) {
      const index = contacts.indexOf(contact);

      const newContacts = [...contacts];
      newContacts[index] = newContact;

      setData(newContacts);
    }
  };

  const remove = (cpf: string): void => {
    const contacts = getData();
    const contact = contacts.find((c) => c.cpf === cpf);

    if (contact) {
      const index = contacts.indexOf(contact);

      const newContacts = [...contacts];
      newContacts.splice(index, 1);

      setData(newContacts);
    }
  };

  return {
    getData,
    getById,
    setData,
    add,
    update,
    remove,
  };
};
