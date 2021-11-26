import React from 'react'

const Objetos = (x) =>{
    return(
        <p>
            Hola {x.userInfo.nombre} <br/>
            tu edad es {x.userInfo.edad} años<br/>
            tu color favorito es {x.userInfo.color}
        </p>
    )
}

export default Objetos;