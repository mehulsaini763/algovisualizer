import React from "react";

const combinations = (i) => {
  if (i == nums.length) {
    allCombinations.push(JSON.stringify(combination));
    console.log(combination);
    return;
  }
  combination.push(nums[i]);

  combinations(i + 1);
  combination.pop();
  combinations(i + 1);
};

const nums = [1, 2, 3];
var levels = [];
var allCombinations = [];
var combination = [];
combinations(0);
console.log(levels);

const Home = () => {
  return (
    <div className="grid h-screen border-4 place-content-center">
      {/* <div className="flex">
        {nums.map((i) => {
          return <div className="border border-black p-6 m-2">{i}</div>;
        })}
      </div> */}
    </div>
  );
};

export default Home;
