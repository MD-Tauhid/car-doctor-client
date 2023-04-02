import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(async result => {
                const user = result.user;
                await setAuthToken(user);
                navigate(from, { replace: true });
                
                if (user?.uid) {
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero min-h-screen my-5">
            <div className="hero-content flex-col grid gap-20 md:grid-cols-2 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-4/5' src={img} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 pb-10">
                    <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <h2 className='text-center mb-4'>Social Login</h2>
                    <SocialLogin></SocialLogin>
                    <div>
                        <p className='text-center'>New to car doctor? <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;