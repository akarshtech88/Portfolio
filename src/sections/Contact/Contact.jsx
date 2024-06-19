import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import './Contact.css';

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0a7merw",
        "template_xw9svyv",
        form.current,
        "OHWYv_FpOKM66KwXz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text); 
        }
      );
  };

  return (
    <StyledContactForm>
      <h1>contact</h1>
      <div className="form_prnt">
      <form ref={form} onSubmit={sendEmail}>
        <label for="name"></label>
        <input type="text" name="user_name" placeholder="Name"/>
        <label for="email"></label>
        <input type="email" name="user_email" placeholder="Email"/>
        <label for="message"></label>
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" id="btn" />
      </form>
      </div>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    position: relative;
    left: 20rem;
  

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
    #btn{
       width: 130px;
       height: 45px;
       font-size: 1.5rem;
       color: black;
       background-color: white;
       border-radius: 15px;
       position: relative;
       left: 9.45rem;
    } 
}
    h1 {
       margin-left: 27rem;
       position: relative;
       bottom: 2rem; 
       
       
      
    }  
  @media (width >= 800px) and (width <= 1000px) {
      
      .form_prnt {
        position: relative;
        right:5rem;
       

       
       
      
      }
      h1 {
        position: relative;
        right:5.5rem;
      }
  
  
  
  }


  @media (width >= 1100px) and (width <= 1370px){
  
           h1 {
             position: relative;
             right:-1rem;
      }
  }
      


   @media (width >= 900px) and (width <= 1000px) {
  
           h1 {
             position: relative;
             right:3rem;
      }
  }



    @media (width <= 800px) {
         .form_prnt {
             position: relative;
             right:20rem;
       

       
       
      
      }
                h1 {
                  position: relative;
                  right:18rem;
                  top: -0.2rem;
      }

               
                
    }


       
  

    
   
    
  
 
  
  
  
  

`;