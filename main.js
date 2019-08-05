(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"> -->\n<app-header></app-header>\n<router-outlet></router-outlet> <!--different components will be loaded according to the url-->\n<!-- <app-post-tags></app-post-tags> -->\n<br>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <button class=\"btn btn-primary\">damn!</button>\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {NgbdModalBasic} from './modal-basic';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    //title = 'disasters-app';
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser2();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _directives_max_date_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/max-date/directive */ "./src/app/directives/max-date/directive.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts/create-post/create-post.component */ "./src/app/posts/create-post/create-post.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _posts_post_tags_post_tags_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./posts/post-tags/post-tags.component */ "./src/app/posts/post-tags/post-tags.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./posts/view-post/view-post.component */ "./src/app/posts/view-post/view-post.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_noauth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/noauth.guard */ "./src/app/auth/noauth.guard.ts");
/* harmony import */ var _articles_create_article_create_article_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./articles/create-article/create-article.component */ "./src/app/articles/create-article/create-article.component.ts");
/* harmony import */ var _articles_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./articles/article-list/article-list.component */ "./src/app/articles/article-list/article-list.component.ts");
/* harmony import */ var _articles_view_article_view_article_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./articles/view-article/view-article.component */ "./src/app/articles/view-article/view-article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {NgbdModalBasic} from './modal-basic';






// import {Quill} from 'quill/core';





// import {MatChipsModule} from '@angular/material/chips';









var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_auth_noauth_guard__WEBPACK_IMPORTED_MODULE_22__["NoAuthGuard"]] },
    { path: 'create-post', component: _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_12__["CreatePostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'posts/:post_id', component: _posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_19__["ViewPostComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"] },
    { path: 'create-article', component: _articles_create_article_create_article_component__WEBPACK_IMPORTED_MODULE_23__["CreateArticleComponent"] },
    { path: 'articles-list', component: _articles_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_24__["ArticleListComponent"] },
    { path: 'articles/:article_id', component: _articles_view_article_view_article_component__WEBPACK_IMPORTED_MODULE_25__["ViewArticleComponent"] },
    { path: '**', redirectTo: '/' } //wildcard, for unknown url path
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _directives_max_date_directive__WEBPACK_IMPORTED_MODULE_10__["MaxDateValidator"],
                _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_12__["CreatePostComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _posts_post_tags_post_tags_component__WEBPACK_IMPORTED_MODULE_17__["PostTagsComponent"],
                _posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_19__["ViewPostComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
                _articles_create_article_create_article_component__WEBPACK_IMPORTED_MODULE_23__["CreateArticleComponent"],
                _articles_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_24__["ArticleListComponent"],
                _articles_view_article_view_article_component__WEBPACK_IMPORTED_MODULE_25__["ViewArticleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_11__["QuillModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTreeModule"]
                //  Quill
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], multi: true }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"], _auth_noauth_guard__WEBPACK_IMPORTED_MODULE_22__["NoAuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/article-list/article-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/articles/article-list/article-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":hover.options{\r\n    color :rgb(62, 136, 158);\r\n    text-decoration: underline;\r\n  }\r\n  .options {\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    color:rgb(136, 186, 201);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/articles/article-list/article-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/articles/article-list/article-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"begin\">\n    <div class=\" pt-5\">\n  \n      <h3 style=\"text-align: center;\">Articles</h3>\n      <button class=\"btn btn-primary\" (click)=\"goto_create_article();\" *ngIf=\"authService.getIsAuth();\">Create article</button>\n      <hr>\n    </div>\n \n    <div class=row *ngFor=\"let article of result; index as i;\" style=\"margin-bottom: 1rem;\">\n        <div class=\"col-3 col-sm-1\" style=\"padding-right: 0rem; margin-bottom: 0rem; \">\n    \n          </div>\n  \n          <div class=\"col-9 col-sm-11\" style=\"padding-right: 0rem; margin-bottom: 0rem;\">\n           <a href=\"articles/{{article.article_id}}\"><h5 style=\"margin-left: 0rem;\" class=\"options\">{{article.article_title}}</h5></a>\n           <p>{{helper.shorten_text(article.article_content,200)}}</p>\n           <p class=minspace>{{article.article_time.toLocaleString('en-GB')||null}}</p>\n\n                </div>\n\n            <hr style=\" width: 100%;\">\n\n    </div>\n\n  \n  </div>"

/***/ }),

/***/ "./src/app/articles/article-list/article-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/articles/article-list/article-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../help.service */ "./src/app/help.service.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/articles/article.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(articleService, helper, router, authService) {
        this.articleService = articleService;
        this.helper = helper;
        this.router = router;
        this.authService = authService;
        this.result = [{}];
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.load_articles().subscribe(function (result2) {
            _this.begin = true;
            result2.forEach(function (article) {
                article["article_time"] = new Date(article["article_time"]);
            });
            _this.result = result2;
            console.log(_this.result);
        });
    };
    ArticleListComponent.prototype.goto_create_article = function () {
        this.router.navigate(['/', 'create-article']);
    };
    ArticleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/articles/article-list/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/articles/article-list/article-list.component.css")]
        }),
        __metadata("design:paramtypes", [_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"], _help_service__WEBPACK_IMPORTED_MODULE_2__["HelpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/articles/article.service.ts":
/*!*********************************************!*\
  !*** ./src/app/articles/article.service.ts ***!
  \*********************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// this service is for usefull functions which might be relevant to many pages.
var ArticleService = /** @class */ (function () {
    //   private authStatusListener = new Subject<boolean>();
    function ArticleService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
    }
    ArticleService.prototype.get_time = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.get("http://localhost:3000/current_time").subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    ArticleService.prototype.submit_article = function (article_title, article_html, article_content) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/create_article", { article_title: article_title, article_html: article_html, article_content: article_content }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    ArticleService.prototype.load_articles = function () {
        var _this = this;
        console.log();
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.get("http://localhost:3000/load_articles").subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    ArticleService.prototype.article_view = function (article_id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/get_article", { article_id: article_id }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/articles/create-article/create-article.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/articles/create-article/create-article.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles/create-article/create-article.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/articles/create-article/create-article.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"col-md-8\" style=\"margin-top: 1rem;\">\n              <label for=\"title\" >Title</label>\n            <input type=\"text\" id=\"title\" placeholder=\"Title\" class=\"form-control\" autofocus name=\"title\" required maxlength=\"80\" style=\"margin-bottom: 1rem;\"  [(ngModel)]=\"title\">\n  <quill-editor [modules]=\"config\" (onContentChanged)=\"maxLength($event)\" id=\"answercontent\" #answercontent [(ngModel)]=\"html_content\" ></quill-editor>\n  <p>{{10000-contentlength}} letters left</p>\n  <p for=\"editor\" *ngIf=\"10000-contentlength<0\" style=\"color: red\">Post is too long</p>\n  <p for=\"editor\" *ngIf=\"3000000-htmllength<0\" style=\"color: red\">Post is too heavy, try deleting content like images</p>\n  <button class=\"btn btn-primary\"  style=\"margin-top: 0.1rem;\" (click)=\"submit_article();\" [disabled]=\"10000-contentlength<0||3000000-htmllength<0 ||!title\">Submit Article</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/articles/create-article/create-article.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/articles/create-article/create-article.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function() { return CreateArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../help.service */ "./src/app/help.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article.service */ "./src/app/articles/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateArticleComponent = /** @class */ (function () {
    function CreateArticleComponent(route, router, httpclient, articleService, authService, helper) {
        this.route = route;
        this.router = router;
        this.httpclient = httpclient;
        this.articleService = articleService;
        this.authService = authService;
        this.helper = helper;
        this.htmllength = 0;
        this.contentlength = 0;
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
        if (this.authService.getIsAuth() == false) {
            this.router.navigate(['/']);
        }
    };
    CreateArticleComponent.prototype.maxLength = function (e) {
        this.htmlcontent = e["html"];
        this.textcontent = e["text"];
        var rawtext = e["editor"]["root"]["textContent"];
        console.log(" html content is " + this.htmlcontent);
        console.log(" text content is " + this.textcontent);
        console.log(" raw text is  " + rawtext);
        this.htmllength = 0;
        this.contentlength = 0;
        try {
            this.contentlength = this.textcontent.length;
            this.htmllength = this.htmlcontent.length;
        }
        catch (_a) { }
        console.log(this.contentlength);
        console.log("html content length " + this.htmllength);
    };
    CreateArticleComponent.prototype.submit_article = function () {
        console.log(this.title);
        console.log(this.html_content);
        console.log(this.textcontent);
        this.articleService.submit_article(this.title, this.html_content, this.textcontent).subscribe(function (article_id) {
            console.log(article_id);
            {
                location.reload();
            }
        });
    };
    CreateArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-article',
            template: __webpack_require__(/*! ./create-article.component.html */ "./src/app/articles/create-article/create-article.component.html"),
            styles: [__webpack_require__(/*! ./create-article.component.css */ "./src/app/articles/create-article/create-article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _help_service__WEBPACK_IMPORTED_MODULE_3__["HelpService"]])
    ], CreateArticleComponent);
    return CreateArticleComponent;
}());



/***/ }),

