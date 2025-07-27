import { useState } from 'react';
import logo from '../assets/imagotipo_deitado.png';
import { Link } from 'react-router-dom';

import '../css/header.css';
import Modal from './modal';
import useScrollReveal from '../hooks/useScrollReveal';

import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useScrollReveal(['.logo', 'nav'], { origin: 'top', delay: 100 });

    return (
        <header>
            <div className='header-container'>
                <figure className="logo">
                    <img alt="Logo lilytorrx" src={logo} />
                </figure>
            
                <button className="hamburger-icon" onClick={toggleMenu} aria-label="Abrir menu">
                    {isMenuOpen ? <FiX size={30} color="#fff" /> : <FiMenu size={30} color="#fff" />}
                </button>
            </div>

            <nav className={isMenuOpen ? 'open' : ''}>
                <ul>
                    <li><Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to='/projects' onClick={() => setIsMenuOpen(false)}>Projetos</Link></li>
                    <li><Link to='/contact' onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
                    <li>
                        <button 
                            onClick={() => { openModal(); setIsMenuOpen(false); }} 
                            className="resume"
                        >
                            Baixar currículo
                        </button>
                    </li>
                </ul>
            </nav>

            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </header>
    );
}

export default Header;
