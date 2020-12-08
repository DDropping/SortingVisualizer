import React from "react";
import { Slider } from "antd";
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
`;

const index = ({ setArrayLength }) => {
  return (
    <Container>
      <FilterContainer>
        <Title>Array Size: </Title>
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
