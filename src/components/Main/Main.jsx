import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input
    } = useContext(Context)


  return (
    <div className='main'>
        <div className='nav'>
            <p>GENZ-AI</p>
            <img src={assets.user_icon} />
        </div>
        <div className="main-container">
            {!showResult ?
            <>
            <div className="greet">
                <p><span>Hello, Genz.</span></p>
                <p>How can I assit you today</p>
            </div>
            <div className='cards'>
            <div className='card' onClick={() => {onSent("Suggest a beautiful place for an upcoming trip")}}>
                  <p>Suggest a beautiful place for an upcoming trip</p> 
                  <img src={assets.compass_icon} alt='' />
            </div> 
            <div className='card' onClick={()=> {onSent("summarize the concept: urban planning")}}>
                <p>Briefly: summarize the concept: urban planning</p>
                <img src={assets.bulb_icon} alt='' /> 
            </div>
            <div className='card'  onClick={()=>{onSent("Brainstorm team bonding activities for our work retreat")}}>
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
            </div>
            <div className='card' onClick={()=>{onSent("Improve readiability of the following code")}}>
                <p>Improve readiability of the following code</p>
                <img src={assets.bulb_icon} alt='' />     
            </div>
            </div>
            </> :
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt='' />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
            </div>

            }
            
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => {setInput(e.target.value)}}  value={input} type='text' placeholder='enter a prompt' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                       { input ? <img onClick={() => {onSent(input)}} src={assets.send_icon} alt="" />  : null }
                    </div>
                </div>
                <p className="bottom-info">
                    Genz-AI may display inaccurate info, including about people, so double check it response.(Gimini clone by AJibade-coder)
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main