import './FooterHelp.css'
import logodonation from '../../../assets/icons/icons8-animal-donation-96.png'
import logopix from '../../../assets/icons/icons8-foto-96.png'
import logobanco from '../../../assets/icons/icons8-banco-96.png'
function FooterHelp() {
    return(
        <div>
            <header className="headerhelp">
            <p><img src={logodonation} id="logohelp"/>  Ajude nossos bichinhos:</p>
            </header>

        <div className="pixetc">
            <img src={logopix} id="pix"/>
            <img src={logobanco} id="pix"/>
            </div>
        </div>
    )
}

export default FooterHelp