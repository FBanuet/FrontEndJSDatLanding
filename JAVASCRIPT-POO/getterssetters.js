/// CLASES ESCALABLES

class Course{
    constructor({

        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name (){
        return this._name;
    }

    set name(newName){
        if(newName === "Curso Pene"){
            console.error("STORM526 -NO ACTUALIZAR CURSO");
        }else{
            this._name = newName;

        }
        

    }
}




class learningPaths{
    constructor({
        name,
        cursosLista = [], 
    }) {

        this.name = name;
        this.cursosLista = cursosLista;


    }   
}



class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        Instagram = undefined,
        Linkedin = undefined,
        approvedCourses = [],
        learningpaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            Instagram,
            Linkedin,
        };
        
        this.approvedCourses  = approvedCourses;
        this.learningpaths = learningpaths;

    }
}


const CursoPBasica = new Course({
    name:"curso gratis de programación",
    
});

const CursoDynamoBIM = new Course({
    name:"CursoDynamoBIM",
    
});

const CursoRevit = new Course({
    name:"Curso Revit BIM",
    
});

const CursorRevitAPI = new Course({
    name:"Revit API",
    
});

const CursorNavisworks = new Course({
    name:"Navisworks",
    
});



const escuelaBIMpro= new learningPaths({
    name:"Escuela de Programación BIM",
    cursosLista : [
        CursoPBasica,
        CursoDynamoBIM,
        CursorRevitAPI,
    ],
});

const escuelaBIM= new learningPaths({
    name:"Escuela de BIM",
    cursosLista : [
        CursoRevit,
        CursorNavisworks,
        CursoDynamoBIM,
    ],
});



const FAB2 = new Student({
    name: "FabianB",
    username: "bANARQ94",
    email:"fabihotlenn@hotmail.com",
    twitter: "Banarq94"
});
