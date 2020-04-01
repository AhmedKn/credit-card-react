import React from 'react'
import Affiche from './affiche.js'
import './credit-card.css'


class Credit extends React.Component{
    constructor(props){
      super(props)
      this.state = {
      Number:'' ,
      Name :'',
      MMYY : '',
      setNumber:'⚫⚫⚫⚫ ⚫⚫⚫⚫ ⚫⚫⚫⚫ ⚫⚫⚫⚫',
      setName:'',
      setMMYY:'⚫⚫/⚫⚫',
      alt:'photo'
      }
      
    }
  render(){
 return(
   <div className="credit-card">
            <Affiche cont={this.state}/>
      <from className="form">
        <input className="number-input" value={this.state.Number} type="text" placeholder="card Number" onKeyUp={this.numchanger.bind(this)} onKeyDown={this.numchanger.bind(this)} onChange={this.hundleNumber.bind(this)}  />
        <input className="name-input" value={this.state.Name} name="Name" type="text" placeholder="Name"  onKeyUp={this.namchanger.bind(this)} onKeyDown={this.namchanger.bind(this)} onChange={this.hundleName.bind(this)}/>
        <input className="mmyy-input" value={this.state.MMYY} name="MMYY" type="tel" placeholder="MM/YY" onKeyUp={this.mychanger.bind(this)} onKeyDown={this.mychanger.bind(this)} onChange={this.myhandle.bind(this)}/>
        </from>
   </div> 
   )
  }


  numchanger(e){
setInterval(() => (this.setState({Number : this.state.Number.slice(0,19)})))
setInterval(() => (this.setState({Number : this.state.Number.replace(/[^\d1-9]/g, '').replace(/(.{4})/g, '$1 ').trim()
})))

this.setState({setNumber: this.state.Number})
var x = this.state.Number.replace(' ','').replace(' ','').replace(' ','')
this.setState({setNumber : x.padEnd(16,'⚫').replace(/(.{4})/g, '$1 ').trim()})

}



namchanger(e){
var regex = /[^a-z]/gi;
setInterval(() => (this.setState({Name : this.state.Name.replace(regex,'')})))
setInterval(() => (this.setState({Name : this.state.Name.slice(0,20)})))
this.setState({setName: this.state.Name.toUpperCase()})

  

}


mychanger(e){
  
    (this.setState({MMYY: this.state.MMYY.replace(/[^\d1-9]/g, '').replace(/(.{2})/, '$1/').trim()}));
    setInterval(() => (this.setState({MMYY : this.state.MMYY.slice(0,5)})))
// eslint-disable-next-line
if(this.state.MMYY.slice(0,2) == '00' || Number(this.state.MMYY.slice(0,2)) > 12){
this.setState({MMYY : this.state.MMYY.replace(this.state.MMYY.slice(0,2),'')})
}

setInterval(() => {var x = this.state.MMYY.replace('/','')
this.setState({setMMYY : x.padEnd(4,'⚫').replace(/(.{2})/, '$1/').trim()})}, 0);
}


hundleNumber(event){
this.setState({Number:event.target.value});
}


hundleName(event){
    this.setState({Name:event.target.value});
}

myhandle(event){
    this.setState({MMYY:event.target.value});
}
}

export default Credit;