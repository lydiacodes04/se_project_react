import React, { useState } from "react";
import "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const AddItemModal = ({ isOpen, onAddItem, closeActiveModal }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setLink] = useState("");
  const handleLinkChange = (e) => {
    console.log(e.target.value);
    setLink(e.target.value);
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   call onAddItem with appropriate arguments
  // }

  return (
    <div
      className="ModalWithForm"
      title="New garment"
      text="Add garment"
      onClose={closeActiveModal}
      // isOpen={isOpen}
      onSubmit={(e) => onAddItem(e, { name })}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          name="link"
          value={link}
          onChange={handleLinkChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type: </legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="input"
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="input"
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="input"
          />{" "}
          Cold
        </label>
      </fieldset>
    </div>
  );
};

export default AddItemModal;
