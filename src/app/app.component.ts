/* =======================================================
 *
 * Created by anele on 2020/11/11.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {

    title = 'dotmodus';
    model: NgbDateStruct;
    searchModel = {
        term: '',
        onDate : ''
    };



    constructor( private service: HttpService, private router: Router ) {}


    ngOnInit () {
        /*
        this.service.getData('/sources').pipe(
            map(
                resp => resp.sources.filter(
                    item => item.category === 'technology'
                )
            ),
        ).subscribe((data) => {
            console.log(data);
        });*/
    }


    doSearch(term) {
        let formattedDate = term.onDate.year +'-'+ term.onDate.month +'-'+ term.onDate.day;
        const myOb = {
            term: term.term,
            onDate: formattedDate
        };
        this.router.navigate(['search/', myOb.term, myOb.onDate]).then();
    }


}
