export const requiredValidation = value => {
  return {
    isValid: !!value,
    message: "Required"
  };
};

export const minimumLengthValidation = minimum => {
  return value => {
    return {
      isValid: value.length >= minimum,
      message: `Must be at least ${minimum} characters`
    };
  };
};

export const maxLengthValidation = max => {
  return value => {
    return {
      isValid: value.length < max,
      message: `Must be less than ${max} characters`
    };
  };
};

export const EmailRegexValidation = email => {
  //stop the complaints eslint its just a regex string
  // eslint-disable-next-line
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return {
    isValid: !!regex,
    message: `Must submit a valid email`
  };
};


// didnt quite finish the logic for making sure passwords matched on the fly
// had a very busy work week 

export const PasswordValidation = (password, confirmedPassword) => {
 
  let doesPasswordMatch = (password.value !== confirmedPassword.value);
  //console.log("does passwordmatch",doesPasswordMatch );
  
  return {
    isValid: !!doesPasswordMatch,
    message: `Passwords needs to match`
  };
};
