import { useEffect, useState } from 'react';
import axios from 'axios';
import LibraryButton from './LibraryButton';

const API_URL = 'http://localhost:8084/api/offices';

const OfficeList = () => {
  const [offices, setOffices] = useState([]);

  async function searchOffices(keyword) {
    const response = await axios.get(`${API_URL}/search`, {
      params: { keyword },
    });
    setOffices(response.data);
  }

  useEffect(() => {
    searchOffices('');
  }, []);

  async function deleteOffice(id) {
    const response = await axios.delete(`${API_URL}/${id}`);

    if (response.status == 204) {
      setOffices(offices.filter((office) => office.id !== id));
      alert('The office is deleted successful');
    } else alert('The office not deleted');
  }

  const cellStyle = { border: '1px solid #ccc', padding: '8px' };

  return (
    <div>
      <h1>Available Offices</h1>
      <input
        type="text"
        placeholder="Search by office name or number"
        onChange={(e) => searchOffices(e.target.value)}
      />
      <table style={{ borderCollapse: 'collapse', margin: '16px auto 0' }}>
        <thead>
          <tr>
            <th style={cellStyle}>Office Name</th>
            <th style={cellStyle}>Office Number</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {offices.map((office) => (
            <tr key={office.id}>
              <td style={cellStyle}>{office.name}</td>
              <td style={cellStyle}>{office.roomNumber}</td>
              <td style={cellStyle}>
                <LibraryButton buttonLabel="Update" />
                <LibraryButton
                  buttonLabel="Delete"
                  onClickButton={() => deleteOffice(office.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficeList;
