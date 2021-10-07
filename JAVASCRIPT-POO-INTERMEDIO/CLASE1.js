//REPASO BÁSICO DE LO QUE ES UN CLASE, SUS PROPIEDADES, SUS METODOS Y SU CREACIÓN DE  UNA INSTANCIA DEL MISMO PARA PLOTEAR
//POR PANTALLA O CONSOLA ALGUN DATO

class Wall {
    constructor({
        Id ,
        Largo,
        Ancho,
        Espesor
    }) {

        this.Id = Id;
        this.Largo = Largo;
        this.Ancho = Ancho;
        this.Espesor = Espesor;

    }
    GetWallArea(){
        const area = this.Largo * this.Ancho * this.Espesor;
        console.log("El area del Muro es: " + area);
    }


}

const MuroBasico = new Wall({
    Id: 25365,
    Largo: 8,
    Ancho: 3.5,
    Espesor: 0.40
});

