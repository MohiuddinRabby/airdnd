import React from "react";
import Auth from "../../global/useAuth";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const auth = Auth();
  // console.log(auth.singInUser);
  const handleSingIn = () => {
    auth.singInWithGoole().then((res) => {
      //to go the url where it came from with :slug
      history.goBack();
    });
  };
  const handleSingInFacebook = () => {
    alert(
      "use Signin with Google for now. Signin with Facebook on progress..."
    );
  };
  return (
    <div className="container text-center py-5">
      <h1 className="text-danger">SignIn Here</h1>
      {auth.singInUser ? (
        <button onClick={auth.signOutGoogle}>Signout</button>
      ) : (
        <div className="card">
          <div className="card-body">
            <button
              onClick={handleSingIn}
              className="btn btn-outline-primary btn-sm"
            >
              <i className="fab fa-google"></i> Signin with Google
            </button>
            <br />
            <br />
            <button
              onClick={handleSingInFacebook}
              className="btn btn-outline-primary btn-sm"
            >
              <i className="fab fa-facebook"></i> Signin with Facebook
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
