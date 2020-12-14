export const bubbleHandler = (array) => {
  let swapp;
  let n = array.length - 1;
  let x = [...array];
  let animations = [];
  do {
    swapp = false;
    for (let i = 0; i < n; i++) {
      animations.push({
        index1: i,
        index2: i + 1,
        swap: false,
      });
      if (x[i] > x[i + 1]) {
        let temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
        animations.push({
          index1: i,
          index2: i + 1,
          swap: true,
          array: [...x],
        });
      }
    }
    n--;
  } while (swapp);

  animations.push({
    index1: null,
    index2: null,
    swap: false,
  });
  return animations;
};
