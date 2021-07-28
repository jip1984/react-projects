import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title }) => {
  return <main>
    <div className="container">
      <h3>{title}</h3>
    </div>
  </main>;
};

export default Question;
