import { Link, useNavigate } from 'react-router-dom';
import photo from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../provider/Authprovider';
import { useLocation } from "react-router-dom"
import Sacial from '../Shaerd/Shacial/Sacial';

const Login = () => {

    const { Signin } = useContext(Authcontext);
    const location = useLocation();
    const Navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handlersubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value

        Signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-5">
                    <img src={photo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handlersubmit} >
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <h1>create new accound <Link className='text-red-500' to={'/Signup'}>Sign up</Link> </h1>

                    </div>
                    <Sacial />
                </div>
            </div>
        </div>
    );
};

export default Login;