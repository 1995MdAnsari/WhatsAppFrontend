import React,{Component} from "react";
import "./contactStyle.css";
import img from "../img/proimg.webp"
class ContactCom extends Component{
    render(){
        let {users} = this.props;
        console.log(users)
        return(
            <div className="col-4 header">
                    <div className="profile">
                        <img src={img} alt="Profile" />
                    </div>

                    <div className="search">
                        <input type="text" 
                        placeholder="Search or start new chat"
                        name="name" 
                        value={""} />
                    </div>

                <div className="contacts">
                    
                        {users.map((u)=>{
                            return(
                                <button className="col-12 details">
                                    <img src={u.img} /> <span className="name">{u.names}</span>
                                </button>
                            )
                        })}
                      
                </div>
                
            </div>
        )
    }
}
export default ContactCom;