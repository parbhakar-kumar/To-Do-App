import React from "react";

function Table({ data = [], onEdite, onDelete }) {
  return (
    <div >
      <table class="border-width: 1px;" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>checkIn</th>
          <th>checkOut</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((Item, index) => {
          <tr key={index}>
            <td>{Item.Name}</td>
            <td>{Item.MobileNumber}</td>
            <td>{Item.checkIn}</td>
            <td>{Item.checkOut}</td>
            <td>
              <button onClick={() => onEdite(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>;
        })}
      </tbody>

      </table>
          </div>
  );
}

export default Table;
