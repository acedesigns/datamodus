(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{C6Ja:function(t,r,e){"use strict";e.r(r),e.d(r,"SearchModule",(function(){return h}));var c=e("j1ZV"),i=e("ofXK"),n=e("tyNb"),o=e("fXoL"),a=e("N+K7");function s(t,r){1&t&&(o.Rb(0,"div",3),o.Rb(1,"div",4),o.Rb(2,"h3"),o.Bc(3," Loading Data ... \u2026 "),o.Qb(),o.Qb(),o.Qb())}function b(t,r){if(1&t&&(o.Rb(0,"div",7),o.Rb(1,"div",8),o.Rb(2,"div",9),o.Rb(3,"div",10),o.Nb(4,"img",11),o.Qb(),o.Qb(),o.Rb(5,"h6",12),o.Bc(6),o.Qb(),o.Rb(7,"p",13),o.Bc(8," By "),o.Rb(9,"a",14),o.Bc(10),o.Qb(),o.Bc(11),o.gc(12,"date"),o.Qb(),o.Rb(13,"p",13),o.Bc(14),o.Qb(),o.Rb(15,"div",15),o.Bc(16),o.Qb(),o.Rb(17,"div",16),o.Rb(18,"a",17),o.Bc(19,"Read more"),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t){const t=r.$implicit;o.zb(4),o.lc("src",t.urlToImage,o.uc),o.zb(2),o.Dc(" ",t.title," "),o.zb(4),o.Dc("",t.author," "),o.zb(1),o.Dc(" on ",o.ic(12,7,t.publishedAt,"dd LLL yyyy"),". "),o.zb(3),o.Dc(" Source ",t.source.name," "),o.zb(2),o.Dc(" ",t.description," "),o.zb(2),o.mc("href",t.url,o.uc)}}function u(t,r){if(1&t&&(o.Rb(0,"div",5),o.zc(1,b,20,10,"div",6),o.Qb()),2&t){const t=r.$implicit;o.zb(1),o.lc("ngForOf",t)}}const d=[{path:"",component:(()=>{class t{constructor(t,r){this.activeRoute=t,this.service=r,this.isData=!0,this.activeRoute.params.subscribe(t=>{this.getSearchResult(t)})}ngOnInit(){}identify(t,r){return console.log(r),r.author}groupArray(t,r){let e=new Array;for(let c=0,i=0;c<t.length;c++)c>=r&&c%r==0&&i++,e[i]=e[i]||[],e[i].push(t[c]);return e}getSearchResult(t){this.service.getData("search?searchTerm="+t.term+"&dateFrom="+t.date).pipe().subscribe(t=>{this.articles=this.groupArray(t.articles,3),this.isData=!1,console.log(this.articles)},t=>{console.log(t)},()=>{})}}return t.\u0275fac=function(r){return new(r||t)(o.Mb(n.a),o.Mb(a.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-search"]],decls:3,vars:2,consts:[[1,"myMargin"],["class","container h-100",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],[1,"container","h-100"],[1,"row","h-100","justify-content-center","align-items-center"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"uk-margin","uk-card","uk-card-default","uk-card-hover","uk-card-body"],["uk-grid","",1,"uk-grid-small","uk-flex-middle"],[1,"uk-width-auto"],["uk-img","",1,"uk-border-rounded",3,"src"],[1,"uk-card-title"],[1,"uk-article-meta"],["href","#"],[1,""],[1,"uk-card-footer"],["target","_blank",1,"uk-button","uk-button-text",3,"href"]],template:function(t,r){1&t&&(o.Rb(0,"div",0),o.zc(1,s,4,0,"div",1),o.zc(2,u,2,1,"div",2),o.Qb()),2&t&&(o.zb(1),o.lc("ngIf",r.isData),o.zb(1),o.lc("ngForOf",r.articles))},directives:[i.k,i.j],pipes:[i.d],styles:[".myMargin[_ngcontent-%COMP%]{margin:100px 0 2rem}"]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(r){return new(r||t)},imports:[[n.c.forChild(d),i.b],n.c]}),t})(),h=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(r){return new(r||t)},providers:[],imports:[[c.a,l]]}),t})()}}]);