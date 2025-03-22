import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-top-musc',
    imports: [],
    templateUrl: './card-top-musc.component.html',
    styleUrl: './card-top-musc.component.css'
})
export class CardTopMuscComponent  {

  @Input() typeTop: "card-top" | "outline-top" = "card-top";
  @Input() img: string = "";
  @Input() top: string = "";
  @Input() title: string = "";
  @Input() top1: string = "";
  @Input() top2: string = "";
  @Input() top3: string = "";
  @Input() top4: string = "";
  @Input() top5: string = "";
  @Input() descricaoTop: string = "";
  @Input() button: string = "";
  // @Input() button: 'Playlist' | 'Sign Up' = 'Playlist' ;


}
