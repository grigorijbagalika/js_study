const min = 21;
const max = 99;
let total = 0;

for (let i = min; i <= max; i += 1) {
  console.log(i);

  if (i % 2 === 0) {
    console.log(`четное: `, i);
  }
}
