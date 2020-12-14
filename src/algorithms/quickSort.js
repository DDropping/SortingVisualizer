export const quickSortHandler = (arr) => {
  let array = [...arr];
  let animations = [];

  function swap(items, leftIndex, rightIndex, pivotIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    animations.push({
      pivot: pivotIndex,
      left: leftIndex,
      right: rightIndex,
      swap: true,
      array: [...items],
    });
  }

  function partition(items, left, right) {
    let pivotIndex = Math.floor((right + left) / 2);
    let pivot = items[pivotIndex]; //middle element
    let i = left; //left pointer
    let j = right; //right pointer
    animations.push({
      pivot: pivotIndex,
      left: i,
      right: j,
      swap: false,
    });
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
        animations.push({
          pivot: pivotIndex,
          left: i,
          right: j,
          swap: false,
        });
      }
      while (items[j] > pivot) {
        j--;
        animations.push({
          pivot: pivotIndex,
          left: i,
          right: j,
          swap: false,
        });
      }
      if (i <= j) {
        swap(items, i, j, pivotIndex); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  }

  //run quicksort
  quickSort(array, 0, array.length - 1);

  animations.push({
    pivot: null,
    left: null,
    right: null,
    swap: false,
  });

  //return animations
  return animations;
};
