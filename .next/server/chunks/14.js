"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 8014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlassCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function GlassCard({ title , description , icon , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        whileHover: {
            scale: 1.03
        },
        className: "group relative dark-glass rounded-xl p-6 glow overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                    background: `linear-gradient(to right, #00D4FF, #FF3DFF, #7000FF, #00D4FF)`,
                    backgroundSize: "300% 100%",
                    animation: "shimmer 3s linear infinite",
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-0 rounded-xl bg-dark-900"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl",
                style: {
                    background: `linear-gradient(to right, #00D4FF, #FF3DFF, #7000FF, #00D4FF)`,
                    backgroundSize: "300% 100%",
                    animation: "shimmer 3s linear infinite"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: "text-4xl mb-4",
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl font-semibold mb-3 text-dark-50",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-dark-100",
                        children: description
                    }),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 text-dark-100",
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                    borderImage: "linear-gradient(to right, #00D4FF, #FF3DFF) 1",
                    animation: "borderPulse 2s ease-in-out infinite"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                    borderImage: "linear-gradient(to right, #FF3DFF, #7000FF) 1",
                    animation: "borderPulse 2s ease-in-out infinite"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                    borderImage: "linear-gradient(to right, #7000FF, #00D4FF) 1",
                    animation: "borderPulse 2s ease-in-out infinite"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                style: {
                    borderImage: "linear-gradient(to right, #FF3DFF, #00D4FF) 1",
                    animation: "borderPulse 2s ease-in-out infinite"
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;