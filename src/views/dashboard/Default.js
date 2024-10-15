import React from 'react';
import { IconMotorbike, IconShoppingCart } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const Default = () => {
  const navigate = useNavigate();

  //   path: 'bikeSalse',
  //   path: 'allBikePurchase',

  return (
    <div className="flex items-center justify-center flex-col h-full w-full  p-10 gap-16 max-lg:p-4 max-lg:gap-4">
      <h1 className="text-center text-3xl font-semibold">Welcome to Bike World</h1>
      <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 w-72 justify-center items-center ">
        <div className=" p-4 flex justify-center items-center hover:bg-white hover:scale-150">
          <button className="flex flex-col gap-2 items-center justify-center" onClick={() => navigate('/bikePurchaseForm')}>
            <IconMotorbike />
            <span>Purchase Bike Form</span>
          </button>
        </div>
        <div className=" p-4 flex justify-center items-center hover:bg-white hover:scale-150">
          <button className="flex flex-col gap-2 items-center" onClick={() => alert('Work In Progress')}>
            <IconMotorbike />
            <span>Sell Bike</span>
          </button>
        </div>
        <div className=" p-4 flex justify-center items-center hover:bg-white hover:scale-150">
          <button className="flex flex-col gap-2 items-center" onClick={() => alert('Work In Progress')}>
            <IconMotorbike />
            <span>Purchase Report</span>
          </button>
        </div>
        <div className=" p-4 flex justify-center items-center hover:bg-white hover:scale-150">
          <button className="flex flex-col gap-2 items-center" onClick={() => alert('Work In Progress')}>
         
            <IconMotorbike />
            <span>Sell Report</span>
          </button>
        </div>
      </div>

      <h1 className="text-center text-lg font-semibold">Developed By - PhoTech It Solution Present</h1>
    </div>
  );
};
export default Default;
