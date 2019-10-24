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

/* <div className="container home">
<div className="notes-wrapper">
  <h2>Random Qoutes</h2>
  <div className="note-item">

    <div className="status">
      <a href="#0" title="Mark as complete">
        <Icon name="icon-check-cirle" size="24" />
      </a>
    </div>
 
    <div className="message">
      <h3></h3>
    </div>
  
    <div className="actions">
      <a href="#0" title="Edit">
        <Icon name="icon-edit" size="24" />
      </a>
      <a href="#0" title="Edit">
        <Icon name="icon-edit" size="24" />
      </a>
    </div>
  </div>
</div>
</div> */
