import { stringify } from "querystring";
import PrimaryButton from "../../components/PrimaryButton";
import { ChangeEvent, FormEvent, useState } from "react";
import "./Signup.css"

const Signup = () => {
  const initialValues = { username: "", mailadress: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
    // console.log(formValues);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //サインアップ情報を送信する
    //バリデーションチェック
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values: { username: any; mailadress: any; password?: string; }) => {
    const errors = { username: "", mailadress: "", password: ""};;
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if(!values.username) {
      errors.username = "ユーザー名を入力してください";
    }

    if(!values.mailadress) {
      errors.mailadress = "メールアドレスを入力してください";
    } else if(!regex.test(values.mailadress)) {
      errors.mailadress = "正しいメールアドレスを入力してください"
    }

    if(!values.password) {
      errors.password = "パスワードを入力してください";
    } else if(values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if(values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }

    return errors;
  };

  return (
    <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign Up</h1>
          <hr/>
          <div className="uiForm">
            <div className="formField">
              <label htmlFor="username_id">ユーザー名</label>
              <input type="text" name="username" id="username_id" placeholder="ユーザー名" onChange={(e) => handleChange(e)}></input>
            </div>
            <p className="errorMsg">{formErrors.username}</p>
            <div className="formField">
              <label htmlFor="mailadress_id">メールアドレス</label>
              <input type="text" name="mailadress" id="mailadress_id" placeholder="メールアドレス" onChange={(e) => handleChange(e)}></input>
            </div>
            <p className="errorMsg">{formErrors.mailadress}</p>
            <div className="formField">
              <label htmlFor="password_id">パスワード</label>
              <input type="text" name="password" id="password_id" placeholder="パスワード" onChange={(e) => handleChange(e)}></input>
            </div>
            <p className="errorMsg">{formErrors.password}</p>
            <button className="submitButton">送信</button>
            {/* {Object.keys(formErrors).length === 0 && isSubmit && (
              <div className="msgOk">サインアップに成功しました</div>
            )} */}
          </div>
        </form>
    </div>
  );
};

export default Signup;

