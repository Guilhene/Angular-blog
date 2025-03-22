import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContentComponent } from './components/pages/content/content.component';
import { ListComponent } from './components/pages/list/list.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'content',
        component: ContentComponent
    },
    {
        path:'list',
        component: ListComponent
    }
];
