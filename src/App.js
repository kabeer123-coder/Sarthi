import './App.css';
import React,{useState} from 'react'

function App() {

  const [Popup, setPopup] = useState(false)
  const [Table, setTable] = useState(false)
  const [FormData, setFormData] = useState({
    name:"",
    employeeId:'',
    department:'',
    email:'',
    doj:''

  })
  const [FormDetails, setFormDetails] = useState([])

  const HandlePopUp = () => {
    setPopup(true)
  }
  const PopupClose = () => {
    setPopup(false)
    setTable(false)
  }
  const FormSubmit = (e) => {
    // e.preventDefault();
    
    if(FormData.name && FormData.employeeId && FormData.department && FormData.doj && FormData.email){
      
      setPopup(false)
    setTable(true)
      setFormDetails((prev) => {
        return ([...prev,FormData])
      })
      setFormData({})
    }
    
    


  }
 

  const HandleName = (e) => {
    
    setFormData((prev) => {
      return{
        ...prev,
        name:e.target.value
      };
    })
  }
  const HandleDelete = (id) => {
    
    setFormDetails((prev) => {
      return prev.filter((arrEle,index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>Saarthi</h1>
      <button onClick = {HandlePopUp} className = "HomeButton">New Employee</button>

    {Popup=== true? (
      <div id="myModal" className ="modal">
   <div className="modal-content">
      
    <span className="close" onClick = {PopupClose}>&times;</span>
    <form className = "Form" >
    <label>Enter your Name  <input type = 'text' placeholder = "Enter your Name" onChange = {HandleName}  required/></label>
    <label>Enter your Employee ID  <input type = 'text' placeholder = "Enter your Employee ID" onChange = {(e) =>  {
      setFormData((prev) => {
        return {
          ...prev,
          employeeId:e.target.value
        };
    })}}  required/></label>
    <label>Department:  <select  onChange = {(e) =>  {
      setFormData((prev) => {
        return {
          ...prev,
          department:e.target.value
        };
      })}}>
              <option value="Engineering">Engineering</option>
              <option value="R & D">R & D</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Marketing">Marketing</option>
              <option value="Manager">Manager</option>
              </select></label>

    <label>Enter your Email-ID <input type = 'email' placeholder = "Enter your Email" onChange = {(e) =>  {
      setFormData((prev) => {
        return {
          ...prev,
          email:e.target.value
        };
      })}}/></label>          
    <label>Enter your Date OF Joining <input type = 'date' placeholder = "DoJ" onChange = {(e) =>  {
      setFormData((prev) => {
        return {
          ...prev,
          doj:e.target.value
        };
      })}}/></label>   

    <button type = 'submit' onClick = {FormSubmit}>Submit</button>
    <button  type = 'reset'>Reset</button>
    </form>
  </div>
</div>
    ):null
}
{Table === true? (
     <div id="myModal" className ="modal">
     <div className="modal-content">
     <span className="close" onClick = {PopupClose}>&times;</span>
     <table className = "Table">
<caption> <strong>New Hiring Details</strong></caption>
  <tr>
    <th>Name</th>
    <th>EmployeeID</th> 
    <th>Department</th>
    <th>Email Id</th>
    <th>DOJ</th>
  </tr>
  {
    FormDetails.map((value,index) => {
      return (
      <tr key = {index}>
         <td>{value.name}</td>
    <td>{value.employeeId}</td>
    <td>{value.department}</td>
    <td>{value.email}</td>
    <td>{value.doj}</td>
    <button onClick = {() => HandleDelete(index)}>delete</button>
      </tr>
      );
    })
  }
 
</table>
      
      </div>
      </div>
): null}




    </div>
  )
  
}

export default App;
