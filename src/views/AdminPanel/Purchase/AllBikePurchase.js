import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackendUrl } from 'utils/config';
import { formatDate } from 'utils/TimeDate';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { generatePDF } from 'utils/generatePDF';
import { IconDownload } from '@tabler/icons-react';

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
  { id: 'bikeNo', label: 'Bike No', minWidth: 150 },
  {
    id: 'download',
    label: 'download',
    minWidth: 120
  }
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

  // -----------------------------------------------------
  return (
    <div className="flex flex-col gap-5 p-10 max-lg:p-6 max-md:p-0">
      <div>
        <h1 className="font-semibold text-3xl text-center max-md:text-md">All Bike Purchase</h1>
      </div>
      <div>
        {allBike.length > 0 ? (
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
                    <TableCell>{item.personName ?? 'NA'}</TableCell>
                    <TableCell>{item.mobileNo ?? 'NA'}</TableCell>
                    <TableCell>{item.panNo ?? 'NA'}</TableCell>
                    <TableCell>{item.aadharNo ?? 'NA'}</TableCell>
                    <TableCell>{item.cityName ?? 'NA'}</TableCell>
                    <TableCell>{item.registrationNo ?? 'NA'}</TableCell>
                    <TableCell>{formatDate(item.purchaseDate) ?? 'NA'}</TableCell>
                    <TableCell>{item.bikeNo ?? 'NA'}</TableCell>
                    <TableCell>
                      <button onClick={() => generatePDF(item)}>
                        <IconDownload />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <p className="text-center font-semibold text-2xl">No Bike Added</p>
        )}
      </div>
    </div>
  );
};
