import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../consts/routes"
import CardFormProvider from "../../components/layout/providers/CardFormProvider"
import InputCommon from "../../components/common/InputCommon"
import { AreEqual, isEmail, isTheStateEmpty } from "../../utils/formValidations"
import createUser from "../../services/users/createUser"
import signUp from "../../services/supabase/signUp"

const Signup = () => {
  const navigate = useNavigate()

  const [signupFormState, setSignupFormState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSignupFormState({
      ...signupFormState,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    if (isTheStateEmpty(signupFormState)) return

    const { name, username, email, password, passwordAgain } = signupFormState

    if (!AreEqual(password, passwordAgain)) return

    if(!isEmail(email)) return
    
    try {
      const { user, session, error } = await signUp(email, password)
    
      if (user && !error) {
        const response = await createUser({name, username, email})
  
        if(!response.error){
          navigate(ROUTES.LOGIN, { replace: true })
        }
      }
    } catch (error) {
        console.error("Error: ", error)
    }
  }

  return (
    <CardFormProvider
      onSubmit={handleSubmit}
      title="Create an account"
      buttonLabel="Sign up"
      legendConfig={{
        legendText: "You have an account?",
        legendUrlText: "Log in",
        legendUrl: "../login",
      }}
      containerStyle={{
        margin: "5rem auto 0 auto",
      }}
    >
      <InputCommon
        value={signupFormState?.name}
        onChange={handleChange}
        name="name"
        iconName="cardProfile"
        placeholder="type your name"
        containerStyle={{ margin: "1rem 0 0.5rem 0" }}
      />
      <InputCommon
        value={signupFormState?.username}
        onChange={handleChange}
        name="username"
        iconName="user"
        placeholder="type your username"
        containerStyle={{ margin: "0.5rem 0 0.5rem 0" }}
      />
      <InputCommon
        value={signupFormState?.email}
        onChange={handleChange}
        name="email"
        iconName="email"
        placeholder="type your email"
        containerStyle={{ margin: "0.5rem 0 0.5rem 0" }}
      />
      <InputCommon
        value={signupFormState?.password}
        onChange={handleChange}
        name="password"
        iconName="padlock"
        placeholder="type your password"
        type="password"
        containerStyle={{ margin: "0.5rem 0 0.5rem 0" }}
      />
      <InputCommon
        value={signupFormState?.passwordAgain}
        onChange={handleChange}
        name="passwordAgain"
        iconName="padlock"
        placeholder="type it again"
        type="password"
        containerStyle={{ margin: "0.5rem 0 1rem 0" }}
      />
    </CardFormProvider>
  )
}

export default Signup
