import { ContactForm } from 'components/ContactForm/ContactsForm';
import { Section } from 'components/Section/Section';
import { Search } from 'components/Search/Search';
import { ContactList } from 'components/ContactsList/ContactList';
import { ContactWrapper } from 'components/ContactWrapper/ContactWrapper';

export const Contacts = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <ContactWrapper>
          <Search />
          <ContactList />
        </ContactWrapper>
      </Section>
    </>
  );
};
