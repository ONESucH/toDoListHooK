import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faHands, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

const List = ({ arr, removeItem, successItem, statusActive, removeToActive }) => (
  <ul>
    {arr.length ? arr.map((item, index) => item.status === statusActive ? (
      <li
        key={index}
        className="list"
      >
        {item.status === 2 ? (
          <FontAwesomeIcon
            icon={faPenSquare}
            onClick={() => removeToActive(index)}
            title="Восстановить"
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            onClick={() => removeItem(index)}
            title="Удалить"
          />
        )}
        <span>{item.text}</span>
        {item.status === 0 ? (
          <FontAwesomeIcon
            icon={faHands}
            onClick={() => successItem(index)}
            title="Завершить"
          />
        ) : null}
      </li>
    ) : null) : null}
  </ul>
);

export default List;