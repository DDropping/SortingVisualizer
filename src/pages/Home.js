import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";
import SortFilters from "../components/sortFilters";
import MergeSort from "../components/mergeSort";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
`;

const Home = () => {
  const [arrayLength, setArrayLength] = useState(50);

  return (
    <div>
      <Navbar />
      <Container>
        <SortFilters />
        <MergeSort size={arrayLength} />
      </Container>
    </div>
  );
};

export default Home;
