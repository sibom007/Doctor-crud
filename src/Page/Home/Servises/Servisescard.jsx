import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Servisescard = ({ Service }) => {

    const { _id,title, price, img } = Service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p className="text-red-600 text-3xl"> ${price}</p>
                <div className="card-actions">
                  <Link to={`/services/${_id}`}><button className="btn btn-error"><FaArrowRight className="text-red-500" /></button></Link>  
                </div>
            </div>
        </div>
    );
};

export default Servisescard;