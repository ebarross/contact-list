import React, { useState, useEffect } from 'react';
import { Container as MContainer } from '@material-ui/core';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { Container } from './styles';
import ContactForm from '../../components/ContactForm';
import { useLocalStorage } from '../../hooks/localStorage';
import { Contact as TContact } from '../../interfaces/contact';

type Props = RouteComponentProps<{ id: string }>;

const Contact: React.FC<Props> = ({ match }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [contact, setContact] = useState<TContact | null>(null);
  const history = useHistory();
  const { add, update, getById } = useLocalStorage();

  useEffect(() => {
    if (id) {
      setLoading(true);

      // Simulates remote service request
      const timer = setTimeout(() => {
        const _contact = getById(id);

        if (_contact) {
          setContact(_contact);
        }

        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [id]);

  const handleSubmit = (newContact: TContact): void => {
    setActionLoading(true);

    // Simulates remote service request
    setTimeout(() => {
      if (id) {
        update(newContact);
      } else {
        add(newContact);
      }

      history.push('/');
      setActionLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <MContainer>
        <ContactForm
          data={contact}
          loading={loading}
          actionLoading={actionLoading}
          onSubmit={handleSubmit}
          onGoBack={() => {
            history.push('/');
          }}
        />
      </MContainer>
    </Container>
  );
};

export default Contact;
