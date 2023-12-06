import './HeaderPanel.css';
import homecat from '../../assets/icons/icons8-gaiola-de-gato-96.png';
import iconsearch from '../../assets/icons/icons8-lupa-96.png';
import iconfilter from '../../assets/icons/icons8-filtro-96.png';
export default function HeaderPanel() {

  return (
    <div className='header-panel'>
      <div className="home-cat">
        <img src={homecat} alt="" className='cor' />
      </div>
      <div className='search-input'>
        <form action="">
          <input type="text" />
          <button type='submit'>
            <img src={iconsearch} alt="" />
          </button>
        </form>
      </div>
      <div className='filter'>
        <button>
          <img src={iconfilter} alt="" />
        </button>
      </div>
    </div>
  )
}