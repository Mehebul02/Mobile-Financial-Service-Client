import useAxiosCommon from "../../hooks/useAxiosCommon";

const Register = () => {
  const axiosCommon = useAxiosCommon();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pin = form.pin.value;
    const mobileNumber = form.mobileNumber.value;
    const email = form.email.value;
    // console.log(name,pin,mobileNumber,email);
    const formData = {
      name,
      pin,
      mobileNumber,
      email,
    };
    // form validation
    if (!name || !pin || !mobileNumber || !email) {
      console.log("Please fill in all fields");
      return;
    }
    if (pin.length !== 5 || isNaN(pin)) {
      console.log("PIN must be a 5-digit number");
      return;
    }

    try {
      axiosCommon.post("/users", formData);
    } catch (err) {
      console.log(err);
    }
  };

  // সার্ভারে ডেটা প্রেরণের জন্য প্রস্তুততা
  //   const formData = { name, pin, mobileNumber, email };

  //   try {
  //     const response = await fetch('/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Registration failed');
  //     }

  //     const data = await response.json();
  //     console.log('Registration successful:', data.message);
  //   } catch (error) {
  //     console.error('Error during registration:', error.message);
  //   }
  // };
  return (
    <div className="hero bg-primaryColor min-h-screen">
      <div className="flex justify-center items-center lg:w-[700px] h-full">
        <div className="card border shrink-0 shadow-2xl min-w-[300px] w-full min-h-[400px] h-auto">
          <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-3xl text-lightText font-bodyFont font-semibold">
              Register
            </h1>
            <h4 className="text-xl text-gray-400 font-bodyFont ">
              Create a new account
            </h4>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lightText font-bodyFont font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered mx"
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
            </div>
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
            <div className="form-control mt-6 ">
              <button className="bg-[#1f68d5] py-3 rounded-lg text-xl text-lightText font-bodyFont font-semibold">
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
