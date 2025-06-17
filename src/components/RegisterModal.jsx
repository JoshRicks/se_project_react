import { Link } from "react-router-dom";
import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({ isOpen, onClose, formRef, handleRegistration }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
    onClose;
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      id="registration-modal"
      formId="registration-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
      onSubmit={handleRegistrationSubmit}
    >
      <label htmlFor="registration-email-input" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__input"
          id="registration-email-input"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="email-input-error"></span>
      </label>
      <label htmlFor="registration-password-input" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="registration-password-input"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="password-input-error"></span>
      </label>
      <label htmlFor="registration-name-input" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="registration-name-input"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="name-input-error"></span>
      </label>
      <label htmlFor="registration-avatar-input" className="modal__label">
        Avatar URL*
        <input
          type="url"
          className="modal__input"
          id="registration-avatar-input"
          placeholder="Avatar URL"
          value={data.link}
          onChange={handleChange}
        />
        <span className="modal__error" id="email-input-error"></span>
      </label>
      <div className="modal__login">
        <p className="login__text">or</p>
        <Link className="login__btn" to="login-modal">
          Log In
        </Link>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
