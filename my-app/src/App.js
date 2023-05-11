import './App.css';
import { useState } from 'react';
import './Display'
import Display from './Display';
import Button from './Button';

function App() {
  const [input, setInput] = useState('');
  
  function Handle(event){
    const value = event.target.value;
    switch (value){
      case "C":
        setInput("");
        break;
      case "=":
        try {
          const result = eval(input);
          setInput(result.toString());
        } catch (error) {
          setInput("error");
        }
        break;
      default:
        setInput(input+value);
        break;
    }
  }

  return (
    <div className='calculatrice'>
      <Display value={input} />
      <br />
      <Button value="C" onClick={Handle}/>
      <Button value="()" />
      <Button value="%" />
      <Button value="/" onClick={Handle}/>
      <br />
      <Button value="7" onClick={Handle}/>
      <Button value="8" onClick={Handle}/>
      <Button value="9" onClick={Handle}/>
      <Button value="*" onClick={Handle}/>
      <br />
      <Button value="4" onClick={Handle}/>
      <Button value="5" onClick={Handle}/>
      <Button value="6" onClick={Handle}/>
      <Button value="-" onClick={Handle}/>
      <br />
      <Button value="1" onClick={Handle}/>
      <Button value="2" onClick={Handle}/>
      <Button value="3" onClick={Handle}/>
      <Button value="+" onClick={Handle}/>
      <br />
      <Button value="+/-"/>
      <Button value="0" onClick={Handle}/>
      <Button value="." onClick={Handle}/>
      <Button value="=" onClick={Handle}/>
      <br />
    </div>
  );
}

export default App;
