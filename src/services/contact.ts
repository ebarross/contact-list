import { UnexpectedError } from '../errors/unexpected';
import HttpClient from '../http/client';
import { Contact } from '../interfaces/contact';
import { HttpStatusCode } from '../interfaces/http';

export default {
  getAll: async (): Promise<Contact[]> => {
    const response = await HttpClient.request({
      url: '/users',
      method: 'GET',
    });

    const contacts: Contact[] = response.body.map(
      ({ name, cpf, phone, email }: Contact) => {
        return {
          name,
          cpf,
          phone,
          email,
        };
      }
    );

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return contacts;
      default:
        throw new UnexpectedError();
    }
  },
};
