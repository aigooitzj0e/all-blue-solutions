// Write a program that prints the numbers from 1 to 50. But for multiples of three print "Triple"
// instead of the number and for the multiples of five print " Quintuple". For numbers which are
// multiples of both three and five print "TripleQuintuple". Use any language of your choice to
// accomplish the task.

const printNums = () => {
    for (let i = 0; i <= 50; i++) {
        if (i === 0) {
            console.log(i);
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('TripleQuintuple');
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log('Triple');
        } else if (i % 5 === 0) {
            console.log('Quintuple');
        } else {
            console.log(i);
        }
    }
};

printNums();
