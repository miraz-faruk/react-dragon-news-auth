import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }

    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleRegister} className="card-body text-center p-20 border bg-white">
                    <h1 className="text-4xl font-semibold">Register your account</h1>
                    <hr className="border-solid bg-[#E7E7E7] my-12" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#403F3F] font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#403F3F] font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#403F3F] font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#403F3F] font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input bg-[#F3F3F3]" required />
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white">Register</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>Already have an account? please <Link to='/login' className="text-red-600">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;