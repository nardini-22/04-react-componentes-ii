import { React, useState } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const icon = <FontAwesomeIcon className="icon" icon={faUser} />;

function Input({ onSubmit, showError }) {
  const [name, setName] = useState("a");
  const [phone, setPhone] = useState("1");
  const [email, setEmail] = useState("a");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    if (name.length > 2 && phone.length > 2 && email.length > 2 && desc.length > 2) {
      e.preventDefault();
      onSubmit(name, phone, email, desc);
    } else {
      e.preventDefault();
      showError();
    }
  };

  const insertName = (value) => {
    const reName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (reName.test(value)) {
      setName(value);
    } else {
      setName("");
      // console.log("erro");
    }
  };

  const insertPhone = (value) => {
    const rePhone =
      /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
    if (rePhone.test(value)) {
      setPhone(value);
    } else {
      setPhone("");
    }
  };

  const insertEmail = (value) => {
    const reEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reEmail.test(value)) {
      setEmail(value);
    } else {
      setEmail("");
    }
  };

  let char = desc.split("").length;

  return (
    <>
      <div className="icon-container">{icon}</div>
        <div className="tooltip">
          <label>
            {" "}
            Name <b>*</b>
          </label>
          <span className="tooltipText">Required</span>
        </div>
        <input
          className={`input name ${name.length >= 3 ? "" : "error"}`}
          name="name"
          type="text"
          placeholder="First and last name"
          onChange={(e) => insertName(e.target.value)}
        ></input>
        <div className="tooltip">
          <label>
            {" "}
            Phone <b>*</b>
          </label>
          <span className="tooltipText">Required</span>
        </div>
        <input
          className={`input tel ${phone.length >= 11 ? "" : "error"}`}
          name="tel"
          type="text"
          placeholder="11999990000"
          onChange={(e) => insertPhone(e.target.value)}
        ></input>
        <div className="tooltip">
          <label>
            {" "}
            Email <b>*</b>
          </label>
          <span className="tooltipText">Required</span>
        </div>
        <input
          className={`input email ${email.length >= 8 ? "" : "error"}`}
          name="email"
          type="text"
          placeholder="example@email.com"
          onChange={(e) => insertEmail(e.target.value)}
        ></input>
        <div className="tooltip">
        <label>
          {" "}
          Description <b>*</b>
        </label>
        <span className="tooltipText">Required</span>
        </div>
        <div className="character">
          <input
            className={`input desc ${desc.length >= 2 ? "" : "error"}`}
            name="desc"
            type="text"
            placeholder="Your message goes here"
            maxLength="150"
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <p>{char}/150</p>
        </div>
        <input
          type="submit"
          className="submit"
          value="Submit"
          onClick={(e) => submit(e)}
        />
    </>
  );
}

export default Input;
