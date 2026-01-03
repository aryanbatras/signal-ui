import {useRef, useEffect} from "react";
import gsap from 'gsap';
export function Section2() {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
            const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: { 
                    trigger: sectionRef.current, 
                    start: "top 85%", 
                    end: "bottom 90%",
                    scrub: 0.8
                }
            })
            .from(titleRef.current, { 
                y: 30, 
                opacity: 0, 
                duration: 1.2,
                ease: "power2.out"
            })
            .from(paragraphRef.current, { 
                y: 20, 
                opacity: 0, 
                duration: 1,
                stagger: 0.08,
                ease: "power2.out"
            }, "-=0.8");
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen min-w-screen p-8 bg-white flex flex-col items-center justify-start">
            
            <h1 ref={titleRef} className="text-4xl lg:text-8xl pb-6 lg:pb-12 tracking-wide leading-relaxed">Why Signal UI is Different</h1>

            <div ref={paragraphRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 max-w-6xl w-full">

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-none inset-0 shadow-lg">
                    <h3 className="text-xl lg:text-lg  mb-4 tracking-wide leading-relaxed">No Dependency Hell</h3>
                    <p className="text-md lg:text-lg text-justify tracking-wide leading-relaxed"> Copy once, own forever. No package updates, version conflicts, or breaking changes. The code is yours to keep and modify.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-none inset-0 shadow-lg">
                    <h3 className="text-xl lg:text-lg  mb-4 tracking-wide leading-relaxed">No Variant Explosion</h3>
                    <p className="text-md lg:text-lg text-justify tracking-wide leading-relaxed">Intent-driven signals instead of endless enums. No more digging through docs to find the right combination of props.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-none inset-0 shadow-lg">
                    <h3 className="text-xl lg:text-lg  mb-4 tracking-wide leading-relaxed">No Documentation Hunting</h3>
                    <p className="text-md lg:text-lg text-justify tracking-wide leading-relaxed">Self-documenting code that reads like natural language. The component tells you what it can do.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-none inset-0 shadow-lg">
                    <h3 className="text-xl lg:text-lg  mb-4 tracking-wide leading-relaxed">No Design Lock-in</h3>
                    <p className="text-md lg:text-lg text-justify tracking-wide leading-relaxed">Adapt to any design system in seconds. Remove signals, add new ones, or modify existing behavior without breaking anything.</p>
                </div>
            </div>

            {/* <div className="mt-12 max-w-4xl">
                <h3 className="text-3xl lg:text-5xl mb-6 text-center tracking-wide leading-relaxed">The Perfect Balance</h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-none inset-0 shadow-xl">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/20">
                                <th className="text-left pb-4 text-sm lg:text-2xl tracking-wide leading-relaxed">Approach</th>
                                <th className="text-center pb-4 pr-3 lg:pr-9 text-sm lg:text-2xl tracking-wide leading-relaxed">Abstraction</th>
                                <th className="text-center pb-4 pr-3 lg:pr-9 text-sm lg:text-2xl tracking-wide leading-relaxed">Ownership</th>
                                <th className="text-center pb-4 text-sm lg:text-2xl tracking-wide leading-relaxed">Customization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/10">
                                <td className="py-2 text-sm lg:text-2xl tracking-wider leading-relaxed">Traditional UI Libraries</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">High</td>
                                <td className="text-center py-2 pr-1 text-sm  lg:text-2xl lg:py-4 tracking-wide leading-relaxed">Low</td>
                                <td className="text-center py-2 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">Limited</td>
                            </tr>
                            <tr className="border-b border-white/10">
                                <td className="py-2 text-sm lg:text-2xl tracking-wider leading-relaxed">Copyable Components</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">Low</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">High</td>
                                <td className="text-center py-2 text-sm lg:py-4 lg:text-2xl tracking-wide leading-relaxed">Complex</td>
                            </tr>
                            <tr>
                                <td className="py-2  text-sm lg:text-2xl tracking-wider leading-relaxed">Signal UI</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">Balanced</td>
                                <td className="text-center py-2 pr-1 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">Full</td>
                                <td className="text-center py-2 text-sm lg:text-2xl lg:py-4 tracking-wide leading-relaxed">Simple</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}

        </div>
    );
}