import React from "react";
import styled from "styled-components";
import Sword from './images/sword.png'
import Background from './images/reg-background.png'
import RedLogo from './images/mobile-imgs/Logo.svg'

// import styled from "styled-components";
class Registration extends React.Component {

  validate() {
    result = "";
    result += this.validateName();
    result += this.validateUsername();
    result += this.validateEmail();
    result += this.validatePassword();
    if (result == "") return true;
    alert("Validation Result:\n\n" + result);
    return false;
  }

  validateUsername() {
    let name = document.getElementsByUsername("username")[0].value;
    if (name.length <= 5)
      return "Username should be at least five characters long.";
    return "";
  }

  validateName() {
    var name = document.getElementsByName("name")[0].value;
    if (name.length <= 0) return "Name should be at least one character.\n";
    return "";
  }

  validatePassword() {
    var password = valueOf("password");
    var retype = valueOf("retype_password");
    if (password.length <= 6)
      return "Password should be at least 6 characters.\n";
    if (password != retype) return "Passwords do not match.\n";
    return "";
  }

  validateEmail() {
    var email = valueOf("email");
    var retype = valueOf("retype_email");
    if (email.indexOf("@") == -1) return "Email should be a valid address.\n";
    if (email != retype) return "Email addresses do not match.\n";
    return "";
  }

  valueOf(name) {
    return document.getElementsByName(name)[0].value;
  }

  pageRedirect() {
    ;
  } 

  render() {
    return (
      <div>
        <PageContainer>
          <LogoContainer src={RedLogo} />
          <FormContainer>
            <InnerFormContainer>
              <Form>
                <FormTitle>Greatness &nbsp;&nbsp; Calls You</FormTitle>
                <FormInputs1
                  type="text"
                  size="30"
                  name="name"
                  placeholder="Name"
                />
                <FormInputs
                  type="text"
                  size="30"
                  name="username"
                  placeholder="Username"
                />
                <FormInputs
                  type="email"
                  size="30"
                  name="email"
                  placeholder="Email"
                />
                <FormInputs
                  type="password"
                  size="30"
                  name="password"
                  placeholder="Password"
                />
                <FormInputs
                  type="password"
                  size="30"
                  name="retypefield"
                  placeholder="Retype Password"
                />
                <FormFooter>
                  <FormTerms>
                    By signing up to LORE you agree to our terms of service and
                    privacy policy.
                  </FormTerms>
                  <InputButton type="submit" onclick="pageRedirect()">Join The Fight</InputButton>
                </FormFooter>
              </Form>
            </InnerFormContainer>
          </FormContainer>
        </PageContainer>
      </div>
    );
  }
  
}


export default Registration;

const PageContainer = styled.div`
  background: url(${BackgroundImage}) no-repeat;
  background-position-x: 90%;
  background-size: cover;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
const LogoContainer = styled.img`
  position: relative;
  top: 5rem;
`;
const Form = styled.form`
  background: url(${SwordImage}) no-repeat center;
  background-size: contain;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "LoreFont";
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(157, 118, 53, 0.6) 0%,
    rgba(157, 128, 53, 0.18) 99.99%,
    rgba(157, 128, 53, 0) 100%
  );
  height: 100%;
  margin: 7rem 2rem;
  @media (min-width: 400px) {
    margin-left: 33rem;
    margin-right: 33rem;
  }
`;
const InnerFormContainer = styled.div`
  background: rgba(255, 255, 255, 0.65);
  display: flex;
  justify-content: center;
  margin: 1rem 2rem;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
`;
const FormTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 700;
`;
const FormInputs1 = styled.input`
  margin-top: 6rem;
  background: rgba(179, 131, 37, 0.5);
  border-radius: 10px;
  border: none;
  padding: 0.5rem;
  font-family: "LoreFont";
  font-size: 0.9rem;
`;
const FormInputs = styled.input`
  margin-top: 1rem;
  background: rgba(179, 131, 37, 0.6);
  border-radius: 10px;
  border: none;
  padding: 0.5rem;
  font-family: "LoreFont";
  font-size: 0.9rem;
`;
const FormFooter = styled.div`
  font-size: 0.7rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTerms = styled.div`
  margin-top: 3rem;
`;
const InputButton = styled.button`
  margin: 1rem 1rem;
  background: #9E2D2D;
  box-shadow: 0px 4px 4px 4px rgba(6, 6, 6, 0.35);
  border-radius: 20px;
  font-family: "LoreFont";
  font-size: 1.15rem;
  color: white;
  padding: 0.5rem;
`;


export default Registration;
