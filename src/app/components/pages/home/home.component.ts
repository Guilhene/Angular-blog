import { Component } from '@angular/core';
import { CardNewComponent } from '../../card-new/card-new.component';
import { CardTopMuscComponent } from '../../card-top-musc/card-top-musc.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
