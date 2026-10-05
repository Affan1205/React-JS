import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    getNotifiedComments: false,
    getNotifiedCandidates: false,
    getNotifiedOffers: false,
    notification: "",
  });
  // console.log(formData);

  function changeHandler(event) {
    let { name, type, value, checked } = event.target;
    //(1)->agar koi data naya aagaya toh hum previous form ke data ko copy krrahe ha
    //(2)->and jo element trigger hua uski value ko update krrahe
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log("printing final data");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          placeholder="enter your firstname"
          onChange={changeHandler}
          id="firstName"
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          placeholder="enter your lastName"
          onChange={changeHandler}
          id="lastName"
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="enter your email"
          onChange={changeHandler}
          id="email"
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <label htmlFor="country">Country</label>
        <select
          onChange={changeHandler}
          name="country"
          id="country"
          value={formData.country}
        >
          <option value="india">India</option>
          <option value="dubai">Dubai</option>
          <option value="australia">Australia</option>
        </select>

        <br />
        <br />

        <label htmlFor="streetAddress">streetAddress</label>
        <br />
        <input
          type="streetAddress"
          placeholder="enter your streetAddress"
          onChange={changeHandler}
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
        />

        <br />
        <br />

        <label htmlFor="city">city</label>
        <br />
        <input
          type="city"
          placeholder="enter your city"
          onChange={changeHandler}
          id="city"
          name="city"
          value={formData.city}
        />

        <br />
        <br />

        <label htmlFor="state">state</label>
        <br />
        <input
          type="state"
          placeholder="enter your state"
          onChange={changeHandler}
          id="state"
          name="state"
          value={formData.state}
        />

        <br />
        <br />

        <label htmlFor="zip">zip</label>
        <br />
        <input
          type="zip"
          placeholder="enter your zip"
          onChange={changeHandler}
          id="zip"
          name="zip"
          value={formData.zip}
        />

        <br />
        <br />

        <label htmlFor="">By Email</label>
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="getNotifiedComments"
          checked={formData.getNotifiedComments}
        />
        <label htmlFor="getNotifiedComments">Comments</label>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="getNotifiedCandidates"
          checked={formData.getNotifiedCandidates}
        />
        <label htmlFor="getNotifiedCandidates">Candidates</label>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="getNotifiedOffers"
          checked={formData.getNotifiedOffers}
        />
        <label htmlFor="getNotifiedOffers">Offer</label>
        <br />

        <br />
        <br />

        <label htmlFor="">Push Notification</label>
        <br />
        <input
          type="radio"
          onChange={changeHandler}
          name="notification"
          id="everything"
          value="everything"
          checked={formData.notification === "everything"}
        />
        <label htmlFor="everything">Everything</label>
        <input
          type="radio"
          onChange={changeHandler}
          name="notification"
          id="sameAsEmail"
          value="sameAsEmail"
          checked={formData.notification === "sameAsEmail"}
        />
        <label htmlFor="sameAsEmail">sameAsEmail</label>
        <input
          type="radio"
          onChange={changeHandler}
          name="notification"
          id="NoPushNotification"
          value="NoPushNotification"
          checked={formData.notification === "NoPushNotification"}
        />
        <label htmlFor="NoPushNotification">NoPushNotification</label>
        <br />
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
