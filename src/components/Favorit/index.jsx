import '../Favorit/Favorit.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { HomeContext } from '../../pages/Home/context';
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';
export function Favorit() {
  const state = useSelector((state) => state.counter);
  const { newData } = useContext(HomeContext);
  const arr = [...new Set(state.idArray)];
  const selectItem = arr.map((id) => newData?.find((item) => item.id === id));
  console.log(state);

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/autos/${id}`);
  };
  if (arr.length == 0) {
    return (
      <div className='containerFav'>
        <span>Secilmis Avtomobil yoxdur!!!</span>
      </div>
    );
  }

  return (
    <div className='containerFav'>
      {selectItem.map((item) => (
        <Card
          key={item.id}
          data={item}
          handleNavigate={handleNavigate}
          cardId={item.id}
          buttonName='pushArray'
        />
      ))}
      <p>Count:{state.counterVal}</p>
    </div>
  );
}
