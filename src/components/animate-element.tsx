import React, {
  CSSProperties,
  ReactNode,
  FC,
  memo,
  MutableRefObject,
  useRef,
  useEffect,
} from "react";
import styles from "./style.module.scss";
import ReactDOM from "react-dom/client";

interface AnimateProps {
  keyframes: CSSProperties[];
  options: any;
  onFinish?: () => void;
  children: ReactNode;
}

const AnimateElement: FC<AnimateProps> = memo(
  ({ keyframes, options, children, onFinish }) => {
    const imgRef: MutableRefObject<any> = useRef<HTMLImageElement>(null);
    const animationRef: MutableRefObject<any> = useRef<Animation>();

    useEffect(() => {
      animationRef.current = imgRef.current.animate(keyframes, options);

      animationRef.current.onfinish = (e: AnimationPlaybackEvent) => {
        onFinish();
      };

      return () => (animationRef.current as Animation).cancel();
    }, []);

    return (
      <div ref={imgRef} className={styles.child}>
        {children}
      </div>
    );
  }
);

AnimateElement.displayName = "AnimateElement";

type ElementStyle = {
  className: string;
  styles: CSSProperties;
};

export const createAnimateNode = (
  params: AnimateProps,
  parent: HTMLElement,
  styles: Partial<ElementStyle>
) => {
  const div = document.createElement("div");

  console.log("---00---");
  if (styles.className) {
    div.classList.add(styles.className);
  }

  parent.appendChild(div);
  const root = ReactDOM.createRoot(div);

  function onFinish() {
    root.unmount();
    div.remove();
    params.onFinish();
  }
  root.render(<AnimateElement {...{ ...params, onFinish }} />);
};

export default AnimateElement;
