import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faHands, faPenSquare, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const List = ({ arr, updateItem, statusActive }) => (
  <ul>
    {arr?.map((item, index) => item.status === statusActive ? (
      <li
        key={index}
        className="list"
      >
        <FontAwesomeIcon
          icon={item.status === 2 ? faPenSquare : faMinus}
          onClick={() => item.status === 2 ? updateItem(index, 0) : null}
          title={item.status === 2 ? 'Восстановить' : null}
        />

        <span>{item.text}</span>

        <FontAwesomeIcon
          icon={item.status === 2 ? faMinus : item.status === 0 ? faHands : faArrowCircleLeft}
          onClick={() => item.status === 0 ? updateItem(index, 1) : updateItem(index, 2)}
          title={item.status === 0 ? 'Завершить' : item.status === 1 ? 'Удалить' : null}
        />
      </li>
    ) : null)}
  </ul>
);

export default List;