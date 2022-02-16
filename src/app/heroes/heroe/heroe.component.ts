
import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})

export class HeroeComponent{

    nombre:string='Ironman';
    edad:number=45;

get getNombreCapitalizado(){
    return this.nombre.toUpperCase();
}

    obtenerHeroe(){
        return `${this.nombre} - ${this.edad}`;
    }

cambiarNombre(nombre:string):void{
    this.nombre=nombre;
}

cambiarEdad(edad:number):void{
    this.edad=edad;
}

}