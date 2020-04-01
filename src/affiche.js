import React from 'react'
import './affiche.css'


function Affiche(props){
    const cont=props.cont
    return (
        <div className="credit-credit-content">
          <img alt={cont.alt} src="https://raw.githubusercontent.com/AhmedKn/photo-credit/master/ehsMo9P.png"></img>
        <input className="setnumber-input" value={cont.setNumber}></input>
        <input className="setmmyy-input" value={cont.setMMYY} ></input>
        <input className="setname-input" value={cont.setName}></input>
        </div>
          )}

export default Affiche;