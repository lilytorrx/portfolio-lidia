import { useState } from 'react';
import logo from '../assets/imagotipo_deitado.png';

import { Link } from 'react-router-dom';

import '../css/header.css';
import useScrollReveal from '../hooks/useScrollReveal';
import Modal from './modal';

function Header() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    
    useScrollReveal(['.logo', 'nav'], { origin: 'top', delay: 100 });

    return (
        <header>
            <figure className='logo'>
                <img alt="Logo lilytorrx" src={logo} />
            </figure>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                    <li>
                        <button onClick={openModal} className="resume">Baixar currículo</button>
                    </li>
                </ul>
            </nav>

            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </header>
    );
}

export default Header;
