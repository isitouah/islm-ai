import React, { useContext, useState } from 'react'
import './Sidebar.css'

import {  assets } from  "../../assets/assets"
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extend, setExtend] = useState(false)

    const {
        onSent,
        prevPrompt,
        setRecentPrompt,
        newChatBtn
    } = useContext(Context)


    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => {setExtend(prev => !prev)}} className = 'menu' src={assets.menu_icon} alt='' />
            <div onClick={() => {newChatBtn()}} className="new-chat">
                <img src={assets.plus_icon} alt=""  />
                {extend ? <p>New Chat</p> : null}
            </div>
            {extend ?
            
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                 {
                    prevPrompt.map((data, index) => {
                        return (
                    <div  onClick = {() => {loadPrompt(data)}} key={index} className="recent-entry">
                        <img src={assets.message_icon} alt='' />
                        <p>{data.slice(0,18)}...</p>
                    </div>
                        )
                    })
                }
               
            </div> : null
            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
               {extend ? <p>Help</p> : null }
            </div>
             <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extend ? <p>Activity</p> : null }
            </div>
             <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
               {extend ? <p>Settings</p> : null }
            </div>

        </div>
    </div>
  )
}

export default Sidebar