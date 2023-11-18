import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("please fill all fields");
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type={"text"}
            name="positon"
            handleChange={handleJobInput}
            value={position}
          />
          {/* company */}
          <FormRow
            type={"text"}
            name="company"
            handleChange={handleJobInput}
            value={company}
          />
          {/* location */}
          <FormRow
            type={"text"}
            name="jobLocation"
            labelText={"job location"}
            handleChange={handleJobInput}
            value={jobLocation}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn clear-btn btn-block"
              onClick={() => console.log("clear")}
            >
              clear
            </button>
            <button
              type="button"
              className="btn submit-btn btn-block"
              onClick={() => console.log("submit")}
              disabled={isLoading}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
