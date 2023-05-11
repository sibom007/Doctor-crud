import person from '../../../assets/images/about_us/person.jpg'
import Parts from '../../../assets/images/about_us/parts.jpg'

const Sectiontwo = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={Parts} className="w-1/2 absolute right-5 rounded-lg shadow-2xl top-1/2 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h3 className='text-4xl text-red-600 font-bold'>About Us </h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <button className="btn bg-[#FF3811]">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default Sectiontwo;