import { React } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Icon = <FontAwesomeIcon className="iconExit" icon={faTimes} />;
const Error = <FontAwesomeIcon className="iconError" icon={faTimes} />;
const IconCircleCheck = (
  <FontAwesomeIcon className="iconCircleCheck" icon={faCheckCircle} />
);
const IconCheck = <FontAwesomeIcon className="iconCheck" icon={faCheck} />;

function Result({ value, display, action }) {
  // console.log(value, display);
  if (display && value.Error === false) {
    return (
      <>
        <div className="overlay">
          <div className="modalContainer animateBottom">
            <div className="header">
              <h1>Sucess!</h1>
              <button className="exit" onClick={action}>
                {Icon}
              </button>
            </div>
            {IconCircleCheck}
            <h5>Your information has been validated</h5>
            <ul>
              <li>
                {IconCheck} <b>Name:</b> {value.Name}
              </li>
              <li>
                {IconCheck} <b>Phone:</b> ({value.Phone.slice(0, 2)}){" "}
                {value.Phone.slice(2, 7)}-{value.Phone.slice(7, 11)}
              </li>
              <li>
                {IconCheck} <b>Email:</b> {value.Email}
              </li>
              <li>
                {IconCheck} <b>Description:</b> {value.Description}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  if (display && value.Error === true) {
    return (
      <>
        <div className="overlay">
          <div className="modalContainer bounce">
            <div className="header errorH">
              <h1>Error!</h1>
              <button className="exit" onClick={action}>
                {Icon}
              </button>
            </div>
            <div className="iconContainer">
            {Error}
            </div>
            <h5 id="error">Error validating your informations</h5>
            <p>Fill the fields with the correct information</p>
          </div>
        </div>
      </>
    );
  }
  return null;
}
export default Result;
