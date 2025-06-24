// Task 23/06/2025
var sorting = [4, 6, 3, 1, 9];
console.log(sorting);
document.write("before [" + sorting + "]" + "<br>" + "<br>");

function sort() {
  for (let i = 0; i < sorting.length; i++) {
    for (let j = 0; j < sorting.length; j++) {
      if (sorting[j] > sorting[j + 1]) {
        //swap the numbers
        let swap = sorting[j]; // let 1 = [4,6,3,1,9]
        sorting[j] = sorting[j + 1]; // let 2 = [3,4,6,1,9]
        sorting[j + 1] = swap; //let 3 = [3,4,1,6,9]
        //let 4 =[3,1,4,6,9]
        //let 5 = [1,3,4,6,9]
      }
    }
  }
  return sorting;
}
sort(sorting);
console.log(sorting);
document.write("after [" + sorting + "]" + "<br>" + "<br>");
// result = [1, 3, 4, 6, 9];
