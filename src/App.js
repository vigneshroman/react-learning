import logo from './logo.svg';
import './App.css';
import {useState,useEffect  } from "react";
// const http=require('http')
// http.get("http://jsonplaceholder.typicode.com/posts/",(res)=>{
//   res.setEncoding('utf8');
//   res.on('data',data=>console.log(data))})
const App=()=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div style={{textAlign:'center'}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      
    </div>
  )
}

export default App;
