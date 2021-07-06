import React, { useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {

  // Hooks for storing input values

  const [ firstName, setFirstName ] = useState( "" )
  const [ lastName, setLastName ] = useState( "" )
  const [ email, setEmail ] = useState( "" )
  const [ password, setPassword ] = useState( "" )
  const [ confirmPassword, setConfirmPassword ] = useState( "" )

  // Hooks for storing error values

  const [ firstNameError, setFirstNameError ] = useState( false )
  const [ lastNameError, setLastNameError ] = useState( false )
  const [ emailError, setEmailError ] = useState( false )
  const [ passwordError, setPasswordError ] = useState( false )
  const [ confirmPasswordError, setConfirmPasswordError ] = useState ( false )

  // Prevent form submission

  const handleSubmit = ( e ) => {
    e.preventDefault()
  }

  // Function for simple validation
  // Requires an input name and the input's value
  // The Hook values can't be used since it won't grab the right length

  const validate = ( input, value ) => {
    if ( input === "First Name" ) {
      value.length < 2
        ? setFirstNameError( true )
        : setFirstNameError( false )
    }

    if ( input === "Last Name" ) {
      value.length < 2
        ? setLastNameError( true )
        : setLastNameError( false )
    }

    if ( input === "Email" ) {
      value.length < 2
        ? setEmailError( true )
        : setEmailError( false )
    }

    if ( input === "Password" ) {
      value.length < 8
        ? setPasswordError( true )
        : setPasswordError( false )
    }

    if ( input === "Confirm Password" ) {
      value !== password
        ? setConfirmPasswordError( true )
        : setConfirmPasswordError( false )
    }
  }

  return (
    <div className = "App">

      <form onSubmit = { handleSubmit } >

        <span>

          <label>First Name</label>

          <input
            type = "text"
            className = "form-control"
            value = { firstName }
            onChange = { ( e ) => {
              setFirstName( e.target.value )
              validate( "First Name", e.target.value )
            } }
          />

        </span>

        {
          firstNameError
            ? <p className = "error">First Name must be at least two characters long</p>
            : null
        }

        <span>

          <label>Last Name</label>

          <input
            type = "text"
            className = "form-control"
            value = { lastName }
            onChange = { ( e ) => {
              setLastName( e.target.value )
              validate( "Last Name", e.target.value )
            } }
          />

        </span>

        {
          lastNameError
            ? <p className = "error">Last Name must be at least two characters long</p>
            : null
        }

        <span>

          <label>Email</label>

          <input
            type = "text"
            className = "form-control"
            value = { email }
            onChange = { ( e ) => {
              setEmail( e.target.value )
              validate( "Email", e.target.value )
            } }
          />

        </span>

        {
          emailError
            ? <p className = "error">Email must be at least two characters long</p>
            : null
        }

        <span>

          <label>Password</label>

          <input
            type = "password"
            className = "form-control"
            value = { password }
            onChange = { ( e ) => {
              setPassword( e.target.value )
              validate( "Password", e.target.value )
            } }
          />

        </span>

        {
          passwordError
            ? <p className = "error">Password must be at least eight characters long</p>
            : null
        }

        {
          confirmPasswordError
            ? <p className = "error">Passwords must match</p>
            : null
        }

        <span>

          <label>Confirm Password</label>

          <input
            type = "password"
            className = "form-control"
            value = { confirmPassword }
            onChange = { ( e ) => {
              setConfirmPassword( e.target.value )
              validate( "Confirm Password", e.target.value )
            } }
          />

        </span>

      </form>

    </div>
  );
}

export default App;
