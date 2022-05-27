import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import DessaiKibeho from '../DessaiKibeho/DessaiKibeho'
import  GoToDessai from '../DessaiKibeho/GoToDessai'

import GoToAljabana from '../Aljabana-Elizabeth/GoToAljabana'
const Review = () => {
  const [index, setIndex] = useState(0);
  const [myCompnent,setCompnent]=useState()
  const { name, job, image, text } = people[index];
  
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
    Display()
   
  };

  
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    Display()
    
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    
  };

  function Display(){
    
    if (index==1){
     
      setCompnent(<GoToDessai/>)
      
      
      
    
    }
    else if(index==2){
      setCompnent(<GoToAljabana/>)
    }
    else{
      setCompnent(' ')
    }

  }; 
 console.log(myCompnent)

  return (
    
    
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'><q>{text} <p id='GoTo'>{myCompnent}</p></q></p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      
     
      
    </article>
  );
};

export default Review;
