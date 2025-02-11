import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-blog',
    imports: [],
    templateUrl: './nav-blog.component.html',
    styleUrl: './nav-blog.component.css'
})
export class NavBlogComponent {
    
    @Input() img: string = "";
    @Input() top: string = "";
    @Input() title: string = "";
    @Input() top1: string = "";
    @Input() top2: string = "";
    @Input() top3: string = "";
    @Input() top4: string = "";
    @Input() top5: string = "";
    @Input() descricao: string = "";
    @Input() button: string = "";

}
