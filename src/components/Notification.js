import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const {content, show} = notification;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <>{show ? <div style={style}>{content}</div> : null }</>;
};

export default Notification