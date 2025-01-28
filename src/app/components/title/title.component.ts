import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-title',
    imports: [],
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class TitleComponent {
  pontos: string = "..."
  limit: number = 300;
  text: string = "André Leroi-Gourhan é o pré-historiador contemporâneo que mais marcou a sua geração, particularmente graças aos seus trabalhos sobre a arte pré-histórica. Mas, sabe-se lá porquê, nunca foi além das suas hipóteses iniciais, escudando-se atrás de pretensos valores científicos. Foi ele quem pôs em evidencia a bipolaridade das figurações pré-históricas, com o casal animal macho – animal fêmea. Conhecia as práticas mágicas humanas através dos testemunhos etnográficos e pré-históricos. Mas nunca acreditou que os símbolos pudessem ser intemporais e pertencerem tanto ao homem de há 20.000 anos atrás como ao do século XX.";

}