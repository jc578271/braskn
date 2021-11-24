/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/categories/createCategory.ts":
/*!***************************************************!*\
  !*** ./src/handlers/categories/createCategory.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_middlewares_middy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/middlewares/middy */ \"./src/middlewares/middy.ts\");\n/* harmony import */ var _src_models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/models/Category */ \"./src/models/Category.ts\");\n\n\n\n\nconst createCategory = async (event) => {\n    try {\n        const { name } = JSON.parse(event.body);\n        const category = new _src_models_Category__WEBPACK_IMPORTED_MODULE_3__.default({ name });\n        const doc = await category.save();\n        return {\n            statusCode: 200,\n            body: JSON.stringify({ category: doc }),\n        };\n    }\n    catch (error) {\n        throw new (http_errors__WEBPACK_IMPORTED_MODULE_1___default().InternalServerError)(JSON.stringify({ message: error.message }));\n    }\n};\nconst handler = (0,_src_middlewares_middy__WEBPACK_IMPORTED_MODULE_2__.adminMiddleware)(createCategory);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvY2F0ZWdvcmllcy9jcmVhdGVDYXRlZ29yeS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2R0My1iYWNrZW5kLy4vc3JjL2hhbmRsZXJzL2NhdGVnb3JpZXMvY3JlYXRlQ2F0ZWdvcnkudHM/ZGY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5pbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xuaW1wb3J0IHsgYWRtaW5NaWRkbGV3YXJlIH0gZnJvbSAnQHNyYy9taWRkbGV3YXJlcy9taWRkeSc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnQHNyYy9tb2RlbHMvQ2F0ZWdvcnknO1xuXG4vLyBAdHMtaWdub3JlXG5jb25zdCBjcmVhdGVDYXRlZ29yeTogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gSlNPTi5wYXJzZShldmVudC5ib2R5KTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh7IG5hbWUgfSk7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgY2F0ZWdvcnkuc2F2ZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNhdGVnb3J5OiBkb2MgfSksXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgY3JlYXRlRXJyb3IuSW50ZXJuYWxTZXJ2ZXJFcnJvcihcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KSxcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFkbWluTWlkZGxld2FyZShjcmVhdGVDYXRlZ29yeSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handlers/categories/createCategory.ts\n");

/***/ }),

/***/ "./src/middlewares/checkAdmin.ts":
/*!***************************************!*\
  !*** ./src/middlewares/checkAdmin.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authMiddleware = () => ({\n    before: (handler, next) => {\n        const { authUser } = JSON.parse(handler.event.body);\n        if (authUser.role === 0) {\n            throw new (http_errors__WEBPACK_IMPORTED_MODULE_0___default().Unauthorized)(JSON.stringify({ message: 'You are unauthorized.' }));\n        }\n        next();\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authMiddleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tBZG1pbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2R0My1iYWNrZW5kLy4vc3JjL21pZGRsZXdhcmVzL2NoZWNrQWRtaW4udHM/ODg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRXJyb3IgZnJvbSAnaHR0cC1lcnJvcnMnO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9ICgpOiBhbnkgPT4gKHtcbiAgYmVmb3JlOiAoaGFuZGxlciwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgYXV0aFVzZXIgfSA9IEpTT04ucGFyc2UoaGFuZGxlci5ldmVudC5ib2R5KTtcbiAgICBpZiAoYXV0aFVzZXIucm9sZSA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IGNyZWF0ZUVycm9yLlVuYXV0aG9yaXplZChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnWW91IGFyZSB1bmF1dGhvcml6ZWQuJyB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhNaWRkbGV3YXJlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middlewares/checkAdmin.ts\n");

/***/ }),

