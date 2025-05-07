import { useContext, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../pages/Home/context';
export function Header() {
  const { modifiedData, data, setNewData } = useContext(HomeContext);
  const [state, setState] = useState(false);

  console.log({ data });

  const handleFilter = (value) => {
    // console.log(value);

    if (value === 'Hamisi') {
      setNewData(data);
      return data;
    }
    if (data) {
      setNewData(data.filter((item) => item.marka === value));
    }
  };
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'> TURBO.AZ</Link>
      </div>
      <ul className='nav-links'>
        <li>
          {' '}
          <Link to='/autos'> Bütün elanlar</Link>
        </li>
        <li>Dilerlər</li>
        <li>Avtokatalog</li>
        <li>Moto</li>
        <li>Ehtiyat hissələr və aksesuarlar</li>
        <li>
          <Link to={'/fav'}>Secilmisler</Link>
        </li>
        <li>
          <form action=''>
            <select
              name='cars'
              id='carSelect'
              className='selectCar'
              onChange={(e) => handleFilter(e.target.value)}
            >
              {modifiedData.map((item) => (
                <option value={item.marka}>{item.marka}</option>
              ))}
            </select>
          </form>
        </li>
      </ul>
      <Link to={'/Form'}>
        <button className='new-ad-button'>Yeni elan</button>
      </Link>
    </header>
  );
}
