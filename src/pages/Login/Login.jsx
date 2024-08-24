import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleLogin} className="card-body text-center p-20 border bg-white">
                    <h1 className="text-4xl font-semibold">Login your account</h1>
                    <hr className="border-solid bg-[#E7E7E7] my-12" />
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
                            <button className="btn bg-[#403F3F] text-white">Login</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>Do not have an account? <Link to='/register' className="text-red-600">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;