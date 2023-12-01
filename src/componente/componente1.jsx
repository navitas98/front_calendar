import React from "react"
import {useEffect,useState} from "react"
import axios from "axios"

export default function Forma_Calendario(props){

    return(
        <div>
          {props.visible ?(
              <div className="imagenBuena">
                <div className="Imagen">
                  <img src={props.imagen} alt="" />
                </div>
                <div className="Info">
                  <h1>Premio: {props.nombre}</h1>
                  <p>{props.descripcion}</p>

                </div>
            </div>
          ):(
            <img  src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"alt></img>
          )
          
          }
       
      </div>
    )
}