/***/ "./src/app/articles/view-article/view-article.component.css":
/*!******************************************************************!*\
  !*** ./src/app/articles/view-article/view-article.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles/view-article/view-article.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/articles/view-article/view-article.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"article\">\n  <div class=\" pt-5\">\n\n    <h3>{{article.article_title || null }} </h3>\n    <p>article id: {{article_id}}</p>\n  </div>\n  <hr>\n  <div class=\"row\">\n\n    <div class=\"col-10 col-lg-10\">\n      <p [innerHTML]=\"article.article_html || null\"></p>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/articles/view-article/view-article.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/articles/view-article/view-article.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewArticleComponent", function() { return ViewArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/articles/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewArticleComponent = /** @class */ (function () {
    function ViewArticleComponent(route, router, httpclient, articleService) {
        this.route = route;
        this.router = router;
        this.httpclient = httpclient;
        this.articleService = articleService;
        this.article_id = 0;
    }
    ViewArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            try {
                _this.article_id = +params['article_id'];
                console.log(_this.article_id);
                var isint = Number.isInteger(_this.article_id);
                if (!isint)
                    _this.router.navigate(['/']);
                _this.articleService.article_view(_this.article_id).subscribe(function (article) {
                    _this.article = article;
                    console.log(_this.article);
                    if (!_this.article)
                        _this.router.navigate(['/']);
                });
            }
            catch (err) {
                console.log(err);
                _this.router.navigate(['/']);
            }
        });
    };
    ViewArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-article',
            template: __webpack_require__(/*! ./view-article.component.html */ "./src/app/articles/view-article/view-article.component.html"),
            styles: [__webpack_require__(/*! ./view-article.component.css */ "./src/app/articles/view-article/view-article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]])
    ], ViewArticleComponent);
    return ViewArticleComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            console.log("not auth!");
            this.router.navigate(['/']);
        }
        return isAuth;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var authData = { username: username, password: password };
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.http
                .post("http://localhost:3000/login", authData)
                .subscribe(function (response) {
                var token = response.token;
                _this.token = token;
                if (token) {
                    var expiresInDuration = response.expiresIn;
                    // this.setAuthTimer(expiresInDuration);
                    _this.isAuthenticated = true;
                    _this.userId = response.userId;
                    _this.authStatusListener.next(true);
                    var now = new Date();
                    var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    console.log(expirationDate);
                    _this.saveAuthData(token, expirationDate, _this.userId);
                    // console.log(response);
                }
                observer.next(_this.getIsAuth());
                if (token) {
                }
                // this.router.navigate(["/"]);
            });
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.autoAuthUser2 = function () {
        var authInformation = this.getAuthData2();
        // if (!authInformation) {
        //   return;
        // }
        // const now = new Date();
        // const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        // if (expiresIn > 0) {
        //   this.token = authInformation.token;
        //   this.isAuthenticated = true;
        //   this.userId = authInformation.userId;
        //   this.setAuthTimer(expiresIn / 1000);
        //   this.authStatusListener.next(true);
        // }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        var userId = localStorage.getItem("userId");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
        };
    };
    AuthService.prototype.getAuthData2 = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        if (token) {
            this.token = token;
            console.log("the token from getuauth data is");
            console.log(token);
            this.http
                .post("http://localhost:3000/auto_authentication", { token: token })
                .subscribe(function (response) {
                console.log(response);
                var message = response.message;
                if (message == "invalid token" || message == "timeout") {
                    _this.clearAuthData();
                    _this.token = null;
                    _this.isAuthenticated = false;
                    _this.userId = null;
                    console.log(message);
                }
                else if (message == "successfull auth") {
                    _this.isAuthenticated = true;
                    _this.token = token;
                    _this.userId = response.userid;
                    console.log(_this.userId);
                }
            });
            // const expirationDate = localStorage.getItem("expiration");
            // const userId = localStorage.getItem("userId");
            // if (!token || !expirationDate) {
            //   return;
            // }
            // return {
            //   token: token,
            //   expirationDate: new Date(expirationDate),
            //   userId: userId
            // }
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n.red {\n    color: red;\n    /* border: 1px solid red; */\n}"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<ng-template #content let-modal>\n\n  <div class=\"modal-body\">\n\n\n    <form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"onLogin(f)\">\n      <h1 class=\"h3 mb-3 font-weight-normal\" style=\"text-align: center\"> Log in</h1>\n\n      <div class=\"container\">\n          <label for=\"username\"><b>Username</b></label>\n        <input  id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\" ngModel required #username=\"ngModel\" autofocus=\"\" name=\"username\">\n        <label for=\"password\"><b>Password</b></label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" ngModel required #password=\"ngModel\" name=\"password\">\n\n      </div>\n      <button class=\"btn btn-success btn-block\" type=\"submit\" style=\"margin-top: 2rem;\"  [disabled]=\"!f.valid\">\n        <i class=\"fas fa-sign-in-alt\" ></i> Log in</button>\n\n        <p *ngIf=\"fail\" class=\"red\">Invalid username or Password</p>\n      <a href=\"#\" id=\"forgot_pswd\">Forgot password?</a>\n\n      <hr>\n\n      <button class=\"btn btn-primary btn-block\" type=\"button\" id=\"btn-signup\" (click)=\"OnSignUp();\">\n        <i class=\"fas fa-user-plus\"></i> Sign up New Account</button>\n\n    </form>\n\n\n\n\n\n\n  </div>\n\n</ng-template>\n\n\n<button class=\"btn btn-danger btn-sm\" (click)=\"open(content)\"> login</button>\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, modalService, router) {
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        console.log(form);
        this.fail = false;
        this.authService.login(form.value.username, form.value.password).subscribe(function (isauth) {
            console.log(isauth);
            if (isauth) {
                _this.modalService.dismissAll();
                _this.fail = false;
                _this.router.navigate(["/"]);
            }
            else {
                _this.fail = true;
            }
        });
    };
    LoginComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LoginComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    LoginComponent.prototype.OnSignUp = function () {
        this.router.navigate(['/register']);
        this.modalService.dismissAll();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/noauth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/auth/noauth.guard.ts ***!
  \**************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        console.log("does it work?!");
        var isAuth = this.authService.getIsAuth();
        if (isAuth) {
            console.log("auth!");
            this.router.navigate(['/']);
        }
        return !isAuth;
    };
    NoAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/directives/max-date/directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/max-date/directive.ts ***!
  \**************************************************/
/*! exports provided: MaxDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxDateValidator", function() { return MaxDateValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/app/directives/max-date/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MAX_DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MaxDateValidator; }),
    multi: true
};
var MaxDateValidator = /** @class */ (function () {
    function MaxDateValidator() {
    }
    MaxDateValidator.prototype.ngOnInit = function () {
        this.validator = Object(_validator__WEBPACK_IMPORTED_MODULE_2__["maxDate"])(this.maxDate);
    };
    MaxDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'maxDate') {
                this.validator = Object(_validator__WEBPACK_IMPORTED_MODULE_2__["maxDate"])(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    MaxDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaxDateValidator.prototype, "maxDate", void 0);
    MaxDateValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
            providers: [MAX_DATE_VALIDATOR]
        })
    ], MaxDateValidator);
    return MaxDateValidator;
}());



/***/ }),

/***/ "./src/app/directives/max-date/validator.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/max-date/validator.ts ***!
  \**************************************************/
/*! exports provided: maxDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return maxDate; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lang */ "./src/app/directives/util/lang.ts");


var maxDate = function (maxInput) {
    var value;
    var subscribe = false;
    var maxValue = maxInput;
    var isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"] || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"];
    return function (control) {
        if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            maxValue = maxInput.value;
        }
        value = Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(maxValue);
        if (!Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["isDate"])(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { maxDate: { error: 'maxDate is invalid' } };
            }
            else {
                throw Error('maxDate value must be or return a formatted date');
            }
        }
        if (Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["isPresent"])(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control))) {
            return null;
        }
        var d = new Date(Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["parseDate"])(control.value)).getTime();
        if (!Object(_util_lang__WEBPACK_IMPORTED_MODULE_1__["isDate"])(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
    };
};


/***/ }),

/***/ "./src/app/directives/util/lang.ts":
/*!*****************************************!*\
  !*** ./src/app/directives/util/lang.ts ***!
  \*****************************************/
