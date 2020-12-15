import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

const Contianer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Header = styled.div`
  font-family: Sofia, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Text = styled.div`
  font-family: Sofia, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
`;

const CodeBlock = () => {
  let code = `// Javascript
  const bubbleSort = (array) => {
    // For each element in the array
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // Swap values if j is greater than j+1
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};
    `;
  return (
    <Contianer>
      <div style={{ maxWidth: "400px" }}>
        <Header>Time Complexity:</Header>
        <Text>
          Average: O(n<sup>2</sup>)
        </Text>
        <Text>
          Worst: O(n<sup>2</sup>)
        </Text>
        <Text>Best: O(n)</Text>
        <br />
        <Header>Space Analysis:</Header>
        <Text>
          Bubble sort is generally an in-place sorting algorithm so it requires
          no extra storage.
        </Text>
        <br />
        <Header>Psudocode:</Header>
        <Text>- For each element in the array</Text>
        <Text>- Compare to the element to the right</Text>
        <Text>
          - If element is greater than element to the right, swap elements
        </Text>
        <Text>- Repeat until array is sorted</Text>
        <br />
        <br />
      </div>
      <div style={{ minWidth: "500px" }}>
        <CopyBlock
          language="javascript"
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </Contianer>
  );
};

export default CodeBlock;
