import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  let title = data.map((d) => {
    return d.title;
  })
  return <>
    <div>
      <SingleQuestion title={title} />
    </div>
  </>;
}

export default App;