/*! exports provided: isPresent, isDate, parseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    try {
        var date = new Date(obj);
        return !isNaN(date.getTime());
    }
    catch (e) {
        return false;
    }
}
function parseDate(obj) {
    try {
        // Moment.js
        if (obj._d instanceof Date) {
            var d = obj._d;
            var month = +d.getMonth() + 1;
            var day = +d.getDate();
            return d.getFullYear() + "-" + formatDayOrMonth(month) + "-" + formatDayOrMonth(day);
        }
        // NgbDateStruct
        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            var month = +obj.month;
            var day = +obj.day;
            return obj.year + "-" + formatDayOrMonth(month) + "-" + formatDayOrMonth(day);
        }
    }
    catch (e) { }
    return obj;
}
function formatDayOrMonth(month) {
    return month < 10 ? "0" + month : month;
}


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark nav justify-content-center\">\n  <form class=\"form-inline\" >\n    <!-- <div class=\"container\"> -->\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" style=\"margin-bottom: 0.3rem;\" size=\"100%\" #searchinput>\n        <button class=\"btn btn-success btn-sm\" type=\"submit\" style=\"margin-right: 0.5rem; \" (click)=\"search(searchinput.value)\">Search</button>\n        <button class=\"btn btn-primary btn-sm\" style=\"margin-right: 0.5rem; \" routerLink=\"/register\" *ngIf=\"!authService.getIsAuth()\">Register</button>\n        <button class=\"btn btn-info btn-sm\" style=\"margin-right: 0.5rem\" routerLink=\"/create-post\" *ngIf=\"authService.getIsAuth()\">New Post</button>\n        <!-- <button class=\"btn btn-danger\"  routerLink=\"/login\">Login</button> -->\n        <!-- <ngbd-modal-basic></ngbd-modal-basic>  -->\n        <button class=\"btn btn-secondary btn-sm\" style=\"margin-right: 0.5rem; \" (click)=\"onLogout()\" *ngIf=\"authService.getIsAuth()\">Log Out</button>\n        <!-- <button class=\"btn btn-secondary\" style=\"margin-right: 0.5rem\" (click)=\"onLogout()\" >Home</button> -->\n        <a class=\"btn btn-warning btn-sm\" style=\"margin-right: 0.5rem;  \" href=\"/home\" >Home</a>\n        <a class=\"btn btn-success btn-sm\" style=\"margin-right: 0.5rem; margin-top: 0.3rem;\" href=\"/articles-list\" >Articles</a>\n        \n\n        <!-- <button class=\"btn btn-secondary\" style=\"margin-right: 0.5rem\" routerLink=\"/posts/13\">Post 13</button> -->\n        <app-login *ngIf=\"!authService.getIsAuth()\"></app-login>\n        <!-- <p> is it auth? {{authService.getIsAuth()}}</p> -->\n        \n        \n    <!-- </div> -->\n  </form>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, authService, router) {
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.auth = this.authService.getIsAuth();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.search = function (search_value) {
        if (search_value)
            this.router.navigate(['/search'], { queryParams: { value: search_value } });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help.service.ts":
/*!*********************************!*\
  !*** ./src/app/help.service.ts ***!
  \*********************************/
/*! exports provided: HelpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpService", function() { return HelpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// this service is for usefull functions which might be relevant to many pages.
var HelpService = /** @class */ (function () {
    //   private authStatusListener = new Subject<boolean>();
    function HelpService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
    }
    HelpService.prototype.isNaturalNumber = function (str) {
        var pattern = /^(0|([1-9]\d*))$/;
        return pattern.test(str);
    };
    HelpService.prototype.isPositiveNaturalNumber = function (str) {
        var pattern = /^(([1-9]\d*))$/;
        return pattern.test(str);
    };
    HelpService.prototype.string_to_array = function (str) {
        var arr = str.split(",");
        return arr;
    };
    HelpService.prototype.shorten_text = function (str, length) {
        if (str.length <= length)
            return str;
        else
            return (str.slice(0, length - 3) + "...");
    };
    HelpService.prototype.get_time = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.get("http://localhost:3000/current_time").subscribe(function (data) {
                observer.next(data.result);
            });
        });
        // this.httpclient.get("http://localhost:3000/current_time").subscribe((data:any) => {
        //   console.log(data.result);
        //   // console.log(data);
        //   return data.result;
        // })
    };
    HelpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HelpService);
    return HelpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":hover.options{\r\n    color :rgb(62, 136, 158);\r\n    text-decoration: underline;\r\n  }\r\n  .options {\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    color:rgb(136, 186, 201);\r\n  }\r\n  .answers_exist {\r\n    background-color: #5fba7d;\r\n     color: white;\r\n      margin-top: 0.2rem;\r\n  }\r\n  .no_answers {\r\n    background-color: white;\r\n    color: red;\r\n     margin-top: 0.2rem;\r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"begin\">\n  <div class=\" pt-5\">\n\n    <h3>Questions recently asked</h3>\n    <hr>\n  </div>\n\n\n  <div class=row *ngFor=\"let post of result; index as i;\" style=\"margin-bottom: 1rem;\">\n      <div class=\"col-3 col-sm-1\" style=\"padding-right: 0rem; margin-bottom: 0rem; \">\n\n          <div class=\"border border-primary rounded\" style=\"color: grey; border-color: black !important;\" >\n            <div style=\"text-align: center;\">\n              <span>{{post.post_votes.toString()}}</span>\n            </div>\n            <div style=\"text-align: center;\">\n              <span>Votes</span>\n            </div>\n          </div>\n      \n          <div class=\"border border-primary rounded\" [ngClass]=\"{'no_answers': post.answers.toString()=='0',answers_exist: post.answers.toString()!='0' }\" >\n              <div style=\"text-align: center;\">\n                <span>{{post.answers.toString()}}</span>\n              </div>\n              <div style=\"text-align: center;\">\n                <span>Answers</span>\n              </div>\n            </div>\n\n\n\n      \n        </div>\n\n        <div class=\"col-9 col-sm-11\" style=\"padding-right: 0rem; margin-bottom: 0rem;\">\n         <a href=\"posts/{{post.post_id}}\"><h5 class=\"options\">{{post.post_title}}</h5></a>\n         <p>{{helper.shorten_text(post.post_content,200)}}</p>\n         <p class=minspace>{{post.post_time.toLocaleString('en-GB')||null}}</p>\n\n         <div style=\"margin-top: 0.5rem; margin-bottom: 1rem;\">\n          <mat-chip-list aria-label=\"Fish selection\" >\n            <mat-chip *ngFor=\" let tag of post.tags \">{{tag}}</mat-chip>\n          </mat-chip-list>\n        </div>\n              </div>\n              \n             \n\n          <hr style=\" width: 100%;\">\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../help.service */ "./src/app/help.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, postService, helper, router) {
        this.route = route;
        this.postService = postService;
        this.helper = helper;
        this.router = router;
        this.result = [{}];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.load_home().subscribe(function (result2) {
            _this.begin = true;
            result2.forEach(function (post) {
                post["post_time"] = new Date(post["post_time"]);
                if (post["post_tags"]) {
                    post["tags"] = _this.helper.string_to_array(post["post_tags"]);
                }
            });
            _this.result = result2;
            console.log(_this.result);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _posts_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _help_service__WEBPACK_IMPORTED_MODULE_3__["HelpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/posts/answer.model.ts":
/*!***************************************!*\
  !*** ./src/app/posts/answer.model.ts ***!
  \***************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer(answer_id, post_id, answer_html, answer_content, answer_time, answer_votes, user_id, user_username, user_reputation) {
        this.answer_id = answer_id;
        this.post_id = post_id;
        this.answer_html = answer_html.replace("img", "img class=" + '"max"');
        this.answer_content = answer_content;
        this.answer_time = new Date(answer_time);
        this.answer_votes = answer_votes;
        this.user_id = user_id;
        this.user_username = user_username;
        this.user_reputation = user_reputation;
        this.replies = [];
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/posts/answer_reply.model.ts":
/*!*********************************************!*\
  !*** ./src/app/posts/answer_reply.model.ts ***!
  \*********************************************/
/*! exports provided: AnswerReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerReply", function() { return AnswerReply; });
var AnswerReply = /** @class */ (function () {
    function AnswerReply(reply_id, answer_id, reply_content, reply_time, reply_votes, user_id, user_username, user_reputation) {
        this.reply_id = reply_id;
        this.answer_id = answer_id;
        this.reply_content = reply_content;
        this.reply_time = new Date(reply_time);
        this.reply_votes = reply_votes;
        this.user_id = user_id;
        this.user_username = user_username;
        this.user_reputation = user_reputation;
    }
    return AnswerReply;
}());



/***/ }),

/***/ "./src/app/posts/create-post/create-post.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/create-post/create-post.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\ninput.ng-invalid.ng-touched,\r\ntextarea.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n.red {\r\n    color: red;\r\n}\r\n/* img {\r\n    max-width:10rem;\r\n  } */\r\nimg.max {\r\n    width:1rem;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/posts/create-post/create-post.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/create-post/create-post.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row pt-5\">\n\n\n\n\n    <div class=\"col-md-8\">\n      <form [formGroup]=\"editorForm\" class=\"form-horizontal\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n        <div class=\"form-group\">\n          <label for=\"editor\" style=\"display: block\">\n            <h3>Your question:</h3>\n          </label>\n          <div >\n            <label for=\"title\" class=\"col-sm-3 control-label\">Title</label>\n            <input type=\"text\" id=\"title\" placeholder=\"Title\" class=\"form-control\" autofocus name=\"title\" required maxlength=\"80\" formControlName=\"title\">\n            <p *ngIf=\"!editorForm.controls.title.valid && editorForm.controls.title.touched\" class=\"red\">You must enter the title</p>\n          </div>\n\n\n          <div class=\"form-group\"></div>\n\n          <quill-editor formControlName=\"editor\" [modules]=\"config\" (onContentChanged)=\"maxLength($event)\"></quill-editor>\n          <label for=\"editor\">{{1000-contentlength}} letters left</label>\n          <p for=\"editor\" *ngIf=\"1000-contentlength<0\" style=\"color: red\">Post is too long</p>\n          <p for=\"editor\" *ngIf=\"300000-htmllength<0\" style=\"color: red\">Post is too heavy, try deleting content like images</p>\n\n          <app-post-tags></app-post-tags>\n\n        </div>\n        <button class=\"btn btn-primary mt-0.5\" [style]=\"{height:'100px !important'}\" [disabled]=\"   ((f.valid==false) || (!htmlcontent)) ||(300000-htmllength<0)\" type=\"submit\">Submit</button>\n\n        \n        <br>\n        <br>\n        <br>\n\n\n                <div class=\"col-md-8\" [innerHTML]=\"htmlcontent\">\n        </div>\n\n      </form>\n\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/posts/create-post/create-post.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/create-post/create-post.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post_tags_post_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-tags/post-tags.component */ "./src/app/posts/post-tags/post-tags.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
        this.htmllength = 0;
        this.contentlength = 0;
        this.editorStyle = {
            height: '100px !important'
        };
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        this.editorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'editor': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null), 'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.editorForm.controls["title"];
        new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    };
    CreatePostComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(this.editorForm.get('editor'));
        console.log(this.editorForm.get('editor').value);
        this.editorForm.get('editor');
        console.log(form);
        console.log(this.editorForm.getRawValue());
        this.htmlcontent = this.editorForm.get('editor').value;
        console.log(this.htmlcontent.length);
        var title = this.editorForm.get('title').value;
        console.log(title);
        var tags = this.get_tags(); // array of tags id
        var post = { 'user_id': '1', 'htmlcontent': this.htmlcontent, 'textcontent': this.textcontent, 'title': title, 'tags': tags };
        this.httpclient.post("http://localhost:3000/create_post", post).subscribe(function (data) {
            console.log(data);
            if (data == "post added") {
                alert("You have created a new post");
                _this.router.navigate(["/"]);
            }
        });
    };
    CreatePostComponent.prototype.maxLength = function (e) {
        this.htmlcontent = e["html"];
        this.textcontent = e["text"];
        var rawtext = e["editor"]["root"]["textContent"];
        console.log(" html content is " + this.htmlcontent);
        console.log(" text content is " + this.textcontent);
        console.log(" raw text is  " + rawtext);
        this.htmllength = 0;
        this.contentlength = 0;
        try {
            this.contentlength = this.textcontent.length;
            this.htmllength = this.htmlcontent.length;
        }
        catch (_a) { }
        console.log(this.contentlength);
        console.log("html content length " + this.htmllength);
    };
    CreatePostComponent.prototype.get_tags = function () {
        // getting the tags and converting names to id
        var tags = this.child.tags;
        var tags_full_data = this.child.tags_full_data;
        console.log(tags);
        var tags_id = [];
        tags.forEach(function (basicelement) {
            tags_full_data.some(function (fullelement) {
                if (fullelement.tag_name == basicelement) {
                    tags_id.push(fullelement.tag_id);
                    return true;
                }
            });
        });
        console.log(tags_id);
        return tags_id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_post_tags_post_tags_component__WEBPACK_IMPORTED_MODULE_4__["PostTagsComponent"]),
        __metadata("design:type", Object)
    ], CreatePostComponent.prototype, "child", void 0);
    CreatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./create-post.component.html */ "./src/app/posts/create-post/create-post.component.html"),
            styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/posts/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-tags/post-tags.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-tags/post-tags.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import '~@angular/material/prebuilt-themes/deeppurple-amber.css'; */\r\n/* @import \"~@angular/material/prebuilt-themes/indigo-pink.css\";  */\r\n.example-chip-list {\r\n    width: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/posts/post-tags/post-tags.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-tags/post-tags.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-chip-list\">\n    <mat-chip-list #chipList>\n      <mat-chip\n        *ngFor=\"let tag of tags\"\n        [selectable]=\"selectable\"\n        [removable]=\"removable\"\n        (removed)=\"remove(tag)\">\n        {{tag}}\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input\n        placeholder=\"New tag, maximum 5 tags\"\n        #tagInput\n        [formControl]=\"tagCtrl\"\n        [matAutocomplete]=\"auto\"\n        [matChipInputFor]=\"chipList\"\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        [matChipInputAddOnBlur]=\"addOnBlur\"\n        (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option  *ngFor=\"let tag of filteredtags | async\" [value]=\"tag\">\n        {{tag}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n"

/***/ }),

