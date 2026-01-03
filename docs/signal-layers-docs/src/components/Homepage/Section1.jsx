import {useRef, useEffect} from "react";
import gsap from 'gsap';
export function Section1() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const copyLines = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 100%",
                    end: "bottom 85%",
                    scrub: 1.5
                }
            })
                .from(titleRef.current, {
                    y: 200,
                    opacity: 0,
                    duration: 3,
                    ease: "power2.out"
                })
                .from(subtitleRef.current, {
                    y: 80,
                    opacity: 0,
                    duration: 2,
                    ease: "power2.out"
                }, "-=1.8")
                .from(copyLines.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out"
                }, "-=1.25");
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen min-w-screen p-8 bg-gray-900 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center">
                <h2 ref={titleRef} className="text-4xl font-semibold mb-12 text-white">This Is Not Just A Library</h2>
                <p ref={subtitleRef} className="text-xl text-gray-300 mb-16">But a design pattern, a thinking model.</p>
                <div className="space-y-10 text-gray-400">
                    <p ref={el => copyLines.current[0] = el} className="text-lg">Copy once.</p>
                    <p ref={el => copyLines.current[1] = el} className="text-lg">Understand once.</p>
                    <p ref={el => copyLines.current[2] = el} className="text-lg">Own forever.</p>
                </div>
            </div>
        </div>
    )
}