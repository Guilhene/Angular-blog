import { Component } from '@angular/core';
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
export class HomeComponent {

}
