/* =======================================================
 *
 * Created by anele on 2020/11/12.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    articles;
    isData = true;

    constructor( private activeRoute: ActivatedRoute,  private service: HttpService ) {

        this.activeRoute.params.subscribe(
            (param: any) => {
                this.getSearchResult(param)
            }
        );
    }


    ngOnInit(): void {}


    identify(index, item){
        console.log(item);
        return item.author;
    }


    groupArray<T>(data: Array<T>, n: number): Array<T[]> {
        let group = new Array<T[]>();
​
        for (let i = 0, j = 0; i < data.length; i++) {
            if (i >= n && i % n === 0)
                j++;
            group[j] = group[j] || [];
            group[j].push(data[i])
        }
​
        return group;
    }


    getSearchResult(search: any) {

        this.service.getData('search' + '?searchTerm='+search.term + '&dateFrom='+ search.date)
            .pipe()
            .subscribe(
                (data: any) => {
                    this.articles = this.groupArray(data.articles, 3);
                    this.isData = false;
                    console.log(this.articles);

                },
                (error) => {
                    console.log(error);
                },
                () => {}
            )
    }

}
