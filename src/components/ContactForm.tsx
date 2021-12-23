import { useState } from 'react';

import {
  FormStyled,
  InputGroup,
  Status,
} from '../styles/components/ContactForm';

const ContactForm = () => {
  const [status, setStatus] = useState({
    message: '',
    error: false,
    active: false,
  });
  const postForm = async (event: any) => {
    event.preventDefault();

    const result = await fetch('/api/contact', {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then((res) => res.data)
      .catch((error) => console.log('Request failed', error));

    if (result) {
      setStatus({
        message: result,
        error: false,
        active: true,
      });
    } else {
      setStatus({
        message:
          'There was an error, please email <a href="#">yo@fly5.live</a>',
        error: true,
        active: true,
      });
    }

    setTimeout(() => {
      console.log(status.message);
      setStatus({
        message: status.message,
        error: status.error,
        active: false,
      });
    }, 2000);
  };
  return (
    <FormStyled onSubmit={postForm}>
      <Status
        active={status.active}
        error={status.error}
        className="absolute top-0 left-0 right-0 font-bold text-black bg-white p-4 text-center"
        dangerouslySetInnerHTML={{
          __html: status.message,
        }}
      />
      <InputGroup>
        {/* <label htmlFor="name">Name</label> */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          autoComplete="name"
          required
        />
      </InputGroup>
      <InputGroup>
        {/* <label htmlFor="email">Email</label> */}
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
        />
      </InputGroup>
      <InputGroup>
        {/* <label htmlFor="tel">Name</label> */}
        <input
          id="tel"
          name="tel"
          type="tel"
          placeholder="Phone"
          autoComplete="tel"
        />
      </InputGroup>
      <InputGroup>
        {/* <label htmlFor="message">Tell us what&apos;s up</label> */}
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what's up"
          rows={4}
          className="w-full"
        />
      </InputGroup>
      <button
        type="submit"
        className="mt-12 py-6 bg-white text-black font-bold text-xl"
      >
        Send
      </button>
    </FormStyled>
  );
};

export default ContactForm;
