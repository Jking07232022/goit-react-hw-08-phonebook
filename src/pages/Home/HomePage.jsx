import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Section } from '../../components/Section/Section';
import css from './HomePage.module.css';

export const HomePage = () => {
  const user = useSelector(selectUser);
  const loginStatus = useSelector(selectIsLoggedIn);

  return (
    <Section>
      {loginStatus && user.user !== null ? (
        <h1 className={css.header}>
          Welcome back {user.user}!<br />
        </h1>
      ) : (
        <h1 className={css.header}>WELCOME TO PHONEBOOK!</h1>
      )}
    </Section>
  );
};
