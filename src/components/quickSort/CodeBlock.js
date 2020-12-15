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
  const swap = (items, left, right) => {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
  }

  const partition = (items, left, right) => {
    let pivot = items[
      Math.floor((right + left) / 2)
    ];
    let i = left, 
    let j = right; 
    while (i <= j) {
        while (items[i] < pivot) { i++ }
        while (items[j] > pivot) { j-- }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
  }
  
  const quickSort = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
  }
    `;
  return (
    <Contianer>
      <div style={{ maxWidth: "400px" }}>
        <Header>Time Complexity:</Header>
        <Text>Average: O(nLogn)</Text>
        <Text>
          Worst: O(n<sup>2</sup>)
        </Text>
        <Text>
          Best: O(nLogn) with simple partition or O(n) with three-way partition
          and equal keys.
        </Text>
        <br />
        <Header>Space Analysis:</Header>
        <Text>
          Quick sort is generally an in-place sorting algorithm so it requires
          no extra storage.
        </Text>
        <br />
        <Header>Psudocode:</Header>
        <Text>Partition: </Text>
        <Text>- Choose the middle index as the pivot</Text>
        <Text>
          - Create a variable that points to the left of the array and one that
          points to the right
        </Text>
        <Text>
          - The left variable points the the low index, and right variable
          points to the high index
        </Text>
        <Text>- While left value is less than the pivot, move right</Text>
        <Text>- While right value is greater than the pivot, move left</Text>
        <Text>- If left does not equal right, swap values</Text>
        <br />
        <Text>Quick Sort:</Text>
        <Text>- Choose the middle index as the pivot</Text>
        <Text>- Partition the array using the pivot value</Text>
        <Text>- Quicksort the left partition recursively</Text>
        <Text>- Quicksort the right partition recursively</Text>

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
