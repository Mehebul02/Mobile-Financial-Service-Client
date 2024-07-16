
const Register = () => {
    return (
        <div className="hero bg-primaryColor min-h-screen">
        <div className="flex justify-center items-center lg:w-[700px] h-full">
          <div className="card border shrink-0 shadow-2xl min-w-[300px] w-full min-h-[400px] h-auto">
            <form className="card-body">
                <h1 className="text-3xl text-lightText font-bodyFont font-semibold">Register</h1>
                <h4 className="text-xl text-gray-400 font-bodyFont ">Create a new account</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lightText font-bodyFont font-semibold">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered mx" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lightText font-bodyFont font-semibold">PIN (5-digit number)
                  </span>
                </label>
                <input type="password" placeholder="Pin" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lightText font-bodyFont font-semibold">Mobile Number</span>
                </label>
                <input type="password" placeholder="Mobile Number" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lightText font-bodyFont font-semibold">Email</span>
                </label>
                <input type="password" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-lightText font-bodyFont font-semibold">Registration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
       
    );
};

export default Register;