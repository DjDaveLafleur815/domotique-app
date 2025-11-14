export function useAuthController() {
  const login = async (email, password) => {
    console.log("Login not implemented yet", email, password);
    return true;
  };

  return { login };
}
