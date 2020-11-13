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
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';

@NgModule({

    imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule ],

    declarations: [ SearchComponent, CategoryComponent, SpinnerOverlayComponent  ],

    exports: [ SearchComponent, CategoryComponent ],

})
export class ComponentsModule {}
