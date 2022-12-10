import logo from './logo.svg';
import './App.css';
import Todo from '.comonents/Todo';
import {List} from '@mui/material';

//화면에 렌더링할 할 일 데이터
const items = [
  {
      id: 1,
      title: 'hello world1',
      done: true
  },
  {
      id: 2,
      title: 'hello world2',
      done: false
  },
  {
    id: 3,
    title: '동영상 강의 보기',
    done: false
}
];

const todoItems = items.map(item=> <Todo key ={item.id} item={item}/>);


const App = () => {
  return (
    <div className="App">
      <List>
        {todoItems}
      </List>
    </div>
  );
}

export default App;
