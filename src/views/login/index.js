import CardFormProvider from "../../components/layout/providers/CardFormProvider"
import InputCommon from "../../components/common/InputCommon"

const Login = () => {
  return (
    <CardFormProvider
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
        name="username"
        iconName="user"
        placeholder="type your username"
        containerStyle={{ margin: "4rem 0 0.5rem 0" }}
      />
      <InputCommon
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
