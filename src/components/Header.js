import React from 'react';
import { Link } from 'react-scroll';

const Header = () => (
    <header className="bg-green-800 text-white py-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">Vertical Hydroponics Farm</h1>
            <nav className="flex space-x-4">
                <Link
                    to="features"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white cursor-pointer"
                >
                    Features
                </Link>
                <Link
                    to="how-it-works"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white cursor-pointer"
                >
                    How It Works
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white cursor-pointer"
                >
                    Contact
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;
