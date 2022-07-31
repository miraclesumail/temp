import * as React from "react";

export default function usePatchElement(): [
  React.ReactElement[],
  (element: React.ReactElement) => Function,
  () => void
] {
  const [elements, setElements] = React.useState<React.ReactElement[]>([]);

  const patchElement = React.useCallback((element: React.ReactElement) => {
    // append a new element to elements (and create a new ref)
    setElements((originElements) => [...originElements, element]);

    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      console.log("closse===---");
      setElements((originElements) =>
        originElements.filter((ele) => ele !== element)
      );
    };
  }, []);

  const removeElement = React.useCallback(() => {
    console.log("removeElement");
    setElements([]);
  }, []);

  return [elements, patchElement, removeElement];
}
