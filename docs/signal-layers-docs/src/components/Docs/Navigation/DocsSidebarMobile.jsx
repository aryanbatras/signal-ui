import {Button} from "../../signal-layers"
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";
import { docsSections } from "./DocsData";
import logo from '../../../assets/signaluilogo.png';

export function DocsSidebarMobile(){
    const { closeSidebar, toggleSidebar } = useSidebar();
    return (
        <div 
            className="bg-white h-screen w-screen z-50 flex flex-col gap-2 p-16 overflow-y-auto fixed left-0 top-0 "
        >
            <div className="flex flex-row items-center justify-between">

                <Link to="/" className="text-lg font-normal cursor-pointer hover:text-gray-600 text-black">
                   <img src={logo} alt="Signal UI Logo" className="h-10 w-32 px-2 object-cover" />
                </Link>

                  <button className="self-end p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    <RxCross1 className="h-7 w-6 text-black" onClick={() => closeSidebar()} />
                  </button>

            </div>
          
            <div className="text-xl font-light m-5">Start here</div>
            <div className="flex flex-col gap-3">
                {docsSections[0].map((section) => (
                    <Link key={section.id} to={section.route} onClick={() => {window.scrollTo(0, 0); toggleSidebar()}} className="cursor-pointer">
                        <Button ghost lg > 
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </div>

            <div className="text-xl font-light m-5">Foundational Components</div>
            <div className="flex flex-col gap-3">
                {docsSections[1].map((section) => (
                    <Link key={section.id} to={section.route} onClick={() => {window.scrollTo(0, 0); toggleSidebar()}} className="cursor-pointer">
                        <Button ghost lg> 
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </div>

            <div className="text-xl font-light m-5">Advanced</div>
            <div className="flex flex-col gap-3">
                {docsSections[2].map((section) => (
                    <Link key={section.id} to={section.route} onClick={() => {window.scrollTo(0, 0); toggleSidebar()}} className="cursor-pointer">
                        <Button ghost lg> 
                            {section.title}
                        </Button>
                    </Link>
                ))}
            </div>

        </div>
    );
}