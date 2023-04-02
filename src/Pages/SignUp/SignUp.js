import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/login');
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
                    <h1 className="text-5xl font-bold text-center mt-5">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
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
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <h2 className='text-center mb-4'>Social Login</h2>
                    <SocialLogin></SocialLogin>
                    <div>
                        <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;