/***/ "./src/middlewares/checkAuth.ts":
/*!**************************************!*\
  !*** ./src/middlewares/checkAuth.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/models/User */ \"./src/models/User.ts\");\n\n\nconst authMiddleware = () => ({\n    before: (handler, next) => {\n        if (!handler.event.headers.Authorization) {\n            throw new (http_errors__WEBPACK_IMPORTED_MODULE_0___default().Unauthorized)(JSON.stringify('You are unauthorized.'));\n        }\n        const token = handler.event.headers.Authorization.split(' ')[1];\n        _src_models_User__WEBPACK_IMPORTED_MODULE_1__.default.findByToken(token).then((user) => {\n            if (!user) {\n                throw new (http_errors__WEBPACK_IMPORTED_MODULE_0___default().Unauthorized)(JSON.stringify('You are unauthorized.'));\n            }\n            const oldBody = JSON.parse(handler.event.body);\n            const newBody = JSON.stringify(Object.assign(Object.assign({}, oldBody), { authUser: user }));\n            handler.event.body = newBody;\n            return next();\n        });\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authMiddleware);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tBdXRoLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHQzLWJhY2tlbmQvLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tBdXRoLnRzPzllNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUVycm9yIGZyb20gJ2h0dHAtZXJyb3JzJztcbmltcG9ydCBVc2VyIGZyb20gJ0BzcmMvbW9kZWxzL1VzZXInO1xuXG5jb25zdCBhdXRoTWlkZGxld2FyZSA9ICgpOiBhbnkgPT4gKHtcbiAgYmVmb3JlOiAoaGFuZGxlciwgbmV4dCkgPT4ge1xuICAgIGlmICghaGFuZGxlci5ldmVudC5oZWFkZXJzLkF1dGhvcml6YXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBjcmVhdGVFcnJvci5VbmF1dGhvcml6ZWQoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KCdZb3UgYXJlIHVuYXV0aG9yaXplZC4nKSxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gaGFuZGxlci5ldmVudC5oZWFkZXJzLkF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcbiAgICBVc2VyLmZpbmRCeVRva2VuKHRva2VuKS50aGVuKCh1c2VyKSA9PiB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IGNyZWF0ZUVycm9yLlVuYXV0aG9yaXplZChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSgnWW91IGFyZSB1bmF1dGhvcml6ZWQuJyksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZEJvZHkgPSBKU09OLnBhcnNlKGhhbmRsZXIuZXZlbnQuYm9keSk7XG4gICAgICBjb25zdCBuZXdCb2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5vbGRCb2R5LCBhdXRoVXNlcjogdXNlciB9KTtcbiAgICAgIGhhbmRsZXIuZXZlbnQuYm9keSA9IG5ld0JvZHk7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhNaWRkbGV3YXJlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/middlewares/checkAuth.ts\n");

/***/ }),

/***/ "./src/middlewares/connectDB.ts":
/*!**************************************!*\
  !*** ./src/middlewares/connectDB.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_services_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/services/mongoose */ \"./src/services/mongoose.ts\");\n\nconst connectToMongo = () => ({\n    before: (handler, next) => {\n        handler.context.callbackWaitsForEmptyEventLoop = false;\n        (0,_src_services_mongoose__WEBPACK_IMPORTED_MODULE_0__.default)().then(next());\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvY29ubmVjdERCLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHQzLWJhY2tlbmQvLi9zcmMvbWlkZGxld2FyZXMvY29ubmVjdERCLnRzPzIyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gJ0BzcmMvc2VydmljZXMvbW9uZ29vc2UnO1xuXG5jb25zdCBjb25uZWN0VG9Nb25nbyA9ICgpOiBhbnkgPT4gKHtcbiAgYmVmb3JlOiAoaGFuZGxlciwgbmV4dCkgPT4ge1xuICAgIGhhbmRsZXIuY29udGV4dC5jYWxsYmFja1dhaXRzRm9yRW1wdHlFdmVudExvb3AgPSBmYWxzZTtcbiAgICBjb25uZWN0VG9EYXRhYmFzZSgpLnRoZW4obmV4dCgpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9Nb25nbztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/middlewares/connectDB.ts\n");

/***/ }),

