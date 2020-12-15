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
  const insertionSort = (array) => {
    //for each element in the array
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        //swap elements until the original element is in its final position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
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
          Insertion sort is generally an in-place sorting algorithm so it
          requires no extra storage.
        </Text>
        <br />
        <Header>Psudocode:</Header>
        <Text>- For each element in the array</Text>
        <Text>- If the element to the left is larger, swap the elements</Text>
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
