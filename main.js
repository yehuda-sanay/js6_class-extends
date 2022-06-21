class Student{
    constructor(studentName,studentClass,studentId){
        this.studentNames=studentName;
        this.studentClass=studentClass;
        this.studentId=studentId;
    }
}
const student1 =new Student("yehuda","math",305202582);
const student2 =new Student("aviv","sport",302565751);
console.log(student1);
console.log(student2);

class Colegstudent extends Student{
    
}
const colegstudent1=new Colegstudent("nadav","gialegi",30251542130);
console.log(colegstudent1);

class Schollstudent extends Student{
    constructor(studentName,lastname,studentClass,studentId,grad){
        super(studentName,studentClass,studentId)
        this.lastname=lastname;
        this.grad=grad;
    }
}
const schollstudent1 = new Schollstudent("yoav","sanay","fizic",54213213,65);
console.log(schollstudent1);

