import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MagnifyingCursor } from "./MagnifyingCursor";
import { useState, useEffect, useRef } from "react";
import { Button } from "./signal-layers";
export function Homepage(){

    const [code, setCode] = useState('');
   
   
const text = [
    'ripple cta size2xl uppercase hoverGlow',
    'danger pill animateBounce',
    'primary lg rounded hoverEnlarge',
    'success square animatePulse',
    'link text2xl hoverGlow semibold',
    'ghost circle hoverSpin transitionSlow',
    'warning sizeXl bold hoverRotate activeExplode',
    'secondary neumorphism hoverFade uppercase',
    'outline pill hoverScale animateBounce',
    'primary roundedFull hoverLift ripple',
    'danger square hoverSpin activeShrink',
    'success lg animatePulse hoverEnlarge',
    'ghost size2xl transitionSlow hoverRotate',
    'cta bold uppercase hoverGlow activeExplode',
    'warning pill hoverBounce animateSpin',
    'secondary square hoverFade light',
    'outline circle hoverScale ripple',
    'primary neumorphism lg hoverLift',
    'danger size2xl animateBounce uppercase',
    'success rounded hoverGlow activeRipple'
];
   
    const tindex = useRef(0);
    const direction = useRef(1);
    useEffect(() => {
        setTimeout(() => {
            const t = text[tindex.current];
            if(direction.current === 1 && code.length < t.length){
                setCode(t.slice(0, code.length + 1));
            } else{
                if(direction.current == 1) {
                    direction.current = -1;
                }
                const newLength = code.length - 1;
                setCode(t.slice(0, newLength));
                if(newLength == 0){  
                    tindex.current = (tindex.current + 1) % text.length;
                    direction.current = 1;
                }
            }   
        }, (code.length === text[tindex.current].length || code.length == 0) ? 2000 : 100);
    }, [code]);

const buttonProps = {
    // Colors
    primary: code.includes('primary'),
    secondary: code.includes('secondary'),
    danger: code.includes('danger'),
    warning: code.includes('warning'),
    success: code.includes('success'),
    cta: code.includes('cta'),
    ghost: code.includes('ghost'),
    outline: code.includes('outline'),
    link: code.includes('link'),
    neumorphism: code.includes('neumorphism'),
    
    // Sizes
    sizeXs: code.includes('sizeXs'),
    sizeSm: code.includes('sizeSm'),
    sizeMd: code.includes('sizeMd'),
    sizeLg: code.includes('sizeLg'),
    sizeXl: code.includes('sizeXl'),
    size2xl: code.includes('size2xl'),
    
    // Shapes
    rounded: code.includes('rounded'),
    square: code.includes('square'),
    pill: code.includes('pill'),
    circle: code.includes('circle'),
    
    // Text
    uppercase: code.includes('uppercase'),
    lowercase: code.includes('lowercase'),
    bold: code.includes('bold'),
    semibold: code.includes('semibold'),
    light: code.includes('light'),
    thin: code.includes('thin'),
    
    // Interactions
    hoverGlow: code.includes('hoverGlow'),
    hoverEnlarge: code.includes('hoverEnlarge'),
    hoverScale: code.includes('hoverScale'),
    hoverRotate: code.includes('hoverRotate'),
    hoverBounce: code.includes('hoverBounce'),
    hoverSpin: code.includes('hoverSpin'),
    
    // Active states
    activeRipple: code.includes('activeRipple'),
    activeExplode: code.includes('activeExplode'),
    activeShrink: code.includes('activeShrink'),
    
    // Animations
    animatePulse: code.includes('animatePulse'),
    animateBounce: code.includes('animateBounce'),
    animateSpin: code.includes('animateSpin'),
    
    // Special
    ripple: code.includes('ripple'),
    transitionSlow: code.includes('transitionSlow')
};





    
    const [copyCodeToggle, setCopyCodeToggle] = useState(false);
    const handleCodeClick = () => {
        navigator.clipboard.writeText("npx signal-layers copy");
        setCopyCodeToggle(true);
        setTimeout(() => setCopyCodeToggle(false), 1500);
    }
    return(
    <>

        <MagnifyingCursor/>

        {/* Navigation Bar */}
        <div className="h-16 w-full flex flex-row items-center justify-end px-4 py-4 gap-2 bg-gray-300">
            <div className="flex flex-row items-center justify-center gap-6">
                <p className="text-md font-normal cursor-pointer hover:text-gray-500">Docs</p>
                <p className="text-md font-normal cursor-pointer hover:text-gray-500">Components</p>
                <FaGithub className="h-auto w-6 cursor-pointer hover:text-gray-500"/>
            </div>
        </div>
        
        {/* Hero Section */}
        <div className="min-h-screen min-w-screen p-16 flex flex-col items-center justify-center gap-6 bg-gray-300">
            
            
            <h1 className="text-4xl font-bold">Signal UI</h1>
            <p className="text-lg pb-8">Simple. Clean. Intent-driven.</p>    

                {/* Code Block */}
            <div className=" bg-black/80 h-20 w-84 rounded-md relative cursor-pointer flex items-center justify-center" onClick={handleCodeClick}>
                <div className="h-2 w-2 bg-red-500/50 rounded-full absolute top-1 left-1 hover:bg-red-500"></div>
                <div className="h-2 w-2 bg-yellow-500/50 rounded-full absolute top-1 left-4 hover:bg-yellow-500"></div>
                <div className="h-2 w-2 bg-green-500/50 rounded-full absolute top-1 left-7 hover:bg-green-500"></div>
                <div className="font-mono text-md text-white/90 ">npx signal-layers copy</div>
                {copyCodeToggle && (
                        <>
                            <div className="absolute -top-10 text-white bg-green-600 px-2 py-1 rounded-md font-extralight text-sm">Copied!</div>
                            <IoMdArrowDropdown className="absolute -top-4 h-6 w-6 text-green-600" />
                        </>
                    )
                }
            </div>

                    <div className="flex flex-col items-center justify-around gap-4">

                        <div>
                            {'<Button ' + code + ' />'}
                            <span className={`inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse`}></span>
                        </div>
                        
                        <div>
                             <Button {...buttonProps}>
                                Click Me
                            </Button>
                        </div>

                    </div>

        </div>

        <div className="min-h-screen min-w-screen p-8 bg-gray-300 flex flex-col items-center justify-start">
            <h1 className="text-3xl lg:text-6xl pb-6">The Idea Behind Signal UI</h1>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4 ">A component should be infinitely customisable with a single line of code without breaking any existing component functionality while piling up your ideas in the component file that you can freely use with intent.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">A component should be based on the idea of intention. If I want a large button with a ripple effect, I just tell it that. No props, no variants, no confusion. The component knows what you mean. You express your intent, and the component delivers.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">Each component should have the idea of dimensions. Since every dimension has infinite variations of intent. An intent knows which dimensions to affect. These dimensions define the visual and behavioral characteristics of the component. For example, a button's size, color, border style, and animation can all be controlled through different dimensions.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">These dimensions can be organized into layers. Since a single dimension or a group of dimensions can be affected through intent, hence, we call it a signal. Signals will be based on intent and can modify a single dimension or a group of dimensions at once. These signals will be powerful enough to express self-documenting intent while we modify or add dimensions that are being affected through those signals.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">A component not only needs signals that affects its styling, but it also needs signals for passing data and state down to the internal components. These signals that have a value being passed will be called data signals. Data signals carry information down to child components. And those signals where state is being handled internally will be called as state signals. State signals will allow components to manage their own internal reactive state while maintaining clean separation of concerns.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">The component should be freely owned by the developer so that they could modify it at first as per their website's styling before using them. No developer should use components as they are and should customize them completely at first hand. They should be able to adapt to their website's design system. Therefore, the component should be designed such that it can be easily customized by removing or adding the signals.</p> 

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">To reduce the time spent creating components from scratch, Signal UI will provide pre-built, highly customizable components that can be easily adapted to any design system. Developers can edit once in seconds and use them freely.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">Developers often end up making similar looking websites with the same provided components with limited configurations. We will design it in a such way that every developer can easily customize it within seconds according to their needs without breaking existing ui.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">There can be infinite variations and signals for independent dimensions the same way as tailwind css. However, tailwind css cannot group these dimensions together because it's based on utility classes rather than semantic signals. Signal UI will address this by allowing developers to group related dimensions into meaningful signals that express intent clearly.</p>

            <p className="text-lg max-w-xl lg:max-w-3xl lg:text-2xl text-justify pb-4">Unlike other UI libraries which either has a complete abstraction layer with dependency code not only with node_packages but also with their documentation to look for different props or another approach where code is completely copyable and ownable however is extremely complex to understand or modify. Signal UI on the other hand will take a middle approach with no dependency on packages and having a simple to understand self-documenting code that is easily ownable and configurable for all use cases.</p>
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