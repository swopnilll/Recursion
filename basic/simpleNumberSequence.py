def printNumberSequenceDesc (num):
    if num > 0: 
        printNumberSequenceDesc(num - 1);
        print(num);
        
printNumberSequenceDesc(10);

def printNumberSequenceAsc (num, initial):
    if(initial <= num):
        print(initial);
        initial = initial + 1;
        printNumberSequenceAsc(num, initial);
        
#printNumberSequenceAsc(10, 3)        