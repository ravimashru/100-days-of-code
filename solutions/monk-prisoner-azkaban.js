// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
  let [N, nums] = input.split("\n");
  N = parseInt(N);
  nums = nums.split(" ").map((e) => parseInt(e));

  const answer = getAnswer(N, nums);

  answer.forEach((e) => process.stdout.write(e + " "));
}

function getAnswer(N, nums) {
  const res = [];
  for (let i = 0; i < N; i++) {
    let x = -1,
      y = -1;

    let k = i - 1;
    while (k >= 0) {
      if (nums[k] > nums[i]) {
        x = k + 1;
        break;
      }
      k--;
    }

    k = i + 1;
    while (k < N) {
      if (nums[k] > nums[i]) {
        y = k + 1;
        break;
      }
      k++;
    }

    res.push(x + y);
  }
  return res;
}