/***/ "./src/app/posts/post-tags/post-tags.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-tags/post-tags.component.ts ***!
  \********************************************************/
/*! exports provided: PostTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTagsComponent", function() { return PostTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostTagsComponent = /** @class */ (function () {
    function PostTagsComponent(httpclient) {
        var _this = this;
        this.httpclient = httpclient;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.tagCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.tags = [];
        this.all_tags = [];
        this.tags_full_data = [];
        this.filteredtags = this.tagCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tag) { return tag ? _this._filter(tag) : _this.all_tags.slice(); }));
    }
    PostTagsComponent.prototype.check = function () {
        console.log(this.tags);
        console.log(this.element);
    };
    PostTagsComponent.prototype.add = function (event) {
        // Add tag only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // is it real tag and not already used one?
            var istag = this.all_tags.indexOf(value) > -1 && this.tags.indexOf(value) == -1;
            console.log(istag);
            // Add our tag
            if (istag && this.tags.length <= 4) {
                if ((value || '').trim()) {
                    this.tags.push(value.trim());
                }
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.tagCtrl.setValue(null);
        }
    };
    PostTagsComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    PostTagsComponent.prototype.selected = function (event) {
        console.log(this.tags);
        console.log(this.tags.length);
        if (this.tags.indexOf(event.option.viewValue) == -1 && this.tags.length <= 4) {
            this.tags.push(event.option.viewValue);
            this.tagInput.nativeElement.value = '';
            this.tagCtrl.setValue(null);
        }
    };
    PostTagsComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        // return this.all_tags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
        var tags1 = this.all_tags.filter(function (tag) { return tag.toLowerCase().indexOf(filterValue) === 0; });
        console.log(tags1);
        return tags1;
    };
    PostTagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the tags
        this.httpclient.get("http://localhost:3000/tags/", { params: { kind: "all", seperated: "false" } }).subscribe(function (data) {
            // console.log(data);
            _this.tags_full_data = data;
            console.log(_this.tags_full_data);
            data.forEach(function (tag) {
                _this.all_tags.push(tag.tag_name);
            });
            console.log(_this.all_tags);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostTagsComponent.prototype, "element", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tagInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostTagsComponent.prototype, "tagInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
    ], PostTagsComponent.prototype, "matAutocomplete", void 0);
    PostTagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-tags',
            template: __webpack_require__(/*! ./post-tags.component.html */ "./src/app/posts/post-tags/post-tags.component.html"),
            styles: [__webpack_require__(/*! ./post-tags.component.css */ "./src/app/posts/post-tags/post-tags.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], PostTagsComponent);
    return PostTagsComponent;
}());



/***/ }),

/***/ "./src/app/posts/post.model.ts":
/*!*************************************!*\
  !*** ./src/app/posts/post.model.ts ***!
  \*************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(post_id, post_title, post_html, post_content, post_time, post_votes, user_id, user_username, user_reputation, views) {
        this.post_id = post_id;
        this.post_title = post_title;
        this.post_html = post_html;
        this.post_content = post_content;
        this.post_time = new Date(post_time);
        this.post_votes = post_votes;
        this.user_id = user_id;
        this.user_username = user_username;
        this.user_reputation = user_reputation;
        this.replies = [];
        this.answers = [];
        this.tags = [];
        this.views = views;
    }
    Post.prototype.update_replies = function (replies) {
        replies.forEach(function (reply) {
            // this.replies.push(new PostReply(reply.reply_id,);
        });
    };
    return Post;
}());



/***/ }),

/***/ "./src/app/posts/post.service.ts":
/*!***************************************!*\
  !*** ./src/app/posts/post.service.ts ***!
  \***************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _post_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.model */ "./src/app/posts/post.model.ts");
