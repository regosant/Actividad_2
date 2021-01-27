import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  constructor() { }
  public myClass:boolean=true;
  tamano=30;
  presentacion={
    "background-color":"black",
    "color":"white",
    "width.px":"1000",
    "height.px":"200",
    "font-size.px":this.tamano,
    "display": "flex",
    "justify-content":"center",
    "align-items": "center"
  }
  agrandar() {
    this.tamano++;
    this.presentacion["font-size.px"]=this.tamano;  
  }
  reducir() {
    this.tamano--;
    this.presentacion["font-size.px"]=this.tamano;      
  }
  ngOnInit(): void {
  }
onChangeClass():void{
  this.myClass=!this.myClass
  }
}