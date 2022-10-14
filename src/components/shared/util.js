export const validateEmail = (mail) => {
    let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return pattern.test(mail);
}

export const validatePassword = (password) => {
    return (password.length > 7);
}

export const checkPasswordMatch = (password1, password2) => {
    if (password1 === password2) {
        return true;
    } else {
        return false;
    }
}

export const blankCheck = (val) => {
    return (val.length > 0);
}