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
  const selectionSort = (array) => { 
      // Find the smallest number in the subarray        
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swap elements
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
}
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
        <Text>
          Best: O(n<sup>2</sup>)
        </Text>
        <br />
        <Header>Space Analysis:</Header>
        <Text>
          Selection sort is generally an in-place sorting algorithm so it
          requires no extra storage.
        </Text>
        <br />
        <Header>Psudocode:</Header>
        <Text>- For each element in the array</Text>
        <Text>
          - Find the smallest element in the subarray to the right of the
          element inclusive
        </Text>
        <Text>- Swap the two elements</Text>
        <Text>- Repeat until array is sorted</Text>
        <br />
        <br />
      </div>
      <div style={{ width: "500px" }}>
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
