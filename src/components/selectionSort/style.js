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
  ${({ searchIndex, highlightedIndex, index }) =>
    searchIndex &&
    !highlightedIndex.includes(index) && {
      backgroundColor: "#ff000073",
    }}
  margin-top: 75%;
  height: ${({ height }) => height}%;
  margin-top: 10%;
  margin: 0 1px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: Sofia, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  font-weight: bold;
  color: #2d2d2dd9;
  text-align: center;
  font-size: 50px;
`;
