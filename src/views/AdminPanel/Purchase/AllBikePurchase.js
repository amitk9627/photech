import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendUrl } from 'utils/config';
import { formatDate } from 'utils/TimeDate';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const columns = [
  {
    id: 'personName',
    label: 'Person Name',
    minWidth: 150
  },
  {
    id: 'mobileNo',
    label: 'Mobile No',
    minWidth: 150
  },
  {
    id: 'aadharNo',
    label: 'Aadhar No',
    minWidth: 150
  },

  {
    id: 'address',
    label: 'Address',
    minWidth: 150
  },
  {
    id: 'cityName',
    label: 'City Name',
    minWidth: 150
  },

  {
    id: 'registrationNo',
    label: 'Registration No',
    minWidth: 150
  },
  {
    id: 'purchaseDate',
    label: 'Purchase Date',
    minWidth: 150
  },
  { id: 'bikeNo', label: 'Bike No', minWidth: 150 }
];
export const AllBikePurchase = () => {
  const [allBike, setAllBike] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios(`${BackendUrl}/bike/getBikePurchase`);
      if (data.status) {
        setAllBike(data.result);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 p-10 max-lg:p-6 max-md:p-0">
      <div>
        <h1 className="font-semibold text-3xl text-center max-md:text-md">All Bike Purchase</h1>
      </div>
      <div>
        <TableContainer component={Paper} style={{ maxHeight: 450 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allBike.map((item, Index) => (
                <TableRow hover key={Index}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.id == 'purchaseDate' ? formatDate(item[column.id]) : item[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
