const Notification = (props) => {
  const { message } = props;
  return <p className="message">{message}</p>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notification</h1>
    <div className="container1">
      <div className="notification-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="icon"
        />
        <Notification message="Information Message" />
      </div>
    </div>
    <div className="container2">
      <div className="notification-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="icon"
        />
        <Notification message="Success Message" />
      </div>
    </div>
    <div className="container3">
      <div className="notification-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="icon"
        />
        <Notification message="Warning Message" />
      </div>
    </div>
    <div className="container4">
      <div className="notification-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="icon"
        />
        <Notification message="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
