import React from 'react';
import { FormControl, TextField, Button, TextareaAutosize } from '@mui/material';
export const BikePurchaseForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="">
          <h1 className="text-center font-semibold text-xl">Bike Purchase Form</h1>
        </div>

        {/* user Details */}
        <div className=" bg-white p-4 rounded-xl relative">
          <span className="absolute -top-2 max-md: left-[50%] -translate-x-1/2 rounded-xl bg-blue-800 text-white text-xs max-md:text-[14px] px-2 py-1">
            User Details
          </span>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 p-4 rounded-xl">
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Person Name" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Person Photo" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Mobile No." variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Gender" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Pan No." variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Pan Upload" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Aadhar No." variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Aadhar Upload" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Email ID." variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Address" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="City Name" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Pin Code" variant="outlined" />
            </FormControl>
          </div>
        </div>

        {/* Bike Details */}
        <div className=" bg-white p-4 rounded-xl relative">
          <span className="absolute -top-2 max-md: left-[50%] -translate-x-1/2 rounded-xl bg-blue-800 text-white text-xs max-md:text-[14px] px-2 py-1">
            Bike Details
          </span>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3  p-4 rounded-xl">
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Registration No." variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Purchase Date" variant="outlined" />
            </FormControl>

            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Bike No." variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="outlined-basic" label="Bike Upload" variant="outlined" />
            </FormControl>
          </div>
        </div>
        <div>
          <FormControl fullWidth>
            <TextareaAutosize minRows={4} placeholder="Remarks (Notes)" className="p-2" />
          </FormControl>
        </div>
        <div className="flex justify-between">
          <Button>Submit</Button>
          <Button> Cancel</Button>
        </div>
      </div>
    </div>
  );
};
