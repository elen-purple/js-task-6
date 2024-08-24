//* 1
console.log("----------------- Task 01 -----------------");
{
  let i = 0;
  while (i < 11) {
    console.log(i);
    i += 1;
  }
}

//* 2
console.log("----------------- Task 02 -----------------");
for (let i = 2; i < 20; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

//* 3
console.log("----------------- Task 03 -----------------");
for (let i = 0; i < 11; i += 1) {
  console.log(i * 7);
}

//* 4
console.log("----------------- Task 04 -----------------");
{
  let i = 0;
  while (i < 5) {
    console.log(i + 1);
    i += 1;
  }
}
//* 5
console.log("----------------- Task 05 -----------------");
{
  for (let i = 1; i < 11; i += 1) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }
}

//* 6
console.log("----------------- Task 06 -----------------");
{
  let number = 0;
  let n = 7;
  for (let i = 0; i < 10; i += 1) {
    number = Math.round(Math.random() * (10 - 1) + 1);
    if (number > n) {
      break;
    }
    console.log(number);
  }
}
//* 7
console.log("----------------- Task 07 -----------------");
{
  let i = 0;
  while (i < 21) {
    i += 1;
    if (i % 3 === 0) {
      continue;
    }
    console.log(i);
  }
}
