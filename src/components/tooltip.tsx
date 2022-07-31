import React, { Component } from "react";
import { RouteProps } from "react-router-dom";
import { createPortal } from "react-dom";
import styles from "./style.module.scss";

export class Tooltip extends Component<RouteProps, any> {
  constructor(props: any) {
    super(props);
    this.domNode = document.createElement("div");
    this.domNode.classList.add(styles.container);
  }

  public domNode;

  componentDidMount() {
    document.body.appendChild(this.domNode);
  }

  componentWillUnmount() {
    document.body.removeChild(this.domNode);
  }

  render() {
    // const element = React.createElement("div", {}, this.props.children);
    return createPortal(this.props.children, this.domNode);
  }
}

export default Tooltip;
