import React, { useState } from 'react';
import { FormControl, TextField, Button, TextareaAutosize, Select, MenuItem, InputLabel } from '@mui/material';
import { handleFileChange } from 'utils/imageUpload';
import { BackendUrl } from 'utils/config';
import axios from 'axios';

export const BikePurchaseForm = () => {
  const [purchaseForm, setPurchaseForm] = useState({
    personName: '',
    personPhoto: '',
    mobileNo: '',
    gender: '',
    panNo: '',
    panUpload: '',
    aadharNo: '',
    aadharFront: '',
    aadharBack: '',
    emailID: '',
    address: '',
    cityName: '',
    pinCode: '',
    registrationNo: '',
    purchaseDate: '',
    bikeNo: '',
    bikeUpload: '',
    remarks: '',
    engineNo: '',
    chasisNo: ''
  });

  const handleFieldChange = (e) => {
    // let name=e.target.name;
    setPurchaseForm({ ...purchaseForm, [e.target.name]: e.target.value });
  };
  const GenderOption = ['Male', 'Female', 'Other'];

  // image upload function
  const handleImageChange = async (e) => {
    let name = e.target.name;
    const link = await handleFileChange(e);
    setPurchaseForm({ ...purchaseForm, [name]: link });
  };
  const handleReset = () => {
    setPurchaseForm({
      personName: '',
      personPhoto: '',
      mobileNo: '',
      gender: '',
      panNo: '',
      panUpload: '',
      aadharNo: '',
      aadharFront: '',
      aadharBack: '',
      engineNo: '',
      chasisNo: '',
      emailID: '',
      address: '',
      cityName: '',
      pinCode: '',
      registrationNo: '',
      purchaseDate: '',
      bikeNo: '',
      bikeUpload: '',
      remarks: ''
    });
  };

  // Form Submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      personName: purchaseForm.personName == '' ? null : purchaseForm.personName,
      personPhoto: purchaseForm.personPhoto == '' ? null : purchaseForm.personPhoto,
      mobileNo: purchaseForm.mobileNo == '' ? null : purchaseForm.mobileNo,
      gender: purchaseForm.gender == '' ? null : purchaseForm.gender,
      panNo: purchaseForm.panNo == '' ? null : purchaseForm.panNo,
      panUpload: purchaseForm.panUpload == '' ? null : purchaseForm.panUpload,
      aadharNo: purchaseForm.aadharNo == '' ? null : purchaseForm.aadharNo,
      aadharFront: purchaseForm.aadharFront == '' ? null : purchaseForm.aadharFront,
      aadharBack: purchaseForm.aadharBack == '' ? null : purchaseForm.aadharBack,
      emailID: purchaseForm.emailID == '' ? null : purchaseForm.emailID,
      address: purchaseForm.address == '' ? null : purchaseForm.address,
      cityName: purchaseForm.cityName == '' ? null : purchaseForm.cityName,
      pinCode: purchaseForm.pinCode == '' ? null : purchaseForm.pinCode,
      registrationNo: purchaseForm.registrationNo == '' ? null : purchaseForm.registrationNo,
      purchaseDate: purchaseForm.purchaseDate == '' ? null : purchaseForm.purchaseDate,
      bikeNo: purchaseForm.bikeNo == '' ? null : purchaseForm.bikeNo,
      bikeUpload: purchaseForm.bikeUpload == '' ? null : purchaseForm.bikeUpload,
      remarks: purchaseForm.remarks == '' ? null : purchaseForm.remarks,
      engineNo: purchaseForm.engineNo == '' ? null : purchaseForm.engineNo,
      chasisNo: purchaseForm.chasisNo == '' ? null : purchaseForm.chasisNo
    };
    try {
      const { data } = await axios.post(`${BackendUrl}/bike/addBikePurchase`, body);
      if (data.status) {
        console.log(data);
        handleReset();
        window.alert(data.message);
      }
    } catch (err) {
      console.log(err.response?.data);
      window.alert(err.response?.data.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="">
          <h1 className="text-center font-semibold text-xl">Bike Purchase Form</h1>
        </div>
        {/* user Details */}
        <div className="bg-white p-4 rounded-xl relative">
          <span className="absolute -top-2 max-md: left-[50%] -translate-x-1/2 rounded-xl bg-blue-800 text-white text-xs max-md:text-[14px] px-2 py-1">
            User Details
          </span>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 p-4 rounded-xl">
            <FormControl fullWidth>
              <TextField
                value={purchaseForm.personName}
                onChange={handleFieldChange}
                type="text"
                id="outlined-basic"
                label="Person Name"
                name="personName"
                variant="outlined"
              />
            </FormControl>
            {purchaseForm.personPhoto == '' ? (
              <FormControl fullWidth>
                <TextField
                  onChange={handleImageChange}
                  type="file"
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="outlined-basic"
                  label="Person Photo"
                  name="personPhoto"
                  variant="outlined"
                />
              </FormControl>
            ) : (
              <div className="flex justify-between items-center">
                <img src={purchaseForm.personPhoto} alt="" className="h-16 w-16" />
                <button onClick={() => setPurchaseForm({ ...purchaseForm, personPhoto: '' })}>Remove</button>
              </div>
            )}
            <FormControl fullWidth>
              <TextField
                value={purchaseForm.mobileNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                type="number"
                label="Mobile No."
                name="mobileNo"
                variant="outlined"
                onWheel={(e) => e.target.blur()}
              />
            </FormControl>
            {/* --------------------- */}
            <FormControl fullWidth>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="demo-simple-select"
                label="Gender"
                name="gender"
                value={purchaseForm.gender}
                onChange={handleFieldChange}
                variant="outlined"
              >
                {GenderOption.map((item, i) => (
                  <MenuItem key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* -------------------------- */}
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.panNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Pan No."
                name="panNo"
                variant="outlined"
              />
            </FormControl>
            {purchaseForm.panUpload == '' ? (
              <FormControl fullWidth>
                <TextField
                  onChange={handleImageChange}
                  type="file"
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="outlined-basic"
                  label="Pan Upload"
                  name="panUpload"
                  variant="outlined"
                />
              </FormControl>
            ) : (
              <div className="flex justify-between items-center">
                <img src={purchaseForm.panUpload} alt="" className="h-16 w-16" />
                <button onClick={() => setPurchaseForm({ ...purchaseForm, panUpload: '' })}>Remove</button>
              </div>
            )}

            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.aadharNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Aadhar No."
                name="aadharNo"
                variant="outlined"
              />
            </FormControl>

            {purchaseForm.aadharFront == '' ? (
              <FormControl fullWidth>
                <TextField
                  onChange={handleImageChange}
                  type="file"
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="outlined-basic"
                  label="Aadhar Front"
                  name="aadharFront"
                  variant="outlined"
                />
              </FormControl>
            ) : (
              <div className="flex justify-between items-center">
                <img src={purchaseForm.aadharFront} alt="" className="h-16 w-16" />
                <button onClick={() => setPurchaseForm({ ...purchaseForm, aadharFront: '' })}>Remove</button>
              </div>
            )}
            {purchaseForm.aadharBack == '' ? (
              <FormControl fullWidth>
                <TextField
                  onChange={handleImageChange}
                  type="file"
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="outlined-basic"
                  label="Aadhar Back"
                  name="aadharBack"
                  variant="outlined"
                />
              </FormControl>
            ) : (
              <div className="flex justify-between items-center">
                <img src={purchaseForm.aadharBack} alt="" className="h-16 w-16" />
                <button onClick={() => setPurchaseForm({ ...purchaseForm, aadharBack: '' })}>Remove</button>
              </div>
            )}

            <FormControl fullWidth>
              <TextField
                type="email"
                value={purchaseForm.emailID}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Email ID."
                name="emailID"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.address}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Address"
                name="address"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.cityName}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="City Name"
                name="cityName"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.pinCode}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Pin Code"
                name="pinCode"
                variant="outlined"
              />
            </FormControl>
          </div>
        </div>

        {/* Bike Details */}
        <div className=" bg-white p-4 rounded-xl relative">
          <span className="absolute -top-2 max-md: left-[50%] -translate-x-1/2 rounded-xl bg-blue-800 text-white text-xs max-md:text-[14px] px-2 py-1">
            Bike Details
          </span>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4  p-4 rounded-xl">
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.registrationNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Registration No."
                name="registrationNo"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                value={purchaseForm.purchaseDate}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Purchase Date"
                name="purchaseDate"
                variant="outlined"
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.bikeNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Bike No."
                name="bikeNo"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.engineNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Engine No."
                name="engineNo"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                type="text"
                value={purchaseForm.chasisNo}
                onChange={handleFieldChange}
                id="outlined-basic"
                label="Chasis No."
                name="chasisNo"
                variant="outlined"
              />
            </FormControl>
            {purchaseForm.bikeUpload == '' ? (
              <FormControl fullWidth>
                <TextField
                  onChange={handleImageChange}
                  type="file"
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="outlined-basic"
                  label="Bike Upload"
                  name="bikeUpload"
                  variant="outlined"
                />
              </FormControl>
            ) : (
              <div className="flex justify-between items-center">
                <img src={purchaseForm.bikeUpload} alt="" className="h-16 w-16" />
                <button onClick={() => setPurchaseForm({ ...purchaseForm, bikeUpload: '' })}>Remove</button>
              </div>
            )}
          </div>
        </div>
        <div>
          <FormControl fullWidth>
            <TextareaAutosize
              minRows={4}
              placeholder="Remarks (Notes)"
              className="p-2"
              type="text"
              value={purchaseForm.remarks}
              name="remarks"
              onChange={handleFieldChange}
            />
          </FormControl>
        </div>
        <div className="flex justify-between">
          <Button onClick={handleFormSubmit}>Submit</Button>
          <Button> Cancel</Button>
        </div>
      </div>
    </div>
  );
};
