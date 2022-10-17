import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      console.log("Please fill out the form correctly");
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        {/* name login */}
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {!values.isMember && (
          <FormRow
            type='type'
            name='name'
            value={values.name}
            handleChange={handleChange}></FormRow>
        )}

        {/* email login */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}></FormRow>
        {/* password login */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}></FormRow>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember ? "I'm not a member yet!" : "Already a member ya!"}
          <button type='button' onClick={toggleMember} className='btn bottom'>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
