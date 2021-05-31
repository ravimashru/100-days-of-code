function processData(input) {
  const lines = input.split("\n");
  const n = parseInt(lines[0], 10);

  const phonebook = new Map();
  for (let i = 1; i <= n; i++) {
    const [name, number] = lines[i].split(" ");
    phonebook.set(name, number);
  }

  for (let i = n + 1; i < lines.length; i++) {
    const query = lines[i];
    if (phonebook.has(query)) {
      process.stdout.write(`${query}=${phonebook.get(query)}\n`);
    } else {
      process.stdout.write("Not found\n");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
