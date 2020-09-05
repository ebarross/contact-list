import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  IconButton,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import React from 'react';
import { Contact as TContact } from '../../interfaces/contact';
import {
  Container,
  Header,
  Title,
  StyledTableCell,
  LoaderContainer,
} from './styles';
import Loader from '../Loader';
import Button from '../Button';

type Props = {
  title: string;
  contacts: TContact[];
  loading: boolean;
  onAddClick: () => void;
  onEditClick: (cpf: string) => void;
  onRemoveClick: (cpf: string) => void;
};

const ContactList: React.FC<Props> = ({
  title,
  contacts,
  loading,
  onAddClick,
  onEditClick,
  onRemoveClick,
}) => {
  const renderContacts = (): React.ReactElement[] => {
    return contacts.map((c) => (
      <TableRow key={c.cpf} data-testid="contact-row">
        <StyledTableCell component="th" scope="row">
          {c.name}
        </StyledTableCell>
        <StyledTableCell>{c.email}</StyledTableCell>
        <StyledTableCell>{c.cpf}</StyledTableCell>
        <StyledTableCell>{c.phone}</StyledTableCell>
        <StyledTableCell>
          <IconButton onClick={() => onEditClick(c.cpf)}>
            <Edit fontSize="small" />
          </IconButton>
          <IconButton onClick={() => onRemoveClick(c.cpf)}>
            <Delete fontSize="small" />
          </IconButton>
        </StyledTableCell>
      </TableRow>
    ));
  };

  return (
    <Container data-testid="contact-list">
      <Header>
        <Title>{title}</Title>
        <Button onClick={onAddClick}>Novo contato</Button>
      </Header>
      {!loading && contacts.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nome</StyledTableCell>
                  <StyledTableCell>E-mail</StyledTableCell>
                  <StyledTableCell>CPF</StyledTableCell>
                  <StyledTableCell>Telefone</StyledTableCell>
                  <StyledTableCell>Ações</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderContacts()}</TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <LoaderContainer data-testid="loader">
          <Loader />
        </LoaderContainer>
      )}
    </Container>
  );
};

export default ContactList;
