import React, { useState, useEffect } from "react";
import { Button } from "antd";

import {
  Container,
  ColumnWrapper,
  Column,
  ButtonWrapper,
  Title,
} from "./style";
import { mergeSortHandler } from "../../algorithms/mergeSort";
import CodeBlock from "./CodeBlock";
import { Code } from "react-code-blocks";
const Index = ({ array, size, sortSpeed }) => {
  const [displayArray, setDisplayArray] = useState([...array]);
  const [currentIndexes, setCurrentIndexes] = useState([]);
  const [replaceIndex, setReplaceIndex] = useState();
  const [eventsArray, setEventsArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setDisplayArray(array);
  }, [array]);

  const startAnimation = async () => {
    const animationsArray = await mergeSortHandler(displayArray);
    let tempArray = [...displayArray];
    let animationEvents = [];
    setIsSorting(true);
    for (let i = 0; i < animationsArray.length; i++) {
      animationEvents.push(
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
          if (animationsArray[i].indexReplaced === null) {
            setReplaceIndex(null);
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
      <Title>Merge Sort</Title>
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
