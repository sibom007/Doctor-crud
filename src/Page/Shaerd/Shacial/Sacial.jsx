import { useContext } from "react";
import { Authcontext } from "../../../provider/Authprovider";
import { useNavigate } from "react-router-dom";

const Sacial = () => {

    const Navigate =useNavigate()


    const { googlesignin } =useContext(Authcontext)

    const googlehandel =()=>{
        googlesignin()
        .then(result =>{
            console.log(result.user);
           Navigate('/')
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="divider">OR</div>
            <div className='mb-6 text-center'>
                <button onClick={googlehandel} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default Sacial;