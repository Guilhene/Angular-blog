import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-top-musc',
    imports: [],
    templateUrl: './card-top-musc.component.html',
    styleUrl: './card-top-musc.component.css'
})
export class CardTopMuscComponent {
  @Input() button: 'Playlist' | 'Sign Up' = 'Playlist' ;
}
