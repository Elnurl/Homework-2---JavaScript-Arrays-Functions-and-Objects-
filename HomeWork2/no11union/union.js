const arr1 = [1, 2, 3, 4, 5, 7];
const arr2 = [1, 51, 31, 4, 7];
function union(arr1, arr2) {
  for (let j = 0; j < arr2.length; j++) {
    arr1.push(arr2[j]);
  }
  return arr1;
}

union(arr1, arr2);
// console.log(union(arr1, arr2));
// -------------console.log() - işlədildikdə birləşmiş array-də təkrar olmur , amma retun atdikdə
// --- bir neçə təkrar olur ard-arda retur - da isə nu təkrarlar artır. ------------------
