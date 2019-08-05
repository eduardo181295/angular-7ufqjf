import { Component } from '@angular/core';

@Component({
  selector: 'userCapturaComponent',
  templateUrl: './captura.component.html'
})

export class userCapturaComponent  {
  public nombre : string;
  public paterno : string;
  public materno : string;


public enviar(){
  console.log("User to save [" + this.nombre + " " +  this.paterno + " " +  this.materno + "]");
}


}