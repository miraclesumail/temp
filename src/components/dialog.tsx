import React, { cloneElement, FC, Component, createElement } from "react";
import { render } from "react-dom";

const Dialog: FC<any> = ({ name }) => {
  const show = () => console.log("axiba");

  return <div>this is {name}</div>;
};

// export class Dialog extends Component<any, any> {
//   public state = {
//     visible: false,
//   };

//   public show = () => this.setState({ visible: true });

//   render() {
//     const { visible } = this.state;
//     return (
//       <div style={{ display: visible ? "block" : "none" }}>
//         this is {this.props.name}
//       </div>
//     );
//   }
// }

let container = document.querySelector(".mydialog");
if (!container) {
  container = document.createElement("div");
  container.classList.add("mydialog");
  document.body.appendChild(container);
  console.log("wwww--000");
}

const element = createElement(Dialog, { name: "999" });

const dd = render(element, container);

export default dd;
