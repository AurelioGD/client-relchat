const REG_VALIDATE_EMAIL = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/

export const isTheStateEmpty = (state = {}) => {
    const values = Object.values(state)
    if(values.length === 0) return true
    
    let isEmpty = false
    values.forEach((value) => {
      if(!value) isEmpty = true
    })
    
    return isEmpty
}

export const AreEqual = (value1, value2) => value1 === value2

export const isEmail = (email = "") => !!email.match(REG_VALIDATE_EMAIL)