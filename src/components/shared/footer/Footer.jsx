import { Link } from 'react-router-dom';
import logo from '/logo.png'
const Footer = () => {
    return (
        <footer className="footer p-10 text-base lg:text-lg text-white mt-4 md:mt-6 lg:mt-12 bg-blue-600">
            <aside>
                <img src={logo} alt="" />
                <p className='text-2xl font-extrabold'>EchoHaven Reality Ltd.</p>
                <p className='text-base font-medium'>Find your Dream Property</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link className="link link-hover" to='/about' >About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;