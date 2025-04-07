import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";
import React_css from "./CSS/React_css";
import Main_Jsx from "./Jsx/Main_Jsx";
import Main_layout from "./Layout/Main_layout";
import Module_css from "./Module_css/Module_css";
import Class_props from "./props/Class/Class_props";
import Func_props from "./props/Func/Func_props";

/*
Download & use Extension in React 

es7 + react
JavaScript and React/Redux snippets in ES7+ with Babel plugin features for VS Code
Short code for program 
imr    : import react
imrc : import react with component

rfce : create function component
rce : create class component
rcc :  create class component with export
rcep  : create class component with proptype

*/

function App() {
  return (
    <div>
       <Main_layout/>
       <Main_Jsx/>

        

      <Func_component/>
      <Class_component/>


    

        
        <Func_props/>
        <Class_props/>

      <React_css/>
       <Module_css/>

    </div>
  );
}

export default App;
