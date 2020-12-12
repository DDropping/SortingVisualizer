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
