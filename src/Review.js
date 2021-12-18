import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, id, name, job, text } = people[index];
  const prevPerson = () => {
    index ? setIndex(index - 1) : setIndex(people.length - 1);
  };
  const nextPerson = () => {
    index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const randomPerson = () => {
    let randomIndex = Math.floor(people.length * Math.random());
    if (randomIndex === index) {
      randomIndex += 1;
    }
    randomIndex %= people.length;
    setIndex(randomIndex);
  };
  return (
    <article className="review">
      <div key={id} className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
