import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from "shortid";
import Section from '../components/Section'
import authOperations from '../redux/auth/auth-operations';
import s from '../stiles/Form.module.css';

function FormRegister() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
    const nameInputId = shortid.generate();
    const emailInputId = shortid.generate();
    const passwordInputId = shortid.generate();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    reset();
  };
    
  function reset() {
    setName('');
    setEmail('');
    setPassword('');

  }

  return (
    <div className={s.container}>
      <Section title="Form Registration">
    
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">     
        <label htmlFor={nameInputId} className={s.label}>
            Name
            <input
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            />
        </label>
              
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

        <button type="submit" className={s.button}> Registration </button>

      </form>
      </Section>
    </div>
  );
}
export default FormRegister;