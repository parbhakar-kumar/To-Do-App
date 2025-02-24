import React, { useState } from "react";

function RegistrationForm({ onSubmit, oncancel, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      Firstname: "",
      LastName: "",
      mobile: "",
      email: "",
      checkIn: "",
      checkout: "",
    }
  );
  const handleCancel = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedData = {
      ...formData,
      name: `${formData.Firstname} ${formData.LastName}`
    };
    console.log('Form submitted with data:', combinedData);
    onSubmit(combinedData);
  };

  return (
    <div>
      <form className="form"
        onSubmit={handleSubmit}
        action="Thanks for Submition"
    
      >
        <div>
          <table>Enter your FirstName</table>
          <input
            name="Firstname"
            type="text"
            placeholder="Enter your First name"
            value={formData.Firstname}
            onChange={handleCancel}
            required
          />
        </div>
        <div>
          <table>Enter your LastName</table>
          <input
            name="LastName"
            type="text"
            placeholder="Enter your Last name"
            value={formData.LastName}
            onChange={handleCancel}
            required
          />
        </div>
        <div>
          <table>Enter your MobileNumber</table>
          <input
            type="number"
            name="mobile"
            placeholder="Enter your MobileNumber"
            value={formData.mobile}
            onChange={handleCancel}
            required
          />
        </div>
        <div>
          <table>Enter your Email</table>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleCancel}
            required
          />
        </div>
        <div>
          <table>Enter your CheckIn</table>
          <input
            type="date"
            name="checkIn"
            placeholder="Enter your CheckIn"
            value={formData.checkIn}
            onChange={handleCancel}
            required
          />
        </div>
        <div>
          <table>Enter your CheckOut</table>
          <input
            type="date"
            name="checkout"
            placeholder="Enter your CheckOut"
            value={formData.checkout}
            onChange={handleCancel}
            required
          />
        </div>
        <div className="Action-forbg-amber-400   hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ">
          <button
            className="bg-amber-400   hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-1"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-amber-400   hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-1"
            type="cancel"
            onClick={oncancel}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
{
}
