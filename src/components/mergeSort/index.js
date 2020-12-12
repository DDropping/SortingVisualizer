import React, { useState, useEffect } from "react";
import { Button } from "antd";

import { Container, ColumnWrapper, Column } from "./style";
import { mergeSortHandler } from "../../algorithms/mergeSort";

const Index = ({ array, size, sortSpeed }) => {
  const [displayArray, setDisplayArray] = useState([...array]);
  const [currentIndexes, setCurrentIndexes] = useState([]);
  const [replaceIndex, setReplaceIndex] = useState();

  useEffect(() => {
    setDisplayArray(array);
  }, [array]);

  const startAnimation = async () => {
    const animationsArray = await mergeSortHandler(displayArray);
    console.log(animationsArray);
    console.log(displayArray);
    let tempArray = [...displayArray];
    for (let i = 0; i < animationsArray.length; i++) {
      setTimeout(() => {
        setCurrentIndexes([
          animationsArray[i].index1,
          animationsArray[i].index2,
        ]);
        if (animationsArray[i].swap === true) {
          let index = animationsArray[i].payload[0];
          let value = animationsArray[i].payload[1];
          tempArray[index] = value;
          setDisplayArray(tempArray);
          setReplaceIndex(animationsArray[i].indexReplaced);
        }
      }, 50 * i);
    }
    setTimeout(() => {
      console.log(tempArray, "======");
      setDisplayArray(tempArray);
      setCurrentIndexes([]);
      setReplaceIndex(null);
    }, 50 * animationsArray.length + 100);
  };

  //console.log(array);
  //const [arr, setArr] = useState(array);
  //const sortAnimations = mergeSortHandler(arr);
  return (
    <Container>
      {displayArray.map((value, index) => {
        let width = 100 / size;
        return (
          <ColumnWrapper key={index} height={value} width={width}>
            <div style={{ flex: 1 }} />
            <Column
              index={index}
              height={value}
              width={width}
              highlightedIndex={currentIndexes}
              replaceIndex={replaceIndex === index}
            />
          </ColumnWrapper>
        );
      })}
      <Button onClick={startAnimation}>Sort</Button>
    </Container>
  );
};

export default Index;
