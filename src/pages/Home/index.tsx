import { Container as MContainer } from '@material-ui/core';
import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ContactList from '../../components/ContactList';
import { Contact } from '../../interfaces/contact';
import ContactService from '../../services/contact';
import { Container } from './styles';
import { useLocalStorage } from '../../hooks/localStorage';
import Dialog from '../../components/Dialog';

const Home: React.FC = () => {
  const history = useHistory();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [contactToRemove, setContactToRemove] = useState('');

  const { setData, getData, remove } = useLocalStorage();

  const fetchData = useCallback(() => {
    setLoading(true);

    ContactService.getAll()
      .then((response) => {
        const storageData = getData();
        if (storageData?.length > 0) {
          setContacts(storageData);
        } else {
          setContacts(response);
          setData(response);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRemoveContact = (): void => {
    setShowDialog(false);

    remove(contactToRemove);
    setContactToRemove('');
    fetchData();
  };

  const handleDialogToggle = (): void => {
    setShowDialog(!showDialog);
  };

  const handleAddContactClick = (): void => {
    history.push('/contacts/new');
  };

  const handleEditContactClick = (cpf: string): void => {
    history.push(`/contacts/${cpf}`);
  };

  const handleRemoveContactClick = (cpf: string): void => {
    if (contacts.length === 1) {
      // eslint-disable-next-line no-alert
      alert('Não é possível excluir todos os contatos.');
      return;
    }
    setContactToRemove(cpf);
    setShowDialog(true);
  };

  return (
    <Container>
      <MContainer>
        <ContactList
          title="Lista de contatos"
          contacts={contacts}
          loading={loading}
          onAddClick={handleAddContactClick}
          onEditClick={handleEditContactClick}
          onRemoveClick={handleRemoveContactClick}
        />
      </MContainer>
      <Dialog
        title="Remover contato"
        description="Deseja mesmo remover este contato?"
        open={showDialog}
        onToggle={handleDialogToggle}
        onConfirm={handleRemoveContact}
      />
    </Container>
  );
};

export default Home;
