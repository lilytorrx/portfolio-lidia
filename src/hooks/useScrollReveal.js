import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal(targets = [], config = {}) {
    useEffect(() => {
        targets.forEach((target, index) => {
            ScrollReveal().reveal(target, {
                distance: '40px',
                duration: 1000,
                easing: 'ease-in-out',
                delay: 100 * index,
                reset: false,
                ...config,
            });
        });
    }, [targets.join()]); // Dependência: atualiza se os alvos mudarem
}
