import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
  selectContacts,
} from '../../redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { fetchContacts } from '../../redux/contacts/operations';
import { Puff } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <Puff
          visible={true}
          height="40"
          width="40"
          color="#eeb2b2"
          ariaLabel="puff-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
          }}
          wrapperClass=""
        />
      )}

      {error && <div>{error}</div>}
      {!isLoading && !error && contacts.length === 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          " Contacts should appear here."
        </div>
      )}
      {!isLoading &&
        !error &&
        visibleContacts.length === 0 &&
        contacts.length > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: '500',
            }}
          >
            No results found!
          </div>
        )}
      {!isLoading && contacts.length > 0 && (
        <ul>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};
