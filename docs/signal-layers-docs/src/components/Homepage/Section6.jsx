import { GoHeartFill } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";
import logoVideo from '../../assets/signaluilogovideo.mp4';
export function Section6() {
    return (
        <div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center gap-12 bg-white">

            <div className="flex flex-row lg:flex-col items-center gap-8">
                <video src={logoVideo} autoPlay loop muted playsInline className="w-20 h-auto lg:w-50 max-w-none object-cover bg-gray-300 rounded-full" />
                <h1 className="text-5xl lg:text-9xl font-bold">Open Source</h1>
            </div>
            
            <div className="text-center space-y-8">
                <p className="text-2xl lg:text-2xl font-light">Copy. Edit. Own.</p>
                <p className="text-lg lg:text-xl font-light text-gray-600 flex items-center gap-2 justify-center"><GoHeartFill className="text-red-500" /> Built With Love.</p>
            </div>

            <div className="flex flex-col items-center gap-8 max-w-4xl">
                <div className="flex items-center gap-3 text-2xl font-light">
                    <VscVscode className="text-blue-600" />
                    <span>VS Code Extension</span>
                </div>
                
                <p className="text-center text-lg font-light text-gray-700">
                    Get instant signal snippets with just a spacebar press inside any component
                </p>

                <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                    <a 
                        href="https://marketplace.visualstudio.com/items?itemName=aryanbatra.signal-ui" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <VscVscode className="text-xl" />
                        <span>VS Code Marketplace</span>
                    </a>
                    
                    <a 
                        href="https://open-vsx.org/extension/aryanbatra/signal-ui" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        <img 
                            src="https://avatars.githubusercontent.com/u/61870837?v=4" 
                            alt="Open VSX" 
                            className="w-5 h-5 rounded"
                        />
                        <span>Open VSX Registry</span>
                    </a>
                </div>
            </div>
        </div>
    );
}