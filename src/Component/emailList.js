import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllEmails,startGetEmail } from "../Actions/emailActions";
import "../App.css"; // Import your CSS file
import { removeEmail } from "../Actions/emailActions";
const EmailList = () => {
  const dispatch = useDispatch();
  const[toggle,setToggle]=useState(false)
  const[date,setDate]=useState('')

  useEffect(() => {
    dispatch(startGetAllEmails());
  }, [dispatch]);

  const emails = useSelector((state) => {
    return state.email.data;
  });
  console.log(emails,"RAKSHAN")
//   setSubject(emails)

  const handleClick=(id)=>{
    dispatch(startGetEmail(id))
    setToggle(!toggle)

  }
  if(!toggle){
    dispatch(removeEmail())
  }
  
  const one = useSelector((state)=>{
    return state.email.oneData
  })
  console.log(one,'nishan')
  
  const Data=emails.find((ele)=>{
    return ele.id===one.id
   })
  console.log(Data,"data")
 
  const handleFavorite=(id)=>{
    
  }

  return (
    <div>
      <div style={{backgroundColor:'#F4F5F9'}}> Filtered By :  <button className="btn">Unread</button><button className="btn">Read</button><button className="btn">Favourite</button> </div>
    <div style={{display:'flex',position:'relative',backgroundColor:'#F4F5F9'}}>
        
        <div className="email-list" style={!toggle?{maxWidth:'100%'}:{maxWidth:'30%'}}>
        {emails?.map((email, index) => (
            <div key={index} className="email-card" onClick={()=>{handleClick(email.id)}}
             style={one.id-1==index ? {borderColor:'red'} : {border:'none'}}>
            <div className="email-info" >
                <p>From: {email.from.name} ({email.from.email})</p>
                <p>Subject: {email.subject}</p>
                <p>{email.short_description}</p>
                <p>Date: {email.date}</p>
            </div>
            </div>
        ))}
        </div>
        {toggle && 
        <div style={{position:'relative'}}>
            <div className="email-form">
            <div className="btnFav">
                <h3>{Data?.subject}</h3>
                <button >Marks as Favourite</button>
            </div>
            <p>{Data?.date}</p>
            <p dangerouslySetInnerHTML={{ __html: one.body }} />
          </div>
        </div>  
        }

</div>
    </div>
  );
};

export default EmailList;
