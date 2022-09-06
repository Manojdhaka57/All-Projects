import reviews from "./Data";
import React, {useState} from 'react';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';


function Reviews() {
    const [index, setIndex]=useState(0);
    const {name,job,image,text}=reviews[index];
    const prevPerson=()=>{
        setIndex((index)=>
        {
            let newIndex= index-1;
            return newIndex<0?reviews.length-1 : newIndex ;
        });  
    }
    const nextPerson=()=>{
        setIndex((index)=>
        {
            let newIndex= index+1;
            return newIndex >reviews.length-1 ? 0: newIndex;
        });  
    }
    const checkNumber=(number)=>{
        if(number> reviews.length-1){
            return 0;
        }
        if(number<0){
            return reviews.length-1;
        }
        return number;
    }
    const randonPerson=()=>{
        const randomindex=Math.floor(Math.random() * reviews.length);
        if(randomindex===index){
            randomindex=index+1;
        }
        setIndex(checkNumber(randomindex));
    }
    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>

            </div>
            <button className="random-btn" onClick={randonPerson}>surprise me</button>
        </article>
    )
}

export default Reviews
