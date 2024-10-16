import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Logout } from 'components/Logout/Logout';
import css from '../SharedLayout/SharedLayout.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={isLoggedIn ? css.navWrapper : css.wrapper}>
      <NavLink to="/" className={css.logo}>
        Phonebook
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
          >
            Contacts
          </NavLink>
          <Logout />
        </>
      ) : (
        <>
          <div className={css.liloWrapper}>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
              end
            >
              Login
            </NavLink>

            <NavLink
              to="register"
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};
