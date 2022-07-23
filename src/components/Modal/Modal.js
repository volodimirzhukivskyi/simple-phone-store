import React from "react";
import style from "../Button/Button.module.scss";
import "../../App.scss";
import Button from "../Button/Button";

function Modal(props) {
  const { header, closeButton, text, actions, click } = props;
  return (
    <div className="containerModal" data-testid="closeModal" onClick={click}>
      <div
        role="modalBox"
        className="modalWindow"
        tabIndex="1"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader" role="textBox">
          <h2>{header}</h2>
          {closeButton && (
            <Button
              className={style.CloseButton}
              backgroundColor={"none"}
              text={"X"}
              onClick={click}
            />
          )}
        </div>
        <p className="modalContent">{text}</p>
        {actions}
      </div>
    </div>
  );
}

export default Modal;
