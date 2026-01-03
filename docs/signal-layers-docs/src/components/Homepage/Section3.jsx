import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import codeImage from '../../assets/signalutils.png';
gsap.registerPlugin(ScrollTrigger);

export function Section3() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const codeBlockRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    end: "top 5%",
                    scrub: 3.2
                }
            })
                .from(titleRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power4.out"
                })
                .from(subtitleRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=0.5")
                .from(codeBlockRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.8")
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen min-w-screen p-8 bg-gray-900 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full mx-auto">
                <div className="text-center mb-20">
                    <h2 ref={titleRef} className="text-6xl lg:text-8xl mb-8 text-white tracking-wide">Signal Utils Engine</h2>
                    <p ref={subtitleRef} className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                        40 lines. Zero dependencies. Deterministic signal resolution.
                    </p>
                </div>

                <div className="space-y-24">

                    <div ref={codeBlockRef} className="relative">
                        <div className="flex items-center justify-between mb-5 border-b border-gray-700 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="text-sm text-gray-400 font-mono tracking-wide">signal-utils.js</div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-gray-800">
                            <img
                                src={codeImage}
                                alt="Signal Utils Code"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    <div className="space-y-20">
                      
                        {/* <div>
                            <h3  className="text-4xl lg:text-6xl  mb-12 text-white text-center">Technical Architecture</h3>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                                    <h4 className="text-2xl  mb-4 text-white">Contract-Based Pattern</h4>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        Components declare a signal contract, the utility provides deterministic resolution.
                                        
                                    </p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                                    <h4 className="text-2xl  mb-4 text-white">Signal Resolution</h4>
                                    <div className="space-y-2 text-gray-300 font-mono text-sm">
                                        <div><span className="text-blue-400">layer()</span>: O(1) scoped registration</div>
                                        <div><span className="text-green-400">data()</span>: O(1) reactive binding</div>
                                        <div><span className="text-purple-400">state()</span>: O(1) priority management</div>
                                        <div><span className="text-orange-400">classes()</span>: O(n) layer resolution</div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                                    <h4 className="text-2xl  mb-4 text-white">Memory Management</h4>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        Single contract object reference. Lazy state initialization via React hooks.
                                        No memory leaks - cleanup handled by React lifecycle.
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <div>
                            <h3 className="text-4xl lg:text-6xl  mb-12 text-white text-center">Performance Characteristics</h3>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
                                    <div className="text-5xl lg:text-7xl  text-blue-400 mb-4">O(1)</div>
                                    <div className="text-xl text-gray-300 font-light mb-2">Signal Resolution</div>
                                    <div className="text-sm text-gray-500">Direct property access</div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
                                    <div className="text-5xl lg:text-7xl  text-green-400 mb-4">~0.1ms</div>
                                    <div className="text-xl text-gray-300 font-light mb-2">Runtime Overhead</div>
                                    <div className="text-sm text-gray-500">React useState + object ops</div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
                                    <div className="text-5xl lg:text-7xl  text-purple-400 mb-4">1.2kb</div>
                                    <div className="text-xl text-gray-300 font-light mb-2">Bundle Size</div>
                                    <div className="text-sm text-gray-500">40 lines, minified</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}