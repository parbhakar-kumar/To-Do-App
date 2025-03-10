import React from "react";

function Table({ data = [], onEdit, onDelete }) {
  return (
    <div>
      <table className="t">
        <thead className="th">
          <tr>
            <th className="bg-amber-600 border-2 p-2  w-xl">Name</th>
            <th className="bg-amber-600 border-2 p-2  w-xl">Mobile Number</th>
            <th className="bg-amber-600 border-2 p-2  w-xl">Email</th>
            <th className="bg-amber-600 border-2 p-2  w-xl">checkIn</th>
            <th className="bg-amber-600 border-2 p-2  w-xl">checkOut</th>
            <th className="bg-amber-600 border-2 p-2  w-xl">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="bg-amber-400 border-2">{item.name}</td>
              <td className="bg-amber-400 border-2">{item.mobile}</td>
              <td className="bg-amber-400 border-2">{item.email}</td>
              <td className="bg-amber-400 border-2">{item.checkIn}</td>
              <td className="bg-amber-400 border-2">{item.checkOut}</td>
              <td  className="bg-amber-400 border-2">
                <button
                  className="bg-black mt-1 mb-1 mr-1 ml-1 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-black mt-1 mb-1 mr-1 ml-1 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
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
