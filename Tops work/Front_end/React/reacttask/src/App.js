import React from 'react';
import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";
import React_css from "./CSS/React_css"
import Main_Jsx from "./Jsx/Main_Jsx";
import Main_layout from "./Layout/Main_layout";
import Module_css from "./Module_css/Module_css";
import Class_props from "./props/Class/Class_props";
import Func_props from "./props/Func/Func_props";
import Sass_css from './Sass_css/Sass_css';
import Main_classstate from "./state/Class/Main_classstate";
import Main_funcstate from "./state/Func/Main_funcstate";
import CurrencyConverter from "./state/Class/CurrencyConverter";



function App() {
  return (
    <div className="app-container">
      <React_css /> 
      <Class_component/>
      <Func_component/> 
      <Main_Jsx/>
      <Main_layout/>
      <Module_css/>
      <Class_props/>
      <Func_props/>
      <CurrencyConverter/>
      <Sass_css/>
      <Main_classstate/>
      <Main_funcstate/>

    </div>
  );
}

export default App;
