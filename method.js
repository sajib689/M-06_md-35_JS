const student = {
    name: 'Kodak Ali',
    money: 1000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function (){
        console.log(this.name, 'is participating in  an exam');
    }
}
const output = student.exam();
console.log(output);