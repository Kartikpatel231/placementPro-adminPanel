(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <router-outlet></router-outlet>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-list/company-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-list/company-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<h1>Company List</h1>\n<ul class=\"company-list\">\n    <li *ngFor=\"let company of companies\">{{ company.name }}\n\n        <div class=\"company-details\">\n            <p><strong>Name:</strong>{{company.name}}</p>\n            <p><strong>Description:</strong>{{company.description}}</p>\n            <p><strong>Registration:</strong>{{company.registration}} </p>\n            <p><strong>Website:</strong> <a [href]=\"company.website\" target=\"_blank\">{{company.website}}</a></p>\n        </div>\n         <div class=\"company-actions\">\n            <button (click)=\"editCompany(company.companyId)\">Edit</button>\n            <button (click)=\"deleteCompany(company.companyId)\">Delete</button>\n          </div>\n    </li>\n</ul>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-management/company-management.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-management/company-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<h1>Create Company</h1>\n<form (ngSubmit)=\"onSubmit()\" class=\"company-form\">\n    <div class=\"form-group\">\n        <label for=\"Id\">CompanyId</label>\n        <input type=\"text\" id=\"companyId\" name=\"companyId\" [(ngModel)]=\"formData.companyId\" required>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"Name:\">Name</label>\n    <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"formData.name\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"Description:\">Description</label>\n    <textarea  id=\"description\" name=\"description\" [(ngModel)]=\"formData.description\" required></textarea>\n</div>\n<div class=\"form-group\">\n    <label for=\"Url:\">Website</label>\n    <input type=\"url\" id=\"website\" name=\"website\" [(ngModel)]=\"formData.website\" required> \n</div>\n<div class=\"form-group\">\n    <label for=\"Status:\">Registration</label>\n    <select id=\"registration\" name=\"registration\" [(ngModel)]=\"formData.registration\" requried>\n        <option value=\"\"> Select Status</option>\n        <option value=\"true\">true</option>\n        <option value=\"false\">false</option>\n    </select>\n</div>\n<button type=\"submit\">Submit</button>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gpt/gpt.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gpt/gpt.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<div class=\"p-3\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <form [formGroup]=\"queryFormGroup\" (ngSubmit)=\"handleGpt()\">\n                <div class=\"mb-3\">\n                    <label class=\"form-label\">Query:</label>\n                    <textarea formControlName=\"query\" class=\"form-control\"></textarea>\n                </div>\n                <button class=\"btn btn-success\">Ask GPT</button>\n            </form>\n            <div class=\"alert alert-success\" *ngIf=\"result\">\n                <pre>\n                    {{result|json}}\n                </pre>\n                <ul class=\"\n                list-group\">\n            <li class=\"List-group-item\" *ngFor=\"let choice of result.choices\">\n                {{choice.message.content}}\n            </li></ul>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <h5>Welcome to the Admin Panel Dashboard</h5>\n<!--   \n  <nav class=\"p-3\">\n    <ul class=\"nav nav-pills\">\n      <li *ngFor=\"let action of actions\">\n        <button  (click)=\"handleRoute(action)\" class=\"btn btn-outline-success\">\n          {{action.title}}\n          <i class=\"bi bi-{{action.icons}}\"></i>\n        </button>\n      </li>\n    </ul>\n  </nav> -->\n  <div class=\"dashboard-container\">\n    <div class=\"dashboard-buttons\">\n      <button mat-raised-button (click)=\"navigateToCompany()\">Go to Company Management</button>\n      <button mat-raised-button (click)=\"navigateToCompanyList()\">Go to Company-List</button>\n      <button mat-raised-button (click)=\"navigateToStudent()\">Go to Student</button>\n      <button mat-raised-button (click)=\"navigateToStudentList()\">Go to Student-List</button>\n      <button mat-raised-button (click)=\"navigateToStudentApproval()\">Go to Student-ReportGenerate</button>\n      <button mat-raised-button (click)=\"navigateToStudentStatus()\">Go To Student-Approval</button>\n      <button mat-raised-button (click)=\"navigateToStudentPlacment()\">Go To Placment-Status-Updation</button>\n<!-- \n      <button (click)=\"addKartik()\"></button>\n       -->\n    </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row justify-content-center mt-5\">\n    <div class=\"col-md-6\">\n        <form class=\"form-group\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <h1>Admin-Login</h1>\n            <div class=\"form-group\">\n              <label for=\"userName\" class=\"user\">Username</label>\n              <input type=\"text\" formControlName=\"userName\" id=\"userName\" class=\"form-control\" placeholder=\"Enter your username\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"pass\">Password</label>\n              <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Enter your password\" required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/placed-student-update/placed-student-update.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/placed-student-update/placed-student-update.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>placed-student-update works!</p>\n<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<h1>Statuse Send To Company</h1>\n<div class=\"student-Placed\">\n  <fieldset>\n    <label for=\"EntrollmentNumber\">Enrollment Number</label>\n    <input type=\"text\" [(ngModel)]=\"searchStudentId\" placeholder=\"Enter Student ID\">\n    <label for=\"status\">Select Status</label>\n    <select id=\"status\" name=\"status\">\n      <option value=\"Placed\">Placed</option>\n      <option value=\"Not Placed\">Not Placed</option>\n    </select>\n    <label for=\"company\">Select Company:</label>\n    <select id=\"company\" name=\"company\"> <!--(change)=\"onCompanyChange($event.target.value)\"> -->\n      <option value=\"none\">none</option>\n      <option *ngFor=\"let company of companies\" [value]=\"company.name\">{{ company.name }}</option>\n    </select>\n    <button type=\"button\" (click)=\"sendStatus()\">Send</button>\n  </fieldset>\n\n  <!-- Button to show all students -->\n  <button type=\"button\" (click)=\"getAllPlacedStudents()\">Show All Students</button>\n<!-- placed-student-update.component.html -->\n\n<!-- ... (previous code) -->\n\n<!-- Input for filtering by company name -->\n<!-- <label for=\"companyFilter\">Filter by Company Name:</label>\n<input type=\"text\" [(ngModel)]=\"companyFilter\" id=\"companyFilter\"> -->\n\n  <!-- Display student details -->\n  <div class=\"student-details\" *ngFor=\"let student of students\">\n    <div class=\"student-info\">\n      <div class=\"info-label\">Student Name:</div>\n      <div class=\"info-value\">{{ student.studentName }}</div>\n    </div>\n    <div class=\"student-info\">\n      <div class=\"info-label\">Company:</div>\n      <div class=\"info-value\">{{ student.company }}</div>\n    </div>\n    <div class=\"student-info\">\n      <div class=\"info-label\">Branch:</div>\n      <div class=\"info-value\">{{ student.branch }}</div>\n    </div>\n    <div class=\"student-info\">\n      <div class=\"info-label\">Placement Date:</div>\n      <div class=\"info-value\">{{ student.placementDate }}</div>\n    </div>\n    <div class=\"student-info\">\n      <div class=\"info-label\">Image Path:</div>\n      <div class=\"info-value\">{{ student.imagePath }}</div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-approval/status-approval.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/status-approval/status-approval.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<h1>Statuse Send To Company</h1>\n<div class=\"student-approval\">\n    <label for=\"status\">Select Status</label>\n    <select id=\"status\" name=\"status\">\n        <option value=\"APPROVED\">Approved</option>\n        <option value=\"PENDING\">Pending</option>\n    </select>\n    <label for=\"company\">Select Company:</label>\n    <select id=\"company\" name=\"company\">\n        <option  [value]=\"'none'\">none</option>\n        <option *ngFor=\"let company of companies\" [value]=\"company.name\">{{ company.name }}</option>\n    </select>\n    <button type=\"button\" (click)=\"sendStatus()\">Send</button>\n</div>\n<div class=\"student-list\">\n<h1>Student-List</h1>\n<div *ngFor=\"let student of students\" class=\"student-card\">\n    <h2>{{student.fullName}}</h2>\n    <!-- <p><strong>Student ID:</strong> {{student.studentId}}</p> -->\n    <p><strong>Gender:</strong>{{student.gender}}</p>\n    <p><strong>Status:</strong>{{student.status}}</p>\n    <div *ngIf=\"student.studentProfileEntity\">\n    <p><strong>Student Enrollment:</strong>{{student.studentProfileEntity.enrollementNumber}}</p>\n    </div>\n<div *ngIf=\"student.resumeEntity\">\n    <h3>Resume</h3>\n    <p>{{student.resumeEntity.resumeName}}</p>\n    <a [href]=\"student.resumeEntity.resumeUrl\" download>Download</a>\n</div>\n<hr>\n<button (click)=\"viewStudentDetails(student.studentId)\">View Full Profile</button>\n</div>\n<button (click)=\"exportToExcel()\">Export to Excel</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"student-list\">\n    <a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<h1>Student-List</h1>\n<div *ngFor=\"let student of students\" class=\"student-card\">\n    <h2>{{student.fullName}}</h2>\n    <!-- <p><strong>Student ID:</strong> {{student.studentId}}</p> -->\n    <p><strong>Gender:</strong>{{student.gender}}</p>\n    <p><strong>Status:</strong>{{student.status}}</p>\n    <div *ngIf=\"student.studentProfileEntity\">\n    <p><strong>Student Enrollment:</strong>{{student.studentProfileEntity.enrollementNumber}}</p>\n    </div>\n    <div *ngIf=\"student.universityDetailEntity\">\n        <h3>UniversityDetials</h3>\n    <p><strong>cgpa</strong>{{student.universityDetailEntity.cgpa}}</p>\n    <p><strong>sgpa</strong>{{student.universityDetailEntity.sgpa}}</p>\n\n    </div>\n<div *ngIf=\"student.companyEntities\">\n    <h3>Companies</h3>\n    <ul>\n        <li *ngFor=\"let company of student.companyEntities\">\n            {{company.name}}\n        </li>\n    </ul>\n</div>\n<div *ngIf=\"student.resumeEntity\">\n    <h3>Resume</h3>\n    <p>{{student.resumeEntity.resumeName}}</p>\n    <a [href]=\"student.resumeEntity.resumeUrl\" download>Download</a>\n</div>\n<hr>\n<button (click)=\"viewStudentDetails(student.studentId)\">View Full Profile</button>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<div class=\"search-bar\">\n    <input type=\"text\" [(ngModel)]=\"searchStudentId\" placeholder=\"Enter Student ID\">\n    <button (click)=\"searchStudent()\">Search</button>\n  </div>\n  <h1>Student Detail</h1>\n<div *ngIf=\"studentProfile\">\n<div class=\"student-details\">\n    <div class=\"student-image\">\n        <img src=\"{{ studentProfile.imagePath }}\" alt=\"Student Image\">\n    </div>\n    <div class=\"student-info\">\n\n        <p><strong>Student Name:</strong>{{studentProfile.studentName}}</p>\n        <p><strong>EnrollementNumber</strong>{{studentProfile.enrollementNumber}}</p>\n        <p><strong>Father's Name</strong>{{studentProfile.fatherName}}</p>\n        <p><strong>Mother's Name</strong>{{studentProfile.motherName}}</p>\n        <p><strong>Mobile Number</strong>{{studentProfile.mobileNumber}}</p>\n        <p><strong>Category</strong>{{studentProfile.category}}</p>\n        <p><strong>Date Of Birth</strong>{{studentProfile.dateOfBirth}}</p>\n        <p><strong>Address</strong>{{studentProfile.address1}}</p>\n            \n    </div>\n</div>\n\n</div>\n<h1>University-Details</h1>\n<div *ngIf=\"universityEntity\">\n    <div class=\"university-detail\">\n        <div class=\"university-info\">\n            <p><strong>University Name:</strong>{{universityEntity.universityName}}</p>\n            <p><strong>University Cgpa:</strong>{{universityEntity.cgpa}}</p>\n            <p><strong>University Sgpa:</strong>{{universityEntity.sgpa}}</p>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/university-details-list/university-details-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/university-details-list/university-details-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>university-details-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/university-details/university-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/university-details/university-details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Import Angular Material styles -->\n<a routerLink=\"/home\" class=\"btn btn-primary\">Back to Home</a>\n\n<p>university-details works!</p>\n<h1>Approve University</h1>\n\n<div class=\"student-approval\">\n  <!-- Add \"Select All\" checkbox -->\n  <mat-checkbox [(ngModel)]=\"selectAll\" (change)=\"toggleAllSelection()\">Select All</mat-checkbox>\n\n  <!-- Checkboxes for individual options -->\n  <mat-checkbox [(ngModel)]=\"sendCGPA\">Send CGPA</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"sendSGPA\">Send SGPA</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"sendTenthMarks\">Send 10th Marks</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"sendTwelfthMarks\">Send 12th Marks</mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"sendName\">Send Company Name</mat-checkbox>\n  <!-- Input fields for data -->\n  <mat-form-field appearance=\"fill\" *ngIf=\"sendCGPA  || selectAll\">\n    <mat-label>CGPA</mat-label>\n    <input matInput [(ngModel)]=\"universityData.cgpa\" placeholder=\"CGPA\">\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\" *ngIf=\"sendSGPA  || selectAll\">\n    <mat-label>SGPA</mat-label>\n    <input matInput [(ngModel)]=\"universityData.sgpa\" placeholder=\"SGPA\">\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\" *ngIf=\"sendTenthMarks\">\n    <mat-label>10th Marks</mat-label>\n    <input matInput [(ngModel)]=\"universityData.tenthMarks\" placeholder=\"10th Marks\">\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\" *ngIf=\"sendTwelfthMarks\">\n    <mat-label>12th Marks</mat-label>\n    <input matInput [(ngModel)]=\"universityData.twelfthMarks\" placeholder=\"12th Marks\">\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\" *ngIf=\"sendName\">\n    <mat-label>Select Company Name</mat-label>\n    <mat-select [(ngModel)]=\"selectedCompany\">\n      <mat-option *ngFor=\"let company of companyName\" [value]=\"company\">\n        {{ company}}\n        </mat-option>\n    </mat-select>\n\n  </mat-form-field>\n  \n</div>\n<button mat-raised-button color=\"primary\" (click)=\"updateUniversity()\">Update Status</button>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-list/company-list.component */ "./src/app/company-list/company-list.component.ts");
/* harmony import */ var _company_management_company_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-management/company-management.component */ "./src/app/company-management/company-management.component.ts");
/* harmony import */ var _gpt_gpt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gpt/gpt.component */ "./src/app/gpt/gpt.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/authGuard.service */ "./src/app/login/authGuard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _placed_student_update_placed_student_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./placed-student-update/placed-student-update.component */ "./src/app/placed-student-update/placed-student-update.component.ts");
/* harmony import */ var _status_approval_status_approval_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status-approval/status-approval.component */ "./src/app/status-approval/status-approval.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _university_details_university_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./university-details/university-details.component */ "./src/app/university-details/university-details.component.ts");



