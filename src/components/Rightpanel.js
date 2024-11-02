import React from 'react'
import Notes from './Notes'
import Contacts from './Contacts'
import Event from './Event'

function Rightpanel() {
  return (
    <div style={{backgroundColor:"#FFB38E",minHeight:"100vh",textAlign:"center",
       position:"fixed",right:"0",width:"5vw"}}>
      <Event/>
      <br/>
      <Contacts/>
      <br/>
      <Notes/>
    </div>
  )
}

export default Rightpanel
