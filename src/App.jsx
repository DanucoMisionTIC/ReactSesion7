import React from 'react';
//import {Fragment} from 'react';
import Var from './components/Var_props'
import Obj from './components/Obj_props'
import Fun from './components/Fun_props'

const App = ()=>{
    //Por función
    const saludar = (nombre)=>{
        alert('hola ' + nombre)
    }

    //Por objetos
    const user ={
        nombre:'Mariana Gomez',
        edad: 2,
        color:'Negro'
    }
    
    //Por variables
    const nombre = 'Jose Rojas'
    const edad = 20
    return(
        <>
            <Var nombre = {nombre} edad = {edad}/>
            <Obj userInfo = {user}/>
            <Fun saludar = {saludar} userInfo = {user}/>
        </>
           
    )
}

export default App;