//import { AppComponent } from './app.component';







//import { UserDatamodulModule } from './home/user-datamodul/user-datamodul.module';




const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // {path:'app',component:AppComponent},
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'placmentUpdate', component: _placed_student_update_placed_student_update_component__WEBPACK_IMPORTED_MODULE_9__["PlacedStudentUpdateComponent"] },
    { path: 'company', component: _company_management_company_management_component__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'company-list', component: _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_3__["CompanyListComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'student/:id', component: _student_student_component__WEBPACK_IMPORTED_MODULE_12__["StudentComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'student-list', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_11__["StudentListComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'student/:enroll', component: _student_student_component__WEBPACK_IMPORTED_MODULE_12__["StudentComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'status', component: _status_approval_status_approval_component__WEBPACK_IMPORTED_MODULE_10__["StatusApprovalComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    //{path: 'home', loadChildren: () => import('./home/user-datamodul/user-datamodul.module').then(m => m.UserDatamodulModule)},
    { path: 'gpt', component: _gpt_gpt_component__WEBPACK_IMPORTED_MODULE_5__["GptComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'university/Detail', component: _university_details_university_details_component__WEBPACK_IMPORTED_MODULE_13__["UniversityDetailsComponent"], canActivate: [_login_authGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-body{\r\n  margin-top: 100px;\r\n  min-height: 55vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJvZHl7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWluLWhlaWdodDogNTV2aDtcclxufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'placementProAdmin-panel';
        this.actions = [{
                //  route:"/home",title:"home","icon":"house"
                //},
                //{
                route: "/gpt", title: "gpt", "icon": "person"
            }
        ];
    }
    navigateToCompany() {
        this.router.navigate(['/company']);
    }
    navigateToCompanyList() {
        this.router.navigate(['/company-list']);
    }
    navigateToStudent() {
        this.router.navigate(['/student', 150]);
    }
    navigateToStudentList() {
        this.router.navigate(['/student-list']);
    }
    navigateToStudentApproval() {
        this.router.navigate(['/status']);
    }
    navigateToStudentStatus() {
        this.router.navigate(['university/Detail']);
    }
    addKartik() {
        console.log('kartik');
    }
    handleRoute(action) {
        this.router.navigateByUrl(action.route);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _company_management_company_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-management/company-management.component */ "./src/app/company-management/company-management.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company.service */ "./src/app/company.service.ts");
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company-list/company-list.component */ "./src/app/company-list/company-list.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _status_approval_status_approval_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./status-approval/status-approval.component */ "./src/app/status-approval/status-approval.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _gpt_gpt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./gpt/gpt.component */ "./src/app/gpt/gpt.component.ts");
/* harmony import */ var _university_details_university_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./university-details/university-details.component */ "./src/app/university-details/university-details.component.ts");
/* harmony import */ var _university_details_list_university_details_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./university-details-list/university-details-list.component */ "./src/app/university-details-list/university-details-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _placed_student_update_placed_student_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./placed-student-update/placed-student-update.component */ "./src/app/placed-student-update/placed-student-update.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _company_management_company_management_component__WEBPACK_IMPORTED_MODULE_6__["CompanyManagementComponent"],
            _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__["CompanyListComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_10__["StudentComponent"],
            _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_11__["StudentListComponent"],
            _status_approval_status_approval_component__WEBPACK_IMPORTED_MODULE_12__["StatusApprovalComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _gpt_gpt_component__WEBPACK_IMPORTED_MODULE_16__["GptComponent"],
            _university_details_university_details_component__WEBPACK_IMPORTED_MODULE_17__["UniversityDetailsComponent"],
            _university_details_list_university_details_list_component__WEBPACK_IMPORTED_MODULE_18__["UniversityDetailsListComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _placed_student_update_placed_student_update_component__WEBPACK_IMPORTED_MODULE_21__["PlacedStudentUpdateComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
        ],
        providers: [_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/company-list/company-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/company-list/company-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktbGlzdC9jb21wYW55LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/company-list/company-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/company-list/company-list.component.ts ***!
  \********************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");




let CompanyListComponent = class CompanyListComponent {
    constructor(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.companies = [];
    }
    ngOnInit() {
        this.getCompanies();
    }
    getCompanies() {
        this.companyService.getAllCompanies().subscribe((response) => {
            this.companies = response;
        }, (error) => {
            console.error('Error fetching companies:', error);
        });
    }
    deleteCompany(companyId) {
        if (confirm('Are you sure you want to delete this company?')) {
            this.companyService.deleteCompany(companyId).subscribe(() => {
                // Remove the deleted company from the list
                this.companies = this.companies.filter(company => company.companyId !== companyId);
            }, (error) => {
                console.error('Error deleting company:', error);
            });
        }
    }
    editCompany(companyId) {
        // Navigate to the update page with the companyId as a route parameter and update mode query parameter
        this.router.navigate(['/company'], { queryParams: { companyId: companyId, mode: 'update' } });
    }
};
CompanyListComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-list/company-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-list.component.css */ "./src/app/company-list/company-list.component.css")).default]
    })
], CompanyListComponent);



