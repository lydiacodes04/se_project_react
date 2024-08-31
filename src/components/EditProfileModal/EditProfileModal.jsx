import React, { useState } from "react";
import "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ onClose, isOpen, handleSubmit }) {
  if (!isOpen) {
    return null;
  }

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save changes"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder={currentUser.name}
          name="name"
          value={data.name}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar *
        <input
          type="link"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar Url"
          name="avatarUrl"
          value={data.avatarUrl}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;