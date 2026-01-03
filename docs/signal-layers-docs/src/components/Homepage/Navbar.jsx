import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/signaluilogo.png';

export function Navbar(){
    return (
        <div className="h-16 w-full flex flex-row items-center justify-between px-4 py-4 gap-2 bg-white">
             <Link to="/" className="text-lg font-normal cursor-pointer hover:text-gray-600 text-black">
                <img src={logo} alt="Signal UI Logo" className="w-36 h-auto" />
             </Link>
            <div className="flex flex-row items-center justify-center gap-6">
                <Link to="/docs" className="text-lg font-normal cursor-pointer hover:text-gray-600 text-black">Docs</Link>
                <Link to="/docs/components" className="text-lg font-normal cursor-pointer hover:text-gray-600 text-black">Components</Link>
                <a href="https://github.com/aryanbatras/minimalist-ui" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-auto w-6 cursor-pointer hover:text-gray-600 text-black"/>
                </a>
            </div>
        </div>
    );
}