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
    const mergeSort = arr => {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2),
            left = mergeSort(arr.slice(0, mid)),
            right = mergeSort(arr.slice(mid));
        return merge(left, right);
    };

    const merge = (arr1, arr2) => {
        let sorted = [];
        while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        else sorted.push(arr2.shift());
        };
        return sorted.concat(arr1.slice().concat(arr2.slice()));
    };
    `;
  return (
    <Contianer>
      <div style={{ maxWidth: "300px" }}>
        <Header>Time Complexity:</Header>
        <Text>Average: O(nLogn)</Text>
        <Text>Worst: O(nLogn)</Text>
        <Text>Best: O(nLogn)</Text>
        <br />
        <Header>Space Complexity:</Header>
        <Text>
          Depending on the implementation, merge sort typically uses O(n) space,
          but can be reduced to O(1) with methods such as an auxiliary lined
          list.
        </Text>
        <br />
        <Header>Psudocode:</Header>
        <Text>Find the middle point of the array</Text>
        <Text>Call mergeSort on the first half</Text>
        <Text>Call mergeSort on the second half</Text>
        <Text>Merge the two halves togeather</Text>
      </div>
      <CopyBlock
        language="javascript"
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </Contianer>
  );
};

export default CodeBlock;
