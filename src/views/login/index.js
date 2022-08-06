import CardFormProvider from "../../components/layout/providers/CardFormProvider"
import InputCommon from "../../components/common/InputCommon"

const Login = () => {
  return (
    <CardFormProvider legendConfig={{
      legendText:"Don't have an account?", 
      legendUrlText:"Sign up",
      legendUrl:"www.google.com"
    }}>
        <InputCommon iconName="user"/>
        <InputCommon iconName="user"/>
    </CardFormProvider>
  )
}

export default Login