import React from "react";

function Table({ data = [], onEdite, onDelete }) {
  return (
    <div>
      <table className="t">
        <thead className="th">
          <tr>
            <th className="bg-amber-600 border-3">Name</th>
            <th className="bg-amber-600 border-3">Mobile Number</th>
            <th className="bg-amber-600 border-3">Email</th>
            <th className="bg-amber-600 border-3">checkIn</th>
            <th className="bg-amber-600 border-3">checkOut</th>
            <th className="bg-amber-600 border-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="bg-amber-400 border-3">{item.name}</td>
              <td className="bg-amber-400 border-3">{item.mobile}</td>
              <td className="bg-amber-400 border-3">{item.email}</td>
              <td className="bg-amber-400 border-3">{item.checkIn}</td>
              <td className="bg-amber-400 border-3">{item.checkOut}</td>
              <td className="bg-amber-400 border-3">
                <button
                  className="bg-black-400 mt-1 mb-1 mr-1 ml-1 hover:bg-blend-color-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onEdite(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-black-400 mt-1 mb-1 mr-1 ml-1 hover:bg-blend-color-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
