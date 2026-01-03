import { useRef, useEffect } from "react";
import gsap from 'gsap';

export function Section4() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const codeBlockRef = useRef(null);
    const layersTitleRef = useRef(null);
    const dimensionsTitleRef = useRef(null);
    const complexityTitleRef = useRef(null);
    const usageTitleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "bottom 70%",
                    scrub: 1
                }
            })
                .from(titleRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.out"
                })
                .from(subtitleRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                }, "-=1")
                .from(codeBlockRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.8")
                .from([layersTitleRef.current, dimensionsTitleRef.current, complexityTitleRef.current, usageTitleRef.current], {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out"
                }, "-=0.5");
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen min-w-screen p-8 bg-gray-300 flex flex-col items-center justify-center">
            <div className="max-w-7xl w-full mx-auto">
                <div className="text-center mb-20">
                    <h2 ref={titleRef} className="text-6xl lg:text-8xl font-bold mb-8 text-slate-900 tracking-tight">Signal UI Architecture</h2>
                    <p ref={subtitleRef} className="text-2xl lg:text-3xl text-slate-700 font-light leading-relaxed max-w-4xl mx-auto">
                        58 lines of intent-driven architecture. Zero abstraction layers. Infinite dimensional control.
                    </p>
                </div>
                
                <div className="space-y-24">
                    {/* Code Display */}
                    <div ref={codeBlockRef} className="relative">
                        <div className="flex items-center justify-between mb-8 border-b border-slate-300 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm text-slate-600 font-mono bg-slate-200 px-3 py-1 rounded-md">Spinner.jsx</span>
                                <span className="text-sm text-slate-600 font-light">58 lines</span>
                            </div>
                        </div>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-300 shadow-xl">
                            <img 
                                src="/src/assets/code-example.png" 
                                alt="Spinner Component Code"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                    
                    {/* Four-Layer Architecture */}
                    <div>
                        <h3 ref={layersTitleRef} className="text-4xl lg:text-6xl font-bold mb-12 text-slate-900 text-center">The Four-Layer Signal Architecture</h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300">
                                <h4 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                                    Layer 1: Input Signals
                                </h4>
                                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                    Declarative interface where developers express intent. Human-readable signals like <code className="text-blue-600 font-mono">lg primary spinSlow</code> map directly to design decisions.
                                </p>
                                <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-700">
                                    inputSignal.lg && spinner.size("w-8 h-8 border-4")
                                </div>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300">
                                <h4 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                                    Layer 2: Layer Signals
                                </h4>
                                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                    Semantic grouping of CSS classes into dimensional layers. Each layer represents a design dimension with scoped namespace isolation.
                                </p>
                                <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-700">
                                    {`spinner = {layer("layout", "spinner"), layer("size", "spinner")}`}
                                </div>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300">
                                <h4 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                                    Layer 3: Data Signals
                                </h4>
                                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                    Reactive data binding that carries information down to child components. Handles dynamic values like aria labels and form data.
                                </p>
                                <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-700">
                                    inputSignal.ariaLabel && data("ariaLabel")
                                </div>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300">
                                <h4 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-rose-500 rounded-full"></span>
                                    Layer 4: State Signals
                                </h4>
                                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                                    Internal component state with priority-based resolution and lazy React hook initialization. Clean separation between intent and behavior.
                                </p>
                                <div className="bg-slate-100 rounded-lg p-4 font-mono text-sm text-slate-700">
                                    state("isVisible", 1, true) // Priority 1, initial true
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Performance Metrics */}
                    <div>
                        <h3 ref={complexityTitleRef} className="text-4xl lg:text-6xl font-bold mb-12 text-slate-900 text-center">Computational Complexity Analysis</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300 text-center">
                                <div className="text-5xl lg:text-7xl font-bold text-blue-600 mb-4">58</div>
                                <div className="text-xl text-slate-700 font-light mb-2">Lines of Code</div>
                                <div className="text-sm text-slate-600">Complete component with all dimensions</div>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300 text-center">
                                <div className="text-5xl lg:text-7xl font-bold text-emerald-600 mb-4">O(1)</div>
                                <div className="text-xl text-slate-700 font-light mb-2">Signal Resolution</div>
                                <div className="text-sm text-slate-600">Direct property access</div>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300 text-center">
                                <div className="text-5xl lg:text-7xl font-bold text-purple-600 mb-4">~0.08ms</div>
                                <div className="text-xl text-slate-700 font-light mb-2">Render Time</div>
                                <div className="text-sm text-slate-600">Signal processing + DOM updates</div>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-300 text-center">
                                <div className="text-5xl lg:text-7xl font-bold text-rose-600 mb-4">∞</div>
                                <div className="text-xl text-slate-700 font-light mb-2">Dimensional Combinations</div>
                                <div className="text-sm text-slate-600">5 sizes × 4 colors × 3 animations × 4 layouts</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Usage Examples */}
                    <div>
                        <h3 ref={usageTitleRef} className="text-4xl lg:text-6xl font-bold mb-12 text-slate-900 text-center">Intent-Driven Usage Patterns</h3>
                        
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 border border-slate-300">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-6">Semantic Intent Expressions</h4>
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            <span className="text-slate-600 block mb-2">// Large primary spinner for main content</span>
                                            <span className="text-slate-900">&lt;Spinner lg primary /&gt;</span>
                                        </div>
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            <span className="text-slate-600 block mb-2">// Small danger spinner in buttons</span>
                                            <span className="text-slate-900">&lt;Spinner sm danger /&gt;</span>
                                        </div>
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            <span className="text-slate-600 block mb-2">// Slow spinning accent for loading states</span>
                                            <span className="text-slate-900">&lt;Spinner md accent spinSlow /&gt;</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-6">Dimensional Combinations</h4>
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            <span className="text-slate-600 block mb-2">// Multi-dimensional intent</span>
                                            <span className="text-slate-900">&lt;Spinner xl primary thick spinSlow centered /&gt;</span>
                                        </div>
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            <span className="text-slate-600 block mb-2">// Layout + visual + animation</span>
                                            <span className="text-slate-900">&lt;Spinner lg danger block spinFast /&gt;</span>
                                        </div>
                                        <div className="p-4 bg-slate-100 rounded-lg">
                                            <span className="text-slate-600 block mb-2">// Accessibility + visual</span>
                                            <span className="text-slate-900">&lt;Spinner md light ariaLabel="Loading data" /&gt;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}