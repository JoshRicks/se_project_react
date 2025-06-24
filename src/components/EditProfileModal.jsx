import { useState, useEffect, useContext } from "react";

import { getUserInfo } from "../utils/auth";
import ModalWithForm from "./ModalWithForm";
import { getToken } from "../utils/token";
import CurrentUser from "../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, formRef, handleEditProfile }) {
  const currentUser = useContext(CurrentUser);
  const [data, setData] = useState({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }
    setData({ name: currentUser.name, avatar: currentUser.avatar });
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleEditProfileSubmit(e) {
    e.preventDefault();
    handleEditProfile(data);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      id="edit-profile-modal"
      formId="edit-profile-form"
      isOpen={isOpen}
      onClose={onClose}
      formRef={formRef}
      onSubmit={handleEditProfileSubmit}
    >
      <label htmlFor="edit-name-input" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="edit-name-input"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="edit-name-input-error"></span>
      </label>
      <label htmlFor="edit-avatar-input" className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="edit-avatar-input"
          placeholder="Avatar URL"
          name="avatar"
          value={data.avatar}
          onChange={handleChange}
        />
        <span className="modal__error" id="edit-avatar-input-error"></span>
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