/* harmony import */ var _post_reply_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post_reply.model */ "./src/app/posts/post_reply.model.ts");
/* harmony import */ var _answer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answer.model */ "./src/app/posts/answer.model.ts");
/* harmony import */ var _answer_reply_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./answer_reply.model */ "./src/app/posts/answer_reply.model.ts");
/* harmony import */ var _tag_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tag.model */ "./src/app/posts/tag.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PostService = /** @class */ (function () {
    //   private authStatusListener = new Subject<boolean>();
    function PostService(httpclient, router) {
        this.httpclient = httpclient;
        this.router = router;
    }
    PostService.prototype.post_view = function (post_id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            return _this.httpclient.post("http://localhost:3000/get_post", { post_id: post_id }).subscribe(function (data) {
                console.log(data);
                var html = data.post.post_html;
                html = html.replace("img", "img class=" + '"max"');
                // html=html.replace("img","img style="+'"max-width:50px;"'+" ")
                console.log(html);
                var post = new _post_model__WEBPACK_IMPORTED_MODULE_4__["Post"](post_id, data.post.post_title, html, data.post.post_content, data.post.post_time, data.post.post_votes, data.post.user_id, data.post.user_username, data.post.user_reputation, data.post.post_views);
                var answers = data.answers;
                var post_replies = data.post_replies;
                var answers_replies = data.answers_replies;
                var tags = data.tags;
                var post_replies_ob = _this.post_replies_arrange(post_replies);
                var answers_ob = _this.answers_arrange(answers, answers_replies);
                var tags_obs = _this.tags_arrange(tags);
                post.replies = post_replies_ob;
                post.answers = answers_ob;
                post.tags = tags_obs;
                console.log("TADADADA!!!");
                console.log(post);
                observer.next(post);
            });
        });
    };
    PostService.prototype.post_replies_arrange = function (post_replies) {
        //   post_replies.map( reply =>
        //     new PostReply(reply.reply_id,reply.post_id,reply.reply_content,reply.reply_time,reply.reply_votes,reply.user_id,reply.user_username,reply.user_reputation));
        //     return post_replies[0];
        var post_replies_ob = [];
        post_replies.forEach(function (reply) {
            post_replies_ob.push(new _post_reply_model__WEBPACK_IMPORTED_MODULE_5__["PostReply"](reply.reply_id, reply.post_id, reply.reply_content, reply.reply_time, reply.reply_votes, reply.user_id, reply.user_username, reply.user_reputation));
        });
        return post_replies_ob;
    };
    PostService.prototype.answers_arrange = function (answers, answers_replies) {
        var answers_ob = [];
        answers.forEach(function (answer) {
            answers_ob.push(new _answer_model__WEBPACK_IMPORTED_MODULE_6__["Answer"](answer.answer_id, answer.post_id, answer.answer_html, answer.answer_content, answer.answer_time, answer.answer_votes, answer.user_id, answer.user_username, answer.user_reputation));
            answers_replies.forEach(function (reply) {
                console.log(reply.answer_id);
                console.log(answers_ob[answers_ob.length - 1]);
                if (reply.answer_id == answers_ob[answers_ob.length - 1].answer_id) {
                    console.log("i am here!");
                    answers_ob[answers_ob.length - 1].replies.push(new _answer_reply_model__WEBPACK_IMPORTED_MODULE_7__["AnswerReply"](reply.reply_id, reply.answer_id, reply.reply_content, reply.reply_time, reply.reply_votes, reply.user_id, reply.user_username, reply.user_reputation));
                }
            });
        });
        return answers_ob;
    };
    PostService.prototype.tags_arrange = function (tags) {
        var tags_ob = [];
        tags.forEach(function (tag) {
            tags_ob.push(new _tag_model__WEBPACK_IMPORTED_MODULE_8__["Tag"](tag.tag_id, tag.tag_name, tag.tagging_id, tag.tag_category, tag.tag_subcategory));
        });
        return tags_ob;
    };
    PostService.prototype.vote = function (message_type, message_id, vote_value) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            console.log(message_type);
            _this.httpclient.post("http://localhost:3000/insert_vote", { message_type: message_type, message_id: message_id, vote_value: vote_value }).subscribe(function (data) {
                console.log(data);
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.submit_answer = function (post_id, answer_html, answer_content) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/create_answer", { post_id: post_id, answer_html: answer_html, answer_content: answer_content }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.submit_post_reply = function (post_id, reply_content) {
        var _this = this;
        console.log(reply_content);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/create_post_reply", { post_id: post_id, reply_content: reply_content }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.submit_answer_reply = function (answer_id, reply_content) {
        var _this = this;
        console.log(reply_content);
        console.log("from service " + answer_id + "  " + reply_content);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/create_answer_reply", { answer_id: answer_id, reply_content: reply_content }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.submit_report = function (message_type, message_id, report_type, report_message) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/create_report", { message_type: message_type, message_id: message_id, report_type: report_type, report_message: report_message }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.submit_duplication_suggestion = function (post_id, original_post_id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/create_duplication_suggestion", { post_id: post_id, original_post_id: original_post_id }).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.search_post = function (question) {
        var _this = this;
        console.log(question);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/search", { question: question }).subscribe(function (data) {
                console.log(data);
                observer.next(data);
            });
        });
    };
    PostService.prototype.submit_searched_post = function (info) {
        var _this = this;
        console.log(info);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.post("http://localhost:3000/searched_post", info).subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService.prototype.load_home = function () {
        var _this = this;
        console.log();
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.httpclient.get("http://localhost:3000/load_home").subscribe(function (data) {
                observer.next(data.result);
            });
        });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" })
        // @Injectable()
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/posts/post_reply.model.ts":
/*!*******************************************!*\
  !*** ./src/app/posts/post_reply.model.ts ***!
  \*******************************************/
/*! exports provided: PostReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReply", function() { return PostReply; });
var PostReply = /** @class */ (function () {
    function PostReply(reply_id, post_id, reply_content, reply_time, reply_votes, user_id, user_username, user_reputation) {
        this.reply_id = reply_id;
        this.post_id = post_id;
        this.reply_content = reply_content;
        this.reply_time = new Date(reply_time);
        this.reply_votes = reply_votes;
        this.user_id = user_id;
        this.user_username = user_username;
        this.user_reputation = user_reputation;
    }
    return PostReply;
}());



/***/ }),

/***/ "./src/app/posts/tag.model.ts":
/*!************************************!*\
  !*** ./src/app/posts/tag.model.ts ***!
  \************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
var Tag = /** @class */ (function () {
    function Tag(tag_id, tag_name, tagging_id, tag_category, tag_subcategory) {
        this.tag_id = tag_id;
        this.tag_name = tag_name;
        this.tagging_id = tagging_id;
        this.tag_category = tag_category;
        this.tag_subcategory = tag_subcategory;
    }
    return Tag;
}());



/***/ }),

/***/ "./src/app/posts/view-post/view-post.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/view-post/view-post.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.max {\r\n    width:2rem !important;\r\n  }\r\n  img {\r\n    width:2rem !important;\r\n  }\r\n  .max {\r\n    width:2rem !important;\r\n  }\r\n  hr {\r\n    margin: 0rem;\r\n    padding: 0rem;\r\n  }\r\n  .minspace {\r\n    padding-bottom: 0rem;\r\n    margin-bottom: 0rem;\r\n  }\r\n  :hover.options{\r\n    color:rgb(136, 186, 201);\r\n  }\r\n  .options {\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n  }\r\n  .up {\r\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 width%3D%22292.362px%22 height%3D%22292.361px%22 viewBox%3D%220 0 292.362 292.361%22 style%3D%22enable-background%3Anew 0 0 292.362 292.361%3B%22%0D%09 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M286.935%2C197.287L159.028%2C69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233%2C1.807-12.85%2C5.424L5.424%2C197.287%0D%09%09C1.807%2C200.904%2C0%2C205.186%2C0%2C210.134s1.807%2C9.233%2C5.424%2C12.847c3.621%2C3.617%2C7.902%2C5.425%2C12.85%2C5.425h255.813%0D%09%09c4.949%2C0%2C9.233-1.808%2C12.848-5.425c3.613-3.613%2C5.427-7.898%2C5.427-12.847S290.548%2C200.904%2C286.935%2C197.287z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\");\r\n    background-size: 15px 16px;\r\n    display: block;\r\n    text-indent: -9999px;\r\n    width: 15px;\r\n    height: 16px;\r\n  }\r\n  /* .replies {\r\n  } */\r\n  /* .filter-green{ */\r\n  /* filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%); */\r\n  /* filter: invert(35%) sepia(73%) saturate(2748%) hue-rotate(215deg) brightness(93%) contrast(88%); */\r\n  /* } */\r\n  button:focus{\r\n  box-shadow: 0 0 0 0 transparent;\r\n}\r\n  /* img:focus {\r\n  outline: none !important;\r\n\r\n} */"

/***/ }),

