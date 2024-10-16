import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAccount } from '../../redux/auth/operations';
import { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineVpnKey } from 'react-icons/md';
import css from '../../components/SharedLayout/SharedLayout.module.css';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [nameOnFocus, setNameOnFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [pword, setPword] = useState('');
  const [pwordOnFocus, setPwordOnFocus] = useState(false);
  const [repWord, setRepWord] = useState('');
  const [repWordOnFocus, setRepWordOnFocus] = useState(false);

  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, email, pword, repWord } = form.elements;

    if (
      name.value === '' ||
      email.value === '' ||
      pword.value === '' ||
      repWord.value === ''
    ) {
      return alert('Enter all the fields!');
    }

    if (pword.value !== repWord.value) {
      return alert("Password doesn't match");
    }

    const data = {
      name: name.value,
      email: email.value,
      password: pword.value,
    };

    dispatch(addAccount(data));
  };

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'pword':
        return setPword(e.target.value);
      default:
        return setRepWord(e.target.value);
    }
  };

  const handleOnFocus = e => {
    switch (e.target.name) {
      case 'name':
        return setNameOnFocus(!nameOnFocus);
      case 'email':
        return setEmailOnFocus(!emailOnFocus);
      case 'pword':
        return setPwordOnFocus(!pwordOnFocus);
      default:
        return setRepWordOnFocus(!repWordOnFocus);
    }
  };

  const handleOnBlur = e => {
    switch (e.target.name) {
      case 'name':
        return setNameOnFocus(!nameOnFocus);
      case 'email':
        return setEmailOnFocus(!emailOnFocus);
      case 'pword':
        return setPwordOnFocus(!pwordOnFocus);
      default:
        return setRepWordOnFocus(!repWordOnFocus);
    }
  };

  return (
    <section className={css.section}>
      <form onSubmit={handleOnSubmit} className={css.navForm}>
        <div className={css.titleWrapper}>
          <div className={css.navIcon}>
            <FaUserAlt />
          </div>
          <h2 className={css.formTitle}>Register</h2>
        </div>
        <div className={css.navDiv}>
          <label
            htmlFor="name"
            className={nameOnFocus || name !== '' ? css.onFocus : css.label}
          >
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            autoComplete="off"
          />
          <FaRegUser />
        </div>
        <div className={css.navDiv}>
          <label
            htmlFor="email"
            className={emailOnFocus || email !== '' ? css.onFocus : css.label}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            autoComplete="off"
          />
          <GoMail />
        </div>
        <div className={css.navDiv}>
          <label
            htmlFor="pword"
            className={pwordOnFocus || pword !== '' ? css.onFocus : css.label}
          >
            Password
          </label>
          <input
            type="password"
            name="pword"
            id="pword"
            value={pword}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            autoComplete="off"
          />
          <MdOutlineVpnKey />
        </div>
        <div className={css.navDiv}>
          <label
            htmlFor="repword"
            className={
              repWordOnFocus || repWord !== '' ? css.onFocus : css.label
            }
          >
            Password
          </label>
          <input
            type="password"
            name="repWord"
            id="repword"
            value={repWord}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            autoComplete="off"
          />
          <MdOutlineVpnKey />
        </div>
        <button>Register</button>
        <span>
          <Link to="/login">Click here to Login!</Link>
        </span>
      </form>
    </section>
  );
};
