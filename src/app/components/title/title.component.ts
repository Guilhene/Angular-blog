import { NgIf } from '@angular/common';
import { Component, Input, OnInit, } from '@angular/core';

@Component({
    selector: 'app-title',
    imports: [],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class TitleComponent{

  
  @Input() primaryImg: string = "";
  @Input() secondImg: string = "";
  @Input() blogTitle: string = "";
  @Input() blogDescricao: string = "";
  @Input() title: string = "";
  @Input() descricao: string = "";
  @Input() filtre1: string = "";
  @Input() filtre2: string = "";
  @Input() filtre3: string = "";
  
  
}