/***/ }),

/***/ "./src/app/company-management/company-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/company-management/company-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-form{\r\n    max-width: 400px;\r\n    margin:0 auto;\r\n}\r\n.form-group{\r\n    margin-bottom: 20px;\r\n}\r\nlabel{\r\n   display:block;\r\n   margin-bottom: 5px; \r\n}\r\ninput,textarea,select{\r\n    width: 100%;\r\n    padding: 8px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\nbutton{\r\n    background-color: #007bff;\r\n    color:#fff;\r\n    border: none;\r\n    padding: 10px,20px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n/* Styles for the success message */\r\n.success-message {\r\n    background-color: #4caf50; /* Green */\r\n    color: white;\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS1tYW5hZ2VtZW50L2NvbXBhbnktbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0dBQ0csYUFBYTtHQUNiLGtCQUFrQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQSxtQ0FBbUM7QUFDbkM7SUFDSSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueS1tYW5hZ2VtZW50L2NvbXBhbnktbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktZm9ybXtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG59XHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5sYWJlbHtcclxuICAgZGlzcGxheTpibG9jaztcclxuICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcclxufVxyXG5pbnB1dCx0ZXh0YXJlYSxzZWxlY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4LDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyogU3R5bGVzIGZvciB0aGUgc3VjY2VzcyBtZXNzYWdlICovXHJcbi5zdWNjZXNzLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/company-management/company-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/company-management/company-management.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanyManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyManagementComponent", function() { return CompanyManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");




let CompanyManagementComponent = class CompanyManagementComponent {
    constructor(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.companies = [];
        this.formData = {
            companyId: 0,
            name: '',
            description: '',
            website: '',
            registration: '',
        };
    }
    ngOnInit() {
        this.getCompanies();
    }
    getCompanies() {
        this.companyService.getAllCompanies().subscribe((response) => {
            this.companies = response;
        }, (error) => {
            console.error('Error fetching companies:', error);
        });
    }
    onSubmit() {
        console.log(this.formData);
        this.companyService.createCompany(this.formData).subscribe(response => {
            console.log('Company created', response);
            this.showSuccessMessage = true;
        }, error => {
            console.log('Error creating company:', error);
        });
        // Navigate after a certain time (e.g., 3 seconds)
        setTimeout(() => {
            this.router.navigate(['/company-list']);
        }, 3000);
    }
};
CompanyManagementComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompanyManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company-management/company-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-management.component.css */ "./src/app/company-management/company-management.component.css")).default]
    })
], CompanyManagementComponent);



