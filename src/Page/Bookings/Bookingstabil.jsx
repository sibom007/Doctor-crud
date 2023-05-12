const Bookingstabil = ({ Booking, handlerdelete,handleBookingupdate }) => {


    const { _id, customerprice, img, customerName, customeremail, customerDate,status } = Booking;
    return (
        <tr className="border">
            <th>
                <button onClick={() => handlerdelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{customeremail}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerprice}
            </td>
            <td>{customerDate}</td>
            <th>
                {
                    status === "confirm" ? <span className="text-3xl font-bold text-green-600">confirmed</span> :
                    <button onClick={() =>handleBookingupdate(_id)} className="btn btn-ghost btn-xs">please confirm </button>}
            </th>
        </tr>
    );
};

export default Bookingstabil;