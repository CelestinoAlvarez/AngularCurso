import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
                <h1>Hola Mundo</h1>
                <h3>La base es {{base}}</h3>
                
                <button (click)="Aumentar(base)">{{base}}</button>
                {{contador}}
                <button (click)="Disminuir(base)">{{base}}</button>    
    `,
})

export class ContadorComponent{
    title = 'Contador App';
    contador=0;
    base=5;
  
    Aumentar(valor:number){
     this.contador+=valor;
    }
  
    Disminuir(valor:number){
      this.contador-=valor;
    }
}