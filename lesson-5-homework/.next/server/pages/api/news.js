module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/news.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/news.js":
/*!***************************!*\
  !*** ./pages/api/news.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.statusCode = 200;\n  res.json({\n    code: 200,\n    data: [{\n      title: \"美国务卿称人不是谈判的筹码华春莹:讲得很对!立即让孟晚舟回国\",\n      pic: \"http://p3.pstatp.com/list/190x124/tos-cn-i-0004/e1e9ed6f7ba24187bd1f47659ed77b78\",\n      kind: \"视频\",\n      media: \"燃新闻视频\",\n      footpic: \"http://p6-tt-ipv6.byteimg.com/large/dc0b000659d4b3d27841\",\n      numofcomment: \"27评论\",\n      time: \"8分钟前\"\n    }, {\n      title: \"2020年美国侵犯人权报告｜美国疫情严重失控酿成人间悲剧\",\n      pic: \"http://p1.pstatp.com/list/190x124/pgc-image/SSZfiER2dhZsTI\",\n      kind: \"国际\",\n      media: \"新华网客户端\",\n      footpic: \"http://p26-tt.byteimg.com/large/pgc-image/03f6307ae99745119fa95747f9d9e525\",\n      numofcomment: \"2319评论\",\n      time: \"11分钟前\"\n    }, {\n      title: \"被遗忘25年的国产片，因尺度太大只能在日本上映，揭露真实人性\",\n      pic: \"http://p1.pstatp.com/list/tos-cn-i-0004/87ecf9a55b314d8a918129bcff11c214\",\n      kind: \"视频\",\n      media: \"第七放映厅\",\n      footpic: \"http://p6-tt-ipv6.byteimg.com/large/dc0b000659d4b3d27841\",\n      numofcomment: \"25评论\",\n      time: \"15分钟前\"\n    }, {\n      title: \"2020年美国侵犯人权报告｜美国疫情严重失控酿成人间悲剧\",\n      pic: \"http://p1.pstatp.com/list/190x124/pgc-image/SSZfiER2dhZsTI\",\n      kind: \"国际\",\n      media: \"新华网客户端\",\n      footpic: \"http://p26-tt.byteimg.com/large/pgc-image/03f6307ae99745119fa95747f9d9e525\",\n      numofcomment: \"2319评论\",\n      time: \"11分钟前\"\n    }, {\n      title: \"美国务卿称人不是谈判的筹码华春莹:讲得很对!立即让孟晚舟回国\",\n      pic: \"http://p3.pstatp.com/list/190x124/tos-cn-i-0004/e1e9ed6f7ba24187bd1f47659ed77b78\",\n      kind: \"视频\",\n      media: \"燃新闻视频\",\n      footpic: \"http://p6-tt-ipv6.byteimg.com/large/dc0b000659d4b3d27841\",\n      numofcomment: \"27评论\",\n      time: \"8分钟前\"\n    }, {\n      title: \"2020年美国侵犯人权报告｜美国疫情严重失控酿成人间悲剧\",\n      pic: \"http://p1.pstatp.com/list/190x124/pgc-image/SSZfiER2dhZsTI\",\n      kind: \"国际\",\n      media: \"新华网客户端\",\n      footpic: \"http://p26-tt.byteimg.com/large/pgc-image/03f6307ae99745119fa95747f9d9e525\",\n      numofcomment: \"2319评论\",\n      time: \"11分钟前\"\n    }]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3cy5qcz9jOTAxIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInN0YXR1c0NvZGUiLCJqc29uIiwiY29kZSIsImRhdGEiLCJ0aXRsZSIsInBpYyIsImtpbmQiLCJtZWRpYSIsImZvb3RwaWMiLCJudW1vZmNvbW1lbnQiLCJ0aW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBRWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxLQUFHLENBQUNDLFVBQUosR0FBaUIsR0FBakI7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDTEMsUUFBSSxFQUFFLEdBREQ7QUFFTEMsUUFBSSxFQUFFLENBQ0Y7QUFDSUMsV0FBSyxFQUFDLGdDQURWO0FBRUlDLFNBQUcsRUFBQyxrRkFGUjtBQUdJQyxVQUFJLEVBQUMsSUFIVDtBQUlJQyxXQUFLLEVBQUMsT0FKVjtBQUtJQyxhQUFPLEVBQUMsMERBTFo7QUFNSUMsa0JBQVksRUFBQyxNQU5qQjtBQU9JQyxVQUFJLEVBQUM7QUFQVCxLQURFLEVBWUY7QUFDSU4sV0FBSyxFQUFDLDhCQURWO0FBRUlDLFNBQUcsRUFBQyw0REFGUjtBQUdJQyxVQUFJLEVBQUMsSUFIVDtBQUlJQyxXQUFLLEVBQUMsUUFKVjtBQUtJQyxhQUFPLEVBQUMsNEVBTFo7QUFNSUMsa0JBQVksRUFBQyxRQU5qQjtBQU9JQyxVQUFJLEVBQUM7QUFQVCxLQVpFLEVBdUJGO0FBQ0lOLFdBQUssRUFBQyxnQ0FEVjtBQUVJQyxTQUFHLEVBQUMsMEVBRlI7QUFHSUMsVUFBSSxFQUFDLElBSFQ7QUFJSUMsV0FBSyxFQUFDLE9BSlY7QUFLSUMsYUFBTyxFQUFDLDBEQUxaO0FBTUlDLGtCQUFZLEVBQUMsTUFOakI7QUFPSUMsVUFBSSxFQUFDO0FBUFQsS0F2QkUsRUFrQ0Y7QUFDSU4sV0FBSyxFQUFDLDhCQURWO0FBRUlDLFNBQUcsRUFBQyw0REFGUjtBQUdJQyxVQUFJLEVBQUMsSUFIVDtBQUlJQyxXQUFLLEVBQUMsUUFKVjtBQUtJQyxhQUFPLEVBQUMsNEVBTFo7QUFNSUMsa0JBQVksRUFBQyxRQU5qQjtBQU9JQyxVQUFJLEVBQUM7QUFQVCxLQWxDRSxFQTZDRjtBQUNJTixXQUFLLEVBQUMsZ0NBRFY7QUFFSUMsU0FBRyxFQUFDLGtGQUZSO0FBR0lDLFVBQUksRUFBQyxJQUhUO0FBSUlDLFdBQUssRUFBQyxPQUpWO0FBS0lDLGFBQU8sRUFBQywwREFMWjtBQU1JQyxrQkFBWSxFQUFDLE1BTmpCO0FBT0lDLFVBQUksRUFBQztBQVBULEtBN0NFLEVBd0RGO0FBQ0lOLFdBQUssRUFBQyw4QkFEVjtBQUVJQyxTQUFHLEVBQUMsNERBRlI7QUFHSUMsVUFBSSxFQUFDLElBSFQ7QUFJSUMsV0FBSyxFQUFDLFFBSlY7QUFLSUMsYUFBTyxFQUFDLDRFQUxaO0FBTUlDLGtCQUFZLEVBQUMsUUFOakI7QUFPSUMsVUFBSSxFQUFDO0FBUFQsS0F4REU7QUFGRCxHQUFUO0FBdUVILENBekVEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ld3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICByZXMuanNvbih7XG4gICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwi576O5Zu95Yqh5Y2/56ew5Lq65LiN5piv6LCI5Yik55qE562556CB5Y2O5pil6I65OuiusuW+l+W+iOWvuSHnq4vljbPorqnlrZ/mmZroiJ/lm57lm71cIixcbiAgICAgICAgICAgICAgICBwaWM6XCJodHRwOi8vcDMucHN0YXRwLmNvbS9saXN0LzE5MHgxMjQvdG9zLWNuLWktMDAwNC9lMWU5ZWQ2ZjdiYTI0MTg3YmQxZjQ3NjU5ZWQ3N2I3OFwiLFxuICAgICAgICAgICAgICAgIGtpbmQ6XCLop4bpopFcIixcbiAgICAgICAgICAgICAgICBtZWRpYTpcIueHg+aWsOmXu+inhumikVwiLFxuICAgICAgICAgICAgICAgIGZvb3RwaWM6XCJodHRwOi8vcDYtdHQtaXB2Ni5ieXRlaW1nLmNvbS9sYXJnZS9kYzBiMDAwNjU5ZDRiM2QyNzg0MVwiLFxuICAgICAgICAgICAgICAgIG51bW9mY29tbWVudDpcIjI36K+E6K66XCIsXG4gICAgICAgICAgICAgICAgdGltZTpcIjjliIbpkp/liY1cIlxuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCIyMDIw5bm0576O5Zu95L6154qv5Lq65p2D5oql5ZGK772c576O5Zu955ar5oOF5Lil6YeN5aSx5o6n6YW/5oiQ5Lq66Ze05oKy5YmnXCIsXG4gICAgICAgICAgICAgICAgcGljOlwiaHR0cDovL3AxLnBzdGF0cC5jb20vbGlzdC8xOTB4MTI0L3BnYy1pbWFnZS9TU1pmaUVSMmRoWnNUSVwiLFxuICAgICAgICAgICAgICAgIGtpbmQ6XCLlm73pmYVcIixcbiAgICAgICAgICAgICAgICBtZWRpYTpcIuaWsOWNjue9keWuouaIt+err1wiLFxuICAgICAgICAgICAgICAgIGZvb3RwaWM6XCJodHRwOi8vcDI2LXR0LmJ5dGVpbWcuY29tL2xhcmdlL3BnYy1pbWFnZS8wM2Y2MzA3YWU5OTc0NTExOWZhOTU3NDdmOWQ5ZTUyNVwiLFxuICAgICAgICAgICAgICAgIG51bW9mY29tbWVudDpcIjIzMTnor4TorrpcIixcbiAgICAgICAgICAgICAgICB0aW1lOlwiMTHliIbpkp/liY1cIlxuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCLooqvpgZflv5gyNeW5tOeahOWbveS6p+eJh++8jOWboOWwuuW6puWkquWkp+WPquiDveWcqOaXpeacrOS4iuaYoO+8jOaPremcsuecn+WunuS6uuaAp1wiLFxuICAgICAgICAgICAgICAgIHBpYzpcImh0dHA6Ly9wMS5wc3RhdHAuY29tL2xpc3QvdG9zLWNuLWktMDAwNC84N2VjZjlhNTViMzE0ZDhhOTE4MTI5YmNmZjExYzIxNFwiLFxuICAgICAgICAgICAgICAgIGtpbmQ6XCLop4bpopFcIixcbiAgICAgICAgICAgICAgICBtZWRpYTpcIuesrOS4g+aUvuaYoOWOhVwiLFxuICAgICAgICAgICAgICAgIGZvb3RwaWM6XCJodHRwOi8vcDYtdHQtaXB2Ni5ieXRlaW1nLmNvbS9sYXJnZS9kYzBiMDAwNjU5ZDRiM2QyNzg0MVwiLFxuICAgICAgICAgICAgICAgIG51bW9mY29tbWVudDpcIjI16K+E6K66XCIsXG4gICAgICAgICAgICAgICAgdGltZTpcIjE15YiG6ZKf5YmNXCJcblxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwiMjAyMOW5tOe+juWbveS+teeKr+S6uuadg+aKpeWRiu+9nOe+juWbveeWq+aDheS4pemHjeWkseaOp+mFv+aIkOS6uumXtOaCsuWJp1wiLFxuICAgICAgICAgICAgICAgIHBpYzpcImh0dHA6Ly9wMS5wc3RhdHAuY29tL2xpc3QvMTkweDEyNC9wZ2MtaW1hZ2UvU1NaZmlFUjJkaFpzVElcIixcbiAgICAgICAgICAgICAgICBraW5kOlwi5Zu96ZmFXCIsXG4gICAgICAgICAgICAgICAgbWVkaWE6XCLmlrDljY7nvZHlrqLmiLfnq69cIixcbiAgICAgICAgICAgICAgICBmb290cGljOlwiaHR0cDovL3AyNi10dC5ieXRlaW1nLmNvbS9sYXJnZS9wZ2MtaW1hZ2UvMDNmNjMwN2FlOTk3NDUxMTlmYTk1NzQ3ZjlkOWU1MjVcIixcbiAgICAgICAgICAgICAgICBudW1vZmNvbW1lbnQ6XCIyMzE56K+E6K66XCIsXG4gICAgICAgICAgICAgICAgdGltZTpcIjEx5YiG6ZKf5YmNXCJcblxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOlwi576O5Zu95Yqh5Y2/56ew5Lq65LiN5piv6LCI5Yik55qE562556CB5Y2O5pil6I65OuiusuW+l+W+iOWvuSHnq4vljbPorqnlrZ/mmZroiJ/lm57lm71cIixcbiAgICAgICAgICAgICAgICBwaWM6XCJodHRwOi8vcDMucHN0YXRwLmNvbS9saXN0LzE5MHgxMjQvdG9zLWNuLWktMDAwNC9lMWU5ZWQ2ZjdiYTI0MTg3YmQxZjQ3NjU5ZWQ3N2I3OFwiLFxuICAgICAgICAgICAgICAgIGtpbmQ6XCLop4bpopFcIixcbiAgICAgICAgICAgICAgICBtZWRpYTpcIueHg+aWsOmXu+inhumikVwiLFxuICAgICAgICAgICAgICAgIGZvb3RwaWM6XCJodHRwOi8vcDYtdHQtaXB2Ni5ieXRlaW1nLmNvbS9sYXJnZS9kYzBiMDAwNjU5ZDRiM2QyNzg0MVwiLFxuICAgICAgICAgICAgICAgIG51bW9mY29tbWVudDpcIjI36K+E6K66XCIsXG4gICAgICAgICAgICAgICAgdGltZTpcIjjliIbpkp/liY1cIlxuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6XCIyMDIw5bm0576O5Zu95L6154qv5Lq65p2D5oql5ZGK772c576O5Zu955ar5oOF5Lil6YeN5aSx5o6n6YW/5oiQ5Lq66Ze05oKy5YmnXCIsXG4gICAgICAgICAgICAgICAgcGljOlwiaHR0cDovL3AxLnBzdGF0cC5jb20vbGlzdC8xOTB4MTI0L3BnYy1pbWFnZS9TU1pmaUVSMmRoWnNUSVwiLFxuICAgICAgICAgICAgICAgIGtpbmQ6XCLlm73pmYVcIixcbiAgICAgICAgICAgICAgICBtZWRpYTpcIuaWsOWNjue9keWuouaIt+err1wiLFxuICAgICAgICAgICAgICAgIGZvb3RwaWM6XCJodHRwOi8vcDI2LXR0LmJ5dGVpbWcuY29tL2xhcmdlL3BnYy1pbWFnZS8wM2Y2MzA3YWU5OTc0NTExOWZhOTU3NDdmOWQ5ZTUyNVwiLFxuICAgICAgICAgICAgICAgIG51bW9mY29tbWVudDpcIjIzMTnor4TorrpcIixcbiAgICAgICAgICAgICAgICB0aW1lOlwiMTHliIbpkp/liY1cIlxuXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/news.js\n");

/***/ })

/******/ });