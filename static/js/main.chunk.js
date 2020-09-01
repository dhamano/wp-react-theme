(this["webpackJsonpreact-test"] = this["webpackJsonpreact-test"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Archive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Archive */ "./src/components/Archive.js");
/* harmony import */ var _components_Single__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Single */ "./src/components/Single.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/App.js";






function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_Archive__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/:route/:slug",
    component: _components_Single__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/search/:term",
    component: _components_Archive__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: _components_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Context/Context.js":
/*!********************************!*\
  !*** ./src/Context/Context.js ***!
  \********************************/
/*! exports provided: Consumer, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/Context/Context.js";


const storeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const Consumer = storeContext.Consumer;
class Provider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    let route = this.props.match.params.route;
    let slug = this.props.match.params.slug ? this.props.match.params.slug : '';
    this.state = {
      slug: slug,
      route: route,
      posts: []
    };
  }

  getRestType() {
    switch (this.props.match.path) {
      case 'page':
      case 'post':
        return 'POST';
        break;

      default:
        break;
    }
  }

  buildUrl() {
    let url = '/wp-json/wp/v2/'; // console.log('rest type', this.state.restType);

    switch (this.state.route) {
      case 'page':
        url += 'pages/?slug=' + this.state.slug;
        break;

      case 'post':
        url += 'posts/?slug=' + this.state.slug;
        break;

      default:
        break;
    } // console.log('URL', url);


    return url;
  }

  getPosts(url) {
    let self = this; // console.log("THIS", this, "\nthis.state:", this.state)

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(res => {
      // console.log("RESPONSE",res.data)
      self.setState({ ...this.state,
        posts: res.data
      });
    }).catch(err => {
      console.log(err);
      self.appError = 'An unexpected error occurred';
    });
  }

  componentDidMount() {
    // console.log('CONTEXT get posts', this.props);
    this.getPosts(this.buildUrl());
  }

  componentDidUpdate(prevProps) {// some stuff
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(storeContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/Context/WithConsumer.js":
/*!*************************************!*\
  !*** ./src/Context/WithConsumer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/Context/Context.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/Context/WithConsumer.js";



const WithConsumer = WrappedComponent => {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, ctx => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, props, {
      context: ctx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 25
      }
    })));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (WithConsumer);

/***/ }),

/***/ "./src/components/Archive.js":
/*!***********************************!*\
  !*** ./src/components/Archive.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/Header */ "./src/components/shared/Header.js");
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Footer */ "./src/components/shared/Footer.js");
/* harmony import */ var _shared_TheLoop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/TheLoop */ "./src/components/shared/TheLoop.js");
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/Context */ "./src/Context/Context.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/Archive.js";






const Archive = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_Context__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), "this is Archive component!!!!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Archive);

/***/ }),

/***/ "./src/components/NotFound.js":
/*!************************************!*\
  !*** ./src/components/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/Header */ "./src/components/shared/Header.js");
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Footer */ "./src/components/shared/Footer.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/NotFound.js";




const NotFound = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), "this is NotFound component!!!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/Single.js":
/*!**********************************!*\
  !*** ./src/components/Single.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/Header */ "./src/components/shared/Header.js");
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Footer */ "./src/components/shared/Footer.js");
/* harmony import */ var _shared_TheLoop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/TheLoop */ "./src/components/shared/TheLoop.js");
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/Context */ "./src/Context/Context.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/Single.js";






const Single = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_Context__WEBPACK_IMPORTED_MODULE_4__["Provider"], Object.assign({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_TheLoop__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Single);

/***/ }),

/***/ "./src/components/shared/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/shared/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/shared/Footer.js";


const Footer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "it's our footer!!");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/shared/Header.js":
/*!*****************************************!*\
  !*** ./src/components/shared/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/shared/Header.js";


const Header = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "it's our header!!");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/shared/TheLoop.js":
/*!******************************************!*\
  !*** ./src/components/shared/TheLoop.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/WithConsumer */ "./src/Context/WithConsumer.js");
/* harmony import */ var _ThePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThePost */ "./src/components/shared/ThePost.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/shared/TheLoop.js";




const TheLoop = ({
  context,
  ...props
}) => {
  const posts = () => context.posts;

  const pos = posts(); // console.log('LOOP:\n', pos, '\nPROPS:', props);

  let results = '';

  if (context.appError) {
    results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-error",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    }, context.appError);
  } else {
    if (pos.length === 0) {
      results = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "no-results",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 23
        }
      }, "no results");
    } else {
      results = pos.map((item, i) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThePost__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          post: item,
          route: context.route,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 24
          }
        });
      });
    }
  }

  return results;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_Context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(TheLoop));

/***/ }),

/***/ "./src/components/shared/ThePost.js":
/*!******************************************!*\
  !*** ./src/components/shared/ThePost.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/components/shared/helpers.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "../node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/components/shared/ThePost.js";



 // import sanitizeHtml from 'sanitize-html-react';

const ThePost = ({
  post,
  route
}) => {
  // const posts = () => item.posts;
  // const item = posts()[index];
  // let linkPrefix = item.type === 'page' ? '/page/' : '/post/';
  let theContent = '',
      renderContent = '';

  switch (route) {
    case '/':
    case '/search/:term':
    case '/category/:catid':
      theContent = post.excerpt.rendered;
      break;

    default:
      theContent = post.content.rendered;
      break;
  }

  if (theContent !== '') {
    console.log('theContent', theContent);
    renderContent = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["sanitizeContent"])(theContent);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'post-id-' + post.id,
    className: 'post-item',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/" + post.type + "/" + post.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, post.title.rendered)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(renderContent)));
};

/* harmony default export */ __webpack_exports__["default"] = (ThePost);

/***/ }),

/***/ "./src/components/shared/helpers.js":
/*!******************************************!*\
  !*** ./src/components/shared/helpers.js ***!
  \******************************************/
/*! exports provided: sanitizeContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeContent", function() { return sanitizeContent; });
/* harmony import */ var sanitize_html_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sanitize-html-react */ "./node_modules/sanitize-html-react/index.js");
/* harmony import */ var sanitize_html_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sanitize_html_react__WEBPACK_IMPORTED_MODULE_0__);

const allowedTags = ['b', 'i', 'em', 'strong', 'a', 'p'];
const allowedAttr = {
  'a': ['href', 'alt']
};
const sanitizeContent = content => sanitize_html_react__WEBPACK_IMPORTED_MODULE_0___default()(content, {
  allowedTags: allowedTags,
  allowedAttr: allowedAttr
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/index.js";





const AppWithRouter = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppWithRouter, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/wp-content/themes/react-test/react-src/src/index.js */"./src/index.js");


/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map