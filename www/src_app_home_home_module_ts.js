"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);






const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_URL;
const API_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.API_KEY;
let HomePage = class HomePage {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.todayDate = new Date();
        this.cityName = "";
        this.name = "";
        this.loading = true;
        // this.loadData()
    }
    loadData() {
        this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results => {
            console.log(results);
            this.weatherTemp = results['main'];
            this.name = results['name'];
            console.log(this.weatherTemp);
            this.weatherDetails = results['weather'][0];
            console.log(this.weatherDetails);
            this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
            this.loading = false;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --ion-background-color: #FF9D54;\n}\n\n.searchBar {\n  --ion-background-color: #FFAC88;\n  color: #344A53;\n}\n\n.cardStyle {\n  border-radius: 20px;\n  --ion-background-color: #FFAC88;\n}\n\n.cardStyle span {\n  color: #344A53;\n  font-weight: 300;\n}\n\n.cardStyle #temp {\n  font-weight: 300;\n  font-size: 4em;\n  margin: 5px;\n}\n\n.cardStyle #locationIcon {\n  color: #FFFFFF;\n}\n\n.noData {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0JBQUE7QUFGRjs7QUFLQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSwrQkFBQTtBQUZGOztBQUlFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFMRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRjlENTQ7XG59XG5cbi5zZWFyY2hCYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZBQzg4O1xuICBjb2xvcjogIzM0NEE1Mztcbn1cblxuLmNhcmRTdHlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNGRkFDODg7XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICMzNDRBNTM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICN0ZW1wIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG5cbiAgI2xvY2F0aW9uSWNvbiB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbn1cblxuLm5vRGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <div style=\"text-align: center; margin: 15px;\">\n    <ion-label style=\"font-weight: 400; font-size: 1.5em;\">Weather Forecast</ion-label>\n  </div>\n  <ion-searchbar [(ngModel)]=\"cityName\" (ngModelChange)=\"loadData()\" placeholder=\"Search for city\" class=\"searchBar\"\n    animated></ion-searchbar>\n\n  <div *ngIf=\"!loading\">\n    <ion-card class=\"cardStyle\">\n      <ion-item lines=\"none\">\n        <p>Today's Report</p>\n        <ion-label slot=\"end\">{{todayDate | date: \"EEE dd MMM\"}}</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <span id=\"temp\">\n          {{(weatherTemp?.temp - 273.15).toFixed(0)}}°\n        </span>\n        <img [src]=weatherIcon slot=\"end\">\n      </ion-item>\n\n      <ion-item>\n        <ion-icon id=\"locationIcon\" name=\"location\"></ion-icon>\n        <span>{{cityName}}</span>\n      </ion-item>\n    </ion-card>\n\n    <ion-card class=\"cardStyle\">\n      <ion-item>\n        <span>Maximum Temp</span>\n        <span slot=\"end\">{{(weatherTemp.temp_max - 273.15).toFixed(0)}}°</span>\n      </ion-item>\n\n      <ion-item>\n        <span>Minimum Temp</span>\n        <span slot=\"end\">{{(weatherTemp.temp_min - 273.15).toFixed(0)}}°</span>\n      </ion-item>\n\n      <ion-item>\n        <span>Humidity</span>\n        <span slot=\"end\">{{weatherTemp.humidity}}%</span>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div  *ngIf=\"loading\" class=\"noData\">\n    <img src=\"../../assets/World.png\">\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map