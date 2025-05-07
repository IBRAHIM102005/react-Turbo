import {
  increament,
  pushArray,
  removeArray,
  decreament,
} from './Slices/newSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './Slices/button.css';

export const Button = ({ buttonName, buttonRef, buttonId }) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    if (buttonName === 'increament') {
      dispatch(increament());
    }
    if (buttonName === 'pushArray') {
      if (isFav) {
        dispatch(decreament());
        dispatch(removeArray(buttonId));
        buttonRef.current.innerHTML = '<i class="bi bi-balloon-heart"></i>';
        buttonRef.current.style.color = 'black';
      } else {
        dispatch(pushArray(buttonId));
        dispatch(increament());
        buttonRef.current.innerHTML =
          '<i class="bi bi-balloon-heart-fill"></i>';
        buttonRef.current.style.color = 'red';
      }
      setIsFav(!isFav);
    }
  };

  return (
    <button onClick={handleClick} className='icon' ref={buttonRef}>
      <i className='bi bi-balloon-heart'></i>
    </button>
  );
};
