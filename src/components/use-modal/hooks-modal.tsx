import React, { useEffect, useState } from "react";
import { createPortal, render, unmountComponentAtNode } from "react-dom";
import Comfirm from "../confirm";
import styles from "../style.module.scss";
import Confirm from "../confirm";

let domNode;

const HooksModal = (props) => {
  useEffect(() => {
    domNode = document.querySelector(`.${styles.container}`);
    console.log("domNodedomNodedomNode");
    if (!domNode) {
      domNode = document.createElement("div");
      domNode.classList.add(styles.container);
      document.body.appendChild(domNode);
      render(
        <Confirm
          {...{
            ...props,
            onCancelClick: () => {
              unmountComponentAtNode(domNode);
              document.body.removeChild(domNode);
            },
          }}
        />,
        domNode
      );
    }
  }, []);

  return <></>;
};

export default HooksModal;
