import { FaGithub } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";
import logo from '../../../assets/signaluilogo.png';

export function DocsNavbar() {
    const { toggleSidebar } = useSidebar();
    return (
        <div className="h-16 w-full flex flex-row items-center justify-between px-4 py-4 gap-2 bg-white relative z-50">
            
            <div className="flex flex-row items-center gap-4">
                
                <button
                    onClick={() => toggleSidebar()}
                    className="lg:hidden p-2 mt-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                        <CiMenuBurger className="h-8 w-8 text-black" />
                </button>

                <Link to="/" className="text-lg font-normal cursor-pointer hover:text-gray-600 text-black lg:fixed">
                    <img src={logo} alt="Signal UI Logo" className="w-32 h-auto" />
                </Link>
            </div>

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