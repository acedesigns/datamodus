/* =======================================================
 *
 * Created by anele on 2020/11/12.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: NewsComponent
    }
];

@NgModule({

    imports: [ RouterModule.forChild(routes) ],

    exports: [ RouterModule ]
})

export class NewsRoutingModule {}
