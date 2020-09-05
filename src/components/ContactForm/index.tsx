import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonContainer,
  Container,
  FormContent,
  Title,
  LoaderContainer,
  FormContainer,
} from './styles';
import Button from '../Button';
import InputField from '../InputField';
import { Contact } from '../../interfaces/contact';
import Loader from '../Loader';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Campo deve conter 3 caracteres ou mais')
    .required('Campo obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  cpf: Yup.string()
    .min(11, 'Campo deve conter 11 caracteres ou mais')
    .required('Campo obrigatório'),
  phone: Yup.string()
    .min(8, 'Campo deve conter 8 caracteres ou mais')
    .required('Campo obrigatório'),
});

type Props = {
  data: Contact | null;
  loading: boolean;
  actionLoading: boolean;
  onSubmit: (contact: Contact) => void;
};

type Inputs = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
};

const ContactForm: React.FC<Props> = ({
  data,
  loading,
  actionLoading,
  onSubmit,
}) => {
  const initialValues: Inputs = {
    name: '',
    email: '',
    cpf: '',
    phone: '',
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (contact) => onSubmit(contact),
  });

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  return (
    <Container data-testid="contact-form">
      <FormContent>
        {loading ? (
          <LoaderContainer data-testid="loader">
            <Loader />
          </LoaderContainer>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <Title>{data ? 'Editar' : 'Criar um novo'} contato</Title>

              <InputField
                id="name"
                label="Nome completo (sem abreviações)"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name ? errors.name : ''}
                value={values.name}
                onChange={handleChange}
              />
              <InputField
                id="email"
                label="E-mail"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email ? errors.email : ''}
                value={values.email}
                onChange={handleChange}
              />
              <InputField
                disabled={data !== null}
                id="cpf"
                label="CPF"
                error={touched.cpf && Boolean(errors.cpf)}
                helperText={touched.cpf ? errors.cpf : ''}
                value={values.cpf}
                onChange={handleChange}
              />
              <InputField
                id="phone"
                label="Telefone"
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone ? errors.phone : ''}
                value={values.phone}
                onChange={handleChange}
              />
              <ButtonContainer>
                <Button type="submit">
                  {actionLoading ? (
                    <Loader size={25} color="#fff" thickness={2} />
                  ) : data ? (
                    'Atualizar'
                  ) : (
                    'Cadastrar'
                  )}
                </Button>
              </ButtonContainer>
            </FormContainer>
          </form>
        )}
      </FormContent>
    </Container>
  );
};

export default ContactForm;
