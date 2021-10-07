//OBJETOS LITERALES O CLASES DENTRO DE UN MAIN TIPO CSHARP

const natalia = {
    name: "Natalia",
    edad: 20,
    cursosApp: [
    'Revit',
    'BIM360',
    'Navisworks',
    'Rhinoceros',
    ],

    //metodos this. (metodos del objeto en si)
    aprobarCurso(nuevoCurso){
        this.cursosApp.push(nuevoCurso);
    },

};

/// PROTOTIPOS LITERAL CLASES EN C#

function student(name,edad,cursosAproved){

    this.name = name;
    this.edad = edad;
    this.cursosAproved = cursosAproved;

}

student.prototype.CursoAprovado = (curso) => {
    this.cursosAproved.push(curso);
};


const Pepe = new student('Pepe',45,['DynamoBIM','Revit','Navisworks',]);

// CLASES (PROTOTIPOS CON SINTAXIS DE CLASES EN JS)

class Estudiante {

    //METODO CONSTRUCTOR (DESARROLLANDOLE PROPIEDADES EN BASE A PARÁMETROS)
    constructor({
        name,
        age,
        appCourses = ['bIENVENIDA','INTRO'],
    }) {
        this.name = name;
        this.age = age;
        this.appCourses = appCourses;
        
    }

    //METODOS

    aprobandoCursos(Course) {
        this.appCourses.push(Course);
    }
};


const Fabys = new Estudiante({
    name: "EL FABYS",
    age: 26,
    
});
