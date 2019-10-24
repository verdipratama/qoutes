import React from 'react';
import trash from '../assets/images/trash-2.svg';
import add from '../assets/images/plus-circle.svg';
import addWhite from '../assets/images/plus-circle-white.svg';
import circle from '../assets/images/circle.svg';
import check from '../assets/images/check-circle.svg';
import checkSimple from '../assets/images/check-simple.svg';
import edit from '../assets/images/edit-2.svg';
import more from '../assets/images/more-vertical.svg';

const renderIcon = name => {
  switch (name) {
    case 'add':
      return add;
    case 'add-white':
      return addWhite;
    case 'check-circle':
      return circle;
    case 'trash':
      return trash;
    case 'edit':
      return edit;
    case 'more-menu':
      return more;
    case 'check-simple':
      return checkSimple;
    default:
      return check;
  }
};

const Icon = ({ name, size }) => {
  return (
    <img
      className={`icon icon-${name}`}
      src={renderIcon(name)}
      height={size || 14}
      width={size || 14}
      alt="icon"
    />
  );
};

export default Icon;
