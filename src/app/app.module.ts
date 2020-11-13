/* =======================================================
 *
 * Created by anele on 2020/11/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';


@NgModule({
    declarations: [ AppComponent ],

    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule, NgbModule,
        BrowserAnimationsModule
    ],

    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
