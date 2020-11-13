/* =======================================================
 *
 * Created by anele on 2020/11/12.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
    {
        path: '', component: SearchComponent
    }
];

@NgModule({

    imports: [ RouterModule.forChild(routes), CommonModule],

    exports: [ RouterModule,  ]
})

export class SearchRoutingModule {}