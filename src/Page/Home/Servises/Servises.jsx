import { useEffect, useRef, useState } from "react";
import Servisescard from "./Servisescard";


const Servises = () => {


    const [Services, setServices] = useState([])
    const [asc, setasc] = useState(true)
    // const searchRef = useRef()
    // const [Search, setSearch] = useState('')


    useEffect(() => {
        fetch(` https://doctor-curd-server-sibom007.vercel.app/services?sort=${asc ? "asc" : "desc"}`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [asc,])

//     const handlerserch = () => {
// setSearch(searchRef.current.value)
// console.log(Search);

//     }

    // https://doctor-curd-server-sibom007.vercel.app/services

    return (
        <div className="mt-8">
            <div className="text-center space-y-2">
                <h1 className=" text-2xl text-red-500 font-bold">Service</h1>
                <h3 className=" text-5xl font-bold">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                {/* <div className="form-control">
                    <div className="input-group">
                        <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handlerserch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div> */}
                <button className="btn" onClick={() => setasc(!asc)}>{asc ? "price : asd" : "price : dsec"}</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Services.map(Service => <Servisescard key={Service._id} Service={Service} />)
                }
            </div>
        </div>
    );
};

export default Servises;