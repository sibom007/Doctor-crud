import { useEffect, useState } from "react";
import Servisescard from "./Servisescard";


const Servises = () => {


    const [Services,setServices] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))

    },[])



    return (
        <div className="mt-8">
            <div className="text-center space-y-2"> 
                <h1 className=" text-2xl text-red-500 font-bold">Service</h1>
                <h3 className=" text-5xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Services.map(Service => <Servisescard key={Service._id} Service={Service}/>)
                }
            </div>
        </div>
    );
};

export default Servises;