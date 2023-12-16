import './FooterPolygon.css'
import logopolygon from '../../../assets/icons/icons8-trabalho-a-partir-de-casa-96 (1).png'


function FooterPolygon() {
    return(
        <div className="polygon">
            <img src={logopolygon} id="logopolygon"/>
            <p> Desenvolvido com carinho pela Team Polygon</p>
        </div>
    )
}

export default FooterPolygon