const printNumberSequenceDescending = (number) => {
  if (number > 0) {
    printNumberSequenceDescending(number - 1);
    console.log(number);
  }
};

// printNumberSequenceDescending(5);

const printNumberSequenceAscending = (number, initial) => {
  if (initial <= number) {
    console.log(initial);

    initial = initial + 1;

    printNumberSequenceAscending(number, initial);
  }
};

printNumberSequenceAscending(10, 1);
