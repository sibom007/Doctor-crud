import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-[600px] rounded-xl" />
                <div className="absolute h-full items-center flex left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-16">
                    <div>
                        <h1 className='text-6xl text-white font-bold mb-10'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white font-bold mt-4'>There are many variations of passages of <br />  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mt-5 mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4 hover:bg-blue-600 bg-blue-300">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-blue-600 bg-blue-300">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[600px] rounded-xl" />
                <div className="absolute h-full items-center flex left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-16">
                    <div>
                        <h1 className='text-6xl text-white font-bold mb-10'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white font-bold mt-4'>There are many variations of passages of <br />  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mt-5 mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4 hover:bg-blue-600 bg-blue-300">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-blue-600 bg-blue-300">❯</a>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-[600px] rounded-xl" />
                <div className="absolute h-full items-center flex left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-16">
                    <div>
                        <h1 className='text-6xl text-white font-bold mb-10'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white font-bold mt-4'>There are many variations of passages of <br />  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mt-5 mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4 hover:bg-blue-600 bg-blue-300">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-blue-600 bg-blue-300">❯</a>
                </div>
            </div>


            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-[600px] rounded-xl" />
                <div className="absolute h-full items-center flex left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-16">
                    <div>
                        <h1 className='text-6xl text-white font-bold mb-10'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white font-bold mt-4'>There are many variations of passages of <br />  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mt-5 mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4 hover:bg-blue-600 bg-blue-300">❮</a>
                    <a href="#slide5" className="btn btn-circle hover:bg-blue-600 bg-blue-300">❯</a>
                </div>
            </div>


            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full h-[600px] rounded-xl" />
                <div className="absolute h-full items-center flex left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-16">
                    <div>
                        <h1 className='text-6xl text-white font-bold mb-10'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white font-bold mt-4'>There are many variations of passages of <br />  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mt-5 mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4 hover:bg-blue-600 bg-blue-300">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-blue-600 bg-blue-300">❯</a>
                </div>
            </div>


            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full h-[600px] rounded-xl" />
                <div className="absolute h-full items-center flex left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] pl-16">
                    <div>
                        <h1 className='text-6xl text-white font-bold mb-10'>Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className='text-white font-bold mt-4'>There are many variations of passages of <br />  available, but the majority have suffered alteration in some form</p>

                        <div>
                            <button className="btn btn-warning mt-5 mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-4 hover:bg-blue-600 bg-blue-300">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-blue-600 bg-blue-300">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;