import React, { useState } from "react";

function RegistrationForm({ onSubmit, oncancel, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      Firstname: "",
      LastName: "",
      mobile: "",
      email: "",
      checkIn: "",
      checkOut: "",
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
      name: `${formData.Firstname} ${formData.LastName}`,
    };
    console.log("Form submitted with data:", combinedData); // Log the submitted data
    onSubmit(combinedData);
  };

  return (
    <div>
      <form className="m-6"
        onSubmit={handleSubmit}
        action="Thanks for Submition"
      >
        <div className="gap-4xl p-3 w-3xl m-1.5"> <div className="text-2xl">Enter your FirstName:</div><input className="border-2"name="Firstname"type="text"placeholder="Enter your First name"value={formData.Firstname}onChange={handleCancel}required /> </div>
        <div className="gap-4xl p-3 w-3xl m-1.5"> <div className="text-2xl">Enter your LastName:    </div> <input className="border-2" name="LastName" type="text" placeholder="Enter your Last name" value={formData.LastName} onChange={handleCancel} required/></div>
        <div className="gap-4xl p-3 w-3xl m-1.5"> <div className="text-2xl">Enter your MobileNumber:</div> <input className="border-2" type="number" name="mobile" placeholder="Enter your MobileNumber" value={formData.mobile} onChange={handleCancel} required /></div>
        <div className="gap-4xl p-3 w-3xl m-1.5"> <div className="text-2xl">Enter your Email:       </div> <input className="border-2" type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleCancel} required /></div>
        <div className="gap-4xl p-3 w-3xl m-1.5"> <div className="text-2xl">Enter your CheckIn:     </div> <input className="border-2" type="date" name="checkIn" placeholder="Enter your Check-In" value={formData.checkIn} onChange={handleCancel} required /></div>
        <div className="gap-4xl p-3 w-3xl m-1.5"> <div className="text-2xl">Enter your CheckOut:     </div> <input className="border-2" type="date" name="checkOut" placeholder="Enter your Check-Out" value={formData.checkOut} onChange={handleCancel} required /></div>
        <div className="gap-4xl p-3 w-3xl m-1.5">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  ml-1 rounded"
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
