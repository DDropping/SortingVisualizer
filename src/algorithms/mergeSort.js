export function mergeSortHandler(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = [...array];
  let mainArray = [...array];
  mergeSortHelper(mainArray, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push({
      index1: i,
      index2: j,
      indexReplaced: k,
      swap: false,
    });

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push({
        index1: i,
        index2: j,
        indexReplaced: k,
        swap: true,
        payload: [k, auxiliaryArray[i]],
      });
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push({
        index1: i,
        index2: j,
        indexReplaced: k,
        swap: true,
        payload: [k, auxiliaryArray[j]],
      });
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push({
      index1: i,
      index2: j,
      indexReplaced: k,
      swap: true,
      payload: [k, auxiliaryArray[i]],
    });
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push({
      index1: i,
      index2: j,
      indexReplaced: k,
      swap: true,
      payload: [k, auxiliaryArray[j]],
    });
    mainArray[k++] = auxiliaryArray[j++];
  }

  animations.push({
    index1: null,
    index2: null,
    indexReplaced: null,
    swap: false,
  });
}
