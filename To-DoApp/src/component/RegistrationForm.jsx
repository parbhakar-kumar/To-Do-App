import React,{useState} from 'react'

function RegistrationForm({onSubmit,oncancel,initialData}) {
  const [formData, setFormData] = useState(initialData || {
    Firstname: "",
    Listname:"",
    mobile: "",
    email: "",
    checkIn: "",
    checkout: ""
  });
  const hendelCancel=(e)=>{
    const{name,value}=e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }));
  }
const hendelSubmit=(e)=>{
  e.preventDeflot();
  onsubmit(formData);
};


  return (
    <div>
      <form onSubmit={hendelSubmit}action="Thanks for Submition"className='Registion-form'>
        <div>
          <table>Enter your FirstName</table>
          <input name='firstname'placeholder='Enter your First name'value={formData.Firstname}onChange={hendelCancel}required />
        </div>
        <div>
          <table>Enter your LastName</table>
          <input name='lastname'placeholder='Enter your Last name'value={formData.Firstname}onChange={hendelCancel}required />
        </div>
        <div>
          <table>Enter your MobileNumber</table>
          <input type="number"name='modil'placeholder='Enter your MobileNumber'value={formData.mobile}onChange={hendelCancel}required />
        </div>
        <div>
          <table>Enter your Email</table>
          <input type="email" name='email'placeholder='Enter your Email'value={formData.email}onChange={hendelCancel}required />
        </div>
        <div>
          <table>Enter your CheckIn</table>
          <input type="date"name='checkin'placeholder='Ener your CheckIn'value={formData.checkIn}onChange={hendelCancel}required />
        </div>
        <div>
          <table>Enter your CheckOut</table>
          <input type="date"name='checkout'placeholder='Enter your CheckOut'value={formData.checkout}onChange={hendelCancel}required/>  
        </div>
        <div className='Action-form' >
          <button type='Submit'>Submit</button>
          <button type='cancel'onClick={oncancel}>cancel</button>
        </div>

      </form>
    </div>
  )
}

export default RegistrationForm
{}