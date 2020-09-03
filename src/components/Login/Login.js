import React from "react";
import Auth from "../../global/useAuth";
const Login = () => {
  const auth = Auth();
  console.log(auth.singInUser);
  return (
    <div>
      <h1>Login</h1>
      {auth.singInUser ? (
        <button onClick={auth.signOutGoogle}>Signout</button>
      ) : (
        <button onClick={auth.singInWithGoole}>Login</button>
      )}
    </div>
  );
};
export default Login;
