import faq from '/FAQ.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const FAQ = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="600" className='w-11/12 m-auto'>
            <div className='mt-2 md:mt-4 lg:mt-8 flex flex-col md:flex-row gap-4 justify-between'>
                <img src={faq} alt="faq image" className='w-full md:w-1/3 ' />
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-sm md:text-lg lg:text-xl font-medium">
                            What types of properties does EchoHaven Reality specialize in?
                        </div>
                        <div className="collapse-content">
                            <p>EchoHaven Reality specializes in a wide range of properties, including residential homes, apartments, condominiums, commercial properties, and vacant land.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-sm md:text-lg lg:text-xl font-medium">
                            How can I search for properties on EchoHaven Reality's website?
                        </div>
                        <div className="collapse-content">
                            <p>You can easily search for properties on our website by using the search bar or filters to specify your preferences, such as location, property type, price range, number of bedrooms, and more.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-sm md:text-lg lg:text-xl font-medium">
                            Does EchoHaven Reality provide assistance for first-time homebuyers?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer specialized assistance for first-time homebuyers, including guidance on the home buying process, mortgage options, and finding properties that meet your needs and budget.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;