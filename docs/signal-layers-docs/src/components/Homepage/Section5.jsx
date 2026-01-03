import gsap from 'gsap';
import { useEffect, useRef } from 'react';
export function Section5() {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const contentRef = useRef(null);
    
    useEffect(() => {
        gsap.context(() => {
        gsap.timeline({
            scrollTrigger: { 
                trigger: sectionRef.current, 
                start: "top 100%", 
                end: "center 90%",
                scrub: 1.2
            }
        })
        .from(titleRef.current, { 
            y: 20, 
            opacity: 0, 
            duration: 1.5,
            ease: "power3.out"
        }, "-=0.3")
        .from(subtitleRef.current, {
            y: 20, 
            opacity: 0, 
            duration: 1.1,
            ease: "power3.out"
        }, "-=0.5")
        .from(contentRef.current, { 
            y: 15, 
            opacity: 0, 
            duration: 1.8,
            ease: "power2.out"
        }, "-=0.8");
    }, sectionRef.current);
    }, []);


    return (
        <div ref={sectionRef} className="min-h-screen min-w-screen bg-white p-8 flex flex-col items-center justify-start">
            <div ref={titleRef} className="text-4xl lg:text-7xl text-black font-semibold pb-6 tracking-wide leading-relaxed text-center">The Signal UI Philosophy</div>
            <div ref={subtitleRef} className="text-2xl text-center lg:text-3xl text-black/70 tracking-wide leading-relaxed max-w-4xl mb-20">Where architectural clarity meets developer ownership</div>
            
            <div ref={contentRef} className="max-w-4xl w-full space-y-16">
                <div className="border-l-2 border-slate-200 pl-8 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-medium text-black/90">The Challenge</h3>
                        <p className="text-lg lg:text-xl text-black/70 text-justify leading-relaxed">
                            Modern component development presents a fundamental dilemma: choose between proprietary dependency systems that enforce vendor lock-in through complex configuration, or adopt utility-first approaches that sacrifice semantic meaning for flexibility. Neither solution delivers both developer autonomy and architectural clarity. A third approach was needed—one that preserves ownership while maintaining intention-driven design.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-medium text-black/90">The Innovation</h3>
                        <p className="text-lg lg:text-xl text-black/70 text-justify leading-relaxed">
                            The breakthrough insight is that components should respond to <b className="font-semibold">intent</b> rather than configuration. When designers need a prominent button with subtle hover effects, they should express that directly—without navigating complex API documentation or deciphering variant systems. Components should understand the language of visual intent, translating declarative signals into precise behavioral outcomes.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-medium text-black/90">The Architecture</h3>
                        <p className="text-lg lg:text-xl text-black/70 text-justify leading-relaxed">
                            This insight led to <b className="font-semibold">signals</b>—declarative expressions of intent that map directly to visual and behavioral dimensions. A signal combination like <code className="bg-slate-100 px-2 py-1 rounded font-mono text-sm">primary lg hoverGlow</code> represents more than styling; it's a precise specification that targets distinct dimensions—tone, scale, interaction. Signals compose predictably without conflicts, eliminating cognitive overhead while maintaining semantic clarity.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-medium text-black/90">The Principle</h3>
                        <p className="text-lg lg:text-xl text-black/70 text-justify leading-relaxed">
                            Signals embody <b className="font-semibold">radical ownership</b>. When developers adopt Signal UI components, they receive transparent, modifiable code—not proprietary black boxes. Each component becomes a foundation that can be extended, customized, or restructured to match specific design requirements. This approach inverts the traditional relationship: components adapt to your architecture, rather than forcing your architecture to accommodate component limitations.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-medium text-black/90">The Differentiation</h3>
                        <p className="text-lg lg:text-xl text-black/70 text-justify leading-relaxed">
                            Signal UI represents a fundamental departure from conventional approaches. Traditional UI libraries provide power at the cost of ownership through dependency management and version constraints. Utility-first frameworks offer ownership but lack semantic meaning and developer ergonomics. Signal UI delivers both: intent-driven signals with complete ownership, zero dependencies, and transparent implementation.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl lg:text-2xl font-medium text-black/90">The Outcome</h3>
                        <p className="text-lg lg:text-xl text-black/70 text-justify leading-relaxed">
                            The result is a development experience that feels both intuitive and empowering: components comprehensible within seconds, robust enough for enterprise deployment, and flexible enough for complete customization. No documentation dependencies, no build complexity, no vendor constraints. Just intentional, transparent code that executes precisely as specified—delivering on the promise of developer ownership without sacrificing professional capability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}