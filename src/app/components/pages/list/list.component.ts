import { Component } from '@angular/core';
import { NavBlogComponent } from '../../nav-blog/nav-blog.component';
import { CardTopMuscComponent } from '../../card-top-musc/card-top-musc.component';

@Component({
  selector: 'app-list',
  imports: [NavBlogComponent, CardTopMuscComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  img: string = "/image.png";
  top: string = "Musicas";
  titleTop: string = "Em Auta";
  top1: string = "DtMF - Bad Bunny";
  top2: string = "Die With A Smile - Bruno Mars, Lady Gaga";
  top3: string = "APT - Rosé, Bruno Mars";
  top4: string = "BAILE INoLVIDABLE - Bad Bunny";
  top5: string = "NUEVAYoL - Bad Bunny";
  descricaoTop:string = "Musica em alta no mundo."
  button: string = "Em Auta"
}
