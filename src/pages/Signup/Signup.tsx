import PrimaryButton from "../../components/PrimaryButton";
import "./Signup.css"

const Signup = () => {
  return (
    <body>
      <div className="signup-box">
        <h1>Sign Up</h1>
        <h4>It's free and only takes a minute</h4>
        <form>
          <label htmlFor="firstname_id">First Name</label>
          <input type="text" name="firstname" id="firstname_id" placeholder=""></input>
          <label htmlFor="lastname_id">Last Name</label>
          <input type="text" name="lastname" id="lastname_id" placeholder=""></input>
          <label htmlFor="email_id">Email</label>
          <input type="email" name="email" id="email_id" placeholder=""></input>
          <label htmlFor="password_id">PassWord</label>
          <input type="password" name="password" id="password_id" placeholder=""></input>
          <label htmlFor="confirmpassword_id">Confirm PassWord</label>
          <input type="password" name="confirmpassword" id="confirmpassword_id" placeholder=""></input>
          <button type = "submit" name="submitbutton">Submit</button>
        </form>
        <p className="para1">
          By clicking the Sign Up button, you agree to our <br></br>
          <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        </p>
      </div>
        <p className="para2">
          Already have an account? <a href="#">Login here</a>
        </p>
    </body>
  );
};

export default Signup;
