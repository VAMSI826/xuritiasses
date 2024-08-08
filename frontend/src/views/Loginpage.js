import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";

function Loginpage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      password: data.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        userInfo
      );
      if (response.data) {
        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <Toaster />
      <section className="vh-100" style={{ backgroundColor: "#dde0e4" }}>
        <div className="container py-4 h-100 mt-3">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://img.freepik.com/free-vector/login-concept-illustration_114360-757.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            />
                            <span className="h2 fw-bold mb-0">
                              Welcome back 👋
                            </span>
                          </div>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-2">
                          <input
                            type="name"
                            id="username"
                            className="form-control form-control-lg"
                            placeholder=" username"
                            {...register("username", { required: true })}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Username
                          </label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            {...register("password", { required: true })}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-2">
                          <button
                            className="btn btn-info btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/register" style={{ color: "#393f81" }}>
                            Register Now
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </div>
  );
}

export default Loginpage;