/***/ }),

/***/ "./src/app/company.service.ts":
/*!************************************!*\
  !*** ./src/app/company.service.ts ***!
  \************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://172.172.233.120:80';
    }
    createCompany(formData) {
        const url = `${this.baseUrl}/api/v1`;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, formData, httpOptions);
    }
    getCompanyById(companyId) {
        const url = `${this.baseUrl}api/v1/get/${companyId}`;
        return this.http.get(url);
    }
    getAllCompanies() {
        const url = `${this.baseUrl}/api/v1`;
        return this.http.get(url);
    }
    deleteCompany(companyId) {
        const url = `${this.baseUrl}/api/v1/delete/${companyId}`;
        return this.http.post(url, null); // Sending an empty request body for delete
    }
    updateCompany(companyId, formData) {
        const url = `${this.baseUrl}api/v1/update`;
        formData.companyId = companyId; // Set the companyId in the request body
        return this.http.post(url, formData);
    }
    sendStatusData(data) {
        const url = `${this.baseUrl}/api/v3/${data.status}/approved/${data.company}?status=${data.status}`;
        return this.http.get(url);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/gpt/gpt.component.css":
/*!***************************************!*\
  !*** ./src/app/gpt/gpt.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dwdC9ncHQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/gpt/gpt.component.ts":
/*!**************************************!*\
  !*** ./src/app/gpt/gpt.component.ts ***!
  \**************************************/
