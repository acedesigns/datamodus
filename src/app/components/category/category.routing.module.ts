/* =======================================================
 *
 * Created by anele on 2020/11/12.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
    {
        path: '', component: CategoryComponent
    }
];

@NgModule({

    imports: [ RouterModule.forChild(routes) ],

    exports: [ RouterModule  ]
})

export class CategoryRoutingModule {}