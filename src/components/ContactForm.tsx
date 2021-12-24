import { useState } from 'react';

import {
  FormStyled,
  InputGroup,
  Status,
} from '../styles/components/ContactForm';
import config from '../utils/config';

const ContactForm = () => {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState({
    message: '',
    error: false,
  });
  const postForm = async (event: any) => {
    event.preventDefault();

    const result = await fetch('/api/sendmail', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.tel.value,
        message: event.target.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => {
        // If success or validation error HTTP 422
        if (
          (response.status >= 200 && response.status < 300) ||
          response.status === 422
        ) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .catch((error) => {
        // Server error
        console.error('[sendmail] Error sending mail: ', error);
        setStatus({
          message: config.errorMessage,
          error: true,
        });
      });

    if (result?.success) {
      // Success
      setStatus({
        message: result.success,
        error: false,
      });
    } else {
      // Likely a validation error
      setStatus({
        message: result?.error || config.errorMessage,
        error: true,
      });
    }

    setActive(true);

    // Hide status bar after delay
    setTimeout(() => {
      setActive(false);
    }, 5000);
  };
  return (
    <FormStyled onSubmit={(event) => postForm(event)}>
      <Status
        active={active}
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