/***/ "./src/app/posts/view-post/view-post.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/view-post/view-post.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\" pt-5\">\n    \n    <h3 >{{post.post_title || null }} </h3>\n    <p>post id: {{post_id}}</p>\n    <p>Views: {{post.views}}</p>\n\n  </div>\n  <hr>\n  <div class=\"row\">\n\n\n        <div class=\"col-0.2  col-sm-0.2\" style=\"padding-left: 1rem;\" >\n                     <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('p',post.post_id,1,$event)\"  > <img height=\"45rem;\" class=\"filter-green\" src=\"../../../assets/caret-arrow-up.svg\" alt=\"like\"></button>\n               <p style=\"padding: 0rem; margin:0rem 0.7rem; border: 0rem; \">{{post.post_votes}}</p>\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('p',post.post_id,-1,$event)\" > <img height=\"45rem;\" class=\"filter-green\" src=\"../../../assets/caret-down.svg\" alt=\"like\"></button>\n    </div>\n\n    <div class=\"col-10 col-lg-10\">\n      <p [innerHTML]=\"post.post_html || null\" ></p>\n      \n    </div>\n\n  </div>\n  <div class=\"row offset-0.2\" style=\"padding-left: 4rem;\">\n      <p (click)=\"reply_post()\" class=\"options\" *ngIf=\"this.authService.getIsAuth()\"> <u>reply</u></p>\n    <p (click)=\"choose_message('p',post_id);\" class=\"options\" *ngIf=\"this.authService.getIsAuth()\"> <u>report</u></p>\n    <div style=\"margin-left: 4rem;\">\n      <p class=minspace>asked by: {{post.user_username||null}}</p>\n      <p class=minspace>reputation: {{post.user_reputation}}</p>\n      <p class=minspace>{{post.post_time.toLocaleString('en-GB')||null}}</p>\n  </div>\n  \n    \n\n  </div>\n\n\n      <div class=\"form-group col-8 col-lg-3\" *ngIf=\"chosen_message=='p'+post_id\">\n          <label for=\"exampleFormControlSelect1\">Report reason</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\"  #reasonref >\n            <option disabled hidden>choose report type</option>\n            <option>rude content</option>\n            <option>spam content</option>\n            <option>irrelevant content</option>\n            <option>duplication post</option>\n          </select>\n          <div *ngIf=\"clean_report(reasonref.value)!='duplication'\">\n              <textarea  #reff type=\"text\" style=\"margin-top: 1rem;\" maxlength=\"50\"  style=\"width: 100%; margin-top: 1rem;\" placeholder=\"Optional: describe the report.\"></textarea>\n              <button class=\"btn btn-primary\" style=\"margin-top: 1rem;\" [disabled]=\"reasonref.value=='choose report type'\" (click)=\"report('p',post_id,clean_report(reasonref.value),reff.value)\">Submit report</button>\n          </div>\n          <div *ngIf=\"clean_report(reasonref.value)=='duplication'\">\n              <input type=\"text\"  placeholder=\"Original post id\" style=\"margin-top: 1rem;\" #reff  [(ngModel)]=\"duplicate_original_id\">\n              <button class=\"btn btn-primary\" style=\"margin-top: 1rem;\" (click)=\"report('p',post_id,clean_report(reasonref.value),reff.value)\" [disabled]=\"!helper.isPositiveNaturalNumber(duplicate_original_id)||duplicate_original_id==post_id\">Submit report</button>\n          </div>\n\n        </div>\n\n\n  \n<!--tags go here-->\n<div style=\"margin-top: 0.5rem; margin-left: 2.6rem; margin-bottom: 1rem;\">\n  <mat-chip-list aria-label=\"Fish selection\" >\n    <mat-chip *ngFor=\" let tag of post.tags \">{{tag.tag_name}}</mat-chip>\n  </mat-chip-list>\n</div>\n\n  <hr>\n\n  <!-- post replies starts here-->\n\n  \n  <div class=\"offset-3\">\n    <div *ngFor=\"let post_reply of post.replies\">\n        <div class=\"row\">\n            <div class=\"col-0.2  col-sm-0.2\" style=\"padding-right: 0rem;\" >\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('pr',post_reply.reply_id,1,post_reply)\" > <img height=\"15rem;\" class=\"filter-green\" src=\"../../../assets/caret-arrow-up.svg\" alt=\"like\"></button>\n               <p style=\"padding: 0rem; margin:0rem 0.7rem; border: 0rem; \">{{[post_reply.reply_votes]}}</p>\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('pr',post_reply.reply_id,-1,post_reply)\"> <img height=\"15rem;\" class=\"filter-green\" src=\"../../../assets/caret-down.svg\" alt=\"dislike\"></button>\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"choose_message('pr',post_reply.reply_id);\" *ngIf=\"this.authService.getIsAuth()\" > <img height=\"15rem;\" class=\"filter-green\" src=\"../../../assets/flag.svg\"alt=\"flag\"></button>\n\n\n              </div>\n        <div class=\"col-10 col-sm-10\">\n      <p style=\"padding-top: 1.5rem;\">{{post_reply.reply_content || null}} - by <span><u>{{post_reply.user_username||null}}</u></span>  {{post_reply.reply_time.toLocaleString('en-GB')||null}}</p>\n    </div>\n\n\n    <div class=\"form-group col-8 col-lg-3\" *ngIf=\"chosen_message=='pr'+post_reply.reply_id\">\n      <label for=\"exampleFormControlSelect1\">Report reason</label>\n      <select class=\"form-control\" id=\"exampleFormControlSelect1\"  #reasonref1 >\n        <option disabled hidden>choose report type</option>\n        <option>rude content</option>\n        <option>spam content</option>\n        <option>irrelevant content</option>\n      </select>\n      <input #inputref1 type=\"text\" style=\"margin-top: 1rem;\">\n      <button class=\"btn btn-primary\" style=\"margin-top: 1rem;\" [disabled]=\"reasonref1.value=='choose report type'\" (click)=\"report('pr',post_reply.reply_id,clean_report(reasonref1.value),inputref1.value)\">Submit report</button>\n    </div>\n\n\n\n\n\n  </div>\n  <hr>\n  </div>\n  <!--add post reply-->\n  <div style=\"margin-top: 1rem;\" *ngIf=\"show_post_reply==true\" >\n    <textarea name=\"\" id=\"\"  rows=3 style=\"width: 90%\" placeholder=\"enter reply here\" maxlength=\"250\" #pr [(ngModel)] = \"post_reply_content\"></textarea>\n    <button class=\"btn btn-primary\" style=\"display: block; margin-top:1rem;\" [disabled]=\"pr.value.trim()==''\" (click)=\"submit_post_reply();\">Submit Reply</button>\n  </div>\n\n\n\n</div>\n\n <!-- answers starts here-->\n <div *ngFor=\"let post_answer of post.answers\" style=\"margin-top: 2rem;\"> \n  <div class=\"row\">\n    <div class=\"col-0.2  col-sm-0.2\" style=\"padding-left: 1rem;\" >\n      <!-- <p> ICON ICON ICON ICON ICON ICON ICON ICONICON ICON ICON ICON </p> -->\n                     <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\"  (click)=\"vote('a',post_answer.answer_id,1,post_answer)\" > <img height=\"45rem;\" class=\"filter-green\" src=\"../../../assets/caret-arrow-up.svg\" alt=\"like\"></button>\n               <p style=\"padding: 0rem; margin:0rem 0.7rem; border: 0rem; \">{{post_answer.answer_votes}}</p>\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('a',post_answer.answer_id,-1,post_answer)\"> <img height=\"45rem;\" class=\"filter-green\" src=\"../../../assets/caret-down.svg\" alt=\"like\"></button>\n    </div>\n\n    <!-- <div class=\"col-12 col-lg-10\"> -->\n        <div class=\"col-10 col-lg-10\">\n\n      <hr>\n      <p [innerHTML]=\"post_answer.answer_html || null\"></p>\n      \n    </div>\n  </div>    <div class=\"col-10 col-lg-10\">\n\n  <div class=\"row offset-0.2\" style=\"padding-left: 4rem;\">\n      <p (click)=\"reply_answer(post_answer)\" class=\"options\" *ngIf=\"this.authService.getIsAuth()\"> <u>reply</u></p>\n    <p (click)=\"choose_message('a',post_answer.answer_id);\" class=\"options\" *ngIf=\"this.authService.getIsAuth()\"> <u>report</u></p>\n    <div style=\"margin-left: 4rem;\">\n      <p class=minspace>answered by: {{post_answer.user_username||null}}</p>\n      <p class=minspace>reputation: {{post_answer.user_reputation}}</p>\n      <p class=minspace>{{post_answer.answer_time.toLocaleString('en-GB')||null}}</p>\n  </div>\n    \n\n  </div>\n  <div class=\"form-group col-8 col-lg-3\"  *ngIf=\"chosen_message=='a'+post_answer.answer_id\">\n\n    <label for=\"exampleFormControlSelect1\">Report reason</label>\n    <select class=\"form-control\" id=\"exampleFormControlSelect1\"  #reasonref >\n      <option disabled hidden>choose report type</option>\n      <option>rude content</option>\n      <option>spam content</option>\n      <option>irrelevant content</option>\n    </select>\n    <input #inputref type=\"text\" style=\"margin-top: 1rem;\">\n    <button class=\"btn btn-primary\" style=\"margin-top: 1rem;\" [disabled]=\"reasonref.value=='choose report type'\" (click)=\"report('a',post_answer.answer_id,clean_report(reasonref.value),inputref.value)\">Submit report</button>\n  </div>\n\n  <hr>\n  <!-- answers replies starts here-->\n\n  <!-- <div class=\"offset-3\"> -->\n      <div class=\"offset-3\">\n\n    <div *ngFor=\"let answer_reply of post_answer.replies\">\n        <div class=\"row\">\n            <div class=\"col-2  col-sm-2\" style=\"padding-right: 0rem;\" >\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('ar',answer_reply.reply_id,1,answer_reply)\"  > <img height=\"15rem;\" class=\"filter-green\" src=\"../../../assets/caret-arrow-up.svg\" alt=\"like\"></button>\n               <p style=\"padding: 0rem; margin:0rem 0.7rem; border: 0rem; \">{{[answer_reply.reply_votes]}}</p>\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"vote('ar',answer_reply.reply_id,-1,answer_reply)\"> <img height=\"15rem;\" class=\"filter-green\" src=\"../../../assets/caret-down.svg\" alt=\"like\"></button>\n               <button class=\"btn\" style=\"padding: 0rem; margin: 0rem; border: 0rem; border: none\" (click)=\"choose_message('ar',answer_reply.reply_id);\" *ngIf=\"this.authService.getIsAuth()\" > <img height=\"15rem;\" class=\"filter-green\" src=\"../../../assets/flag.svg\"alt=\"flag\"></button>\n\n\n              </div>\n        <div class=\"col-10 col-sm-10\">\n      <p style=\"padding-top: 1.5rem;\">{{answer_reply.reply_content || null}} - by <span><u>{{answer_reply.user_username||null}}</u></span>  {{answer_reply.reply_time.toLocaleString('en-GB')||null}}</p>\n    </div>\n\n\n    <div class=\"form-group col-8 col-lg-3\" *ngIf=\"chosen_message=='ar'+answer_reply.reply_id\">\n      <label for=\"גדגדגדגדגדגדגדגדגדגגגגגגגגגגגגדד\">Report reason</label>\n      <select class=\"form-control\" id=\"גדגדגדגדגדגדגדגדגדגגגגגגגגגגגגדד\"  #reasonref2 >\n        <option disabled hidden>choose report type</option>\n        <option>rude content</option>\n        <option>spam content</option>\n        <option>irrelevant content</option>\n      </select>\n      <input #inputref2 type=\"text\" style=\"margin-top: 1rem;\">\n      <button class=\"btn btn-primary\" style=\"margin-top: 1rem;\" [disabled]=\"reasonref2.value=='choose report type'\" (click)=\"report('ar',answer_reply.reply_id,clean_report(reasonref2.value),inputref2.value)\">Submit report</button>\n    </div>\n\n\n\n\n\n\n  </div>\n  <hr>\n  </div>\n\n  <div style=\"margin-top: 1rem;\" *ngIf=\"answer_id==post_answer.answer_id\">\n      <!-- <form class=\"form-horizontal\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\"></form> -->\n    <textarea name=\"\" id=\"\"  rows=3 style=\"width: 90%\"  placeholder=\"enter reply here\" maxlength=\"250\" #pr [(ngModel)] = \"answer_reply_content\"></textarea>\n    <button class=\"btn btn-primary\" style=\"display: block; margin-top:1rem; margin-bottom: 1rem;\" [disabled]=\"answer_reply_content.trim()==''\" (click)=\"submit_answer_reply(post_answer);\">Submit Reply</button>\n  <!-- </form> -->\n  </div>\n\n</div>\n\n\n\n</div>\n\n<hr>\n<br>\n<div class=\"col-md-8\" *ngIf=\"this.authService.getIsAuth()\">\n  <p> do you know the answer?</p>\n  <quill-editor [modules]=\"config\" (onContentChanged)=\"maxLength($event)\" id=\"answercontent\" #answercontent [(ngModel)]=\"html_content\"></quill-editor>\n  <p>{{1000-contentlength}} letters left</p>\n  <p for=\"editor\" *ngIf=\"1000-contentlength<0\" style=\"color: red\">Post is too long</p>\n  <p for=\"editor\" *ngIf=\"300000-htmllength<0\" style=\"color: red\">Post is too heavy, try deleting content like images</p>\n  <button class=\"btn btn-primary\" (click)=\"submit_answer\" style=\"margin-top: 0.1rem;\" (click)=\"submit_answer();\" [disabled]=\"1000-contentlength<0||300000-htmllength<0\">Submit Answer</button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/posts/view-post/view-post.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/view-post/view-post.component.ts ***!
  \********************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.model */ "./src/app/posts/post.model.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../help.service */ "./src/app/help.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Rectangle} from '../Rectangle.model';



