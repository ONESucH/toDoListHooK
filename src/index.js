import { StrictMode, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import './index.css';

const App = () => {
  const inputRef = useRef(null);
  const ulStatusRef = useRef(null);
  const [subData, setSubData] = useState(null);
  const [statusActive, setStatusActive] = useState(0);
  const [ arr, setArr ] = useState([]);

  useEffect(() => {
    if (!subData) return;

    setArr([
      ...arr,
      {
        status: 0,
        text: subData
      }
    ]);
    setSubData(null);
    inputRef.current.value = '';
  }, [ subData ]);

  const removeItem = (id) => {
    const updateArr = arr.map((el, index) => {
      if (index === id) el.status = 2;
      return el;
    });
    setArr([ ...updateArr ]);
  };

  const successItem = (id) => {
    const updateArr = arr.map((el, index) => {
      if (index === id) el.status = 1;
      return el;
    });
    setArr([ ...updateArr ]);
  };

  const removeToActive = (id) => {
    const updateArr = arr.map((el, index) => {
      if (index === id) el.status = 0;
      return el;
    });
    setArr([ ...updateArr ]);
  };

  return (
    <>
      <h2>To do list use HOOKS</h2>
      <div className="title">
        <input type="text" ref={inputRef}/>
        <button onClick={() => setSubData(inputRef.current.value)}>Добавить</button>
      </div>
      <div className="body">
        <ul className="status-lists" ref={ulStatusRef}>
          <li className={statusActive === 0 ? 'status-active' : null} onClick={() => setStatusActive(0)}>Активны</li>
          <li className={statusActive === 1 ? 'status-active' : null} onClick={() => setStatusActive(1)}>Завершены</li>
          <li className={statusActive === 2 ? 'status-active' : null} onClick={() => setStatusActive(2)}>Удалены</li>
        </ul>
        <List
          arr={arr}
          removeItem={removeItem}
          removeToActive={removeToActive}
          successItem={successItem}
          statusActive={statusActive}
        />
      </div>
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);