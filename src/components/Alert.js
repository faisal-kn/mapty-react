import "../css/alert.css";

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}-alert`}>
      <h3>{message}</h3>
      <button className="close">&times;</button>
    </div>
  );
};

export default Alert;
