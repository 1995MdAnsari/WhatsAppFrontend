import React, {Component} from "react";
import ContactCom from "./contactCom";
import ChatCom from "./chatCom";
import "./style.css";



class MainComponent extends Component{
    state = {
        users : [
            {img:"https://www.pngitem.com/pimgs/m/50-503554_business-girl-png-business-woman-images-png-transparent.png", names:"Anna",day:""},
            {img:"https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg", names:"Smith",day:""},
            {img:"https://freerangestock.com/sample/127694/indian-man-.jpg", names:"Jack",day:""},
            {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApNrapgj2zujVlrPz3VS7JcX3JAQXx3pNg79Ft8mKWIzgmbGrULGw2PYbQcvtuEkajPQ&usqp=CAU", names:"Dolly",day:""},
            {img:"https://png.pngitem.com/pimgs/s/179-1796406_thinking-man-download-transparent-png-image-man-thinking.png", names:"Bob",day:""},
            {img:"https://files.oyebesmartest.com/uploads/large/indian-girl-png-transpak6ktt.png", names:"Ankita",day:""},
            {img:"https://wallpapercave.com/wp/vHkAv20.jpg", names:"Rubel",day:""},
            {img:"https://wallpaperaccess.com/full/148091.jpg", names:"Lakhan",day:""},
        ]
    }
    render(){

        let  {users} = this.state;
        return(
            <section>
                <div className="container">
                    <ContactCom  users={users}/>
                    <ChatCom/>
                </div>
            </section>

        )
    }
}
export default MainComponent;