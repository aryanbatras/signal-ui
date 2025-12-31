import { useState, useEffect } from 'react';

export function MagnifyingCursor(){
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.pageX, y: e.pageY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [])
    return (
        <div 
            className="absolute z-50 h-16 w-16 rounded-full bg-white/30 pointer-events-none opacity-90 blur-xs"
            style={{ transform: `translate(${pos.x - 32}px, ${pos.y - 32}px)`}}
        >
        </div>
    );
}