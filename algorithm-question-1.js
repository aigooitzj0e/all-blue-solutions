// There are 67 students in the class of Psychology. During the mid term exams only 66 students took up the exam and the
// class average was 30. John Doe who was absent for the exam re took the exam a week later and the new class average was 31.
// How much did John doe score

//avg = (studentScore/numberOfStudents)
//studentScore = (avg * numberOfStudents)

//Class averages will always be calculated with 67 students, regardless of absences.

//30 = (oldTotal/67)
//oldTotal: 2010

//31 = (newTotal/67)
//newTotal: 2077

const johnScore = () => {
    const classStudents = 67;
    const oldAvg = 30;
    const oldTotal = classStudents * oldAvg;
    const newAvg = 31;
    const newTotal = classStudents * newAvg;

    return newTotal - oldTotal;
};

console.log("John's Score:", johnScore());
