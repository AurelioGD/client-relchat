import supabase from "../../config/supabase"

const signOut = async () => await supabase.auth.signOut()

export default signOut
