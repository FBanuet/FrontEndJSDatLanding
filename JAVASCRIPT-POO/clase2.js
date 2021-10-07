const fabys1 = {
    name: "FABIAN",
    username: 'Banarq',
    points: 250,
    socialMedia : {
        twitter: "banarq94",
        instagram: "DatArchitects",
        linkedin: "Fabian.fbanuet",

    },
    appCourses = [
        "BIM360 Tools",
        "REVIT BIM",
        "NAVISWORKS",
        "Dynamo BIM",
        "Grasshopper3D",
        "Revit API",
    ],

    learningPaths: [
        {
            name: "Escuela Virtual de Construccion",
            courses: [
            "BIM360 Tools",
            "REVIT BIM",
            "NAVISWORKS",
            ],

        },
        {
            name: "Escuela de Programación BIM",
            courses: [
            "Dynamo BIM",
            "Grasshopper3D",
            "Revit API",
            ],

        },
        
    ],
};


const Miguelito1 = {
    name: "Miguel",
    username: 'M94Happy',
    points: 145,
    socialMedia : {
        twitter: "miguelmz",
        instagram: "mMiguel",
        linkedin: "Miguel.cervantes",

    },
    appCourses = [
        "Illustrator",
        "Photoshop",
        "After Effects",
        "Premiere",
        "Pandas",
        "Numpy",
    ],

    learningPaths: [
        {
            name: "Escuela Diseño Gráfico",
            courses: [
            "Illustrator",
            "Photoshop",
            "After Effects",
            "Premiere",
            ],

        },
        {
            name: "Escuela de Programación BIM",
            courses: [
            "Pandas",
            "Numpy",
            "MatPlotLib",
            ],

        },
        
    ],
};


/// CLASES ESCALABLES

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

const FAB2 = new Student({
    name: "FabianB",
    username: "bANARQ94",
    email:"fabihotlenn@hotmail.com",
    twitter: "Banarq94"
});