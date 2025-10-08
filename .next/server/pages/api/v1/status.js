"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQSxNQUFNWixPQUFPYSxPQUFPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1Q7QUFDQSxpRUFBZTtJQUNiaEIsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJuZXdzX2Nsb25lLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxyXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUEFTU1dPUkQsXHJcbiAgfSk7XHJcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xyXG4gIGF3YWl0IGNsaWVudC5lbmQoKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBxdWVyeTogcXVlcnksXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19IT1NUIiwicG9ydCIsIlBPU1RHUkVTX1BPUlQiLCJ1c2VyIiwiUE9TVEdSRVNfVVNFUiIsImRhdGFiYXNlIiwiUE9TVEdSRVNfREIiLCJwYXNzd29yZCIsIlBPU1RHUkVTX1BBU1NXT1JEIiwiY29ubmVjdCIsInJlc3VsdCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1 + 1 as sum;\");\n    console.log(result.rows);\n    response.status(200).json({\n        status: \"testando endpoint api\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXJELGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBRXZCTCxTQUFTRixNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1FBQUVSLFFBQVE7SUFBd0I7QUFDOUQ7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYm5ld3NfY2xvbmUvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9pbmZyYS9kYXRhYmFzZS5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBzdGF0dXMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YWJhc2UucXVlcnkoXCJTRUxFQ1QgMSArIDEgYXMgc3VtO1wiKTtcbiAgY29uc29sZS5sb2cocmVzdWx0LnJvd3MpO1xuXG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwidGVzdGFuZG8gZW5kcG9pbnQgYXBpXCIgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXR1cztcbiJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsInN0YXR1cyIsInJlcXVlc3QiLCJyZXNwb25zZSIsInJlc3VsdCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();