import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import PurplePill from "../assets/darkpurplepill.jpg"

import { serverUrl } from '../../config.js';
import axios from 'axios';

const IntroForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState("");
  const [progress, setProgress] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();


  const submitForm = async () => {
    try {
    console.log(firstName, lastName, age, email, focus, progress);
    if (firstName == "" || lastName == "" || age == "" || email == "" || focus == "" || progress == "") {
      setError("You must answer all fields!");
      return;
    }
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      currentFocus: focus,
      currentProgress: progress
    }

    const response = await axios.post(`${serverUrl}/forms/`, data);
    console.log(response);
    navigate('/finished')
    } catch (e) {
      setError("Something went wrong while submitting the form...")
      console.log(e);
    }
  }
  return (
    <div className='bg-[#1b0f3f] pb-[200px]'>
        <div className="flex flex-col items-center gap-5 pt-[50px]">
          <img src={PurplePill} className='w-[140px] h-[140px] rounded-[50%]' />
          <div className="text-5xl font-montserrat text-center text-white">DARK PURPLE PILL</div>
          <div className="text-xl font-montserrat text-center text-white">Tell us about yourself.</div>
          {/* Form */}
          <div className='flex flex-col items-center gap-2 w-[400px]'>
            {/* First Name */}
            <input type="text" 
            className='px-2 py-1 bg-[#13003a] text-white outline-none w-[200px]' 
            placeholder='First Name' 
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            />
            {/* Last Name */}
            <input type="text" 
            className='px-2 py-1 bg-[#13003a] text-white outline-none w-[200px]' 
            placeholder='Last Name' 
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            />
            {/* Age */}
            <input type="number" 
            className='px-2 py-1 bg-[#13003a] text-white outline-none w-[200px]' 
            placeholder='Age'
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            />
            {/* Email */}
            <input type="text" 
            className='px-2 py-1 bg-[#13003a] text-white outline-none w-[200px]' 
            placeholder='Email' 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            />

            {/* Current Focus */}
            <div className="text-md font-montserrat text-white pt-4 text-xl">What's your current focus?</div>
            <form action="" className='px-2 w-[275px]'>
              <input type="radio"
                name="focus"
                value={"Glow-up / Aesthetics"}
                onChange={(e) => {
                  setFocus(e.target.value)
                }}
              />
              <label className='font-montserrat pl-4 text-white'>Glow-up / Aesthetics</label>
              <br />

              <div className="flex items-start">
                <input type="radio"
                  name="focus"
                  value={"Profile Photo Improvement"}
                  onChange={(e) => {
                    setFocus(e.target.value)
                  }}
                  className='mt-1'
                />
                <label className='font-montserrat pl-4 text-white'>Profile Photo Improvement</label>
              </div>

              <input type="radio"
                name="focus"
                value={"Style / Grooming"}
                onChange={(e) => {
                  setFocus(e.target.value)
                }}
              />
              <label className='font-montserrat pl-4 text-white'>Style / Grooming</label>
              <br />

              <input type="radio"
                name="focus"
                value={"Dating App Results"}
                onChange={(e) => {
                  setFocus(e.target.value)
                }}
              />
              <label className='font-montserrat pl-4 text-white'>Dating App Results</label>
              <br />

              <div className="flex items-start">
                <input type="radio"
                  name="focus"
                  value={"General Self-improvement"}
                  onChange={(e) => {
                    setFocus(e.target.value)
                  }}
                  className='mt-1'
                />
                <label className='font-montserrat pl-4 text-white'>General Self-improvement</label>
              </div>
            </form>

            {/* Current Progress */}
            <div className="text-md font-montserrat text-white pt-4 text-xl">How far along are you?</div>
            <form action="" className='px-2 w-[275px]'>
              <input type="radio"
                name="progress"
                value={"Just starting out"}
                onChange={(e) => {
                  setProgress(e.target.value)
                }}
              />
              <label className='font-montserrat pl-4 text-white'>Just starting out</label>
              <br />

              <input type="radio"
                name="progress"
                value={"Mid glow-up"}
                onChange={(e) => {
                  setProgress(e.target.value)
                }}
              />
              <label className='font-montserrat pl-4 text-white'>Mid glow-up</label>
              <br />

              <div className="flex items-start">
                <input type="radio"
                  name="progress"
                  value={"Already transformed, wanting next steps"}
                  onChange={(e) => {
                    setProgress(e.target.value)
                  }}
                  className='mt-1'
                />
                <label className='font-montserrat pl-4 text-white'>Already transformed, wanting next steps</label>
              </div>

              <input type="radio"
                name="progress"
                value={"Just curious"}
                onChange={(e) => {
                  setProgress(e.target.value)
                }}
              />
              <label className='font-montserrat pl-4 text-white'>Just curious</label>
            </form>
          </div>

          <button 
            className='bg-[#13003a] font-montserrat text-xl px-4 py-2 rounded-lg text-white hover:bg-[#35225c] active:bg-[#24114b] duration-100'
            onClick={async (e) => {
              await submitForm()
            }}
          >Submit</button>
          {error && <div className="w-[275px] text-center text-3xl font-montserrat text-red-500">{error}</div>}
        </div>
    </div>
  )
}

export default IntroForm