var ViewPostComponent = /** @class */ (function () {
    function ViewPostComponent(route, router, httpclient, postService, authService, helper) {
        this.route = route;
        this.router = router;
        this.httpclient = httpclient;
        this.postService = postService;
        this.authService = authService;
        this.helper = helper;
        this.post_id = 0;
        this.tags = [];
        this.htmllength = 0;
        this.contentlength = 0;
    }
    ViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("XXXXXXXXXXXXXXX");
        console.log(this.isPositiveNaturalNumber('1'));
        this.post = new _post_model__WEBPACK_IMPORTED_MODULE_3__["Post"](null, null, null, null, null, null, null, null, null, null);
        this.route.params
            .subscribe(function (params) {
            try {
                _this.post_id = +params['post_id'];
                console.log(_this.post_id);
                var isint = Number.isInteger(_this.post_id);
                if (!isint)
                    _this.router.navigate(['/']);
                _this.postService.post_view(_this.post_id).subscribe(function (post) {
                    _this.post = post;
                    console.log(_this.post);
                    console.log(5);
                });
            }
            catch (err) {
                console.log(err);
                _this.router.navigate(['/']);
            }
        });
    };
    ViewPostComponent.prototype.vote = function (message_type, message_id, vote_value, object) {
        var _this = this;
        console.log("from view post");
        console.log(message_type);
        if (this.authService.getIsAuth()) {
            this.postService.vote(message_type, message_id, vote_value).subscribe(function (votes) {
                console.log(votes);
                if (message_type == 'p') {
                    _this.post.post_votes = votes;
                }
                else if (message_type == 'a') {
                    object.answer_votes = votes;
                }
                else if (message_type == "pr") {
                    object.reply_votes = votes;
                }
                else if (message_type == "ar") {
                    object.reply_votes = votes;
                }
                return votes;
            });
        }
        //  const votes= this.postService.vote(message_type,message_id,vote_value);
    };
    ViewPostComponent.prototype.maxLength = function (e) {
        //console.log("ds");
        // console.log(e);
        // console.log(e["text"]);
        // console.log(e["editor"]["root"]["textContent"]);
        this.htmlcontent = e["html"];
        this.textcontent = e["text"];
        var rawtext = e["editor"]["root"]["textContent"];
        console.log(" html content is " + this.htmlcontent);
        console.log(" text content is " + this.textcontent);
        console.log(" raw text is  " + rawtext);
        this.htmllength = 0;
        this.contentlength = 0;
        try {
            this.contentlength = this.textcontent.length;
            this.htmllength = this.htmlcontent.length;
        }
        catch (_a) { }
        console.log(this.contentlength);
        console.log("html content length " + this.htmllength);
    };
    ViewPostComponent.prototype.submit_answer = function () {
        var _this = this;
        this.postService.submit_answer(this.post.post_id, this.htmlcontent, this.textcontent).subscribe(function (answer_id) {
            console.log(answer_id);
            if (_this.isPositiveNaturalNumber(answer_id)) {
                console.log("fd");
                location.reload();
            }
        });
    };
    ViewPostComponent.prototype.submit_post_reply = function () {
        console.log("in post reply");
        console.log(this.post_reply_content);
        this.postService.submit_post_reply(this.post.post_id, this.post_reply_content).subscribe(function (reply_id) {
            console.log(reply_id);
        });
    };
    ViewPostComponent.prototype.submit_answer_reply = function (answer) {
        console.log("in answer reply");
        console.log(this.answer_reply_content);
        var answer_id = answer.answer_id;
        this.postService.submit_answer_reply(answer_id, this.answer_reply_content).subscribe(function (reply_id) {
            console.log(reply_id);
        });
    };
    ViewPostComponent.prototype.reply_answer = function (answer) {
        this.show_post_reply = false;
        this.answer_reply_content = "";
        console.log(answer);
        this.answer_id = answer.answer_id;
    };
    ViewPostComponent.prototype.reply_post = function () {
        this.show_post_reply = true;
        this.answer_id = null;
    };
    ViewPostComponent.prototype.report = function (message_type, message_id, report_type, report_message) {
        console.log(message_type + " " + message_id + " " + report_type);
        if (report_type != "duplication") {
            this.postService.submit_report(message_type, message_id, report_type, report_message).subscribe(function (report_id) {
                console.log(report_id);
            });
        }
        else {
            var is_id = this.helper.isPositiveNaturalNumber(report_message);
            if (is_id) {
                this.postService.submit_duplication_suggestion(this.post_id, Number(report_message)).subscribe(function (duplication_suggestion_id) {
                    console.log(duplication_suggestion_id);
                });
            }
        }
    };
    ViewPostComponent.prototype.isNaturalNumber = function (str) {
        var pattern = /^(0|([1-9]\d*))$/;
        return pattern.test(str);
    };
    ViewPostComponent.prototype.isPositiveNaturalNumber = function (str) {
        var pattern = /^(([1-9]\d*))$/;
        return pattern.test(str);
    };
    ViewPostComponent.prototype.choose_message = function (message_type, user_id) {
        this.chosen_message = message_type + user_id.toString();
        console.log(this.chosen_message);
    };
    ViewPostComponent.prototype.clean_report = function (report_text) {
        report_text = report_text.replace(" content", "");
        report_text = report_text.replace(" post", "");
        return report_text;
    };
    ViewPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-post',
            template: __webpack_require__(/*! ./view-post.component.html */ "./src/app/posts/view-post/view-post.component.html"),
            styles: [__webpack_require__(/*! ./view-post.component.css */ "./src/app/posts/view-post/view-post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _help_service__WEBPACK_IMPORTED_MODULE_6__["HelpService"]])
    ], ViewPostComponent);
    return ViewPostComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput.ng-invalid.ng-touched,\r\ntextarea.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n.red {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"form-horizontal\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <h2> <span style=\"border-bottom: 0.05 rem solid;\">Registration</span> </h2>\n        <div class=\"form-group\">\n            <label for=\"firstName\" class=\"col-sm-3 control-label\">First Name</label>\n            <div class=\"col-sm-9\">\n                <input type=\"text\" id=\"firstName\" placeholder=\"First Name\" class=\"form-control\" autofocus ngModel name=\"firstName\" required #firstName=\"ngModel\"  maxlength=\"30\">\n                <p *ngIf=\"firstName.invalid && firstName.touched\" class=\"red\" >You must enter the first name</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\" class=\"col-sm-3 control-label\">Last Name</label>\n            <div class=\"col-sm-9\">\n                <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" autofocus ngModel name=\"lastname\" required #lastname=\"ngModel\" maxlength=\"30\">\n                <p *ngIf=\"lastname.invalid && lastname.touched\" class=\"red\" >You must enter the last name</p>\n            </div>\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"userName\" class=\"col-sm-3 control-label\">User Name</label>\n            <div class=\"col-sm-9\">\n                <input type=\"text\" id=\"userName\" placeholder=\"User Name\" class=\"form-control\" autofocus ngModel name=\"username\" required #username=\"ngModel\" maxlength=\"50\">\n                <p *ngIf=\"username.invalid && username.touched\" class=\"red\" >You must enter the username</p>\n            </div>\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"email\" class=\"col-sm-3 control-label\">Email* </label>\n            <div class=\"col-sm-9\">\n                <input type=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" name= \"email\" ngModel name=\"email\" required email #email=\"ngModel\" maxlength=\"50\">\n                <p *ngIf=\"email.invalid && email.touched\" class=\"red\" >You must enter a valid email adress</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password1\" class=\"col-sm-3 control-label\">Password*</label>\n            <div class=\"col-sm-9\">\n                <input type=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" ngModel name=\"password1\" required #password1=\"ngModel\" minlength=\"1\" maxlength=\"30\">\n                <p *ngIf=\"password1.invalid && password1.touched\" class=\"red\" >You must enter a valid password</p>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password2\" class=\"col-sm-3 control-label\">Confirm Password*</label>\n            <div class=\"col-sm-9\">\n                <input type=\"password\" class=\"password\" placeholder=\"Password\" class=\"form-control\"  name=\"password2\" ngModel required #password2=\"ngModel\" minlength=\"1\" maxlength=\"30\"  pattern=\"{{ password1.value }}\" [disabled]=\"!password1.value\">\n                <p *ngIf=\"password2.invalid && password2.touched\" class=\"red\"  >You must enter a valid password</p>\n            </div>\n        </div>\n\n\n\n\n\n\n\n        <div class=\"form-group\">\n                <label for=\"birthDate\" class=\"col-sm-3 control-label\">Date of Birth*</label>\n                <div class=\"col-sm-9\">\n                    <br>\n                    <input type=\"date\" name=\"birthdate\" max=\"{{todate | date:'yyyy-MM-dd'}}\" class=\"form-control\" maxDate=\"{{todate}}\" [(ngModel)]=\"datemodel\" id=\"input-12\" required ngModel #birthdate=\"ngModel\">\n                    <p *ngIf=\"birthdate.invalid && birthdate.touched\" class=\"red\"  >You must enter your birth date</p>\n                </div>\n            </div>\n\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-3\">Gender</label>\n            <div class=\"col-sm-6\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n\n\n                    <div class=\"radio radio-inline\">\n                        <label style=\"margin-right: 0.5rem\"><input type=\"radio\" value=\"male\" name=\"gender\" [(ngModel)]=\"gender\" required #genderControl=\"ngModel\"> Male</label>\n                        <label style=\"margin-right: 0.5rem\"><input type=\"radio\" value=\"female\" name=\"gender\" [(ngModel)]=\"gender\" required> Female</label>\n                      </div>\n                    </div>\n\n                </div>\n            </div>\n        </div> <!-- /.form-group -->\n        <div class=\"form-group\">\n            <div class=\"col-sm-9 col-sm-offset-3\">\n                <span class=\"help-block\">*Required fields</span>\n            </div>\n        </div>\n        <div class=\"col-sm-2\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\" [disabled]=\"!f.valid\">Register</button>\n    </div>\n    </form> <!-- /form -->\n    <br>\n\n\n</div> <!-- ./container -->\n\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help.service */ "./src/app/help.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(httpclient, helper, authService, router) {
        this.httpclient = httpclient;
        this.helper = helper;
        this.authService = authService;
        this.router = router;
        // private todate = new Date();
        this.todate = new Date("2/2/2005"); //random date, will be changed by the current date from the server
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.getIsAuth()) // registered users should not enter the registration page
         {
            console.log("auth");
            this.router.navigate(['/']);
        }
        console.log(this.todate);
        this.helper.get_time().subscribe(function (todate) {
            _this.todate = todate;
            console.log(_this.todate);
            console.log(5);
        });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var user = form.value;
        console.log(user);
        this.httpclient.post("http://localhost:3000/create_user", user).subscribe(function (data) {
            console.log(data);
            if (data == "user added") {
                alert("You have created a new account");
                _this.router.navigate(["/"]);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _help_service__WEBPACK_IMPORTED_MODULE_2__["HelpService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":hover.options{\r\n    color :rgb(62, 136, 158);\r\n    text-decoration: underline;\r\n  }\r\n  .options {\r\n    margin-left: 1rem;\r\n    cursor: pointer;\r\n    color:rgb(136, 186, 201);\r\n  }\r\n  .answers_exist {\r\n    background-color: #5fba7d;\r\n     color: white;\r\n      margin-top: 0.2rem;\r\n  }\r\n  .no_answers {\r\n    background-color: white;\r\n    color: red;\r\n     margin-top: 0.2rem;\r\n  }"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"begin\">\n  <div class=\" pt-5\">\n\n    <h3>Search results </h3>\n    <hr>\n  </div>\n\n\n  <div class=row *ngFor=\"let post of result; index as i;\" style=\"margin-bottom: 1rem;\">\n      <div class=\"col-3 col-sm-1\" style=\"padding-right: 0rem; margin-bottom: 0rem; \">\n\n          <div class=\"border border-primary rounded\" style=\"color: grey; border-color: black !important;\" >\n            <div style=\"text-align: center;\">\n              <span>{{post.post_votes.toString()}}</span>\n            </div>\n            <div style=\"text-align: center;\">\n              <span>Votes</span>\n            </div>\n          </div>\n      \n          <div class=\"border border-primary rounded\" [ngClass]=\"{'no_answers': post.answers.toString()=='0',answers_exist: post.answers.toString()!='0' }\" >\n              <div style=\"text-align: center;\">\n                <span>{{post.answers.toString()}}</span>\n              </div>\n              <div style=\"text-align: center;\">\n                <span>Answers</span>\n              </div>\n            </div>\n\n\n\n      \n        </div>\n\n        <div class=\"col-9 col-sm-11\" style=\"padding-right: 0rem; margin-bottom: 0rem;\">\n         <a href=\"posts/{{post.post_id}}\" (mouseup)=\"navigate_post(post,i);\"><h5 class=\"options\">{{post.post_title}}</h5></a>\n         <p>{{helper.shorten_text(post.post_content,200)}}</p>\n         <p class=minspace>{{post.post_time.toLocaleString('en-GB')||null}}</p>\n\n         <div style=\"margin-top: 0.5rem; margin-bottom: 1rem;\" *ngIf=\"post.tags\">\n          <mat-chip-list aria-label=\"Fish selection\" >\n            <mat-chip *ngFor=\" let tag of post.tags \">{{tag}}</mat-chip>\n          </mat-chip-list>\n        </div>\n              </div>\n              \n\n          <hr style=\" width: 100%;\">\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/post.service */ "./src/app/posts/post.service.ts");
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../help.service */ "./src/app/help.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, postService, helper, router) {
        this.route = route;
        this.postService = postService;
        this.helper = helper;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var question = params['value'];
            _this.postService.search_post(question).subscribe(function (result2) {
                _this.result = result2.result;
                _this.search_id = result2.search_id[0].search_id;
                console.log(_this.search_id);
                _this.begin = true;
                console.log(_this.result);
                _this.result.forEach(function (post) {
                    post["post_time"] = new Date(post["post_time"]);
                    if (post["post_tags"]) {
                        post["tags"] = _this.helper.string_to_array(post["post_tags"]);
                    }
                });
            });
        });
    };
    SearchComponent.prototype.navigate_post = function (post, rank) {
        console.log("DOES!");
        rank++;
        this.postService.submit_searched_post({ post_id: post.post_id, search_id: this.search_id, post_rank: rank, post_score: post.score }).subscribe(function (result) {
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _posts_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _help_service__WEBPACK_IMPORTED_MODULE_3__["HelpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\disasters-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map