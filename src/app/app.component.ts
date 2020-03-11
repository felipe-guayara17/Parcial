import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'mio';
  nombre: string = null;
  edad: number = null
  pasaje: number = null
  descuento: number= null;

  seleccion1: string = '';
  decision1: any = [
    'Si',
    'No',
  ];
  radio1 (event: any) {
    //update the ui
    this.seleccion1 = event.target.value;
  }

  seleccion2: string = '';
  decision2: any = [
    'Si',
    'No',
  ];
  radio2 (event: any) {
    //update the ui
    this.seleccion2 = event.target.value;
  }

  calcular(){
    if(this.edad < 4 ){
      this.descuento = 0;
    }
    if(this.seleccion1 == "Si"){
      this.descuento = this.pasaje * 0.40;
    }
    if(this.edad >= 4 && this.edad <= 7){
      this.descuento = this.pasaje * 0.50;
    }
    if(this.edad > 65){
      this.descuento = this.pasaje * 0.40;
    }
    if(this.seleccion2 == "Si"){
      this.descuento = this.pasaje * 0.70;
    }
  }
}
