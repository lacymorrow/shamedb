import { FormStyled } from '../styles/components/ContactForm';

// type ContactFormProps = {
//   submitted?: boolean;
// };

const ContactForm = () => {
  const registerUser = async (event: any) => {
    event.preventDefault();

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
  };
  return (
    <FormStyled onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>

      <p></p>
    </FormStyled>
  );
};

export default ContactForm;
