const useAuth = () => {
  const user = useState("user", () => null);
  const { supabase } = useSupabase();
  const router = useRouter()

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });

  const signUp = async ({ email, password, ...metadata }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
        emailRedirectTo: `${window.location.origin}/profile`,
      }
    });
    if (error) throw error;
    return data;
  };

  const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email, password
    });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push('/')
  };
  
  const isLoggedIn = () => {
    return !!user.value;
  };

  return { user, signUp, signIn, signOut, isLoggedIn };
};

export default useAuth;
