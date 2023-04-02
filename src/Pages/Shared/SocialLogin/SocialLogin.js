import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { setAuthToken } from '../../../api/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( async result => {
            const user = result.user;
            console.log(user);
            await setAuthToken(user);
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='flex justify-center mb-5 gap-5'>
            {/* <button className='text-3xl text-sky-700'><FaFacebook /></button> */}
            <button onClick={ handleGoogleSignIn } className='text-3xl text-green-600'><FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;