import React, { Component, Children, useEffect, useRef, useState } from "react";
import { RouteProps } from "react-router-dom";
import * as ReactIs from "react-is";
import { withNativeProps } from "../utils/native-props";

console.log(ReactIs.isFragment(<div></div>), "ReactIs.isFragment");

const Wrap = withNativeProps(
  { className: "ww" },
  <div className="qq">haha</div>
);

const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });

const A = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  console.log("aaaa", Date.now());

  // useEffect(() => {
  //     if (ref.current) {
  //         console.log('aaaa', Date.now());
  //     }
  // }, [ref])

  // useEffect(() => {
  //     (async () => {
  //         await delay(1000)
  //         setShow(true)
  //     })()
  // }, [])

  return <div ref={ref}>this is Component A</div>;
};

const B = () => {
  console.log("bbbb");

  return <div>this is Component B</div>;
};

const C = () => {
  console.log("cccc");

  return <div>this is Component C</div>;
};

class Test extends Component {
  render() {
    return <div>ffd</div>;
  }
}

console.log(ReactIs.typeOf(<Test/>), "---", ReactIs.typeOf(<C/>));

class Order extends Component<RouteProps & Record<string, any>> {
  state = {
    index: 0,
  };

  componentDidMount() {
    this.startShow();
  }

  startShow = () => {
    const { index } = this.state;
    const { children, delay } = this.props;

    if (index === Children.count(children) - 1) return;

    setTimeout(() => {
      this.setState({ index: index + 1 });
      this.startShow();
    }, delay);
  };

  render() {
    const { children } = this.props;
    const { index } = this.state;
    return (
      <>
        {Children.map(children, (child: any, idx) => {
          console.log(child._prototype_, "child.type");
          return <>{idx <= index ? child : null}</>;
        })}
      </>
    );
  }
}

export class Custom extends Component {
  render() {
    return (
      <div>
        {Wrap}
        <Order delay={1000}>
          <A />
          <B />
          <C />
            <Test />
        </Order>
      </div>
    );
  }
}

export default Custom;
