import React, { FC, createContext, useMemo, useCallback } from "react";
import usePatchElement from "../../hooks/use-patch-element";
import HooksModal from "./hooks-modal";

interface ElementsHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1];
  removeElement: () => void;
}

const ElementsHolder = React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
    const [elements, patchElement, removeElement] = usePatchElement();
    React.useImperativeHandle(
      ref,
      () => ({
        patchElement,
        removeElement,
      }),
      []
    );
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{elements}</>;
  })
);

export default function useModal() {
  const holderRef = React.useRef<ElementsHolderRef>(null as any);

  const getConfirmFunc = useCallback((props) => {
    let closeFunc: Function;

    const modal = (
      <HooksModal
        {...{ ...props, onCancelClick: holderRef.current?.removeElement }}
      />
    );

    closeFunc = holderRef.current?.patchElement(modal);
  }, []);

  const fns = useMemo(
    () => ({
      info: getConfirmFunc,
    }),
    []
  );

  return [fns as any, <ElementsHolder ref={holderRef} />];
}
