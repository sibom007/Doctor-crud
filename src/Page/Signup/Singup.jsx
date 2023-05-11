import { Link } from 'react-router-dom';
import photo from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../provider/Authprovider';

const Singup = () => {

    const { createuser } =useContext(Authcontext);

    const handlersignup = (event) => {


        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        createuser(email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);
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
                        <h1 className="text-3xl font-bold">Sign up now!</h1>
                        <form onSubmit={handlersignup} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <h1>create new accound <Link to={'/Login'} className='text-red-500'>Login</Link> </h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;