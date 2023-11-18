import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initailstate = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initailstate);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all fields");
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 200);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        <div className="form-row">
          {!values.isMember && (
            <FormRow
              name="name"
              type={"text"}
              handleChange={handleChange}
              labelText={"name"}
              value={values.name}
            />
          )}
          {/* email field */}
          <FormRow
            name="email"
            type={"email"}
            handleChange={handleChange}
            labelText={"email"}
            value={values.email}
          />
          <FormRow
            name="password"
            type={"password"}
            handleChange={handleChange}
            labelText={"password"}
            value={values.password}
          />
          <button type="sumbit " className="btn btn-block">
            {isLoading ? "loading" : "submit"}
          </button>
        </div>
        <p>
          {" "}
          {values.isMember ? "not a member yet?" : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
