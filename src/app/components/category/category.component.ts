/* =======================================================
 *
 * Created by anele on 2020/11/12.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    selectedCategory: string;
    articles: any;
    isData = true;

    constructor(private activeRoute: ActivatedRoute, private service: HttpService ) { }


    ngOnInit(): void {

        this.selectedCategory = this.activeRoute.snapshot.params['category'];

        this.service.getData('categories' + '?category=' +this.selectedCategory)
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


}