/*! exports provided: GptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GptComponent", function() { return GptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let GptComponent = class GptComponent {
    constructor(fb, httpClient) {
        this.fb = fb;
        this.httpClient = httpClient;
        this.messages = [
            { role: "system", "content": "You are a helpful assistant." }
        ];
        this.apiKey = "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";
    }
    ngOnInit() {
        this.queryFormGroup = this.fb.group({
            query: this.fb.control("")
        });
    }
    handleGpt() {
        let url = "https://api.openai.com/v1/chat/completions";
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", `Bearer ${this.apiKey}`);
        let payLoad = {
            model: "gpt-3.5-turbo",
            messages: this.messages
        };
        this.httpClient.post(url, payLoad, { headers: httpHeaders }).subscribe({
            next: (resp) => {
                this.result = resp;
            },
            error: (err) => {
                console.error('API Error:', err);
            }
        });
    }
};
GptComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-gpt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gpt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gpt/gpt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gpt.component.css */ "./src/app/gpt/gpt.component.css")).default]
    })
], GptComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToCompany() {
        this.router.navigate(['/company']);
    }
    navigateToCompanyList() {
        this.router.navigate(['/company-list']);
    }
    navigateToStudent() {
        this.router.navigate(['/student', 150]);
    }
    navigateToStudentList() {
        this.router.navigate(['/student-list']);
    }
    navigateToStudentApproval() {
        this.router.navigate(['/status']);
    }
    navigateToStudentStatus() {
        this.router.navigate(['university/Detail']);
    }
    navigateToStudentPlacment() {
        this.router.navigate(['/placmentUpdate']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/authGuard.service.ts":
/*!********************************************!*\
  !*** ./src/app/login/authGuard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_dataser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dataser.service */ "./src/app/login/user-dataser.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['/login']); // Redirect to the login page
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_dataser_service__WEBPACK_IMPORTED_MODULE_3__["UserDataserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_dataser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-dataser.service */ "./src/app/login/user-dataser.service.ts");





let LoginComponent = class LoginComponent {
    constructor(userDataser, router) {
        this.userDataser = userDataser;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.submitted = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            const userData = {
                userName: this.loginForm.get('userName').value,
                password: this.loginForm.get('password').value
            };
            //const userName = this.loginForm.get('userName').value;
            //const password = this.loginForm.get('password').value;
            this.userDataser.Register(userData).subscribe(data => {
                console.log(data);
                if (data === "successfuly login") {
                    this.router.navigate(['/home']); // Navigate to the home page
                    this.userDataser.login();
                    // Set authentication status to true
                    //   this.userDataser.isAuthenticatedUser(true);
                }
            });
            // Reset the form
            this.loginForm.reset();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _user_dataser_service__WEBPACK_IMPORTED_MODULE_4__["UserDataserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/user-dataser.service.ts":
/*!***********************************************!*\
  !*** ./src/app/login/user-dataser.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataserService", function() { return UserDataserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserDataserService = class UserDataserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.isAuthenticated = false;
        this.baseUrl = 'http://172.172.233.120:80';
    }
    getUser() {
        return this.users;
    }
    Register(userData) {
        const url = `${this.baseUrl}/api/v3/auth/admin/${userData.userName}/${userData.password}`;
        return this.httpClient.post(url, null, { responseType: 'text' });
    }
    login() {
        // Set isAuthenticated to true upon successful login
        this.isAuthenticated = true;
    }
    logout() {
        // Set isAuthenticated to false upon logout
        this.isAuthenticated = false;
    }
    // Check if the user is authenticated
    isAuthenticatedUser() {
        return this.isAuthenticated;
    }
};
UserDataserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserDataserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataserService);



/***/ }),

/***/ "./src/app/placed-student-update/placed-student-update.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/placed-student-update/placed-student-update.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* placed-student-update.component.css */\r\n\r\n/* Style the student details container */\r\n\r\n.student-Placed {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n/* Style the form elements */\r\n\r\nfieldset {\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n    background-color: #fff;\r\n  }\r\n\r\nlabel {\r\n    font-weight: bold;\r\n  }\r\n\r\ninput[type=\"text\"],\r\n  select {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin: 6px 0;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n/* Style the \"Show All Students\" button */\r\n\r\nbutton[type=\"button\"] {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n  }\r\n\r\nbutton[type=\"button\"]:hover {\r\n    background-color: #0056b3;\r\n  }\r\n\r\n/* Style the student details */\r\n\r\n.student-details {\r\n    margin: 20px 0;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n  }\r\n\r\n/* Style the student information labels and values */\r\n\r\n.student-info {\r\n    display: flex;\r\n    margin: 5px 0;\r\n  }\r\n\r\n.info-label {\r\n    flex: 1;\r\n    font-weight: bold;\r\n  }\r\n\r\n.info-value {\r\n    flex: 3;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VkLXN0dWRlbnQtdXBkYXRlL3BsYWNlZC1zdHVkZW50LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEMsd0NBQXdDOztBQUN4QztJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0FBRUEsNEJBQTRCOztBQUM1QjtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7O0lBRUUsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0FBRUEseUNBQXlDOztBQUN6QztJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQSw4QkFBOEI7O0FBQzlCO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7QUFFQSxvREFBb0Q7O0FBQ3BEO0lBQ0UsYUFBYTtJQUNiLGFBQWE7RUFDZjs7QUFFQTtJQUNFLE9BQU87SUFDUCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxPQUFPO0VBQ1QiLCJmaWxlIjoic3JjL2FwcC9wbGFjZWQtc3R1ZGVudC11cGRhdGUvcGxhY2VkLXN0dWRlbnQtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwbGFjZWQtc3R1ZGVudC11cGRhdGUuY29tcG9uZW50LmNzcyAqL1xyXG5cclxuLyogU3R5bGUgdGhlIHN0dWRlbnQgZGV0YWlscyBjb250YWluZXIgKi9cclxuLnN0dWRlbnQtUGxhY2VkIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGZvcm0gZWxlbWVudHMgKi9cclxuICBmaWVsZHNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgXCJTaG93IEFsbCBTdHVkZW50c1wiIGJ1dHRvbiAqL1xyXG4gIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uW3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHN0dWRlbnQgZGV0YWlscyAqL1xyXG4gIC5zdHVkZW50LWRldGFpbHMge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBzdHVkZW50IGluZm9ybWF0aW9uIGxhYmVscyBhbmQgdmFsdWVzICovXHJcbiAgLnN0dWRlbnQtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8tbGFiZWwge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuaW5mby12YWx1ZSB7XHJcbiAgICBmbGV4OiAzO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/placed-student-update/placed-student-update.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/placed-student-update/placed-student-update.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlacedStudentUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedStudentUpdateComponent", function() { return PlacedStudentUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var _placedstudents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../placedstudents.service */ "./src/app/placedstudents.service.ts");





let PlacedStudentUpdateComponent = class PlacedStudentUpdateComponent {
    constructor(companyService, router, placedService) {
        this.companyService = companyService;
        this.router = router;
        this.placedService = placedService;
        this.companies = [];
        this.students = [];
        this.selectedCompany = null;
    }
    ngOnInit() {
        this.getCompanies();
        this.getAllPlacedStudents(); // Load all students by default
    }
    sendStatus() {
        const enroll = document.getElementById('enrollmentNumber');
        const selectedStatus = document.getElementById('status').value;
        const selectedCompany = document.getElementById('company').value;
        // Construct the data to send
        const data = {
            status: selectedStatus,
            company: selectedCompany,
            enrollmentNumber: this.searchStudentId
        };
        this.placedService.sendStatusDatas(data).subscribe((response) => {
            this.students = response;
            console.log(response);
            console.log('Status sent successfully:', response);
            // Handle success, e.g., show a success message
        }, (error) => {
            console.error('Error sending status:', error);
            // Handle error, e.g., show an error message
        });
    }
    getCompanies() {
        this.companyService.getAllCompanies().subscribe((response) => {
            this.companies = response;
        }, (error) => {
            console.error('Error fetching companies:', error);
        });
    }
    getAllPlacedStudents() {
        this.selectedCompany = null; // Reset the selected company
        this.placedService.getAllPlacedStudents().subscribe((students) => {
            this.students = students;
        }, (error) => {
            console.error('Error fetching placement students:', error);
        });
    }
    filterByCompanyName(companyName) {
        this.selectedCompany = companyName;
        this.placedService.getPlacementStudentsByCompanyName(companyName).subscribe((students) => {
            this.students = students;
        }, (error) => {
            console.error(`Error fetching placement students for company ${companyName}:`, error);
        });
    }
};
PlacedStudentUpdateComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _placedstudents_service__WEBPACK_IMPORTED_MODULE_4__["PlacedstudentsService"] }
];
PlacedStudentUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-placed-student-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./placed-student-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/placed-student-update/placed-student-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./placed-student-update.component.css */ "./src/app/placed-student-update/placed-student-update.component.css")).default]
    })
], PlacedStudentUpdateComponent);



