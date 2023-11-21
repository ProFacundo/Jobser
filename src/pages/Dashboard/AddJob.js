import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRowSelect, FormRow } from "../../components";
import {
  clearValues,
  createJob,
  handleChange,
} from "../../features/jobs/jobSlice";
import { useEffect } from "react";

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

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("please fill all fields");
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type={"text"}
            name="position"
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
          {/* status */}
          <FormRowSelect
            name={"status"}
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* jop type */}
          <FormRowSelect
            name={"jobType"}
            labelText={"job type"}
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn clear-btn btn-block"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="button"
              className="btn submit-btn btn-block"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
