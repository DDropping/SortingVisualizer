import React from "react";
import { Button, Slider } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.1rem;
`;

export const FilterContainer = styled.div`
  text-align: center;
  margin: 0 25px;
`;

const index = ({ arrayLength, setArrayLength, resetArray }) => {
  return (
    <Container>
      <FilterContainer>
        <Button onClick={resetArray}>Reset Array</Button>
      </FilterContainer>
      <FilterContainer>
        <Title>Array Size: {arrayLength} </Title>
        <Slider
          defaultValue={50}
          min={5}
          max={100}
          onChange={(value) => setArrayLength(value)}
          style={{ width: "200px" }}
        />
      </FilterContainer>
    </Container>
  );
};

export default index;
