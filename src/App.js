"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Homepage_1 = __importDefault(require("./pages/Homepage"));
var News_1 = __importDefault(require("./pages/News"));
var Events_1 = __importDefault(require("./pages/Events"));
var Library_1 = __importDefault(require("./pages/Library"));
var App = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Homepage_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/news", element: react_1.default.createElement(News_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/events", element: react_1.default.createElement(Events_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/library", element: react_1.default.createElement(Library_1.default, null) }))));
};
exports.default = App;
