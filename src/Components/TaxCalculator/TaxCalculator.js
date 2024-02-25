import React, { useEffect, useState } from "react";

const TaxCalculator = () => {
    

    const [purchasePrice,setPurchasePrice] =useState(20000);
    const [salsePrice,setSalePrice]=useState(30000);
    const [expense,setExpense]=useState(5000);
    const [annualIncome,setAnnualIncome]=useState(12000);
    const [capitalGain,setCapitalGain]=useState(undefined);
    const [discount,setDiscount]=useState(0);
    const [netCapital,setNetCapital]=useState(2500);
    const [taxPay,setTaxPay]=useState(245.21);
    const [shortterm ,setShortTerm]=useState(false);
    const [longTerm ,setLongTerm]=useState(false);
    const [taxRate,setTaxRate]=useState(undefined);

    useEffect(()=>{
        setCapitalGain(salsePrice-purchasePrice-expense);
        if(capitalGain> 0 ){
            setDiscount(50);
        }
        setNetCapital(capitalGain/2);
        
    },[])

    useEffect(()=>{
          
    },[annualIncome])



  return (
    <div className="rounded-xl bg-white w-[73%] p-6  flex flex-col items-center gap-4 px-14 max-md:w-full  max-md:p-3">
      {/* -------------heading ------------------  */}
      <h1 className="text-4xl font-bold max-md:text-2xl text-center">
        Free Crypto Tax Calculator - Australia
      </h1>

      {/* ---------------year and country-------------------  */}
      <div className="py-3 flex gap-4 justify-between w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full flex flex-nowrap items-center">
          <label className="text-[15px] px-2 w-max">Financial Year</label>
          <select className="bg-[#EFF2F5] p-[11px] px-4 rounded-md font-semibold w-full ">
            <option className="font-semibold w-1/2 max-md:w-full"> FY 2023-24</option>
          </select>
        </div>

        <div className="w-1/2 flex flex-nowrap items-center max-md:w-full">
          <label className="text-[15px] px-2 w-max">Country</label>
          <select className="bg-[#EFF2F5] p-[11px] px-4 rounded-md font-semibold w-full">
            <option className="font-semibold"> Australia</option>
          </select>
        </div>
      </div>

      <hr className="w-full" />

      {/* --------------------inputs ------------------- */}
      <div className="py-3 flex gap-4 justify-between w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <p>Enter purchase price of Crypto </p>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e)=>setPurchasePrice(e.target.value)}
            className="p-2 rounded-md w-full bg-[#EFF2F5] my-1 font-bold"
          />
        </div>
        <div className="w-1/2 max-md:w-full">
          <p>Enter sale price of Crypto </p>
          <input
            type="number"
            value={salsePrice}
            onChange={(e)=>setSalePrice(e.target.value)}
            className="p-2 rounded-md w-full bg-[#EFF2F5] my-1 font-bold"
          />
        </div>
      </div>

      {/* ---------------------expense investment type------------------- */}

      <div className="py-3 flex gap-4 justify-between w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <p>Enter Expenses </p>
          <input
            type="number"
            value={expense}
            onChange={(e)=>setExpense(e.target.value)}
            className="p-2 rounded-md w-full bg-[#EFF2F5] my-1 font-bold"
          />
        </div>
        <div className="w-1/2 max-md:w-full">
          <p>Investment Type </p>
          <div className="flex gap-4">
            <div className="w-1/2  " onClick={()=>setShortTerm(!shortterm)}>
              {
                shortterm? <button className="text-blue-700 border-2 border-solid border-blue-700 w-full p-2 m-2 rounded-lg text-left text-lg font-medium">
                Short Term
              </button>:
              <button className="text-gray-700 border-[1px] border-solid border-gray-700 w-full p-2 m-2 rounded-lg text-left text-lg font-medium">
              Short Term
            </button>
              }
              <p className="ml-2  text-[11px]">less than 12 months</p>
            </div>
            <div className="w-1/2  " onClick={()=>setLongTerm(!longTerm)}>
              {
                longTerm?<button className=" text-blue-700 border-2 border-solid border-blue-700 w-full p-2 m-2 rounded-lg text-left text-lg font-medium">
                Long Term
              </button>:
              <button className=" text-gray-700 border-[1px] border-solid border-gray-700 w-full p-2 m-2 rounded-lg text-left text-lg font-medium">
              Long Term
            </button>
              }
              <p className="ml-2 text-[11px]">Greater than 12 months</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------capital gain-------------------- */}
      {
        longTerm ?
        <div className="py-3 flex gap-4 justify-between w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <p>Capital Gain Amount </p>
          <input
            type="number"
            value={capitalGain}
            onChange={(e)=>setCapitalGain(e.target.value)}
            className="p-2 rounded-md w-full bg-[#EFF2F5] my-1 font-bold"
          />
        </div>
        <div className="w-1/2 max-md:w-full">
          <p>Discount for long term Gain </p>
          <input
            type="number"
            value={salsePrice}
            onChange={(e)=>setSalePrice(e.target.value)}
            className="p-2 rounded-md w-full bg-[#EFF2F5] my-1 font-bold"
          />
        </div>
      </div>:null
      }

      {/* ---------------------------Annual income tax rate--------------------------------- */}
      <div className="py-3 flex gap-4 justify-between w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <label className="text-[15px] px-2 w-max">Select Annual Income</label>
          <input type="number" className="bg-[#EFF2F5] p-[11px] px-4 rounded-md  w-full font-bold" value={annualIncome} onChange={(e)=>setAnnualIncome(e.target.value)}/>
            
           
          
        </div>
        <div className="w-1/2 text-sm p-4 max-md:w-full">
          <p>Tax rate</p>
          <p>= $5092 + 32.5% of excess over $45000</p>
        </div>
      </div>

      {/* ---------------------------Annual income tax rate--------------------------------- */}
      <div className="py-3 flex gap-4 justify-between w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full bg-[#EFF2F5] rounded-lg p-4 text-center">
            <h2 className="font-semibold text-lg">Net capital gain Tax Amount</h2>
            <p className="font-bold text-xl text-green-600 p-2"> $ {netCapital} </p>
          
        </div>
        <div className="w-1/2 max-md:w-full rounded-lg p-4 bg-[#EFF2F5] text-center">
        <h2 className="font-semibold text-lg">Tax you need to pay*</h2>
            <p className="font-bold text-xl text-blue-600 p-2" > $ {taxPay} </p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
