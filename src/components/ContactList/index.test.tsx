import React from 'react';
import { render, screen } from '@testing-library/react';
import faker from 'faker';
import ContactList from './index';
import { Contact } from '../../interfaces/contact';

type SetupProps = {
  title?: string;
  contacts?: Contact[];
  loading?: boolean;
};

const setup = ({
  title = '',
  contacts = [],
  loading = false,
}: SetupProps): void => {
  render(
    <ContactList
      title={title}
      contacts={contacts}
      loading={loading}
      onAddClick={jest.fn()}
      onEditClick={jest.fn()}
      onRemoveClick={jest.fn()}
    />
  );
};

describe('ContactList component', () => {
  it('should render title properly', () => {
    const title = faker.random.words();
    setup({ title });
    expect(screen.getByRole('heading').textContent).toBe(title);
  });

  it('should render button properly', () => {
    setup({});
    expect(
      screen.getByRole('button', { name: /Novo contato/i })
    ).toBeInTheDocument();
  });

  it('should render loader when loading is true', () => {
    const loading = true;
    setup({ loading });
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render contacts when contacts length is greater than 0', () => {
    const contacts: Contact[] = [
      {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        cpf: faker.random.number.toString(),
        phone: faker.phone.phoneNumber(),
      },
    ];

    setup({ contacts });
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryAllByTestId('contact-row')).toHaveLength(1);
  });
});
