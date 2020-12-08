import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;
export const Bar = styled.div``;

const Index = ({ size }) => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    setArray([]);
    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * (100 - 5 + 1) + 5));
    }
  };

  useEffect(() => {
    resetArray();
    console.log(array);
  }, []);

  return (
    <Container>
      <div>Merge sort</div>
    </Container>
  );
};

export default Index;
