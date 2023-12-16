import './FooterAbout.css'
import logodog from '../../../assets/icons/icons8-casinha-de-cachorro-96.png'
import logoplaywithpet from '../../../assets/icons/icons8-play-with-pet-96.png'
function FooterAbout() {
    return(
        <div className="aboutcontent">
            <header className="headerabout">
            <p><img src={logodog} id="logoabout"/>    Sobre Nós:</p>
            </header>

            <a href="">
                <img src={logoplaywithpet} id="sobrenos"/>
            </a>
        </div>
    )
}

export default FooterAbout;