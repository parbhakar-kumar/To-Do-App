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
    onSubmit(combinedData);
  };

  return (
    <div>
      <form className="bg-indigo-100 shadow-xl ml-90 form rounded-3xl "
        onSubmit={handleSubmit}
        action="Thanks for Submission"
      >
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent"> <div className="text-2xl">Enter your FirstName:</div><input className="border-2" name="Firstname" type="text" placeholder="Enter your First name" value={formData.Firstname} onChange={handleCancel} required /> </div>
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent"> <div className="text-2xl">Enter your LastName:</div> <input className="border-2" name="LastName" type="text" placeholder="Enter your Last name" value={formData.LastName} onChange={handleCancel} required/></div>
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent"> <div className="text-2xl">Enter your MobileNumber:</div> <input className="border-2" type="number" name="mobile" placeholder="Enter your MobileNumber" value={formData.mobile} onChange={handleCancel} required /></div>
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent"> <div className="text-2xl">Enter your Email:</div> <input className="border-2" type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleCancel} required /></div>
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent"> <div className="text-2xl">Enter your CheckIn:</div> <input className="border-2" type="date" name="checkIn" placeholder="Enter your Check-In" value={formData.checkIn} onChange={handleCancel} required /></div>
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent"> <div className="text-2xl">Enter your CheckOut:</div> <input className="border-2" type="date" name="checkOut" placeholder="Enter your Check-Out" value={formData.checkOut} onChange={handleCancel} required /></div>
        <div className="gap-4 p-1.5 w-2xl m-0.5 text-conent">
          <button
            className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 "
            type="submit"
          >
            Submit
          </button>
          <button
            className="px-4 py-2 ml-1 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            type="button"
            onClick={oncancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
