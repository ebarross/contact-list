import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import ContactForm from './index';
import { Contact } from '../../interfaces/contact';

type SetupProps = {
  data?: Contact | null;
  loading?: boolean;
  actionLoading?: boolean;
};

const mockContact = (): Contact => {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    cpf: faker.phone.phoneNumber('###.###.###-##'),
    phone: faker.phone.phoneNumber('#####-####'),
  };
};

const setup = ({
  data = null,
  loading = false,
  actionLoading = false,
}: SetupProps): void => {
  render(
    <ContactForm
      data={data}
      loading={loading}
      actionLoading={actionLoading}
      onSubmit={jest.fn()}
    />
  );
};

describe('ContactForm component', () => {
  it('should render title for creating contact when data is not passed by props', () => {
    setup({});
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Criar um novo contato'
    );
  });

  it('should render title for updating contact when data is passed by props', () => {
    const data = mockContact();
    setup({ data });
    expect(screen.getByRole('heading')).toHaveTextContent('Editar contato');
  });

  it('should render button for creating contact when data is not passed by props', () => {
    setup({});
    expect(screen.getByRole('button')).toHaveTextContent('Cadastrar');
  });

  it('should render button for updating contact when data is passed by props', () => {
    const data = mockContact();
    setup({ data });
    expect(screen.getByRole('button')).toHaveTextContent('Atualizar');
  });

  it('should render loader when loading is true', () => {
    const loading = true;
    setup({ loading });
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should set input values when data is passed by props', () => {
    const data = mockContact();
    setup({ data });

    expect(screen.getByRole('textbox', { name: /nome/i })).toHaveValue(
      data.name
    );
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toHaveValue(
      data.email
    );
    expect(screen.getByRole('textbox', { name: /cpf/i })).toHaveValue(data.cpf);
    expect(screen.getByRole('textbox', { name: /telefone/i })).toHaveValue(
      data.phone
    );
  });

  it('should show error messages when fields are not filled', async () => {
    setup({});

    userEvent.click(screen.getByText('Cadastrar'));
    const errorMessages = await screen.findAllByText('Campo obrigatório');
    expect(errorMessages).toHaveLength(4);
  });

  it('should not show error messages when fields are filled', async () => {
    setup({});
    const data = mockContact();

    userEvent.click(screen.getByText('Cadastrar'));
    let errorMessages = await screen.findAllByText('Campo obrigatório');
    expect(screen.getByRole('textbox', { name: /nome/i })).toBeEmpty();
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeEmpty();
    expect(screen.getByRole('textbox', { name: /cpf/i })).toBeEmpty();
    expect(screen.getByRole('textbox', { name: /telefone/i })).toBeEmpty();
    expect(errorMessages).toHaveLength(4);

    userEvent.type(screen.getByRole('textbox', { name: /nome/i }), data.name);
    userEvent.type(
      screen.getByRole('textbox', { name: /e-mail/i }),
      data.email
    );
    userEvent.type(screen.getByRole('textbox', { name: /cpf/i }), data.cpf);
    userEvent.type(
      screen.getByRole('textbox', { name: /telefone/i }),
      data.phone
    );

    expect(screen.getByRole('textbox', { name: /nome/i })).toHaveValue(
      data.name
    );
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toHaveValue(
      data.email
    );
    expect(screen.getByRole('textbox', { name: /cpf/i })).toHaveValue(data.cpf);
    expect(screen.getByRole('textbox', { name: /telefone/i })).toHaveValue(
      data.phone
    );

    errorMessages = await screen.queryAllByDisplayValue('Campo obrigatório');
    expect(errorMessages).toHaveLength(0);
  });
});
