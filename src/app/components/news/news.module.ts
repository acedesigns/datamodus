/* =======================================================
 *
 * Created by anele on 2020/11/12.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news.routing.module';

@NgModule({

    imports: [ CommonModule, NewsRoutingModule, RouterModule ],

    declarations: [ NewsComponent, RouterModule ],

    providers : [  ]
})

export class NewsModule {}