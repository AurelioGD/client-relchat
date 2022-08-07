import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../consts/routes"
import signIn from "../../services/supabase/signIn"
import CardFormProvider from "../../components/layout/providers/CardFormProvider"
import InputCommon from "../../components/common/InputCommon"

const Login = () => {
  const navigate = useNavigate()

  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    if (!loginFormState.email || !loginFormState.password) return
    const { email, password } = loginFormState

    const { user, error } = await signIn(email, password)

    if (user && !error) {
      navigate(ROUTES.PUBLIC_CHATS, { replace: true })
    }
  }

  return (
    <CardFormProvider
      onSubmit={handleSubmit}
      title="Login"
      buttonLabel="Enter"
      legendConfig={{
        legendText: "Don't have an account?",
        legendUrlText: "Sign up",
        legendUrl: "www.google.com",
      }}
      containerStyle={{
        margin: "5rem auto 0 auto",
      }}
    >
      <InputCommon
        value={loginFormState?.email}
        onChange={handleChange}
        name="email"
        iconName="user"
        placeholder="type your email"
        containerStyle={{ margin: "4rem 0 0.5rem 0" }}
      />
      <InputCommon
        value={loginFormState?.password}
        onChange={handleChange}
        name="password"
        iconName="padlock"
        placeholder="type your password"
        type="password"
        containerStyle={{ margin: "0.5rem 0 4rem 0" }}
      />
    </CardFormProvider>
  )
}

export default Login
