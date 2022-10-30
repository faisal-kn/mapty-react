import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "../css/signup.module.css";
const Signup = ({ logStateHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [hobbies, setHobbies] = useState({
    Games: false,
    coding_meetups: false,
    Mixers: false,
    political_gatherings: false,
    Major_events: false,
    Educational: false,
    Friend_meetups: false,
    Travelling: false,
    Random_meetups: false,
    Hangouts: false,
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userHobbies = [];
      for (let hobby in hobbies) {
        if (hobbies[hobby] === true) {
          userHobbies.push(hobby.split("_").join(" "));
        }
      }
      const options = {
        url: "http://localhost:3001/api/user/signup",
        method: "POST",
        withCredentials: true,
        data: {
          username,
          email,
          password,
          confirmPassword,
          userHobbies,
        },
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios(options);
      console.log(data.data);
      if (data.data.status === "success") {
        logStateHandler(
          true,
          data.data.data.newUser._id,
          data.data.data.newUser.username
        );
        navigate("/events", { replace: true });
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const nextHandler = (e) => {
    const mainbox1 = document.getElementById("mainbox");
    const altbox1 = document.getElementById("altbox");
    if (password !== confirmPassword) {
      // showAlert("error", "Confirm password do not match");
      return;
    }

    if (email.indexOf("@") < 0) {
      // showAlert("error", "Please enter a Valid email.");
      return;
    }
    if (password.length < 8) {
      // showAlert("error", "Password must be at least 8 characters long");
      return;
    }
    if (username && email && password && confirmPassword) {
      mainbox1.style.display = "none";
      altbox1.style.display = "flex";
    } else {
      // showAlert("error", "Please fill all the fields");
      return;
    }
  };

  const backHandler = () => {
    const mainbox1 = document.getElementById("mainbox");
    const altbox1 = document.getElementById("altbox");
    altbox1.style.display = "none";
    mainbox1.style.display = "flex";
  };

  const hobbiesHandler = (e) => {
    const hobby = e.target.innerHTML;
    const hobbyinObj = hobby.split(" ").join("_");
    if (hobbies[hobbyinObj] === false) {
      e.target.style.backgroundColor = "lightblue";
    } else {
      e.target.style.backgroundColor = "white";
    }
    setHobbies({ ...hobbies, [hobbyinObj]: !hobbies[hobbyinObj] });
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Create your account</h1>
          <h3 style={{ fontSize: "18px", textAlign: "center", opacity: "0.4" }}>
            Your first step into the future!
          </h3>
          <div className={styles.card1}>
            <div className={styles.imaged}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px 0 0 15px",
                }}
                src="/assets/signup1.jpg"
                alt=""
              />
            </div>
            <div className={styles.box} id="mainbox">
              <h3 className={styles.texts} style={{ paddingBottom: "15px" }}>
                Fill out some details
              </h3>
              <form
                action="#"
                className={styles.form1}
                id="form-user--data"
                // onSubmit={handleSubmit}
              >
                <input
                  className={styles.details}
                  type="text"
                  name="username"
                  id="name"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className={styles.details}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.details}
                  type="password"
                  name="password"
                  id="password"
                  minLength="8"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className={styles.details}
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className={styles.login_btn}
                  id="next"
                  onClick={nextHandler}
                >
                  Next
                </button>
                <div style={{ paddingTop: "20px" }}>
                  Already have an account ?{" "}
                  <a
                    href="/login"
                    style={{ textDecoration: "none", color: "orange" }}
                  >
                    Sign in
                  </a>
                </div>
              </form>
            </div>
            <div className={styles.alt_box} id="altbox">
              <h2 style={{ textAlign: "center" }} className={styles.texts}>
                Select a few hobbies of yours!
              </h2>
              <div className={styles.boxes}>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Games
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  coding meetups
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Mixers
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  political gatherings
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Major events
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Educational
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Friend meetups
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Travelling
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Random meetups
                </button>
                <button className={styles.options} onClick={hobbiesHandler}>
                  Hangouts
                </button>

                <div className={styles.end_buttons}>
                  <button
                    type="submit"
                    className={styles.alt_button}
                    id="back"
                    onClick={backHandler}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className={styles.alt_button}
                    id="signup-btn"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
