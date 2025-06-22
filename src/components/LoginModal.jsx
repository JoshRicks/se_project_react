import { Link } from "react-router-dom";
import { useState } from "react";

import ModalWithForm from "./ModalWithForm";

function LoginModal({ isOpen, onClose, formRef, handleLogin, signUpClick }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  function handleLoginSubmit(e) {
    console.log("submitted");
    console.log("Login data:", data);
    e.preventDefault();
    handleLogin(data);
  }
  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      id="login-modal"
      formId="login-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
      onSubmit={handleLoginSubmit}
    >
      <label htmlFor="email-input" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email-input"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="email-input-error"></span>
      </label>
      <label htmlFor="password-input" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="password-input"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="password-input-error"></span>
      </label>
      <Link
        className="sign-up__btn"
        to="registration-modal"
        onClick={signUpClick}
      >
        or Sign Up
      </Link>
    </ModalWithForm>
  );
}

export default LoginModal;
