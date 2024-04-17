import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="py-8">
            <Helmet>
                <title>EchoHaven Realty | About</title>
            </Helmet>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">Welcome to EchoHaven Reality, your premier destination for all your real estate needs. At EchoHaven, we are committed to providing exceptional service and expertise to our clients, whether you're buying, selling, or renting property.</p>

                <h3 className="text-2xl font-bold my-4 text-center">Our Mission</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">Our mission is to help our clients achieve their real estate goals with integrity, professionalism, and personalized attention. We strive to exceed expectations and build long-lasting relationships based on trust and mutual respect.</p>

                <h3 className="text-2xl font-bold my-4 text-center">Why Choose Us?</h3>
                <div className="flex flex-col md:flex-row gap-4 mb-2 items-center">
                    <img src="https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=" alt="" className="w-full md:w-1/2" />
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">With years of experience in the real estate industry, the team at EchoHaven Reality possesses in-depth knowledge of the local market and trends. We leverage cutting-edge technology and innovative marketing strategies to ensure maximum exposure for your property.</p>
                </div>

                <h3 className="text-2xl font-bold my-4 text-center">Meet Our Team</h3>
                <div className="flex flex-col md:flex-row gap-4 ">
                    <div>
                        <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg" alt="" className="w-full h-56 object-cover object-center" />
                        <h2 className="text-xl font-bold mt-1  text-center">Mark Henry</h2>
                        <h2 className="text-base mt-1  text-center">Founder</h2>
                    </div>
                    <div>
                        <img src="https://st4.depositphotos.com/12982378/27713/i/450/depositphotos_277138100-stock-photo-cheerful-bearded-man-suit-holding.jpg" alt="" className="w-full h-56 object-cover object-center" />
                        <h2 className="text-xl font-bold mt-1  text-center">Romero</h2>
                        <h2 className="text-base mt-1  text-center">Co-Founder</h2>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/businessman-staring-through-window-close-up_1098-238.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712966400&semt=ais" alt="" className="w-full h-56 object-cover object-center" />
                        <h2 className="text-xl font-bold mt-1  text-center">Jack Paul</h2>
                        <h2 className="text-base mt-1  text-center">CEO</h2>
                    </div>
                </div>

                <p className="text-lg text-gray-800 leading-relaxed mb-6">Our dedicated team of real estate professionals is here to assist you every step of the way. From expert agents to skilled negotiators, we are committed to delivering results that exceed your expectations.</p>

                <h3 className="text-2xl font-bold my-4 text-center">Our Policies</h3>
                <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mb-6">
                    <li>Privacy Policy: We respect your privacy and are committed to protecting your personal information. Our privacy policy outlines how we collect, use, and safeguard your data.</li>
                    <li>Terms & Conditions: By using our services, you agree to abide by our terms and conditions. These terms govern your relationship with EchoHaven Reality and outline your rights and responsibilities.</li>
                    <li>Refund Policy: We strive to provide exceptional service to our clients. If you are not satisfied with our services, please contact us to discuss refund options.</li>
                </ul>

                <h3 className="text-2xl font-bold my-4 text-center">Contact Us</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">Ready to get started? Contact EchoHaven Reality today to learn more about our services and how we can help you achieve your real estate goals.</p>
            </div>
        </div>
    );
};

export default About;