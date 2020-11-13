/* =======================================================
 *
 * Created by anele on 2020/11/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


    constructor( private router: Router ) { }


    ngOnInit(): void {}


    goToCat(category: string) {
        this.router.navigate(['/category', category]).then();
    }

}
