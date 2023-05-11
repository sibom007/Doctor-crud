
import { Outlet } from 'react-router-dom';
import Navber from '../Page/Shaerd/Navber/Navber';
import Footer from '../Page/Shaerd/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;