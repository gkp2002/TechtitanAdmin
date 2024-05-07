import React, { useEffect, useReducer, useRef } from 'react'
import TotalData from '../TotalData/TotalData'
import  { useReactToPrint } from 'react-to-print';
function Database() {
  const componentPDF = useRef();
  const [value,fetchUpdate] = useReducer(x=>x+1,0);
    const [data, setData] = React.useState([])
    const [count,setCount] = React.useState(false)
    React.useEffect(()=>{
     fetch("https://techtitannodejs.onrender.com/list").then((resp)=>{
              return resp.json()
        }).then((rep)=>{
                 setData(rep);
                 fetchUpdate();
        })
     },[value])
  useEffect(()=>{
    if(data.length>0){
      setCount(true);
    }else{
      setCount(false)
      fetchUpdate()
    }
  },[data])
  const generatePdf = useReactToPrint({
    content:()=>componentPDF.current,
    documentTitle:"Userdata",
    // onAfterPrint:()=>alert("Data Printed")
  })
  
  return (
    <div>
    <div className='px-12 py-3'>
     <button className='bg-orange-800 px-8 rounded-3xl text-white py-2 font-medium text-xl' onClick={generatePdf}>Print</button>
    </div>
    <section ref={componentPDF} className={count?'py-7 px-6':" hidden"}>
    <div className="md:grid grid-cols-8 hidden text-black">
       <div className="px-2 py-1 flex justify-center items-center font-bold  text-xl    h-full relative overflow-ellipsis"> Sr</div>
       <div className="px-2 py-1 flex justify-center items-center font-bold  text-xl text-left   h-full relative overflow-ellipsis">Id</div>
       <div className="px-2 py-1 flex justify-center items-center font-bold  text-xl text-left   h-full relative overflow-ellipsis ">Name</div>
       <div className="px-2 py-1 flex justify-center items-center font-bold  text-xl text-left   h-full relative overflow-ellipsis">Comapny</div>
       <div className=" px-2 py-1 flex justify-center items-center font-bold  text-xl text-left    h-full relative overflow-ellipsis ">Email id</div>
       <div className="px-2 py-1 flex justify-center items-center font-bold  text-xl text-left  h-full relative overflow-ellipsis">Phone</div>
       <div className="px-2 py-1 flex justify-center items-center font-bold  text-xl text-left   h-full relative overflow-ellipsis">Project Detail</div>
       <div className="whitespace-nowrap px-7 py-3  flex justify-center items-center font-bold  text-xl">Buttons</div>
       </div>
       <hr className=' border-black border-2'/>

    {
      
      data.map((item,indx)=>{
        return <TotalData key={item._id} Sr={indx+1} id={item._id} Name={item.Name} Company={item.Company} Email={item.Email} Phone={item.Phone} Address={item.Address}/>
      })
      
    }
   
    </section>
    <section className={count?"hidden":'flex justify-center py-12 text-3xl font-bold'}>
       <div className=''>Data Not Found</div>
    </section>
    
    </div>
  )
}

export default Database
