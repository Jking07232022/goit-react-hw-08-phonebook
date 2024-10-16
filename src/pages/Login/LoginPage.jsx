import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { FaUserAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { MdOutlineVpnKey } from 'react-icons/md';
import css from '../../components/SharedLayout/SharedLayout.module.css';

export const LoginPage = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(data));
  };

  const handleFocus = e => {
    if (e.target.name === 'email') {
      setIsEmailFocused(true);
    } else {
      setIsPasswordFocused(true);
    }
  };

  const handleBlur = e => {
    if (e.target.name === 'email') {
      setIsEmailFocused(false);
    } else {
      setIsPasswordFocused(false);
    }
  };

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <section className={css.section}>
      <form onSubmit={handleSubmit} className={css.navForm}>
        <div className={css.titleWrapper}>
          <div className={css.navIcon}>
            <FaUserAlt />
          </div>
          <h2 className={css.formTitle}>Login</h2>
        </div>
        <div className={css.navDiv}>
          <label
            htmlFor="email"
            className={isEmailFocused || email !== '' ? css.onFocus : css.label}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={email}
            onChange={handleChange}
          />
          <GoMail />
        </div>
        <div className={css.navDiv}>
          <label
            htmlFor="password"
            className={
              isPasswordFocused || password !== '' ? css.onFocus : css.label
            }
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={password}
            onChange={handleChange}
          />
          <MdOutlineVpnKey />
        </div>
        <button type="submit">Login</button>
        <span>
          <Link to="/register">Click here to register</Link>
        </span>
      </form>
    </section>
  );
};
