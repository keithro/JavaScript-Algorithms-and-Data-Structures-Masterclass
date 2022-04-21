// Write a function wichi accepts a string and returns the length of the longest substring with all distinct characters.

// Use: Sliding Window pattern
// Target Time Complexity: O(n)
// Target Space Complexity: 

// const findLongestSubstring = (str) => {
//   let max = 0;
//   let start = 0;
//   let end = 0;
//   let map = {};
  
//   while(end < str.length) {
//     // Check in seen (in map)
//     if(!map[str[end]]) {
//       // if not add it, increment end & check for max
//       map[str[end]] = 1;
//       end++;
//       max = Math.max(max, end - start);
//     } else {
//       // else reset with new start
//       start++;
//       end = start;
//       map = {};
//     }
//   }
//   return max;
// }

// // COMMENTED VERSION WITH LOGS
// const findLongestSubstring = (str) => {
//   let max = 0;
//   let start = 0;
//   let end = 0;
//   let map = {};

//   // while end is less than str.length
//   while(end < str.length) {
//     // console.log('>>>>> This loop: ', {start,end});
    
//     // check if char is in map
//     if(!map[str[end]]) {
//       console.log(str[end], ' is a new char in: ', map);
      
//       // if not, add it
//       map[str[end]] = 1;
//       // increment end
//       end++;
//       // set max to the greater of max or current length
//       max = Math.max(max, end - start);
//     } else {
//       console.log(str[end], ' is repeated char in: ', map);
      
//       // increment start
//       start++;
//       // move end back to start
//       end = start;
//       // reset map
//       map = {};
//     }
//   }
//   return max;
// }

// // COLT'S SOLUTION - similar to mine I think? but moves
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

module.exports = findLongestSubstring;