/***/ "./src/middlewares/middy.ts":
/*!**********************************!*\
  !*** ./src/middlewares/middy.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commonMiddleware\": () => (/* binding */ commonMiddleware),\n/* harmony export */   \"authMiddleware\": () => (/* binding */ authMiddleware),\n/* harmony export */   \"adminMiddleware\": () => (/* binding */ adminMiddleware)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-event-normalizer */ \"@middy/http-event-normalizer\");\n/* harmony import */ var _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\");\n/* harmony import */ var _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @middy/http-security-headers */ \"@middy/http-security-headers\");\n/* harmony import */ var _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middy_http_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @middy/http-cors */ \"@middy/http-cors\");\n/* harmony import */ var _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_middy_http_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _checkAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkAuth */ \"./src/middlewares/checkAuth.ts\");\n/* harmony import */ var _connectDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connectDB */ \"./src/middlewares/connectDB.ts\");\n/* harmony import */ var _checkAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkAdmin */ \"./src/middlewares/checkAdmin.ts\");\n\n\n\n\n\n\n\n\nconst commonMiddleware = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use([\n    _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default()(),\n    _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default()(),\n    _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default()(),\n    _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default()(),\n    (0,_connectDB__WEBPACK_IMPORTED_MODULE_6__.default)(),\n]);\nconst authMiddleware = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use([\n    _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default()(),\n    _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default()(),\n    _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default()(),\n    _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default()(),\n    (0,_connectDB__WEBPACK_IMPORTED_MODULE_6__.default)(),\n    (0,_checkAuth__WEBPACK_IMPORTED_MODULE_5__.default)(),\n]);\nconst adminMiddleware = (handler) => _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use([\n    _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_2___default()(),\n    _middy_http_event_normalizer__WEBPACK_IMPORTED_MODULE_1___default()(),\n    _middy_http_security_headers__WEBPACK_IMPORTED_MODULE_3___default()(),\n    _middy_http_cors__WEBPACK_IMPORTED_MODULE_4___default()(),\n    (0,_connectDB__WEBPACK_IMPORTED_MODULE_6__.default)(),\n    (0,_checkAuth__WEBPACK_IMPORTED_MODULE_5__.default)(),\n    (0,_checkAdmin__WEBPACK_IMPORTED_MODULE_7__.default)(),\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZXMvbWlkZHkudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdDMtYmFja2VuZC8uL3NyYy9taWRkbGV3YXJlcy9taWRkeS50cz8xZTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgaHR0cEV2ZW50Tm9ybWFsaXplciBmcm9tICdAbWlkZHkvaHR0cC1ldmVudC1ub3JtYWxpemVyJztcbmltcG9ydCBodHRwRXJyb3JIYW5kbGVyIGZyb20gJ0BtaWRkeS9odHRwLWVycm9yLWhhbmRsZXInO1xuaW1wb3J0IGh0dHBTZWN1cml0eUhlYWRlcnMgZnJvbSAnQG1pZGR5L2h0dHAtc2VjdXJpdHktaGVhZGVycyc7XG5pbXBvcnQgY29ycyBmcm9tICdAbWlkZHkvaHR0cC1jb3JzJztcbmltcG9ydCBhdXRoIGZyb20gJy4vY2hlY2tBdXRoJztcbmltcG9ydCBjb25uZWN0VG9EQiBmcm9tICcuL2Nvbm5lY3REQic7XG5pbXBvcnQgY2hlY2tBZG1pbiBmcm9tICcuL2NoZWNrQWRtaW4nO1xuXG5leHBvcnQgY29uc3QgY29tbW9uTWlkZGxld2FyZSA9IChoYW5kbGVyKSA9PlxuICBtaWRkeShoYW5kbGVyKS51c2UoW1xuICAgIGh0dHBFcnJvckhhbmRsZXIoKSxcbiAgICBodHRwRXZlbnROb3JtYWxpemVyKCksXG4gICAgaHR0cFNlY3VyaXR5SGVhZGVycygpLFxuICAgIGNvcnMoKSxcbiAgICBjb25uZWN0VG9EQigpLFxuICBdKTtcblxuZXhwb3J0IGNvbnN0IGF1dGhNaWRkbGV3YXJlID0gKGhhbmRsZXIpID0+XG4gIG1pZGR5KGhhbmRsZXIpLnVzZShbXG4gICAgaHR0cEVycm9ySGFuZGxlcigpLFxuICAgIGh0dHBFdmVudE5vcm1hbGl6ZXIoKSxcbiAgICBodHRwU2VjdXJpdHlIZWFkZXJzKCksXG4gICAgY29ycygpLFxuICAgIGNvbm5lY3RUb0RCKCksXG4gICAgYXV0aCgpLFxuICBdKTtcblxuZXhwb3J0IGNvbnN0IGFkbWluTWlkZGxld2FyZSA9IChoYW5kbGVyKSA9PlxuICBtaWRkeShoYW5kbGVyKS51c2UoW1xuICAgIGh0dHBFcnJvckhhbmRsZXIoKSxcbiAgICBodHRwRXZlbnROb3JtYWxpemVyKCksXG4gICAgaHR0cFNlY3VyaXR5SGVhZGVycygpLFxuICAgIGNvcnMoKSxcbiAgICBjb25uZWN0VG9EQigpLFxuICAgIGF1dGgoKSxcbiAgICBjaGVja0FkbWluKCksXG4gIF0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/middlewares/middy.ts\n");

/***/ }),

