import React from 'react'

const Contact = () => {

  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "") {
      alert("Please name field feel");
      return;
    }

    if (email === "") {
      alert("Please email field feel");
      return;
    }

    if (password.length < 8) {
      alert("password field feel");
      return;
    }
    alert("form fill hogya");
  })

  return (
    <div>

      <form action="" id='myForm'>
        <h2>Logon Form</h2>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" placeholder="example@gmail.com" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" placeholder="********" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>


      </form >

    </div >

  )
}

export default Contact