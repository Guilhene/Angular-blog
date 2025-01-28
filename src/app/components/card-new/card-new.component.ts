import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper/types';




@Component({
    selector: 'app-card-new',
    standalone: true,
    imports: [],
    templateUrl: './card-new.component.html',
    styleUrl: './card-new.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardNewComponent  {

  @Input() typeBtn: "card-new" | "outline-primary" = "card-new";


}