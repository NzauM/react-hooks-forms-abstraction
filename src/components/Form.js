import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const[formData, setFormdata] = useState({
    firstName: "John",
    lastName: "Henry",
    admin:false
  })

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === "checkbox"){
      value = event.target.checked;
    }

    setFormdata({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData)
  }

  // function handleFirstNameChange(event) {
  //   setFormdata({
  //     ...formData,
  //     firstName: event.target.value
  //   });
  //   // setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setFormdata({
  //     ...formData,
  //     lastName: event.target.value
  //   })
  //   // setLastName(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input name="admin" type="checkbox" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
