import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50vh;
`;

export const ColumnWrapper = styled.div`
  height: 100%;
  width: ${({ width }) => width}%;
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  background-color: ${({ highlightedIndex, index }) =>
    highlightedIndex.includes(index) ? "red" : "turquoise"};
  margin-top: 75%;
  height: ${({ height }) => height}%;
  margin-top: 10%;
  margin: 0 1px;
`;
