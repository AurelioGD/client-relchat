import supabase from "../../config/supabase"

const signIn = async (email, password) =>
  await supabase.auth.signIn({
    email,
    password,
  })
  
export default signIn
