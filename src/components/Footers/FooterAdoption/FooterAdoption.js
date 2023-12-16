import './FooterAdoption.css'
import logoadoption from '../../../assets/icons/icons8-coleira-96.png'
import logo180 from '../../../assets/icons/180img.png'
function FooterAdoption() {
    return(
        <div>
            <header className="headeradoption">
            <p><img src={logoadoption} id="logoadoption"/>  Adoções e agradecimentos:</p>
            </header>
            
            <img src={logo180} id="adoptions"/>

            <div className="adoptiondesc">
            </div>
        </div>
    )
}

export default FooterAdoption;