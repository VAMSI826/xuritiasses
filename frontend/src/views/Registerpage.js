import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

function Registerpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, username, password, confirmpassword } = data;

    try {
      const response = await axios.post("http://localhost:8000/user/signup", {
        email,
        username,
        password,
        confirmpassword,
      });

      if (response.data) {
        toast.success("Account created successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Toaster />
      <section className="vh-100" style={{ backgroundColor: "#dde0e4" }}>
        <div className="container py-5 h-100 mt-4">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{ borderRadius: "1rem", height: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://img.freepik.com/premium-vector/social-network-concept-3d-illustration-icon-composition-with-mobile-application-interface-with-user-profile-online-communication-chatting-with-friends-vector-illustration-modern-web-design_198565-1670.jpg"
                      alt="register form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
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
                          <span className="h2 fw-bold mb-0">
                            <b>Come and join us</b>
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign Up
                        </h5>
                        <div className="form-outline mb-3">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                            {...register("email", {
                              required: "Email is required",
                            })}
                          />
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            {...register("username", {
                              required: "Username is required",
                            })}
                          />
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            {...register("password", {
                              required: "Password is required",
                            })}
                          />
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            id="confirmpassword"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            {...register("confirmpassword", {
                              required: "Please confirm your password",
                            })}
                          />
                        </div>
                        <div className="pt-1 mb-3">
                          <button
                            className="btn btn-info btn-lg btn-block"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="" style={{ color: "#393f81" }}>
                          Already have an account?{" "}
                          <Link to="/" style={{ color: "#393f81" }}>
                            Login Now
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

export default Registerpage;
