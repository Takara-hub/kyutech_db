import PrimaryButton from "../../components/PrimaryButton";

const Login = () => {
  return (
    <div>
      <h2>
      Login Form.
      </h2>
      <div>
        <p>Enter your username and password.</p>
      </div>
      <div>
        <p>username<input type="text" /></p><p>password<input type="text" /></p>
      </div>
      <PrimaryButton></PrimaryButton>
    </div>
  );
};

export default Login;
