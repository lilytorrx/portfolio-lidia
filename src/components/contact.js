import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import useScrollReveal from '../hooks/useScrollReveal';

import '../css/contact.css';
import '../css/cssGeral.css';

import Header from './header';
import Footer from './footer';

function Contact() {
    // States para armazenar os dados do formulário
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    useScrollReveal(
        ['.contact'], 
        { 
            origin: 'bottom', 
            distance: '50px', 
            duration: 600, 
            easing: 'ease-out' 
        });

    // Função de envio de mensagem
    const handleSubmit = (e) => {
        e.preventDefault();

        // Chamando o serviço do EmailJS para enviar a mensagem
        const templateParams = {
            subject,
            email,
            message,
        };

        emailjs
            .send(
                'yoichiro_gmail',
                'yoichiro_mande_email',
                templateParams,
                'ZULgBFg8IuQVmR6JO'      
            )
            .then(
                (response) => {
                    console.log('Mensagem enviada com sucesso:', response);
                    setStatus('Mensagem enviada com sucesso!');
                    setSubject('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.error('Erro ao enviar a mensagem:', error);
                    setStatus('Erro ao enviar a mensagem. Tente novamente.');
                }
            );
    };

    return (
        <>
            <Header />
            <div className="contact">
                <p>Quer falar comigo? Escreva sua mensagem aqui!</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Assunto</label>
                        <input 
                            type="text" 
                            placeholder="Digite o assunto aqui..." 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Seu email:</label>
                        <input 
                            type="email" 
                            placeholder="Digite seu email aqui..." 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label>Conteúdo da mensagem:</label>
                        <textarea 
                            placeholder="Digite o que deseja aqui..." 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit">Enviar Mensagem</button>
                </form>
                {status && <p>{status}</p>}
            </div>
            <Footer />
        </>
    );
}

export default Contact;
