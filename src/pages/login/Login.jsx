import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Login = () => {
    const [error,setError]=useState('')
    const axiosCommon = useAxiosCommon();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const pin = form.pin.value;
      const mobileNumber = form.mobileNumber.value;
      const email = form.email.value;
      // console.log(name,pin,mobileNumber,email);
      const formData = {
        pin,
        mobileNumber,
        email,
        
      };
      // form validation
      if (!pin || !mobileNumber || !email) {
        console.log("Please fill in all fields");
        return;
      }
      if (pin.length !== 5 || isNaN(pin)) {
        console.log("PIN must be a 5-digit number");
        setError("PIN must be a 5-digit number")
        return;
      }
      try {
        axiosCommon.post("/login", formData);
      } catch (err) {
        console.log(err);
      }
      
    };
    return (
        <div className="hero bg-primaryColor min-h-screen ">
      <div className="flex justify-center items-center lg:w-[700px] h-full ">
        <div className="card border shrink-0 shadow-2xl min-w-[300px] w-full min-h-[400px] h-auto">
          <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-lightText font-bodyFont font-semibold ">
              Please Login
            </h1>
            {/* <h4 className="text-xl text-gray-400 font-bodyFont ">
              Create a new account
            </h4> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lightText font-bodyFont font-semibold">
                  Mobile Number
                </span>
              </label>
              <input
                type="number"
                name="mobileNumber"
                placeholder="Mobile Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lightText font-bodyFont font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lightText font-bodyFont font-semibold">
                  PIN (5-digit number)
                </span>
              </label>
              <input
                type="password"
                name="pin"
                placeholder="Pin"
                className="input input-bordered"
                required
              />
           <span className="text-red-700">{error}</span>
            </div>
            
            
            <div className="form-control mt-6 ">
              <button className="bg-[#1f68d5] py-3 rounded-lg text-xl text-lightText font-bodyFont font-semibold">
               Login
              </button>
            </div>
          <h1 className="text-white text-center p-2">Don't have an Account ? <Link to='/register' className="btn-link text-blue-700 font-bodyFont font-semibold">Register</Link> </h1>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;