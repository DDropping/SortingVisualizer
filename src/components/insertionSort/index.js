import React, { useState, useEffect } from "react";
import { Button } from "antd";

import {
  Container,
  ColumnWrapper,
  Column,
  ButtonWrapper,
  Title,
} from "./style";
import { insertionHandler } from "../../algorithms/insertionSort";
import CodeBlock from "./CodeBlock";

const Index = ({ array, size, sortSpeed }) => {
  const [displayArray, setDisplayArray] = useState([...array]);
  const [currentIndexes, setCurrentIndexes] = useState([]);
  const [successIndex, setSuccessIndex] = useState(null);
  const animationsArray = insertionHandler(displayArray);
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
            animationsArray[i].index1,
            //animationsArray[i].index2,
          ]);
          if (animationsArray[i].swap) {
            setDisplayArray(animationsArray[i].array);
          }
          setSuccessIndex(
            animationsArray[i].isSuccess ? animationsArray[i].index1 : null
          );
          if (i === animationsArray.length - 1) {
            setIsSorting(false);
          }
        }, (510 - sortSpeed * 5) * i)
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
      <Title>Insertion Sort</Title>
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