/***/ }),

/***/ "./src/app/placedstudents.service.ts":
/*!*******************************************!*\
  !*** ./src/app/placedstudents.service.ts ***!
  \*******************************************/
/*! exports provided: PlacedstudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedstudentsService", function() { return PlacedstudentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PlacedstudentsService = class PlacedstudentsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://172.172.233.120:80';
    }
    sendStatusDatas(data) {
        const url = `${this.baseUrl}/api/v6/update/placement/${data.enrollmentNumber}/v/${data.company}/v1/${data.status}`;
        // Use the data parameter as the request body
        return this.http.post(url, data);
    }
    // placedstudents.service.ts
    getAllPlacedStudents() {
        const url = `${this.baseUrl}/api/v6/getAll/placedStudent`;
        return this.http.get(url);
    }
    // placedstudents.service.ts
    getPlacementStudentsByCompanyName(name) {
        const url = `${this.baseUrl}/api/v6/get/${name}`;
        return this.http.get(url);
    }
};
PlacedstudentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlacedstudentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PlacedstudentsService);



/***/ }),

/***/ "./src/app/status-approval/status-approval.component.css":
/*!***************************************************************!*\
  !*** ./src/app/status-approval/status-approval.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".student-approval {\r\n    width: 300px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .student-approval label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .student-approval select {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin-bottom: 15px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n  }\r\n  \r\n  .student-approval button {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .student-approval button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  /* Scrollable list */\r\n  \r\n  .student-approval select[size] {\r\n    overflow: auto;\r\n  }\r\n  \r\n  .student-list{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    }\r\n  \r\n  .student-card{\r\n    border: 1px solid #ccc;\r\n    padding: 15px;\r\n    margin:10px;\r\n    border-radius:5px;\r\n    width:70%;\r\n    background-color: #f9f9f9;\r\n    }\r\n  \r\n  .student-card h2{\r\n    margin: 0;\r\n    }\r\n  \r\n  .student-card h3{\r\n    margin-top: 10px;\r\n    }\r\n  \r\n  ul{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style:none;\r\n    }\r\n  \r\n  li{\r\n        margin: 5px 0;\r\n    }\r\n  \r\n  a {\r\n        text-decoration: none;\r\n        color: #007bff;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzLWFwcHJvdmFsL3N0YXR1cy1hcHByb3ZhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQSxvQkFBb0I7O0VBQ3BCO0lBQ0UsY0FBYztFQUNoQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25COztFQUNBO0lBQ0Esc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCx5QkFBeUI7SUFDekI7O0VBQ0E7SUFDQSxTQUFTO0lBQ1Q7O0VBQ0E7SUFDQSxnQkFBZ0I7SUFDaEI7O0VBQ0E7SUFDQSxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZjs7RUFDQTtRQUNJLGFBQWE7SUFDakI7O0VBRUE7UUFDSSxxQkFBcUI7UUFDckIsY0FBYztNQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy1hcHByb3ZhbC9zdGF0dXMtYXBwcm92YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50LWFwcHJvdmFsIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuc3R1ZGVudC1hcHByb3ZhbCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuc3R1ZGVudC1hcHByb3ZhbCBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0dWRlbnQtYXBwcm92YWwgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc3R1ZGVudC1hcHByb3ZhbCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICB9XHJcbiAgXHJcbiAgLyogU2Nyb2xsYWJsZSBsaXN0ICovXHJcbiAgLnN0dWRlbnQtYXBwcm92YWwgc2VsZWN0W3NpemVdIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAuc3R1ZGVudC1saXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtY2FyZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1jYXJkIGgye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtY2FyZCBoM3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/status-approval/status-approval.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/status-approval/status-approval.component.ts ***!
  \**************************************************************/
/*! exports provided: StatusApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusApprovalComponent", function() { return StatusApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






let StatusApprovalComponent = class StatusApprovalComponent {
    constructor(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.companies = [];
        this.students = [];
    }
    ngOnInit() {
        this.getCompanies();
    }
    getCompanies() {
        this.companyService.getAllCompanies().subscribe((response) => {
            this.companies = response;
        }, (error) => {
            console.error('Error fetching companies:', error);
        });
    }
    sendStatus() {
        const selectedStatus = document.getElementById('status').value;
        const selectedCompany = document.getElementById('company').value;
        // Construct the data to send
        const data = {
            status: selectedStatus,
            company: selectedCompany
        };
        this.companyService.sendStatusData(data).subscribe((response) => {
            this.students = response;
            console.log(response);
            console.log('Status sent successfully:', response);
            // Handle success, e.g., show a success message
        }, (error) => {
            console.error('Error sending status:', error);
            // Handle error, e.g., show an error message
        });
    }
    viewStudentDetails(studentId) {
        this.router.navigate(['/student', studentId]);
    }
    exportToExcel() {
        const data = [];
        for (const student of this.students) {
            // const studentData: any = {
            //   'Full Name': student.fullName,
            //   'Gender': student.gender,
            //   'Status': student.status,
            //   // Add more fields as needed
            // };
            const studentData = {
                'Student ID': student.studentId,
                'Full Name': student.fullName,
                'Gender': student.gender,
                'Status': student.status,
                'Father Name': student.studentProfileEntity.fatherName,
                'Mother Name': student.studentProfileEntity.motherName,
                'Mobile Number': student.studentProfileEntity.mobileNumber,
                'Category': student.studentProfileEntity.category,
                'Date of Birth': student.studentProfileEntity.dateOfBirth,
                'Address': student.studentProfileEntity.address1,
                'Blood Group': student.studentProfileEntity.bloodGroup,
                'Enrollment Number': student.studentProfileEntity.enrollementNumber,
                'Zipcode': student.studentProfileEntity.zipcode,
                'Image Path': student.studentProfileEntity.imagePath,
                'University Name': student.universityDetailEntity.universityName,
                'Tenth Marks': student.universityDetailEntity.tenthMarks,
                'Twelfth Marks': student.universityDetailEntity.twelfthMarks,
                'CGPA': student.universityDetailEntity.cgpa,
                'SGPA': student.universityDetailEntity.sgpa,
                'Current Year': student.universityDetailEntity.currentYear,
                'Current Semester': student.universityDetailEntity.currentSemester,
                'Number of Backlogs': student.universityDetailEntity.numberOfBacklogs,
                'Course': student.universityDetailEntity.course,
                'Section': student.universityDetailEntity.section,
                'Batches': student.universityDetailEntity.batches,
                'Passing Year': student.universityDetailEntity.passingYear,
            };
            data.push(studentData);
        }
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(data);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'Student List');
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_4__["write"](wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, 'student-list.xlsx');
    }
};
StatusApprovalComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StatusApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-approval',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./status-approval.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/status-approval/status-approval.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./status-approval.component.css */ "./src/app/status-approval/status-approval.component.css")).default]
    })
], StatusApprovalComponent);



