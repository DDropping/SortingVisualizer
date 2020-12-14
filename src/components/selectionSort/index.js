import React, { useState, useEffect } from "react";
import { Button } from "antd";

import {
  Container,
  ColumnWrapper,
  Column,
  ButtonWrapper,
  Title,
} from "./style";
import { selectionSortHandler } from "../../algorithms/selectionSort";

const Index = ({ array, size, sortSpeed }) => {
  const [displayArray, setDisplayArray] = useState([...array]);
  const [currentIndexes, setCurrentIndexes] = useState([]);
  const [searchIndex, setSearchIndex] = useState(null);
  const animationsArray = selectionSortHandler(displayArray);

  useEffect(() => {
    setDisplayArray(array);
  }, [array]);

  const startAnimation = () => {
    for (let i = 0; i < animationsArray.length; i++) {
      setTimeout(() => {
        setCurrentIndexes([
          animationsArray[i].startIndex,
          animationsArray[i].minIndex,
        ]);
        setSearchIndex(animationsArray[i].currentIndex);
        if (animationsArray[i].swap) {
          setDisplayArray(animationsArray[i].array);
        }
      }, (1010 - sortSpeed * 10) * i);
    }
  };

  return (
    <div>
      <Title>Selection Sort</Title>
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
                searchIndex={searchIndex === index}
              />
            </ColumnWrapper>
          );
        })}
      </Container>
      <ButtonWrapper>
        <Button
          block
          type="primary"
          size="large"
          style={{
            maxWidth: "300px",
            margin: "25px",
          }}
          onClick={startAnimation}
        >
          Start Sorting
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Index;
