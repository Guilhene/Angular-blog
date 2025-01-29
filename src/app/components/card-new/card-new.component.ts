import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, AfterContentInit, AfterViewInit } from '@angular/core';



@Component({
    selector: 'app-card-new',
    standalone: true,
    imports: [],
    templateUrl: './card-new.component.html',
    styleUrl: './card-new.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardNewComponent {

  @Input() typeBtn: "card-new" | "outline-primary" = "card-new";

}