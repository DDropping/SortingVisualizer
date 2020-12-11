import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import SortFilters from "../components/sortFilters";
import MergeSort from "../components/mergeSort";
import InsertionSort from "../components/insertionSort";
import BubbleSort from "../components/bubbleSort";
import QuickSort from "../components/quickSort";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
`;

const Home = () => {
  const [currentAlgo, setCurrentAlgo] = useState("insertion");
  const [arrayLength, setArrayLength] = useState(10);
  const [sortSpeed, setSortSpeed] = useState(50);
  const [array, setArray] = useState([]);

  const resetArray = () => {
    setArray([]);
    let tempArr = [];
    for (let i = 0; i < arrayLength; i++) {
      tempArr.push(Math.floor(Math.random() * (100 - 5 + 1) + 5));
    }
    setArray(tempArr);
  };

  //reset and populate array on inital render
  useEffect(() => {
    resetArray();
  }, [arrayLength]);

  return (
    <div>
      <Navbar setCurrentAlgo={setCurrentAlgo} />
      <Container>
        <SortFilters
          arrayLength={arrayLength}
          setArrayLength={setArrayLength}
          resetArray={resetArray}
          sortSpeed={sortSpeed}
          setSortSpeed={setSortSpeed}
        />
        {currentAlgo === "insertion" && (
          <InsertionSort
            array={array}
            size={arrayLength}
            sortSpeed={sortSpeed}
          />
        )}
        {currentAlgo === "merge" && (
          <MergeSort array={array} size={arrayLength} />
        )}
        {currentAlgo === "bubble" && (
          <BubbleSort array={array} size={arrayLength} />
        )}
        {currentAlgo === "quick" && (
          <QuickSort array={array} size={arrayLength} />
        )}
      </Container>
    </div>
  );
};

export default Home;
