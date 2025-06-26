import foto from '../assets/foto-lidia.jpg';

function MainContent() {
    return (
        <div className="main-content">
            <img src={foto} alt="Foto de Lídia" />
            <p>Olá, eu sou <span className="purple">Lídia Torres!</span></p>
            <p className='occupation'>UX/UI Designer</p>
        </div>
    )
}

export default MainContent;