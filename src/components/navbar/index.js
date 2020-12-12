import React from "react";
import styled from "styled-components";
import { AlignRightOutlined } from "@ant-design/icons";

export const Container = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: #cafff7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
  return (
    <Container>
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#2d2d2dd9" }}>
        <AlignRightOutlined /> SortVisualizer
      </div>
      <SortContainer>
        <SortItem
          onClick={() => setCurrentAlgo("insertion")}
          isActive={currentAlgo === "insertion"}
        >
          Insertion Sort
        </SortItem>
        <SortItem
          onClick={() => setCurrentAlgo("bubble")}
          isActive={currentAlgo === "bubble"}
        >
          Bubble Sort
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
