import React, { useState } from "react";

import Navbar from "../components/navbar";
import MergeSort from "../components/mergeSort";

const Home = () => {
  const [arrayLength, setArrayLength] = useState(50);

  return (
    <div>
      <Navbar />
      <MergeSort size={arrayLength} />
    </div>
  );
};

export default Home;
