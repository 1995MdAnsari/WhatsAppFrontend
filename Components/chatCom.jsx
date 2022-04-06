import React, {Component} from "react";
import "./chatStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMicrophone,faSearch,faGripVertical} from "@fortawesome/free-solid-svg-icons";

class ChatCom extends Component{
    state = {

    }
    render() {
        return(
            <div className="col-lg-8 col-md-8 col-sm-8 chatSection">


                <div className="userInfo">
                    <div className="ImgName">
                        <img src={""} alt="Image" /> 
                        <span className="names">name</span>
                    </div>
                    <div className="searchIcon">
                     <span><FontAwesomeIcon icon={faSearch} /></span>
                     <span><FontAwesomeIcon icon={faGripVertical} /></span> 
                    </div>
                     
                </div>

                <div className="chatSection">
                    <div className="message">Message</div>
                </div>


                <div className="chatInput">
                    <div className="icon">
                        <img src={require('../img/emoji.png')} />
                    </div>
                    <div className="icon"></div>
                    <div className="msgInput">
                        <input 
                        type="text"
                        name=""
                        value={""}
                        placeholder="Type a message"
                        />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatCom;