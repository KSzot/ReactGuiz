import React, { useState } from 'react';
import { DropDownWrapper } from './DropDown.style';

interface Props {
  id: number;
  name: string;
}
export interface Categories {
  categories: Props[];
  text: string;
}
const DropDown: React.FC<Categories> = ({ categories, text }) => {
  const [open, setOpen] = useState<Boolean>(false);
  const [selection, setSelection] = useState<Props[]>([]);
  const toggle = () => setOpen((prev) => !prev);
  const multiSelect = false;
  //Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item: Props) {
    if (!selection.some((current: Props) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
        toggle();
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current: Props) => current.id !== item.id,
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item: Props) {
    if (selection.some((current: Props) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <DropDownWrapper>
      <div
        tabIndex={0}
        className='dd-header'
        role='button'
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div className='dd-header__title'>
          <p className='dd-header__title--bold'>
            {selection.length === 1 ? selection[0].name : text}
          </p>
        </div>
        <div className='dd-header__action'>
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className='dd-list'>
          {categories.map((item: any) => (
            <li className='dd-list-item' key={item.id}>
              <button type='button' onClick={() => handleOnClick(item)}>
                <span>{item.name}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </DropDownWrapper>
  );
};

export default DropDown;