/***/ "./src/models/Category.ts":
/*!********************************!*\
  !*** ./src/models/Category.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        trim: true,\n        required: true,\n        unique: true,\n    },\n}, {\n    timestamps: true,\n});\nconst Category = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Category) ||\n    (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Category', CategorySchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL0NhdGVnb3J5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHQzLWJhY2tlbmQvLi9zcmMvbW9kZWxzL0NhdGVnb3J5LnRzP2IzNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBtb2RlbCwgU2NoZW1hLCBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgQ2F0ZWdvcnlTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9LFxuKTtcblxuY29uc3QgQ2F0ZWdvcnkgPVxuICAobW9uZ29vc2UubW9kZWxzLkNhdGVnb3J5IGFzIE1vZGVsPERvY3VtZW50PENhdGVnb3J5Pj4pIHx8XG4gIG1vZGVsPERvY3VtZW50PENhdGVnb3J5PiwgTW9kZWw8RG9jdW1lbnQ8Q2F0ZWdvcnk+Pj4oXG4gICAgJ0NhdGVnb3J5JyxcbiAgICBDYXRlZ29yeVNjaGVtYSxcbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBS0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/Category.ts\n");

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    firstName: {\n        type: String,\n        trim: true,\n    },\n    lastName: {\n        type: String,\n        trim: true,\n    },\n    email: {\n        type: String,\n        required: true,\n        trim: true,\n        unique: true,\n        validate: (value) => {\n            if (!validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(value))\n                throw new Error('Email is invalid.');\n        },\n    },\n    password: {\n        type: String,\n        validate: (value) => {\n            if (/\\s/.test(value))\n                throw new Error('Password cannot contain whitespace.');\n            if (!/[a-zA-Z]/.test(value) || !/\\d/.test(value))\n                throw new Error('Password must contain both number and character.');\n        },\n    },\n    avatar: {\n        type: String,\n    },\n    role: {\n        type: Number,\n        enum: [0, 1, 2],\n        default: 0,\n    },\n    accountType: {\n        type: String,\n        enum: ['GoogleAuth', 'FacebookAuth', 'TraditionalAuth'],\n        default: 'TraditionalAuth',\n    },\n    friends: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'User',\n        },\n    ],\n    token: {\n        type: Array,\n    },\n    saveNews: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: 'New',\n        },\n    ],\n}, {\n    timestamps: true,\n});\nUserSchema.statics.generateHashPassword = async (password) => bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 8);\nUserSchema.statics.findByToken = async (token) => {\n    const { email, userId } = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);\n    return User.findOne({\n        email,\n        _id: userId,\n        token: { $in: token },\n    }).select('-password -token');\n};\nUserSchema.methods.generateSessionToken = async function () {\n    const sessionToken = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({ userId: this.id, email: this.email, type: 'BeehiveAuth' }, process.env.JWT_SECRET);\n    this.token = this.token.concat(sessionToken);\n    await this.save();\n    return sessionToken;\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) ||\n    (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL1VzZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdDMtYmFja2VuZC8uL3NyYy9tb2RlbHMvVXNlci50cz80NThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBEb2N1bWVudCwgbW9kZWwsIFNjaGVtYSwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJ3ZhbGlkYXRvcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgZ2VuZGVycz86ICdNYWxlJyB8ICdGZW1hbGUnO1xuICB0eXBlOiAnR29vZ2xlQXV0aCcgfCAnRmFjZWJvb2tBdXRoJyB8ICdUcmFkaXRpb25hbEF1dGgnO1xuICBiaXJ0aGRheT86IHN0cmluZztcbiAgcm9sZTogTnVtYmVyO1xuICBmYXZvcml0ZUNhdGVnb3JpZXM/OiBBcnJheTxzdHJpbmc+O1xuICBzYXZlTmV3cz86IEFycmF5PHN0cmluZz47XG4gIHRva2VuOiBBcnJheTxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgVXNlckRvY3VtZW50IGV4dGVuZHMgVXNlciwgRG9jdW1lbnQge1xuICBnZW5lcmF0ZVNlc3Npb25Ub2tlbigpOiBQcm9taXNlPHN0cmluZz47XG4gIGdlbmVyYXRlRnVsbE5hbWUoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVXNlck1vZGVsIGV4dGVuZHMgTW9kZWw8VXNlckRvY3VtZW50PiB7XG4gIGdlbmVyYXRlSGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz47XG4gIGZpbmRCeVRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE1vZGVsPFVzZXJEb2N1bWVudD4+O1xufVxuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGZpcnN0TmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGxhc3ROYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKHZhbHVlKSkgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBpcyBpbnZhbGlkLicpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0ZTogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKC9cXHMvLnRlc3QodmFsdWUpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgY2Fubm90IGNvbnRhaW4gd2hpdGVzcGFjZS4nKTtcbiAgICAgICAgaWYgKCEvW2EtekEtWl0vLnRlc3QodmFsdWUpIHx8ICEvXFxkLy50ZXN0KHZhbHVlKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBib3RoIG51bWJlciBhbmQgY2hhcmFjdGVyLicpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZW51bTogWzAsIDEsIDJdLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGFjY291bnRUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBlbnVtOiBbJ0dvb2dsZUF1dGgnLCAnRmFjZWJvb2tBdXRoJywgJ1RyYWRpdGlvbmFsQXV0aCddLFxuICAgICAgZGVmYXVsdDogJ1RyYWRpdGlvbmFsQXV0aCcsXG4gICAgfSxcbiAgICBmcmllbmRzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiAnVXNlcicsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgIH0sXG4gICAgc2F2ZU5ld3M6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZWY6ICdOZXcnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfSxcbik7XG5cblVzZXJTY2hlbWEuc3RhdGljcy5nZW5lcmF0ZUhhc2hQYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZDogc3RyaW5nKSA9PlxuICBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XG5cbmludGVyZmFjZSBUb2tlbiB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5Vc2VyU2NoZW1hLnN0YXRpY3MuZmluZEJ5VG9rZW4gPSBhc3luYyAodG9rZW46IHN0cmluZykgPT4ge1xuICBjb25zdCB7IGVtYWlsLCB1c2VySWQgfTogVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pO1xuXG4gIHJldHVybiBVc2VyLmZpbmRPbmUoe1xuICAgIGVtYWlsLFxuICAgIF9pZDogdXNlcklkLFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0b2tlbjogeyAkaW46IHRva2VuIH0sXG4gIH0pLnNlbGVjdCgnLXBhc3N3b3JkIC10b2tlbicpO1xufTtcblxuVXNlclNjaGVtYS5tZXRob2RzLmdlbmVyYXRlU2Vzc2lvblRva2VuID0gYXN5bmMgZnVuY3Rpb24gKFxuICB0aGlzOiBVc2VyRG9jdW1lbnQsXG4pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSBhd2FpdCBqd3Quc2lnbihcbiAgICB7IHVzZXJJZDogdGhpcy5pZCwgZW1haWw6IHRoaXMuZW1haWwsIHR5cGU6ICdCZWVoaXZlQXV0aCcgfSxcbiAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICApO1xuXG4gIHRoaXMudG9rZW4gPSB0aGlzLnRva2VuLmNvbmNhdChzZXNzaW9uVG9rZW4pO1xuICBhd2FpdCB0aGlzLnNhdmUoKTtcbiAgcmV0dXJuIHNlc3Npb25Ub2tlbjtcbn07XG5jb25zdCBVc2VyID1cbiAgKG1vbmdvb3NlLm1vZGVscy5Vc2VyIGFzIFVzZXJNb2RlbCkgfHxcbiAgbW9kZWw8VXNlckRvY3VtZW50LCBVc2VyTW9kZWw+KCdVc2VyJywgVXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTBCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/User.ts\n");

/***/ }),

