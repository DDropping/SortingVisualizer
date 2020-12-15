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
import CodeBlock from "./CodeBlock";

const Index = ({ array, size, sortSpeed }) => {
  const [displayArray, setDisplayArray] = useState([...array]);
  const [currentIndexes, setCurrentIndexes] = useState([]);
  const [searchIndex, setSearchIndex] = useState(null);
  const animationsArray = selectionSortHandler(displayArray);
  const [eventsArray, setEventsArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setDisplayArray(array);
  }, [array]);

  const startAnimation = () => {
    setIsSorting(true);
    let animationEvents = [];
    for (let i = 0; i < animationsArray.length; i++) {
      animationEvents.push(
        setTimeout(() => {
          setCurrentIndexes([
            animationsArray[i].startIndex,
            animationsArray[i].minIndex,
          ]);
          setSearchIndex(animationsArray[i].currentIndex);
          if (animationsArray[i].swap) {
            setDisplayArray(animationsArray[i].array);
          }
          if (i === animationsArray.length - 1) {
            setIsSorting(false);
          }
        }, (1010 - sortSpeed * 10) * i)
      );
    }
    setEventsArray(animationEvents);
  };

  const stopAnimation = () => {
    for (let i = 0; i < eventsArray.length; i++) {
      clearTimeout(eventsArray[i]);
    }
    setIsSorting(false);
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
          type={isSorting ? "danger" : "primary"}
          size="large"
          style={{
            maxWidth: "300px",
            margin: "25px",
          }}
          onClick={isSorting ? stopAnimation : startAnimation}
        >
          {isSorting ? "Stop Animation" : " Start Sorting"}
        </Button>
      </ButtonWrapper>
      <br />
      <br />
      <div>
        <CodeBlock />
      </div>
    </div>
  );
};

export default Index;
