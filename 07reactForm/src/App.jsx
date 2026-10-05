import { useState } from "react";
import "./App.css";

function App() {
  // const[firstName,setFirstName]=useState('')
  // const[lastName,setLastName]=useState('')

  // console.log(firstName)
  // console.log(lastName)
  // function changeFirstNameHandler(event) {
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  // }
  // function changeLastNameHandler(event) {
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  console.log(formData);

  function changeHandler(event) {
    //jis bhi element ke liye yeh function call hua ha uss element mein kaun kaun si property usko hum destructure krke nikal lenge
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,//yeh isliye kiya kyu jo purane value ha woh toh same hi ha 
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Finally printing the entire form data...");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder="enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        ></textarea>

        <br />
        <br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible ?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <br />
        <br />

        <label htmlFor="favCar">Tell me your Favourite Car</label>
        <br />
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="rr">RR</option>
          <option value="scropio">Scorpio</option>
          <option value="bmw">Bmw</option>
          <option value="mercedes">Mercedes</option>
        </select>

        <br />
        <br />

        <button>Submit </button>
      </form>
    </div>
  );
}

export default App;
