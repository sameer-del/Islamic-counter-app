import {useState} from 'react';
import './App.css';
import React from 'react';
import Notes from './Notes';

function App() {
  const [counter,setcounter] = useState(0);
  const increment =() =>{
    setcounter(counter + 1);
  }
  const decrement = () =>{
    if (counter > 0) {
      setcounter(counter - 1);
    }
  }
  const restart = () =>{
    setcounter(0);
  }
  return (
    <div className="App  ">
      <section className='h-[90vh]'>
        <h1 className='text-[45px] font-bold text-center ml-[1rem] pt-5 text-white'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
        <div className=' absolute w-[100px] h-[4px]  bg-white  right-[150px] top-[90px] lg:hidden'></div>
     <div className="container-watch flex flex-col justify-center items-center h-full">
     <div className="watch w-[350px] h-[350px] flex flex-col rounded-[25%] bg-[#5F37AA] mt-[1rem] lg:bg-[#EFB495]">
      <div className="flex justify-center flex-1 items-center">
      <p className='w-[250px] h-[80px] rounded-[30px] bg-[#E1E0E0]  flex items-center justify-center text-[50px] font-bold'> {counter}</p>
      </div>
      <div className='flex-1 flex justify-center items-center gap-[50px]'>
      <button onClick={decrement} className='btn'>-</button>
      <button onClick={increment} className='btn'>+</button>
      </div>
      </div>
      <button className=' restart w-[150px]  bg-[#5D3BDF] lg:bg-[#EFB495] text-black  mt-[3.5rem] px-[15px] py-[10px] rounded-[15px] flex items-center justify-center text-[25px] uppercase' onClick={restart}>restart</button>
      
     </div>
     </section>
     <Notes/>
   </div>
   
   
  );
}

export default App;
