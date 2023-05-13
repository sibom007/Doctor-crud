import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";


const Checkout = () => {



    const services = useLoaderData();

    const { _id, title, price, img } = services;


    const { user } = useContext(Authcontext)




    const handlersubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Date = form.Date.value;
        const email = user?.email;
        const price = form.price.value;

        const Booking = {

            customerName: name,
            customerDate: Date,
            customeremail: email,
            customerprice: price,
            services: _id,
            img: img
        }

        console.log(Booking);

        fetch('https://doctor-curd-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }




    return (
        <div>
            <h1>hello{title}</h1>
            <form onSubmit={handlersubmit} className=" p-5 mt-7 mb-7 rounded border-gray-300 border-4 bg-slate-200">
                {/* form row */}
                <div className='md:flex'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={user?.name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name='Date' className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>
                <div className='md:flex mb-10'>
                    <div className="form-control w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={'$ ' + price} className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <input className="btn btn-block mb-32" type="submit" value="updat card" />
            </form>
        </div>


    );
};

export default Checkout;