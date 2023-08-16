/* Bridge file b/w app component and index.html
From app component we get JSX(VDOM) and give it to reactDOM,to convert VDOM into DOM
*/
import  ReactDOM  from "react-dom/client";
import App from './App';
//DOM
const div=document.querySelector('#root');
const root=ReactDOM.createRoot(div);
root.render(<App/>);