/* =======================================================
 *
 * Created by anele on 2020/11/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
    { path: '', redirectTo: 'news', pathMatch: 'full'},
    { path: 'news', component: NewsComponent },
    {
        path: 'search/:term/:date',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
    },
    {
        path: 'category/:category',
        loadChildren: () => import('./components/category/category.module').then(m => m.CategoryModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
