import { useEffect } from 'react';
import '../css/modal.css'; 
import useScrollReveal from '../hooks/useScrollReveal'; 

const Modal = ({ isOpen, closeModal }) => {
    
    useScrollReveal(
        ['.modal-content'], 
        { 
            origin: 'top', 
            distance: '50px', 
            duration: 600, 
            easing: 'ease-out' 
        });

    if (!isOpen) return null;

    const handleDownload = (version) => {
        const fileMap = {
            portuguese: '/archives/curriculo-lidia-copia.pdf',  
            english: '/archives/resume.pdf',  
            both: [
                '/archives/curriculo-lidia-copia.pdf',  
                '/archives/resume.pdf',  
            ],
        };

        if (version === 'both') {
            fileMap.both.forEach((file) => {
                const link = document.createElement('a');
                link.href = file;
                link.download = file.split('/').pop(); 
                link.click();
            });
        } else {
            const link = document.createElement('a');
            link.href = fileMap[version];
            link.download = version === 'portuguese' ? 'curriculo-lidia-copia.pdf' : 'resume.pdf';
            link.click();
        }

        closeModal(); 
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Qual versão do currículo você deseja baixar?</h2>
                <div className="modal-buttons">
                    <button onClick={() => handleDownload('portuguese')}>Português</button>
                    <button onClick={() => handleDownload('english')}>Inglês</button>
                    <button onClick={() => handleDownload('both')}>Ambos</button>
                </div>
                <button className="close-button" onClick={closeModal}>Fechar</button>
            </div>
        </div>
    );
};

export default Modal;
