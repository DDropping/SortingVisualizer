export function selectionSortHandler(array) {
  let arr = [...array];
  let startIndex = 0;
  let currentIndex = 0;
  let minIndex = 0;
  let animations = [];

  for (let i = 0; i < arr.length - 1; i++) {
    startIndex = i;
    minIndex = i;
    currentIndex = i;
    animations.push({
      startIndex: startIndex,
      minIndex: minIndex,
      currentIndex: currentIndex,
      swap: false,
    });
    for (let j = i + 1; j < arr.length; j++) {
      currentIndex = j;
      animations.push({
        startIndex: startIndex,
        minIndex: minIndex,
        currentIndex: currentIndex,
        swap: false,
      });
      if (arr[currentIndex] < arr[minIndex]) {
        minIndex = currentIndex;
        animations.push({
          startIndex: startIndex,
          minIndex: minIndex,
          currentIndex: currentIndex,
          swap: false,
        });
      }
    }
    if (minIndex !== startIndex) {
      let temp = arr[startIndex];
      arr[startIndex] = arr[minIndex];
      arr[minIndex] = temp;
      animations.push({
        startIndex: startIndex,
        minIndex: minIndex,
        currentIndex: null,
        swap: true,
        array: [...arr],
      });
    }
  }

  animations.push({
    startIndex: null,
    minIndex: null,
    currentIndex: null,
    swap: false,
  });

  return animations;
}
