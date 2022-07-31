import React, { FC, createContext, createElement, useContext } from "react";
import { useSetState } from "ahooks";
import styles from "./style.module.scss";
import { render } from "react-dom";

interface ConfirmProps {
  title: string;
  content: React.ReactNode;
  showClose?: boolean;
  confirmText?: string;
  cancelText?: string;
  onCancelClick: () => void;
  onOkClick: () => void;
  onAfterClick?: () => void;
}

type ContextProps = {
  visible: boolean;
  toggleVisible: () => void;
  showDialog: (params: any) => void;
};

export const Context = createContext<ContextProps>({} as ContextProps);

const Confirm: FC<ConfirmProps> = ({
  title,
  content,
  onCancelClick,
  onOkClick,
  showClose = true,
  cancelText = "取消",
  confirmText = "确定",
}) => {
  return (
    <div className={styles.content}>
      {showClose ? (
        <div className={styles.close} onClick={onCancelClick}>
          x
        </div>
      ) : null}

      <div>{title}</div>
      {content}
      <div className={styles.footer}>
        <span onClick={onCancelClick}>{cancelText}</span>
        <span onClick={onOkClick}>{confirmText}</span>
      </div>
    </div>
  );
};

const DialogWrap = () => {
  const [state, setState] = useSetState({
    visible: false,
    title: "title",
    content: <div>aaa</div>,
  });

  const toggleVisible = () => setState({ ...state, visible: !state.visible });

  const onCancelClick = () => console.log("onCancelClick");

  const onOkClick = () => console.log("onOkClick");

  const showDialog = (props) =>
    setState({
      ...state,
      ...props,
    });

  return (
    <Context.Provider
      value={{ visible: state.visible, toggleVisible, showDialog }}
    >
      <Confirm {...{ ...state, onCancelClick, onOkClick }} />
    </Context.Provider>
  );
};

export const show = ({ title }) => {
  let container = document.querySelector(".mydialog");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("mydialog");
    document.body.appendChild(container);
  }

  const onCancelClick = () => console.log("onCancelClick");

  const onOkClick = () => console.log("onOkClick");

  render(
    <Confirm
      {...{
        title: title || "title",
        content: "content",
        onOkClick,
        onCancelClick,
      }}
    />,
    container
  );
};

let container = document.querySelector(".mydialog");
if (!container) {
  container = document.createElement("div");
  container.classList.add("mydialog");
  document.body.appendChild(container);
}

const element = createElement(Confirm, {} as any);
console.log(element, "elementelementelement");
export const dialogInstance = render(element, container);
console.log(dialogInstance, "---0----");

export default Confirm;
