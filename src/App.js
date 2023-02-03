import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import { create, all } from 'mathjs'

const config = {};
const math = create(all, config);

function App() {


  const [dot, setDot] = useState(false);
  const [expression, setExpression] = useState('0');
  const [res, setRes] = useState(false);
  let lastElement = '';
  let lastTwo = ''
  const inputHandler = (e) => {
    
    
    if (res) {
      setRes(false);
      if ((e.target.innerText === '+' || e.target.innerText === '-' || e.target.innerText === '*' || e.target.innerText === '/')) return setExpression((old) => old + e.target.innerText);
      return setExpression(e.target.innerText)
    }
    
    if (expression.length > 1) { lastElement = expression.slice(-1); }
    if(expression.length>=2) { lastTwo = expression.slice(-2)};
   
    if(lastTwo === '*-' && e.target.innerText === '+') {
      let newStr = expression.substring(0, expression.length - 2);
      return setExpression(newStr + e.target.innerText);
    }
    if (expression === '0' && (e.target.innerText === '0'
      || e.target.innerText === '.'
      || e.target.innerText === '+'
      || e.target.innerText === '-'
      || e.target.innerText === '/'
      || e.target.innerText === '*')) return;
    if (expression === '0') { return setExpression(e.target.innerText); }

    if ((lastElement === '+'  || lastElement === '*' || lastElement === '/')
      && (e.target.innerText === '+' || e.target.innerText === '*' || e.target.innerText === '/')) {
      let newStr = expression.substring(0, expression.length - 1);
      return setExpression(newStr + e.target.innerText);
    }

    if ((lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '/' || lastElement === '.') &&  e.target.innerText === '.') return;
    if (e.target.innerText === '.') {
      setDot(true);
    };
    if (dot && e.target.innerText === '.') return;
    if (e.target.innerText === '+'
      || e.target.innerText === '-'
      || e.target.innerText === '/'
      || e.target.innerText === '*') setDot(false);

       setExpression(old => old + e.target.innerText);
  }
  
  const remove = () => {
    let newStr = expression.substring(0, expression.length - 1);
    setExpression(newStr);
  }

  const clean = () => {
    setDot(false);
    setExpression('0');
  }

  const equation = () => {
    setRes(true);
    setDot(false);
    if(expression==='123456789') console.log('Ulan ne uğraştim bunu yapmaya amk!!');
    var result = math.evaluate(expression);
    setExpression(result);
  }

  return (
    <div className="container ">
      <Display
        expression={expression}
      />
      <Button
        inputHandler={inputHandler}
        clean={clean}
        equation={equation}
        remove={remove}
      />
    </div>
  );
}

export default App;
