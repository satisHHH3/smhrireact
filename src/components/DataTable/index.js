import React, { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiPencilBold } from "react-icons/pi";

import './index.css'

const columns = ['Id', 'Name', 'Email', 'Phone', 'Pincode', 'Address', ]; // Example column names

const ITEMS_PER_PAGE = 5; // Number of items per page

const DataTable = ({ data,onClickDeleterow }) => { // Destructure data from props
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (columnName) => {
    if (sortBy === columnName) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnName);
      setSortOrder('asc');
    }
  };

  const sortedData = () => {
    if (!sortBy) return data;

    return data.slice().sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === bValue) return 0;

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const onClickDelelte = (id) => {
    onClickDeleterow(id)
  }

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} onClick={() => handleSort(column)} style={{ cursor: 'pointer' }}>
                {column} {sortBy === column && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {sortedData().slice(startIndex, endIndex).map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td> 
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.pincode}</td>
      <td>{user.address}</td>
      <td>
        <button className='edit-button'>{<PiPencilBold size="12"/>}</button>
        <button className='delete-button' onClick={() => onClickDelelte(user.id)}>{<MdOutlineDeleteOutline size="12"/>}</button>
      </td>
    </tr>
  ))}
</tbody>
</table>
      <div className='page-container'>
          <p>Showing {currentPage + 1} to {totalPages} of {totalPages} entries</p>
          <div>
        <button onClick={prevPage} disabled={currentPage === 0} >
          Previous
        </button>
        <span>
          {currentPage + 1}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1} >
          Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;


/*const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5  
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
 const records = data.slice(firstIndex,lastIndex)
const npage = Math.ceil(data.length / recordsPerPage)
const nums = [...Array(npage + 1).keys()].slice(1)

  
*/