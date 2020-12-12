import React, { useState, useEffect } from "react";
import { Button } from "antd";

import { Container, ColumnWrapper, Column } from "./style";
import { insertionHandler } from "../../algorithms/insertionSort";

const Index = ({ array, size, sortSpeed }) => {
  const [displayArray, setDisplayArray] = useState([...array]);
  const [currentIndexes, setCurrentIndexes] = useState([]);
  const [successIndex, setSuccessIndex] = useState(null);
  const animationsArray = insertionHandler(displayArray);

  useEffect(() => {
    setDisplayArray(array);
  }, [array]);

  const startAnimation = () => {
    for (let i = 0; i < animationsArray.length; i++) {
      setTimeout(() => {
        setCurrentIndexes([
          animationsArray[i].index1,
          //animationsArray[i].index2,
        ]);
        if (animationsArray[i].swap) {
          setDisplayArray(animationsArray[i].array);
        }
        setSuccessIndex(
          animationsArray[i].isSuccess ? animationsArray[i].index1 : null
        );
      }, (1010 - sortSpeed * 10) * i);
    }
  };

  return (
    <>
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
                isSuccess={successIndex === index}
              />
            </ColumnWrapper>
          );
        })}
      </Container>
      <Button onClick={startAnimation}>Sort Array</Button>
    </>
  );
};

export default Index;
