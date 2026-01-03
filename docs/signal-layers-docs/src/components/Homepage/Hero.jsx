import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../signal-layers";
import { BTN_SIGNALS } from "./signals";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import logoVideo from '../../assets/signaluilogovideo.mp4';

export function Hero() {
    const [copyCodeToggle, setCopyCodeToggle] = useState(false);
    const [code, setCode] = useState('');
    const text = BTN_SIGNALS;

    const tindex = useRef(0);
    const direction = useRef(1);
    useEffect(() => {
        setTimeout(() => {
            const t = text[tindex.current];
            if (direction.current === 1 && code.length < t.length) {
                setCode(t.slice(0, code.length + 1));
            } else {
                if (direction.current == 1) {
                    direction.current = -1;
                }
                const newLength = code.length - 1;
                setCode(t.slice(0, newLength));
                if (newLength == 0) {
                    tindex.current = (tindex.current + 1) % text.length;
                    direction.current = 1;
                }
            }
        }, (code.length === text[tindex.current].length || code.length == 0) ? 1500 : 50);
    }, [code]);

    const buttonProps = (code) => {
        const signals = code.split(' ').filter(Boolean);
        const props = {};
        signals.forEach(signal => {
            props[signal] = true;
        });
        return props;
    };

    const handleCodeClick = () => {
        navigator.clipboard.writeText("npx signal-layers copy");
        setCopyCodeToggle(true);
        setTimeout(() => setCopyCodeToggle(false), 1500);
    }

    return (
        <div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center gap-6 bg-white">

            <div className="flex flex-row lg:flex-col items-center gap-4">
                <video src={logoVideo} autoPlay loop muted playsInline className="w-20 h-auto lg:w-50 max-w-none object-cover bg-white rounded-full" />
                <h1 className="text-5xl lg:text-9xl font-bold"> Signal UI</h1>
            </div>
            <p className="text-2xl pb-8">Simple. Clean. Intent-driven.</p>

            <div className="pb-12 text-center text-md font-light flex items-center gap-4">
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline-none">
                    <FaReact className="text-blue-500"/>
                    React
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline-none">
                    <RiTailwindCssFill className="text-blue-400"/>
                    Tailwind CSS
                </a>
            </div>

            <div className=" bg-black/80 h-20 w-84 rounded-md relative cursor-pointer flex items-center justify-center" onClick={handleCodeClick}>
                <div className="h-2 w-2 bg-red-500/50 rounded-full absolute top-1 left-1 hover:bg-red-500"></div>
                <div className="h-2 w-2 bg-yellow-500/50 rounded-full absolute top-1 left-4 hover:bg-yellow-500"></div>
                <div className="h-2 w-2 bg-green-500/50 rounded-full absolute top-1 left-7 hover:bg-green-500"></div>
                <div className="font-mono text-lg text-white/90 ">npx signal-layers copy</div>
                {copyCodeToggle && (
                    <>
                        <div className="absolute -top-10 text-white bg-green-600 px-2 py-1 rounded-md font-extralight text-base">Copied!</div>
                        <IoMdArrowDropdown className="absolute -top-4 h-6 w-6 text-green-600" />
                    </>
                )
                }
            </div>
            <div className="flex flex-col items-center justify-around gap-10 mb-8 relative">
                <div className="pt-6">
                    {'<Button '}  
                    {code}
                    <span className={` absolute inline-block w-2 h-5 bg-blue-400 ml-1 animate-pulse`} />
                    <span className="inline-block w-4" />
                    {' />'}
                </div>
                <div>
                    <Link to="/docs">
                        <Button {...buttonProps(code)}>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}