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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-layout></app-layout>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'playful-challenge';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__["SlickCarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ui/article-slider/article-slider.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui/article-slider/article-slider.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n  <ng-template ngbSlide *ngFor=\"let image of images\">\n    <img [src]=\"image\" alt=\"Random slide\">\n    <div class=\"carousel-caption\">\n      <h3>No mouse navigation</h3>\n      <p>This carousel hides navigation arrows and indicators.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n\n<hr>\n\n<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n  <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n  <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n</div> -->\n"

/***/ }),

/***/ "./src/app/ui/article-slider/article-slider.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui/article-slider/article-slider.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-slider {\n  background-color: #f5f5f7;\n  width: 100%;\n  height: 700px; }\n"

/***/ }),

/***/ "./src/app/ui/article-slider/article-slider.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/article-slider/article-slider.component.ts ***!
  \***************************************************************/
/*! exports provided: ArticleSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSliderComponent", function() { return ArticleSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleSliderComponent = /** @class */ (function () {
    function ArticleSliderComponent() {
    }
    ArticleSliderComponent.prototype.ngOnInit = function () {
    };
    ArticleSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-slider',
            template: __webpack_require__(/*! ./article-slider.component.html */ "./src/app/ui/article-slider/article-slider.component.html"),
            styles: [__webpack_require__(/*! ./article-slider.component.scss */ "./src/app/ui/article-slider/article-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleSliderComponent);
    return ArticleSliderComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://twitter.com/beeman_nl\">beeman</a>\n  </div>\n</nav> -->\n<div class=\"row navbar bg-dark\">\n  <div class=\"col-sm-5 col-md-5\">\n    <h4>Logo</h4>\n    <p>2017 Forma LLC.  All rights reserved.</p>\n  </div>\n  <div class=\"col-sm-3 col-md-3\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-12\">\n        <p>Keep in touch with us</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-md-2 text-center\">\n        <p><strong>fb</strong></p>\n      </div>\n      <div class=\"col-sm-2 col-md-2 text-center\">\n        <p><strong>tw</strong></p>\n      </div>\n      <div class=\"col-sm-2 col-md-2 text-center\">\n        <p><strong>vm</strong></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 text-center\">\n        <p>Festival Programme</p>\n      </div>\n      <div class=\"col-sm-4 col-md-4 text-center\">\n        <p>Plan Your Experience</p>\n      </div>\n      <div class=\"col-sm-4 col-md-4 text-center\">\n        <p>Media</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 col-md-4 text-center\">\n        <p>Support the Festival</p>\n      </div>\n      <div class=\"col-sm-4 col-md-4 text-center\">\n        <p>About</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-dark {\n  color: #fff;\n  padding: 1rem 1.5rem; }\n  .bg-dark .col-sm-12 p {\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    text-align: left; }\n  .bg-dark .col-sm-5 h4 {\n    height: 50px; }\n  .bg-dark .col-sm-5 p {\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.27;\n    letter-spacing: normal;\n    text-align: left; }\n  .bg-dark .col-sm-4 p {\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.27;\n    letter-spacing: normal;\n    text-align: left;\n    color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/form-validate/form-validate.component.html":
/*!***************************************************************!*\
  !*** ./src/app/ui/form-validate/form-validate.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form [form-group]=\"formValidate\" (ngsubmit)=\"onSubmit()\" id=\"form-validate\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"\" class=\"center-block\">Name:</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"\" placeholder=\"\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\" class=\"center-block\">Email:</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"\" placeholder=\"\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\" class=\"center-block\">Text:</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"text\" id=\"\" placeholder=\"\">\n  </div>\n  <button type=\"submit\"\n      [disabled]=\"!contactForm.valid\" class=\"btn btn-success\">Save</button>\n</form> -->\n"

/***/ }),

/***/ "./src/app/ui/form-validate/form-validate.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/ui/form-validate/form-validate.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/form-validate/form-validate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/form-validate/form-validate.component.ts ***!
  \*************************************************************/
/*! exports provided: FormValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidateComponent", function() { return FormValidateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormValidateComponent = /** @class */ (function () {
    function FormValidateComponent() {
    }
    FormValidateComponent.prototype.ngOnInit = function () {
    };
    FormValidateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-validate',
            template: __webpack_require__(/*! ./form-validate.component.html */ "./src/app/ui/form-validate/form-validate.component.html"),
            styles: [__webpack_require__(/*! ./form-validate.component.scss */ "./src/app/ui/form-validate/form-validate.component.scss")]
        })
    ], FormValidateComponent);
    return FormValidateComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark mb-5\">\n  <a class=\"navbar-brand\" href=\"/\">Logo</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"#\">Home</a>\n      <a class=\"nav-item nav-link\" href=\"#\">Plan your experience</a>\n      <a class=\"nav-item nav-link\" href=\"#\">Programme</a>\n      <a class=\"nav-item nav-link\" href=\"#\">Media</a>\n      <a class=\"nav-item nav-link\" href=\"#\">About</a>\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"#\" target=\"_blank\">\n        <i class=\"fal fa-bars\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 45px;\n  width: 100%;\n  z-index: 100;\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  padding-top: 45px; }\n  nav .navbar-brand {\n    font-size: 20px;\n    font-weight: 600;\n    color: #131317;\n    width: 18%; }\n  nav .nav-item {\n    padding: 0 1rem;\n    font-size: 16px;\n    color: #131317; }\n  nav .nav-link.active {\n    color: #131317;\n    border-bottom: 1px solid #131317; }\n  nav .nav-link:hover {\n    color: #131317;\n    border-bottom: 1px solid #131317; }\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-prince-page></app-prince-page>\n<app-related-articles></app-related-articles>\n<app-article-slider></app-article-slider>\n<app-form-validate></app-form-validate>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-left: 20px; }\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ui/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/prince-page/prince-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/prince-page/prince-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"prince-page row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"cont-title\">\n      <h1 class=\"title-name\">Michelango</h1>\n      <p class=\"subtitle\">The quest for the sacred and eternal</p>\n      <button class=\"button-bg\" type=\"button\" name=\"button\"><span>READ MORE</span></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/prince-page/prince-page.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui/prince-page/prince-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prince-page {\n  background-image: url(\"/assets/img/Header3.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: crimson;\n  width: 100%;\n  height: 600px;\n  padding: 0;\n  margin: 0; }\n\n.cont-title {\n  position: relative;\n  top: 350px; }\n\n.cont-title .title-name {\n    font-size: 72px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: -2.9px;\n    text-align: left; }\n\n.cont-title .subtitle {\n    font-size: 24px;\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal; }\n\n.cont-title .button-bg {\n    width: 160px;\n    height: 44px;\n    box-shadow: 0px 12px 24px 0 rgba(1, 10, 38, 0.32);\n    background-color: #19191a;\n    border-style: solid;\n    border-width: 3px;\n    border-image-source: linear-gradient(340deg, #589ad2, #889ff3 50%, #d3d1ef);\n    border-image-slice: 1; }\n\n.cont-title .button-bg span {\n      font-size: 11px;\n      font-weight: bold;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: 0.7px;\n      text-align: center;\n      color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/ui/prince-page/prince-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/prince-page/prince-page.component.ts ***!
  \*********************************************************/
