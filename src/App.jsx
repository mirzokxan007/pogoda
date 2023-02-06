import axios from "axios";
import {useRef} from 'react';
import { useEffect,useState } from 'react';


function App() {
   let key = '514733d9efa114b7e1bbbcdf7e3d2a04';
   let [data,useData]=useState()
   let input=useRef();
  function handelInput(e){
    e.preventDefault();
    let inputValue=input.current.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=514733d9efa114b7e1bbbcdf7e3d2a04&units=metric`)
   .then(function (response) {
    useData(response.data);
    })
    .catch(function (error) {
      alert("Undefined")
    })
  }
  console.log(data);
  return (
    <div className='d-flex  flex-column align-items-center justify-content-center'> 
    <div className="weather   p-5 w-50">
      <form onSubmit= {(e)=> handelInput(e)}>
      <h1 className="text-center pb-3">What`s the weather like?</h1>
      <div className="input-group mb-3">
        <input ref={input} type="text" className="form-control" placeholder="City Name" aria-label="Recipient's username"/>
        <button className="btn btn-primary  " type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      </form>
      <div className=" d-flex justify-content-between">
        <div className="video w-50">
          <video autoPlay loop className="video w-100" src={data?.weather?.[0]?.main==="Rain" ? "/rain.mp4" : data?.weather?.[0]?.main==="Snow" ?  "/snowt.mp4" : data?.weather?.[0]?.main==="Clear" ? "/sky.mp4" : data?.weather?.[0]?.main==="Clouds" ? "/wind.mp4" : data?.weather?.[0]?.main==="Wind" ? "/wind.mp4" :""} alt="" />
        </div>
        <ul className="w-50">
          <li><h2 className="h2">{data?.name}</h2></li>
          <li><h3 className="h2">{data?.main?.temp} C</h3></li>
          <li><h4 className="h2">{data?.weather?.[0]?.main}</h4></li>
          <li><p className="h2">{data?.weather?.[0]?.description}</p></li>
        </ul>
      </div>

    </div>
    </div>
  )
}

export default App
