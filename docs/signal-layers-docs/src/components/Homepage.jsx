import { FaGithub } from "react-icons/fa";
export function Homepage(){
    return(
    <>

    {/* Navigation Bar */}
    <div className="h-16 w-full flex flex-row items-center justify-end px-4 py-4 gap-2 bg-gray-300">
        <div className="flex flex-row items-center justify-center gap-6">
            <p className="text-md font-normal cursor-pointer hover:text-gray-500">Docs</p>
            <p className="text-md font-normal cursor-pointer hover:text-gray-500">Components</p>
            <FaGithub className="h-auto w-6 cursor-pointer hover:text-gray-500"/>
        </div>
        
    </div>
    
    {/* Hero Section */}
    <div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center gap-8 bg-gray-300">
        <h1 className="text-4xl font-bold">Signal UI</h1>
        <p className="text-lg">A collection of reusable React components</p>
        {/* Code Block */}
        <div className="bg-black/80 h-20 w-84 rounded-md relative cursor-pointer flex items-center justify-center">
            <div className="h-2 w-2 bg-red-500/50 rounded-full absolute top-1 left-1 hover:bg-red-500"></div>
            <div className="h-2 w-2 bg-yellow-500/50 rounded-full absolute top-1 left-4 hover:bg-yellow-500"></div>
            <div className="h-2 w-2 bg-green-500/50 rounded-full absolute top-1 left-7 hover:bg-green-500"></div>
            <div className="font-mono text-md text-white/90 ">npx signal-layers copy</div>
        </div>
    </div>
    
    {/* Features Section */}
    <div className="min-h-screen min-w-screen p-8 flex flex-col items-center justify-center gap-4 bg-gray-300">
        <div className="grid grid-cols-2 gap-8 w-full px-8 py-8 md:px-16 lg:px-24 xl:px-32 bg-red-500/50">
            <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                <p className="text-xs font-bold uppercase text-center">Card Title</p>
                <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
            </div>
             <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                <p className="text-xs font-bold uppercase text-center">Card Title</p>
                <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
            </div>
             <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                <p className="text-xs font-bold uppercase text-center">Card Title</p>
                <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
            </div>
             <div className="bg-white/50 p-4 rounded-md flex flex-col items-center justify-start gap-2 overflow-hidden">
                <p className="text-xs font-bold uppercase text-center">Card Title</p>
                <p className="text-xs font-light text-center wrap-break-word overflow-hidden">Card Description</p>
            </div>
        </div>
    </div> 

    {/* Footer Section */}
    <div className="h-10 w-full flex flex-row items-center justify-center gap-2">
        <p className="text-xs font-light">2025</p>
        <p className="text-xs font-light">Signal UI</p>
    </div>
    </>
    )
}