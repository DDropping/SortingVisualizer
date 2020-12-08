import React from "react";

import { Container, ColumnWrapper, Column } from "./style";

const Index = ({ array, size }) => {
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
