

const getGradePoint = (nameOfCourse) => {
    const courseUnit = document.querySelector(`#${nameOfCourse}Unit`).innerText;
    const courseGrade = document.querySelector(`#${nameOfCourse}Grade`).innerText;

   function convertGradeToNumber(courseGrade) {
    switch (courseGrade.toUpperCase()) {
        case 'A':
            return 5;
        case 'B':
            return 4;
        case 'C':
            return 3;
        case 'D':
            return 2;
        case 'E':
            return 1;
        case 'F':
            return 0;

    }
  }

   const total = courseUnit * convertGradeToNumber(courseGrade);
    document.querySelector(`#${nameOfCourse}GradePoint`).innerText = `${total}`;

    return total;
}



const triggerSumButton = document.querySelector('#triggerSumButton');


triggerSumButton.addEventListener("click", function () {

    const csc101GradePoint = getGradePoint('csc101');
    const csc102GradePoint = getGradePoint('csc102');
    const csc103GradePoint = getGradePoint('csc103');
    const mat101GradePoint = getGradePoint('mat101');
    const mat102GradePoint = getGradePoint('mat102');
    const csc111GradePoint = getGradePoint('csc111');
    const csc112GradePoint = getGradePoint('csc112');
    const csc113GradePoint = getGradePoint('csc113');
    const mat111GradePoint = getGradePoint('mat111');
    const mat112GradePoint = getGradePoint('mat112');

    const sumGpa  = csc101GradePoint + csc101GradePoint + csc103GradePoint + mat101GradePoint + mat102GradePoint + csc111GradePoint + csc112GradePoint + csc113GradePoint + mat111GradePoint + mat112GradePoint;
    const cgpa = sumGpa/28;
    const roundedCgpa = parseFloat(cgpa.toPrecision(3))
    document.querySelector('#result').innerText = `Bravo!!! You got ${roundedCgpa} CGPA in two semesters.`;
    

    /*
    To perfect this code, we need to work on the following
    1. To get sum of GradeUnits using the form
    */
});