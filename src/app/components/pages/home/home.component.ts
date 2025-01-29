import { Component, OnInit } from '@angular/core';
import { CardNewComponent } from '../../card-new/card-new.component';
import { CardTopMuscComponent } from '../../card-top-musc/card-top-musc.component';
import { TitleComponent } from '../../title/title.component';
import { NavBlogComponent } from '../../nav-blog/nav-blog.component';

@Component({
    selector: 'app-home',
    imports: [TitleComponent, CardTopMuscComponent, CardNewComponent, NavBlogComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
    //tag title
    primaryImg:string = "/spotify.png";
    secondImg:string = "/linkedin.png";
    blogTitle:string = "Blog Guilherme"
    blogDescricao:string = "Blog about art music design.";
    title:string = "O Simbolismo da Arte Rupestre";
    descricao:string = "André Leroi-Gourhan é o pré-historiador contemporâneo que mais marcou a sua geração, particularmente graças aos seus trabalhos sobre a arte pré-histórica. Mas, sabe-se lá porquê, nunca foi além das suas hipóteses iniciais, escudando-se atrás de pretensos valores científicos. Foi ele quem pôs em evidencia a bipolaridade das figurações pré-históricas, com o casal animal macho – animal fêmea. Conhecia as práticas mágicas humanas através dos testemunhos etnográficos e pré-históricos. Mas nunca acreditou que os símbolos pudessem ser intemporais e pertencerem tanto ao homem de há 20.000 anos atrás como ao do século XX."
    filtre1: string = "Art";
    filtre2: string = "Nova Acrópole";
    filtre3: string = "caverna";
    
    //tag card-top
    img: string = "/image.png";
    top: string = "Musicas";
    titleTop: string = "Em Auta";
    top1: string = "DtMF";
    top2: string = "Die With A Smile";
    top3: string = "APT";
    top4: string = "BAILE INoLVIDABLE";
    top5: string = "NUEVAYoL";
    descricaoTop:string = "Músicas mais ouvidas do mundo."
    button: string = "Em Auta"

    ngOnInit(): void {
    }
}
