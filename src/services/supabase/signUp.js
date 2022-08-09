import supabase from "../../config/supabase"

const signUp = async (email, password) =>
  await supabase.auth.signUp({
    email,
    password
  })

export default signUp