/***/ }),

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".student-list{\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: center;\r\n}\r\n.student-card{\r\nborder: 1px solid #ccc;\r\npadding: 15px;\r\nmargin:10px;\r\nborder-radius:5px;\r\nwidth:70%;\r\nbackground-color: #f9f9f9;\r\n}\r\n.student-card h2{\r\nmargin: 0;\r\n}\r\n.student-card h3{\r\nmargin-top: 10px;\r\n}\r\nul{\r\npadding: 0;\r\nmargin: 0;\r\nlist-style:none;\r\n}\r\nli{\r\n    margin: 5px 0;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: #007bff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2IsV0FBVztBQUNYLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLFNBQVM7QUFDVCxlQUFlO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtbGlzdHtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc3R1ZGVudC1jYXJke1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5wYWRkaW5nOiAxNXB4O1xyXG5tYXJnaW46MTBweDtcclxuYm9yZGVyLXJhZGl1czo1cHg7XHJcbndpZHRoOjcwJTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxufVxyXG4uc3R1ZGVudC1jYXJkIGgye1xyXG5tYXJnaW46IDA7XHJcbn1cclxuLnN0dWRlbnQtY2FyZCBoM3tcclxubWFyZ2luLXRvcDogMTBweDtcclxufVxyXG51bHtcclxucGFkZGluZzogMDtcclxubWFyZ2luOiAwO1xyXG5saXN0LXN0eWxlOm5vbmU7XHJcbn1cclxubGl7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../students.service */ "./src/app/students.service.ts");




let StudentListComponent = class StudentListComponent {
    constructor(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.students = [];
    }
    ngOnInit() {
        this.getAllStudents();
    }
    getAllStudents() {
        this.studentService.getAllStudentData().subscribe(response => {
            this.students = response;
            console.log(response);
        });
    }
    viewStudentDetails(studentId) {
        this.router.navigate(['/student', studentId]);
    }
};
StudentListComponent.ctorParameters = () => [
    { type: _students_service__WEBPACK_IMPORTED_MODULE_3__["StudentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student-list/student-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")).default]
    })
], StudentListComponent);



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".student-details{\r\ndisplay: flex;\r\nalign-items: center;\r\nmargin-top: 20px;\r\n}\r\n.student-image img{\r\n max-width: 200px;\r\n max-height: 200px;\r\n border-radius: 50%;\r\n margin-right: 20px;\r\n}\r\n.student-info{\r\n    font-size: 16px;\r\n}\r\n.search-bar {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n  }\r\n.search-bar input {\r\n    padding: 5px;\r\n    margin-right: 10px;\r\n  }\r\n.search-bar button {\r\n    padding: 5px 10px;\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50LWRldGFpbHN7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbm1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnN0dWRlbnQtaW1hZ2UgaW1ne1xyXG4gbWF4LXdpZHRoOiAyMDBweDtcclxuIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5zdHVkZW50LWluZm97XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWJhciBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYmFyIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../students.service */ "./src/app/students.service.ts");




let StudentComponent = class StudentComponent {
    constructor(studentService, routes) {
        this.studentService = studentService;
        this.routes = routes;
    }
    ngOnInit() {
        this.routes.paramMap.subscribe(params => {
            this.studentId = +params.get('id');
            this.getStudent();
            this.searchStudent();
        });
    }
    getStudent() {
        this.studentService.getStudentById(this.studentId).subscribe(response => {
            this.studentProfile = response;
        });
        this.studentService.getUniversityById(this.studentId).subscribe(response => {
            this.universityEntity = response;
        });
    }
    searchStudent() {
        if (this.searchStudentId) {
            if (isNaN(Number(this.searchStudentId))) {
                this.studentService.searchStudentByEnrollment(this.searchStudentId)
                    .subscribe(response => {
                    this.studentProfile = response;
                    this.universityEntity = null;
                });
            }
            else {
                this.studentService.getStudentById(this.searchStudentId)
                    .subscribe(response => {
                    this.studentProfile = response;
                });
                this.studentService.getUniversityById(this.searchStudentId).subscribe(response => {
                    this.universityEntity = response;
                });
            }
        }
    }
};
StudentComponent.ctorParameters = () => [
    { type: _students_service__WEBPACK_IMPORTED_MODULE_3__["StudentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")).default]
    })
], StudentComponent);



