import { Component, Input, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
    selector: 'app-card-new',
    standalone: true,
    imports: [],
    templateUrl: './card-new.component.html',
    styleUrl: './card-new.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardNewComponent  {
 
    swiper =  {
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },
      pagination: false,
      navigation: true,
      freeMode: true,
    }

    
  


  
  

  //img
  @Input() typeBtn: "card-new" | "outline-primary" = "card-new";
  @Input() cardImg: string = "";
  @Input() cardImg2: string = "";
  @Input() cardImg3: string = "";
  @Input() cardImg4: string = "";
  @Input() cardImg5: string = "";
  @Input() cardImg6: string = "";
  @Input() cardImg7: string = "";
  @Input() cardImg8: string = "";

  //filtre
  @Input() filtre1: string = "";
  @Input() filtre2: string = "";
  @Input() filtre3: string = "";

  @Input() cardTilte1: string = "";
  @Input() cardTilte2: string = "";
  @Input() cardTilte3: string = "";
  @Input() cardTilte4: string = "";
  @Input() cardTilte5: string = "";
  @Input() cardTilte6: string = "";
  @Input() cardTilte7: string = "";
  @Input() cardTilte8: string = "";

  @Input() description1: string = "";
  @Input() description2: string = "";
  @Input() description3: string = "";
  @Input() description4: string = "";
  @Input() description5: string = "";
  @Input() description6: string = "";
  @Input() description7: string = "";
  @Input() description8: string = "";

}