/***/ "./src/services/mongoose.ts":
/*!**********************************!*\
  !*** ./src/services/mongoose.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Promise) = global.Promise;\nlet isConnected;\nconst connectToDatabase = () => {\n    if (isConnected) {\n        console.log('=> Using existing database connection.');\n        return Promise.resolve();\n    }\n    console.log('=> Using new database connection.');\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        useCreateIndex: true,\n    })\n        .then((db) => {\n        isConnected = db.connections[0].readyState;\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbW9uZ29vc2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdDMtYmFja2VuZC8uL3NyYy9zZXJ2aWNlcy9tb25nb29zZS50cz8zNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbmxldCBpc0Nvbm5lY3RlZDogYm9vbGVhbiB8IG51bWJlcjtcblxuY29uc3QgY29ubmVjdFRvRGF0YWJhc2UgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coJz0+IFVzaW5nIGV4aXN0aW5nIGRhdGFiYXNlIGNvbm5lY3Rpb24uJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgY29uc29sZS5sb2coJz0+IFVzaW5nIG5ldyBkYXRhYmFzZSBjb25uZWN0aW9uLicpO1xuICByZXR1cm4gbW9uZ29vc2VcbiAgICAuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwsIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgIH0pXG4gICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICBpc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EYXRhYmFzZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0VBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mongoose.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-cors":
/*!***********************************!*\
  !*** external "@middy/http-cors" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@middy/http-cors");;

/***/ }),

/***/ "@middy/http-error-handler":
/*!********************************************!*\
  !*** external "@middy/http-error-handler" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-error-handler");;

/***/ }),

/***/ "@middy/http-event-normalizer":
/*!***********************************************!*\
  !*** external "@middy/http-event-normalizer" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-event-normalizer");;

/***/ }),

/***/ "@middy/http-security-headers":
/*!***********************************************!*\
  !*** external "@middy/http-security-headers" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-security-headers");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");;

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("http-errors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("jwt-decode");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/categories/createCategory.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;