/***/ }),

/***/ "./src/app/students.service.ts":
/*!*************************************!*\
  !*** ./src/app/students.service.ts ***!
  \*************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let StudentsService = class StudentsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://172.172.233.120:80';
    }
    getStudentById(studentId) {
        const url = `${this.baseUrl}/api/v1/get/profile/${studentId}`;
        //  this.getUniversityById(studentId);
        return this.http.get(url);
    }
    getUniversityById(studentId) {
        const url = `${this.baseUrl}/api/v4/get/${studentId}`;
        return this.http.get(url);
    }
    getAllStudentData() {
        const url = `${this.baseUrl}/api/v1/getAll/student`;
        return this.http.get(url);
    }
    searchStudentByEnrollment(studentEnrollment) {
        const url = `${this.baseUrl}/api/v1/get/profile/enroll/${studentEnrollment}`;
        return this.http.get(url);
    }
    deleteStudent() {
    }
    updateUniversityData(universityData) {
        const url = `${this.baseUrl}/api/v4`;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (universityData.cgpa !== undefined) {
            params = params.append('cgpa', universityData.cgpa.toString());
        }
        if (universityData.sgpa !== undefined) {
            params = params.append('sgpa', universityData.sgpa.toString());
        }
        if (universityData.tenthMarks !== undefined) {
            params = params.append('tenthMarks', universityData.tenthMarks.toString());
        }
        if (universityData.twelfthMarks !== undefined) {
            params = params.append('twelfthMarks', universityData.twelfthMarks.toString());
        }
        if (universityData.name !== undefined) {
            params = params.append('name', universityData.name);
        }
        // Send the request with parameters
        return this.http.get(url, { params });
    }
};
StudentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StudentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StudentsService);



/***/ }),

/***/ "./src/app/university-details-list/university-details-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/university-details-list/university-details-list.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXZlcnNpdHktZGV0YWlscy1saXN0L3VuaXZlcnNpdHktZGV0YWlscy1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/university-details-list/university-details-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/university-details-list/university-details-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: UniversityDetailsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityDetailsListComponent", function() { return UniversityDetailsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UniversityDetailsListComponent = class UniversityDetailsListComponent {
    constructor() { }
    ngOnInit() {
    }
};
UniversityDetailsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-university-details-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./university-details-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/university-details-list/university-details-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./university-details-list.component.css */ "./src/app/university-details-list/university-details-list.component.css")).default]
    })
], UniversityDetailsListComponent);



/***/ }),

/***/ "./src/app/university-details/UniversityData.ts":
/*!******************************************************!*\
  !*** ./src/app/university-details/UniversityData.ts ***!
  \******************************************************/
/*! exports provided: UniversityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityData", function() { return UniversityData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UniversityData {
}


/***/ }),

/***/ "./src/app/university-details/university-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/university-details/university-details.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXZlcnNpdHktZGV0YWlscy91bml2ZXJzaXR5LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/university-details/university-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/university-details/university-details.component.ts ***!
  \********************************************************************/
/*! exports provided: UniversityDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityDetailsComponent", function() { return UniversityDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../students.service */ "./src/app/students.service.ts");
/* harmony import */ var _UniversityData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UniversityData */ "./src/app/university-details/UniversityData.ts");





let UniversityDetailsComponent = class UniversityDetailsComponent {
    constructor(studentService, companies) {
        this.studentService = studentService;
        this.companies = companies;
        // companyName:any[]=[];
        this.companyName = [];
        this.universityData = new _UniversityData__WEBPACK_IMPORTED_MODULE_4__["UniversityData"]();
        this.sendCGPA = false;
        this.sendSGPA = false;
        this.sendTenthMarks = false;
        this.sendTwelfthMarks = false;
        this.sendName = false;
        this.selectAll = false; // Initialize to false
        this.companies.getAllCompanies().subscribe((response) => {
            this.companyName = response.map(company => company.name);
            console.log(response);
        }, (error) => {
            console.error('Error fetching companies:', error);
        });
    }
    // ...
    toggleAllSelection() {
        // Toggle the selection state of all checkboxes
        this.sendCGPA = this.selectAll;
        this.sendSGPA = this.selectAll;
        this.sendTenthMarks = this.selectAll;
        this.sendTwelfthMarks = this.selectAll;
        this.sendName = this.selectAll;
    }
    // Define a function to send selected data to the backend
    updateUniversity() {
        // Create a new object to hold only the selected data
        const selectedData = new _UniversityData__WEBPACK_IMPORTED_MODULE_4__["UniversityData"]();
        if (this.sendCGPA) {
            selectedData.cgpa = this.universityData.cgpa;
        }
        if (this.sendSGPA) {
            selectedData.sgpa = this.universityData.sgpa;
        }
        if (this.sendTenthMarks) {
            selectedData.tenthMarks = this.universityData.tenthMarks;
        }
        if (this.sendTwelfthMarks) {
            selectedData.twelfthMarks = this.universityData.twelfthMarks;
        }
        if (this.sendName) {
            selectedData.name = this.selectedCompany;
        }
        this.studentService.updateUniversityData(selectedData).subscribe(response => {
            // Handle the response from the backend
            console.log('Update successful', response);
        }, error => {
            // Handle any errors
            console.error('Update failed', error);
        });
    }
    ngOnInit() {
    }
};
UniversityDetailsComponent.ctorParameters = () => [
    { type: _students_service__WEBPACK_IMPORTED_MODULE_3__["StudentsService"] },
    { type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
];
UniversityDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-university-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./university-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/university-details/university-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./university-details.component.css */ "./src/app/university-details/university-details.component.css")).default]
    })
], UniversityDetailsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\svvv placment app admin\placementProAdmin-panel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map