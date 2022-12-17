import React, {Fragment, useState, useEffect }from 'react';
import './css/contact.css'
import * as AiIcons from 'react-icons/ai'
import * as HiIcons from 'react-icons/hi'

const Contact=()=>{
 const [name, setName]=useState('');
 const [email, setEmail]=useState('');
 const [message, setMessage]=useState('');
 const getForm="https://getform.io/f/6e2a8e26-6db2-49c4-87a6-9ac3480f1170" 
 const [successful,setSuccessful]=useState(false)
 const sentMessage=(e)=>{
  
  setTimeout(()=>{
  e.preventDefault()
    setSuccessful(true)
    setName('')
    setEmail('')
    setMessage('')
    
  },1100)
    
  
}
  return(

  <Fragment>
    <section id='contact'className='contact'>
    
      <form 
      action={getForm}
      method='POST'
      className="contact-form"
      onSubmit={(e)=>{sentMessage(e)}}
      >
        <h2 className='about-title contact-form-title'>Contact <span className='about-title-orange'>me</span></h2>
        
          <label  className="form-label"><HiIcons.HiUser style={{marginInlineEnd: "1rem"}}/>Name</label>
          <input 
          name='name'
          onChange={(e)=>{setName(e.target.value)}}
          className='form-control'
          type="text"
          required
          placeholder='John Wayne'
          value={name}/>
        
        <label className="form-label"><AiIcons.AiOutlineMail  style={{marginInlineEnd: "1rem"}}/>Email address</label>
        <input 
        name='email'
        onChange={(e)=>{setEmail(e.target.value)}}
        className='form-control'
        type="email" 
        id="email"
        required 
        value={email}
        placeholder='example@youremail.com' />
        
        <label className="form-label"><AiIcons.AiOutlineMessage style={{marginInlineEnd: "1rem"}}/>Message</label>
        <textarea 
        name='message'
        onChange={(e)=>{setMessage(e.target.value)}}
        id='form-textarea'
        className='form-control' 
        type="text" 
        value={message}
        placeholder='Leave Your Message Here' 
        required />

        <div className='contact-form-buttonContainer mt-3'>
          <input id='contact-form-button__sent' type="submit" className='btn btn-primary ' value="Sent" />
          <input id='contact-form-button__clear'type="submit" className='btn btn-danger'  value="Clear" />
        </div>
      </form>
      
    </section>
    { successful?
                  <div 
                  style={{marginTop: "4rem",textAlign:'center'}}
                  className="alert alert-success" role="alert">
                  Thanks for Your Message
                  </div>:<span/>}
  </Fragment>
)
}

export default Contact