import {useState,React }from 'react'
import "./new.scss"
import {Sidebar} from "../../components/Sidebar" 
import Navbar from "../../components/Navbar"
import  DriveFolderUploadOutlined  from '@mui/icons-material/DriveFolderUploadOutlined'


const New = ({title,inputs}) => {

  const[file,setFile]=useState("");
 

  return (
     <div className="new">
       <Sidebar/>
       <div className="newContainer">
         <Navbar/>
         <div className="top">
           <h1>{title}</h1>
         </div>

         <div className="bottom">
           <div className="left">
             <img src={file ? URL.createObjectURL(file): "https://cdn-icons-png.flaticon.com/512/171/171280.png"} alt="" />
           </div>

           <div className="right">
            <form >

            <div className="formInput">
               <label htmlFor='file'>
                 Image:<DriveFolderUploadOutlined className='icon'/>
                 </label>
                <input type="File" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}></input>
              </div>

              {inputs.map((input)=>(
                    <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type}placeholder={input.placeholder}></input>
                  </div>
              ))}

             
              <button>Send</button>

             </form> 
           </div>
         </div>
       </div>
     </div>
  )
}

export default New




