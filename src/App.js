import { React, useState } from "react";
import "./App.css";
import Input from "./components/input";
import Result from "./components/result";

function App() {
  const [value, setValue] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Description: "",
    Error: false
  });
  const [modal, setModal] = useState(false);

  const showResult = (Name, Phone, Email, Description) => {
      setValue({
        Name: Name,
        Phone: Phone,
        Email: Email,
        Description: Description,
        Error: false
      });
      setModal(true);
  };

  const showError = () => {
    setValue({
      Name: '',
      Phone: '',
      Email: '',
      Description: '',
      Error: true
    })
    setModal(true)
    // console.log('erro')
  }

  return (
    <div className="container">
      <form>
        <Input onSubmit={showResult} showError={showError} value={value} />
        <Result value={value} display={modal} action={() => setModal(!modal)} />
      </form>
    </div>
  );
}

export default App;
