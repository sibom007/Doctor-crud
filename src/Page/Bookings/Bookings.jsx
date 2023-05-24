import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/Authprovider";
import Bookingstabil from "./Bookingstabil";
import { useNavigate } from "react-router-dom";




const Bookings = () => {


    const { user } = useContext(Authcontext)
    const [Bookings, setBookings] = useState([])
    const Navigate =useNavigate()

    const url = `https://doctor-curd-server-sibom007.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url,{

            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {

                if (!data.error) {
                    setBookings(data)
                }
                else{
                    Navigate('/')
                }
                
            
            }
                )

    }, [url,Navigate])


    const handlerdelete = (id) => {

        const proceed = confirm('Are you sure')

        if (proceed) {
            fetch(`https://doctor-curd-server-sibom007.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert("delete seccccccccccc")

                        const remining = Bookings.filter(Bookings => Bookings._id !== id)
                        setBookings(remining)
                    }


                })
        }

    }

    const handleBookingupdate = (id) => {



        fetch(`https://doctor-curd-server-sibom007.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    const remining = Bookings.filter(Bookings => Bookings._id !== id)
                    const Updated = Bookings.find(Booking => Booking._id === id)
                    Updated.status = "confirm"
                    const newbookings = [Updated, ...remining]
                    setBookings(newbookings);
                }


            })
    }






    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>

                {
                    Bookings.map(Booking => <Bookingstabil key={Booking._id} Booking={Booking} handlerdelete={handlerdelete} handleBookingupdate={handleBookingupdate}></Bookingstabil>)
                }
            </table>
        </div>
    );
};

export default Bookings;