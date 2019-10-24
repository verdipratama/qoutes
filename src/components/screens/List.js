import React from 'react';
import Icon from '../Icons';

const List = ({ list }) => {
  const tampil = list.map(item => {
    return (
      <div className="note-item" key={item.id}>
        <div className="status">
          <div title="Mark as complete">
            <Icon name="icon-check-cirle" size="24" />
          </div>
        </div>
        <div className="message">
          <h3>{item.pesan}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="notes-wrapper">
        <h2>Random Qoutes</h2>
        {tampil}
      </div>
    </div>
  );
};

export default List;