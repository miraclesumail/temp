import React, {
  Component,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import { Modal, Divider } from "antd-mobile";
import ToolTip from "./tooltip";
// import element from "./dialog";
import Confirm, { Context, show, dialogInstance } from "./confirm";
import { createAnimateNode } from "./animate-element";
import useModal from "./use-modal";
import styles from "./style.module.scss";

type Coins = {
  id: number;
  text: string;
  amount: number;
};

const coins: Coins[] = [
  {
    id: 0,
    text: "100",
    amount: 100,
  },
  {
    id: 1,
    text: "500",
    amount: 500,
  },
  {
    id: 2,
    text: "1千",
    amount: 1000,
  },
  {
    id: 3,
    text: "2千",
    amount: 2000,
  },
  {
    id: 4,
    text: "5千",
    amount: 5000,
  },
  {
    id: 5,
    text: "1万",
    amount: 10000,
  },
  {
    id: 6,
    text: "2万",
    amount: 20000,
  },
  {
    id: 7,
    text: "5万",
    amount: 50000,
  },
  {
    id: 8,
    text: "10万",
    amount: 100000,
  },
];

export class Home1 extends Component {
  public state = {
    count: 1,
    show: false,
    coins,
    total: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ count: 3 });
    }, 3000);
  }

  onClick = () => {
    // Modal.alert({
    //   image:
    //     "https://gw.alipayobjects.com/mdn/rms_efa86a/afts/img/A*SE7kRojatZ0AAAAAAAAAAAAAARQnAQ",
    //   title: "手持工牌照示例" + this.state.count,
    //   content: "请用手机拍摄手持工牌照，注意保持照片清晰",
    // });
  };

  addTotal = (amount) =>
    this.setState({
      total: this.state.total + amount,
    });

  getContent = () => (
    <>
      <div className={styles.coinWrap}>
        {coins.map(({ id, text, amount }) => (
          <div
            key={id}
            className={styles.coin}
            onClick={() => this.addTotal(amount)}
          >
            {text}
          </div>
        ))}
      </div>

      <div>
        <span>{this.state.total}</span>
        <span>删除</span>
      </div>
    </>
  );

  render() {
    const { show } = this.state;
    const title = "标题";
    return (
      <div onClick={this.onClick}>
        this is Home
        {/* {show ? (
          <ToolTip>
            <Confirm
              {...{
                title,
                content: this.getContent(),
                onCancelClick: () => this.setState({ show: false }),
                onOkClick: () => this.setState({ show: false }),
              }}
            />
          </ToolTip>
        ) : null} */}
      </div>
    );
  }
}

const Count = ({ title }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setCount(3);
    }, 3000);
  }, []);

  return (
    <div>
      {title} {count}
    </div>
  );
};

const Home = () => {
  const [title, setTitle] = useState("hello");
  const ref = useRef();
  const countRef = useRef(0);
  const [modal, contextHolder] = useModal();
  const onCancelClick = () => console.log("onCancelClick");
  const onOkClick = () => console.log("onOkClick");

  useEffect(() => {
    setTimeout(() => {
      setTitle("waht");
    }, 3000);
  }, []);

  const onClick = () => {
    const keyframes = [
      { transform: "translate(0px)" },
      { transform: "translate(650px, -180px)" },
    ];
    const options = {
      // timing options
      duration: 400,
      easing: "ease-in-out",
    };

    const onFinish = () => console.log("onFinishonFinish");

    const children = <></>;

    createAnimateNode({ keyframes, options, onFinish, children }, ref.current, {
      className: styles.childWrap,
    });
  };
  // modal.info({
  //   title,
  //   content: <Count title={title} />,
  //   onCancelClick,
  //   onOkClick,
  // });

  return (
    <>
      <div onClick={onClick}>this is Home1 </div>

      <div className={styles.chipsWrap} ref={ref}></div>
    </>
  );
};

export default Home;
