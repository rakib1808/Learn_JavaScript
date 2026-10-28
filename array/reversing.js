const numbers = [10, 2, 5, 20, 22, 44];

 const rev_numbers= [];

 for (const num of numbers) {
    rev_numbers.push(num)
 }
 console.log(rev_numbers)

// reveresd side
 const rev_num = [];

 for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
    rev_num.push(num)
 }
 console.log(rev_num);