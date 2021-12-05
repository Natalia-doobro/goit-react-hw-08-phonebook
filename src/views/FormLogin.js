import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../components/Section'
import shortid from "shortid";
import authOperations from '../redux/auth/auth-operations';
import s from '../stiles/Form.module.css';

function FormLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };
    
  function reset() {
    setEmail('');
    setPassword('');

  }

  return (
    <div className={s.container}>
      <Section title="Authorization"> 
    
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={emailInputId} className={s.label}>
            E-mail
            <input
            type="email"
            name="email"
            value={email}
            id={emailInputId}
            className={s.input}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="e-mail может состоять только из букв, тире, цифр и оязательного символа @ . Например name@gmail.com"
            required
            onChange={handleChange}
            />
        </label>
              
        <label htmlFor={passwordInputId} className={s.label}>
            Password
            <input
            type="password"
            name="password"
            value={password}
            id={passwordInputId}
            className={s.input}
            required
            onChange={handleChange}
            />
        </label>
        <button type="submit" className={s.button}>Sign up</button>
      </form>

      </Section>
    </div>
  );
}
export default FormLogin;