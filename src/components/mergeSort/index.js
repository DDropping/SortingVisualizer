import React, { useState } from "react";
import { Button } from "antd";

import { Container, ColumnWrapper, Column } from "./style";
import { mergeSortHandler } from "../../algorithms/mergeSort";

const Index = ({ array, size }) => {
  console.log(array);
  const [arr, setArr] = useState(array);
  //const sortAnimations = mergeSortHandler(arr);
  return (
    <Container>
      {array.map((value, index) => {
        let width = 100 / size;
        return (
          <ColumnWrapper key={index} height={value} width={width}>
            <div style={{ flex: 1 }} />
            <Column key={index} height={value} width={width} />
          </ColumnWrapper>
        );
      })}
    </Container>
  );
};

export default Index;