/*! exports provided: PrincePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincePageComponent", function() { return PrincePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincePageComponent = /** @class */ (function () {
    function PrincePageComponent() {
    }
    PrincePageComponent.prototype.ngOnInit = function () {
    };
    PrincePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prince-page',
            template: __webpack_require__(/*! ./prince-page.component.html */ "./src/app/ui/prince-page/prince-page.component.html"),
            styles: [__webpack_require__(/*! ./prince-page.component.scss */ "./src/app/ui/prince-page/prince-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincePageComponent);
    return PrincePageComponent;
}());



/***/ }),

/***/ "./src/app/ui/related-articles/related-articles.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/related-articles/related-articles.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-3\">\n    <div class=\"tag-info\">\n      <p>2016 Festival & Performance Guide</p>\n      <span>October 8, 2017</span>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-3\">\n    <div class=\"tag-info\">\n      <p>Michelangelo: The quest for the sacred and eternal</p>\n      <span>October 16, 2017</span>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-3\">\n    <div class=\"tag-info active\">\n      <p>Grand Hall Music Festival presents James Simon's The Spirit World</p>\n      <span>October 25, 2017</span>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-3\">\n    <div class=\"tag-info\">\n      <p>Robert Blake’s exhibition: An immersive experience through time</p>\n      <span>November 1, 2017</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/related-articles/related-articles.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui/related-articles/related-articles.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding: 80px 15px; }\n  .row .tag-info {\n    width: 255px;\n    height: 255px;\n    border: solid 2px #e1e2e6;\n    padding: 25px 20px; }\n  .row .tag-info.active {\n      color: #fff;\n      width: 256px;\n      height: 256px;\n      box-shadow: 0px 25px 35px 0 rgba(16, 16, 69, 0.2);\n      background-color: rgba(19, 19, 23, 0.75);\n      border-style: solid;\n      border-width: 4px;\n      border-image-source: linear-gradient(100deg, #657bdc, #bea0e7 50%, #f5d1fd);\n      border-image-slice: 1; }\n  .row .tag-info p {\n      height: 150px;\n      font-size: 17.5px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.63;\n      letter-spacing: -0.3px; }\n  .row .tag-info span {\n      font-size: 12px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.33;\n      letter-spacing: normal;\n      text-align: left;\n      color: #7f818a; }\n"

/***/ }),

/***/ "./src/app/ui/related-articles/related-articles.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/related-articles/related-articles.component.ts ***!
  \*******************************************************************/
/*! exports provided: RelatedArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedArticlesComponent", function() { return RelatedArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RelatedArticlesComponent = /** @class */ (function () {
    function RelatedArticlesComponent() {
    }
    RelatedArticlesComponent.prototype.ngOnInit = function () {
    };
    RelatedArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-related-articles',
            template: __webpack_require__(/*! ./related-articles.component.html */ "./src/app/ui/related-articles/related-articles.component.html"),
            styles: [__webpack_require__(/*! ./related-articles.component.scss */ "./src/app/ui/related-articles/related-articles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RelatedArticlesComponent);
    return RelatedArticlesComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _prince_page_prince_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prince-page/prince-page.component */ "./src/app/ui/prince-page/prince-page.component.ts");
/* harmony import */ var _related_articles_related_articles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-articles/related-articles.component */ "./src/app/ui/related-articles/related-articles.component.ts");
/* harmony import */ var _article_slider_article_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-slider/article-slider.component */ "./src/app/ui/article-slider/article-slider.component.ts");
/* harmony import */ var _form_validate_form_validate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-validate/form-validate.component */ "./src/app/ui/form-validate/form-validate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _prince_page_prince_page_component__WEBPACK_IMPORTED_MODULE_5__["PrincePageComponent"], _related_articles_related_articles_component__WEBPACK_IMPORTED_MODULE_6__["RelatedArticlesComponent"], _article_slider_article_slider_component__WEBPACK_IMPORTED_MODULE_7__["ArticleSliderComponent"], _form_validate_form_validate_component__WEBPACK_IMPORTED_MODULE_8__["FormValidateComponent"]],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Nicasio/Desktop/playful-challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map