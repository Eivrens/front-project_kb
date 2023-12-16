import './FooterFollow.css'
import logopegada from '../../../assets/icons/icons8-pegada-de-gato-ios-16-filled-96.png';
import logotiktok from '../../../assets/icons/icons8-tiktok-96 (2).png';
import logoinstagram from '../../../assets/icons/icons8-instagram-96 (1).png';

function FooterFollow() {
    return(
        <div>
            <header className="headerfollow">
            <p><img src={logopegada} id="logopegada"/>  Siga nossas redes:</p>
            </header>

            <div className="rsociais">
            <a href="https://www.tiktok.com/@gatosdoquarto" target="_blank">
                <img src={logotiktok} id="tiktok"/>
            </a>
            <a href="https://www.instagram.com/gatosdoquarto/" target="_blank">
                <img src={logoinstagram} id="instagram"/>
            </a>
            </div>
        </div>
    )
}

export default FooterFollow