webpackHotUpdate("static/development/pages/message.js",{

/***/ "./pages/message.js":
/*!**************************!*\
  !*** ./pages/message.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_poll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/poll.component */ "./components/poll.component.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/message.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    subscription {\n      polls(where: { id: { _eq: ", " } }) {\n        id\n        title\n        description\n        user_id\n        channel_id\n        expiry\n        options\n        poll_votes {\n          user_id\n          option_id\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation add_vote($objects: [poll_votes_insert_input!]!) {\n    insert_poll_votes(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var ADD_VOTE = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function Message(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068
  var query = props.router.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.userId),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.channelId),
      channelId = _useState2[0],
      setChannelId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.payload),
      pollId = _useState3[0],
      setPollId = _useState3[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(ADD_VOTE),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      addVote = _useMutation2[0],
      addVoteData = _useMutation2[1];

  var _useSubscription = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useSubscription"])(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject2(), pollId)),
      loading = _useSubscription.loading,
      error = _useSubscription.error,
      data = _useSubscription.data;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3644669285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3644669285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-3644669285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-3644669285",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3644669285",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;padding:20px;overflow:scroll;}.error{position:absolute;top:0px;left:0px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RHlCLEFBR3NCLEFBS00sQUFJQSxBQU1DLFdBZE4sTUFLZCxBQUllLENBTUwsS0FkVixHQWVXLElBTk8sS0FPTCxXQU5iLEFBT0EiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIExvYWRpbmcsIE5vdGlmaWNhdGlvbiwgU3Bpbm5lciB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBQb2xsQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcblxuY29uc3QgQUREX1ZPVEUgPSBncWxgXG4gIG11dGF0aW9uIGFkZF92b3RlKCRvYmplY3RzOiBbcG9sbF92b3Rlc19pbnNlcnRfaW5wdXQhXSEpIHtcbiAgICBpbnNlcnRfcG9sbF92b3RlcyhvYmplY3RzOiAkb2JqZWN0cykge1xuICAgICAgcmV0dXJuaW5nIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcbiAgLy8gP3VzZXJJZD01ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODEmY2hhbm5lbElkPTVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OFxuICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeSB9fSA9IHByb3BzXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShxdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShxdWVyeS5jaGFubmVsSWQpXG4gIGNvbnN0IFtwb2xsSWQsIHNldFBvbGxJZF0gPSB1c2VTdGF0ZShxdWVyeS5wYXlsb2FkKVxuICBjb25zdCBbYWRkVm90ZSwgYWRkVm90ZURhdGFdID0gdXNlTXV0YXRpb24oQUREX1ZPVEUpXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVN1YnNjcmlwdGlvbihncWxgXG4gICAgc3Vic2NyaXB0aW9uIHtcbiAgICAgIHBvbGxzKHdoZXJlOiB7IGlkOiB7IF9lcTogJHtwb2xsSWR9IH0gfSkge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB1c2VyX2lkXG4gICAgICAgIGNoYW5uZWxfaWRcbiAgICAgICAgZXhwaXJ5XG4gICAgICAgIG9wdGlvbnNcbiAgICAgICAgcG9sbF92b3RlcyB7XG4gICAgICAgICAgdXNlcl9pZFxuICAgICAgICAgIG9wdGlvbl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2xsczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgeyhsb2FkaW5nIHx8ICFkYXRhKSAmJiA8U3Bpbm5lciAvPn1cbiAgICAgICAgeyhlcnJvciB8fCAhZGF0YSkgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxFcnJvciBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb2xsc1wiIC8+PC9kaXY+fVxuICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtkYXRhLnBvbGxzLm1hcCgocG9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9sbENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgdG9vbHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGV4cGlyeT17cG9sbC5leHBpcnl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cG9sbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3BvbGwuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtwb2xsLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBwb2xsVm90ZXM9e3BvbGwucG9sbF92b3Rlc31cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySWQ9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsob3B0aW9uSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVm90ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25faWQ6IG9wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxfaWQ6IHBvbGxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEod2l0aFJvdXRlcihNZXNzYWdlKSlcbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/message.js */"), __jsx("div", {
    className: "jsx-3644669285" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, (loading || !data) && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), (error || !data) && __jsx("div", {
    className: "jsx-3644669285" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Error"], {
    message: "Error loading polls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, data.polls.map(function (poll, index) {
    return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tools: false,
      key: index,
      expiry: poll.expiry,
      title: poll.title,
      userId: poll.user_id,
      description: poll.description,
      options: poll.options,
      pollVotes: poll.poll_votes,
      currentUserId: userId,
      onSubmit: function onSubmit(optionId) {
        addVote({
          variables: {
            objects: [{
              option_id: optionId,
              poll_id: pollId,
              user_id: userId
            }]
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Message)));

/***/ })

})
//# sourceMappingURL=message.js.98bde580bf22e06cb1be.hot-update.js.map