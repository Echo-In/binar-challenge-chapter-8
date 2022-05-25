import { useState, useEffect } from "react";
import "./Form.css";
// import Navbar from "./Navbar";

const Form = (props) => {
  const [action, setAction] = useState("Create");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    if (props.form) {
      setAction(props.form.action);
      setUsername(props.form.username);
      setEmail(props.form.email);
      setExperience(props.form.experience);
      setLevel(props.form.level);
    }
  }, [props.form]);

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };

  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };

  const experienceOnChangeHandle = (event) => {
    setExperience(event.target.value);
  };

  const levelOnChangeHandle = (event) => {
    setLevel(event.target.value);
  };

  //   const navbarCallback = (navbarData) => {
  //     setAction("Search");
  //   };

  const onSubmit = (event) => {
    event.preventDefault();
    let data = {};
    console.log(action);
    if (action === "Edit") {
      data = {
        userid: props.form.userid,
        username: username,
        email: email,
        experience: experience,
        level: level,
      };
      props.onUpdatePlayer(data);
    } else if (action === "Create") {
      data = {
        username: username,
        email: email,
        experience: experience,
        level: level,
      };
      props.onAddPlayer(data);
    } else if (action === "Search") {
      data = {
        userid: props.form.userid,
        username: username,
        email: email,
        experience: experience,
        level: level,
      };
      props.onSearchPlayer(data);
    }

    setAction("Create");
    setUsername("");
    setEmail("");
    setExperience("");
    setLevel("");
  };

  return (
    <div className="container">
      {/* <Navbar parentCallback={navbarCallback} /> */}
      <form onSubmit={onSubmit}>
        <h2>{action} Player</h2>
        <div className="row">
          <div className="col-25">
            <label for="username">Username</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              value={username}
              onChange={usernameOnChangeHandle}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="email"
              value={email}
              onChange={emailOnChangeHandle}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="country">Experience</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="experience"
              value={experience}
              onChange={experienceOnChangeHandle}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="subject">Level</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="level"
              value={level}
              onChange={levelOnChangeHandle}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
