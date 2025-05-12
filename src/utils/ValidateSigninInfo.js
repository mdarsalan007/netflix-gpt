import React from 'react'

const ValidateSigninInfo = (email,password) => {

const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const validPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password);

if(!validEmail) return "Please Enter a Valid Email Address."
if(!validPassword) return "Your password must contain an uppercase, a lowercase, a number and a special symbol."

return null;
}

export default ValidateSigninInfo;
