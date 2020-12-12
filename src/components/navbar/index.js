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
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #00ad93" : "2px solid transparent"};
  :hover {
    border-bottom: 2px solid #00ad93;
  }
`;

const index = ({ setCurrentAlgo, currentAlgo }) => {
  console.log(currentAlgo);
  return (
    <Container>
      <div>SortVisualizer</div>
      <SortContainer>
        <SortItem
          onClick={() => setCurrentAlgo("bubble")}
          isActive={currentAlgo === "bubble"}
        >
          Bubble Sort
        </SortItem>
        <SortItem
          onClick={() => setCurrentAlgo("insertion")}
          isActive={currentAlgo === "insertion"}
        >
          Insertion Sort
        </SortItem>
        <SortItem
          onClick={() => setCurrentAlgo("merge")}
          isActive={currentAlgo === "merge"}
        >
          Merge Sort
        </SortItem>
        <SortItem
          onClick={() => setCurrentAlgo("quick")}
          isActive={currentAlgo === "quick"}
        >
          Quick Sort
        </SortItem>
      </SortContainer>
    </Container>
  );
};

export default index;
