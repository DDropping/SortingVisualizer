// export const insertionHandler = (array) => {
//   let animations = [];

//   let inputArr = [...array];
//   let length = inputArr.length;
//   for (let i = 1; i < length; i++) {
//     let key = inputArr[i];
//     let j = i - 1;
//     animations.push([i, j, "red"]); // highlight two indexes red to compare
//     while (j >= 0 && inputArr[j] > key) {
//       inputArr[j + 1] = inputArr[j];
//       j = j - 1;
//       animations.push([j, j + 1, [...inputArr], "red", "swap"]); // highlight two indexes red to compare / swap values
//     }
//     inputArr[j + 1] = key;
//     animations.push([j, j + 1, [...inputArr], "green"]); // highlight two indexes green to display they are sorted
//   }

//   return animations;
// };

// export const insertionHandler = (array) => {
//   let animations = [];

//   let inputArr = [...array];
//   let length = inputArr.length;
//   for (let i = 1; i < length; i++) {
//     let key = inputArr[i];
//     let j = i - 1;
//     while (j >= 0 && inputArr[j] > key) {
//       console.log(`swapping ${j}, ${j - 1}`);
//       inputArr[j + 1] = inputArr[j];
//       j = j - 1;
//     }
//     inputArr[j + 1] = key;
//   }

//   return animations;
// };

export const insertionHandler = (array) => {
  let animations = [];
  let nums = [...array];

  for (let i = 1; i < nums.length; i++) {
    let index2 = i;
    let index1 = i - 1;
    animations.push({
      index1: index1,
      index2: index2,
      swap: false,
      itemSorted: false,
    });

    while (index1 >= 0 && nums[index2] < nums[index1]) {
      let temp = nums[index2];
      nums[index2] = nums[index1];
      nums[index1] = temp;
      animations.push({
        index1: index1,
        index2: index2,
        swap: true,
        array: [...nums],
      });
      index1--;
      index2--;
    }
    animations.push({ itemSorted: true, index: index2 });
  }

  return animations;
};

// for (let i = 1; i < nums.length; i++) {
//   let j = i - 1
//   let temp = nums[i]
//   animations.push({index1: i, index2: j, array: [...nums]});
//   while (j >= 0 && nums[j] > temp) {
//     animations.push({index1: j+1, index2: j});
//     nums[j + 1] = nums[j]
//     j--
//   }
//   nums[j+1] = temp
//   animations.push({index1: i, index2: j, array: [...nums]});
// }
// return nums
// };

// for (let i = 1; i < nums.length; i++) {
//   let index2 = i;
//   let index1 = i - 1;

//   while (index1 >= 0 && nums[index2] < nums[index1]) {
//     let temp = nums[index2];
//     nums[index2] = nums[index1];
//     nums[index1] = temp;
//   }
// }
