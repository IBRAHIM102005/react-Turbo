import { pushArray } from './Slices/newSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './Slices/button.css';

// if (buttonName === 'increament') {
//   dispatch(increament());
// }
// if (buttonName === 'pushArray') {
export const Button = ({ buttonName, buttonRef, buttonId }) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    dispatch(pushArray(buttonId));
    setIsFav((prev) => !prev);

    // dispatch(decreament());
    // dispatch(removeArray(buttonId));
    // buttonRef.current.innerHTML = '<i class="bi bi-balloon-heart"></i>';
    // buttonRef.current.style.color = 'black';

    // dispatch(increament());
    // buttonRef.current.innerHTML = '<i class="bi bi-balloon-heart-fill"></i>';
    // buttonRef.current.style.color = 'red';
    // }
  };

  return (
    <button onClick={handleClick} className='icon' ref={buttonRef}>
      {isFav ? (
        <i className='bi bi-balloon-heart-fill'></i>
      ) : (
        <i className='bi bi-balloon-heart'></i>
      )}
    </button>
  );
};
