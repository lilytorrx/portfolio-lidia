import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal(targets = []) {
    const targetsRef = useRef(targets);

    useEffect(() => {
        targetsRef.current.forEach((target, index) => {
            ScrollReveal().reveal(target, {
                distance: '40px',
                duration: 1000,
                easing: 'ease-in-out',
                delay: 100 * index,
                reset: false,
            });
        });
    }, []);
}