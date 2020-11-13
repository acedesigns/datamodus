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
import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article.routing.module';

@NgModule({

    imports: [ CommonModule, ArticleRoutingModule ],

    declarations: [ ArticleComponent ],

    providers : [  ]
})

export class ArticleModule {}
