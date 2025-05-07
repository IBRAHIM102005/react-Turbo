import '../Favorit/Favorit.css';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { HomeContext } from '../../pages/Home/context';
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';
function Favorit() {
  const state = useSelector((state) => state.counter);
  const { newData } = useContext(HomeContext);
  console.log({ newData });
  // const arr = [...new Set(state.idArray)];

  const selectItem = newData.filter((item) =>
    state.idArray.find((id) => id === item.id),
  );

  // const selectedItems = newData.filter(item=>item.id === )

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/autos/${id}`);
  };

  if (selectItem.length == 0) {
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
      <p>Count:{state.idArray.length}</p>
    </div>
  );
}

export default Favorit;
