import { useState } from "react";
import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";

import Spinner from "../components/Spinner";
import styles from "../css/login.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const Login = ({ logStateHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { promiseInProgress } = usePromiseTracker();
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    const options = {
      url: "http://localhost:3001/api/user/login",
      method: "POST",
      withCredentials: true,
      data: {
        email,
        password,
      },
    };
    return await axios(options);
  };

  const promiseHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert({
        message: "Please fill all the fields",
        type: "error",
      });
      setShow(true);
      return;
    }
    if (email.indexOf("@") < 0) {
      setAlert({
        message: "Invalid email",
        type: "error",
      });
      setShow(true);
      return;
    }
    const res = await trackPromise(submitHandler());
    if (res.data.status === "success") {
      logStateHandler(
        true,
        res.data.data.user._id,
        res.data.data.user.username
      );
      navigate("/events", { replace: true });
    }
  };

  return (
    <>
      {promiseInProgress === true ? (
        <Spinner />
      ) : (
        <>
          {show && (
            <Alert
              message={alert.message}
              type={alert.type}
              setShow={setShow}
            />
          )}
          <div className={styles.page}>
            <div className={styles.container}>
              <h1 style={{ textAlign: "center", color: "white" }}>
                Login to your account
              </h1>
              <h3
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "18px",
                  opacity: "0.4",
                }}
              >
                Make sure to share our platform with your friends!
              </h3>
              <div className={styles.box}>
                <div className={styles.image}>
                  <img
                    src="https://img.freepik.com/free-vector/navigation-map-street-3d-location-pin-locator-pins-pointer-navigator-maps-locations-marker_102902-1053.jpg?size=626&ext=jpg&ga=GA1.1.1097707927.1648489757"
                    className={styles.images}
                    alt=""
                  />
                </div>
                <div className={styles.box1}>
                  <form
                    action="#"
                    className={styles.form}
                    onSubmit={promiseHandler}
                  >
                    <input
                      className={styles.details}
                      type="email"
                      name="username"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className={styles.details}
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                    <button type="submit" className={styles["login-btn"]}>
                      Login
                    </button>
                  </form>
                  <div className={styles.copy}>
                    <button className={styles["login-btn"]}>
                      <Link to="/signup" className={styles["signup-link"]}>
                        Create Account
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
