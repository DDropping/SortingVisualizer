import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #cafff7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;

export const SortContainer = styled.div`
  display: flex;
`;

export const SortItem = styled.div`
  padding: 5px;
  margin: 0 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  :hover {
    border-bottom: 2px solid #00ad93;
  }
`;

const index = () => {
  return (
    <Container>
      <div>SortVisualizer</div>
      <SortContainer>
        <SortItem>Insertion Sort</SortItem>
        <SortItem>Merge Sort</SortItem>
        <SortItem>Quick Sort</SortItem>
        <SortItem>Radix Sort</SortItem>
      </SortContainer>
    </Container>
  );
};

export default index;
