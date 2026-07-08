"use strict";

{
  // let num = 10;
  // const numBackup = num;
  // num = 99;
  // console.log(num);
  // console.log(numBackup);

  const nums = [10, 20, 30];
  // const numsBackup = nums;
  // const numsBackup = [10,20,30];
  const numsBackup = [...nums];
  nums[0] = 99;
  console.log(nums);
  console.log(numsBackup);
}
