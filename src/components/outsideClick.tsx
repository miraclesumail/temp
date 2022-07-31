import React, { Component, createRef } from "react";
import { RouteProps } from "react-router-dom";

interface onOutClick {
  (e: React.MouseEvent<HTMLElement>): void;
}

type Props = RouteProps & onOutClick & Record<string, any>;

class OutsideClick extends Component<Props, any> {
  public ref = createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener("click", this.onClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.onClickHandler);
  }

  public onClickHandler = (e: MouseEvent) => {
    if (this.ref.current?.contains(e.target as any)) {
      console.log("inside click");
    } else {
      const { onOutClick } = this.props;
      console.log("outside click", onOutClick());
    }
  };

  render() {
    const { children } = this.props;
    return <div ref={this.ref}>{children}</div>;
  }
}

export default OutsideClick;
