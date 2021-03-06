import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import SortFilters from "../components/sortFilters";
import MergeSort from "../components/mergeSort";
import InsertionSort from "../components/insertionSort";
import BubbleSort from "../components/bubbleSort";
import QuickSort from "../components/quickSort";
import SelectionSort from "../components/selectionSort";
import HeapSort from "../components/heapSort";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
`;

const Home = () => {
  const [currentAlgo, setCurrentAlgo] = useState("merge");
  const [arrayLength, setArrayLength] = useState(75);
  const [sortSpeed, setSortSpeed] = useState(100);
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
    setArray([]);
    let tempArr = [];
    for (let i = 0; i < arrayLength; i++) {
      tempArr.push(Math.floor(Math.random() * (100 - 5 + 1) + 5));
    }
    setArray(tempArr);
  }, [arrayLength]);

  return (
    <div>
      <Navbar setCurrentAlgo={setCurrentAlgo} currentAlgo={currentAlgo} />
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
          <MergeSort array={array} size={arrayLength} sortSpeed={sortSpeed} />
        )}
        {currentAlgo === "selection" && (
          <SelectionSort
            array={array}
            size={arrayLength}
            sortSpeed={sortSpeed}
          />
        )}
        {currentAlgo === "heap" && (
          <HeapSort array={array} size={arrayLength} sortSpeed={sortSpeed} />
        )}
        {currentAlgo === "bubble" && (
          <BubbleSort array={array} size={arrayLength} sortSpeed={sortSpeed} />
        )}
        {currentAlgo === "quick" && (
          <QuickSort array={array} size={arrayLength} sortSpeed={sortSpeed} />
        )}
      </Container>
    </div>
  );
};

export default Home;
