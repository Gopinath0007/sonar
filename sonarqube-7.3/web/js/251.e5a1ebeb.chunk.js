(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{548:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(534),r=n(570),l=n(535),s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function c(e){return a.createElement(r,s({className:l("modal",{"modal-medium":e.medium,"modal-large":e.large}),isOpen:!0,overlayClassName:"modal-overlay"},e))}r.setAppElement("#content")},569:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var a=n(534),r=n(529),l=n(62),s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c={year:"numeric",month:"short",day:"2-digit"},o={year:"numeric",month:"long",day:"numeric"};function i(e){var t=e.children,n=e.date,i=e.long;return a.createElement(r.FormattedDate,s({value:Object(l.e)(n)},i?o:c),t)}},603:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(534),r=n(614),l=n(608),s=n(613),c=n(701);function o(e){var t,n=e.className,o=e.query,i=e.size;switch(o.toLowerCase()){case"bug":case"bugs":case"new_bugs":t=a.createElement(r.a,{size:i});break;case"vulnerability":case"vulnerabilities":case"new_vulnerabilities":t=a.createElement(l.a,{size:i});break;case"code_smell":case"code_smells":case"new_code_smells":t=a.createElement(s.a,{size:i});break;case"security_hotspot":case"security_hotspots":t=a.createElement(c.a,{size:i})}return t?n?a.createElement("span",{className:n},t):t:null}},608:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("path",{d:"M10.8 5H6V3.9a2.28 2.28 0 0 1 2-2.5 2.22 2.22 0 0 1 1.8 1.2.48.48 0 0 0 .7.2.48.48 0 0 0 .2-.7A3 3 0 0 0 8 .4a3.34 3.34 0 0 0-3 3.5v1.2a2.16 2.16 0 0 0-2 2.1v4.4a2.22 2.22 0 0 0 2.2 2.2h5.6a2.22 2.22 0 0 0 2.2-2.2V7.2A2.22 2.22 0 0 0 10.8 5zm-2.2 5.5v1.2H7.4v-1.2a1.66 1.66 0 0 1-1.1-1.6A1.75 1.75 0 0 1 8 7.2a1.71 1.71 0 0 1 .6 3.3z",style:{fill:l}}))}},612:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(534),r=n(700),l=n(7);function s(e){var t=e.className,n=e.severity;return n?a.createElement("span",{className:t},a.createElement(r.a,{className:"little-spacer-right",severity:n}),Object(l.l)("severity",n)):null}},613:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("path",{d:"M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-.5 5.5h.9v.9h-.9v-.9zm-3.8.2c-.1 0-.2-.1-.2-.2 0-.4.1-1.2.6-2S5.3 4.2 5.6 4c.2 0 .3 0 .3.1l1.3 2.3c0 .1 0 .2-.1.2-.1.2-.2.3-.3.5-.1.2-.2.4-.2.5 0 .1-.1.2-.2.2l-2.7-.1zM9.9 12c-.3.2-1.1.5-2 .5-.9 0-1.7-.3-2-.5-.1 0-.1-.2-.1-.3l1.3-2.3c0-.1.1-.1.2-.1.2.1.3.1.5.1s.4 0 .5-.1c.1 0 .2 0 .2.1l1.3 2.3c.2.2.2.3.1.3zm2.5-4.1L9.7 8c-.1 0-.2-.1-.2-.2 0-.2-.1-.4-.2-.5 0-.1-.2-.3-.3-.4-.1 0-.1-.1-.1-.2l1.3-2.3c.1-.1.2-.1.3-.1.3.2 1 .7 1.5 1.5s.6 1.6.6 2c0 0-.1.1-.2.1z",style:{fill:l}}))}},614:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("path",{d:"M11 9h1.3l.5.8.8-.5-.8-1.3H11v-.3l2-2.3V3h-1v2l-1 1.2V5c-.1-.8-.7-1.5-1.4-1.9L11 1.8l-.7-.7-1.8 1.6-1.8-1.6-.7.7 1.5 1.3C6.7 3.5 6.1 4.2 6 5v1.1L5 5V3H4v2.3l2 2.3V8H4.2l-.7 1.2.8.5.4-.7H6v.3l-2 1.9V14h1v-2.4l1-1C6 12 7.1 13 8.4 13h.8c.7 0 1.4-.3 1.8-.9.3-.4.3-.9.2-1.4l.9.9V14h1v-2.8l-2-1.9V9zm-2 2H8V6h1v5z",style:{fill:l}}))}},634:function(e,t,n){var a=n(687),r=n(628),l=n(658),s=n(667),c=l(function(e,t){return s(e)?a(e,r(t,1,s,!0)):[]});e.exports=c},655:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("path",{d:"M4.303 5.36a.94.94 0 0 0-.944-.945.94.94 0 0 0-.944.944c0 .524.42.944.944.944a.94.94 0 0 0 .944-.944zm7.866 4.246a.95.95 0 0 1-.273.663l-3.62 3.627a.95.95 0 0 1-1.334 0L1.671 8.618C1.295 8.249 1 7.534 1 7.01V3.944A.95.95 0 0 1 1.944 3H5.01c.523 0 1.238.295 1.614.67l5.271 5.265a.98.98 0 0 1 .273.67zm2.831 0a.95.95 0 0 1-.273.663l-3.62 3.627a.98.98 0 0 1-.67.273c-.384 0-.575-.177-.826-.435l3.465-3.465a.95.95 0 0 0 0-1.334L7.805 3.67C7.429 3.295 6.714 3 6.19 3h1.651c.524 0 1.239.295 1.615.67l5.271 5.265a.98.98 0 0 1 .273.67z",style:{fill:l}}))}},682:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("g",{transform:"matrix(0.823497,0,0,0.823497,1.47008,1.4122)"},a.createElement("path",{d:"M13.501,11.429C13.501,11.191 13.418,10.989 13.251,10.822L11.394,8.965C11.227,8.798 11.025,8.715 10.787,8.715C10.537,8.715 10.323,8.81 10.144,9.001C10.162,9.019 10.219,9.074 10.314,9.166C10.409,9.258 10.473,9.322 10.506,9.358C10.539,9.394 10.583,9.451 10.64,9.528C10.697,9.605 10.735,9.681 10.756,9.756C10.777,9.831 10.787,9.913 10.787,10.002C10.787,10.24 10.704,10.442 10.537,10.609C10.37,10.776 10.168,10.859 9.93,10.859C9.841,10.859 9.759,10.849 9.684,10.828C9.609,10.807 9.533,10.769 9.456,10.712C9.379,10.655 9.322,10.611 9.286,10.578C9.25,10.545 9.186,10.481 9.094,10.386C9.002,10.291 8.947,10.234 8.929,10.216C8.732,10.401 8.634,10.618 8.634,10.868C8.634,11.106 8.717,11.308 8.884,11.475L10.723,13.323C10.884,13.484 11.086,13.564 11.33,13.564C11.568,13.564 11.77,13.487 11.937,13.332L13.25,12.028C13.417,11.861 13.5,11.662 13.5,11.43L13.501,11.429ZM7.224,5.134C7.224,4.896 7.141,4.694 6.974,4.527L5.135,2.679C4.968,2.512 4.766,2.429 4.528,2.429C4.296,2.429 4.094,2.509 3.921,2.67L2.608,3.974C2.441,4.141 2.358,4.34 2.358,4.572C2.358,4.81 2.441,5.012 2.608,5.179L4.465,7.036C4.626,7.197 4.828,7.277 5.072,7.277C5.322,7.277 5.536,7.185 5.715,7C5.697,6.982 5.64,6.927 5.545,6.835C5.45,6.743 5.386,6.679 5.353,6.643C5.32,6.607 5.276,6.55 5.219,6.473C5.162,6.396 5.124,6.32 5.103,6.245C5.082,6.17 5.072,6.088 5.072,5.999C5.072,5.761 5.155,5.559 5.322,5.392C5.489,5.225 5.691,5.142 5.929,5.142C6.018,5.142 6.1,5.152 6.175,5.173C6.25,5.194 6.326,5.232 6.403,5.289C6.48,5.346 6.537,5.39 6.573,5.423C6.609,5.456 6.673,5.52 6.765,5.615C6.857,5.71 6.912,5.767 6.93,5.785C7.127,5.6 7.225,5.383 7.225,5.133L7.224,5.134ZM15.215,11.429C15.215,12.143 14.962,12.747 14.456,13.242L13.143,14.546C12.649,15.04 12.045,15.287 11.33,15.287C10.61,15.287 10.003,15.034 9.509,14.528L7.67,12.68C7.176,12.186 6.929,11.582 6.929,10.867C6.929,10.135 7.191,9.513 7.715,9.001L6.929,8.215C6.417,8.739 5.798,9.001 5.072,9.001C4.358,9.001 3.751,8.751 3.251,8.251L1.394,6.394C0.894,5.894 0.644,5.287 0.644,4.573C0.644,3.859 0.897,3.255 1.403,2.76L2.716,1.456C3.21,0.962 3.814,0.715 4.529,0.715C5.249,0.715 5.856,0.968 6.35,1.474L8.189,3.322C8.683,3.816 8.93,4.42 8.93,5.135C8.93,5.867 8.668,6.489 8.144,7.001L8.93,7.787C9.442,7.263 10.061,7.001 10.787,7.001C11.501,7.001 12.108,7.251 12.608,7.751L14.465,9.608C14.965,10.108 15.215,10.715 15.215,11.429L15.215,11.429Z",style:{fill:l}})))}},699:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(534),r=n(535),l=n(563),s=n(655);n(750);function c(e){var t=e.allowUpdate,n=void 0!==t&&t,c=e.className,o=e.tags;return a.createElement("span",{className:r("tags-list",c),title:o.join(", ")},a.createElement(s.a,{className:"text-middle"}),a.createElement("span",{className:"text-ellipsis text-middle"},o.join(", ")),n&&a.createElement(l.a,{className:"text-middle"}))}},700:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(534),r=n(537),l=n(542),s={blocker:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M8 14c-3.311 0-6-2.689-6-6s2.689-6 6-6 6 2.689 6 6-2.689 6-6 6zM7 9h2V4H7v5zm0 3h2v-2H7v2z",style:{fill:l.red,fillRule:"nonzero"}}))},critical:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 10V7.414l1.893 1.893c.13.124.282.216.457.261a1.006 1.006 0 0 0 1.176-.591 1.01 1.01 0 0 0 .01-.729 1.052 1.052 0 0 0-.229-.355c-1.212-1.212-2.394-2.456-3.638-3.636a1.073 1.073 0 0 0-.169-.123 1.05 1.05 0 0 0-.448-.133h-.104a1.053 1.053 0 0 0-.493.16 1.212 1.212 0 0 0-.162.132C6.08 5.505 4.836 6.687 3.656 7.932a.994.994 0 0 0-.051 1.275c.208.271.548.42.888.389.198-.019.378-.098.535-.218.041-.035.04-.034.079-.071L7 7.414V12h2z",style:{fill:l.red,fillRule:"nonzero"}}))},major:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm.08 2.903c.071.008.14.019.208.039.138.042.26.114.37.205 1.244 1.146 2.426 2.357 3.639 3.536.1.103.181.218.234.352a1.01 1.01 0 0 1 .001.728 1.002 1.002 0 0 1-1.169.609 1.042 1.042 0 0 1-.46-.255L8 7.295l-2.903 2.822c-.039.036-.039.036-.08.07a1.002 1.002 0 0 1-1.604-.947c.032-.196.122-.37.253-.519C4.847 7.51 6.09 6.362 7.303 5.183c.052-.048.106-.093.167-.131a1.041 1.041 0 0 1 .61-.149z",style:{fill:l.red}}))},minor:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 6.586V4H7v4.586L5.107 6.693a1.178 1.178 0 0 0-.165-.134 1.041 1.041 0 0 0-.662-.152 1 1 0 0 0-.587 1.7c1.212 1.212 2.394 2.456 3.638 3.636.094.08.195.146.311.191a1.008 1.008 0 0 0 1.065-.227c1.213-1.212 2.457-2.394 3.637-3.639a.994.994 0 0 0 .051-1.275 1.012 1.012 0 0 0-.888-.389 1.041 1.041 0 0 0-.535.218c-.04.034-.04.034-.079.071L9 8.586z",style:{fill:l.lightGreen}}))},info:function(e){var t=e.className,n=e.size;return a.createElement(r.a,{className:t,size:n},a.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 5H7v5h2V7zm0-3H7v2h2V4z",style:{fill:l.blue}}))}};function c(e){if(!e.severity)return null;var t=e.severity.toLowerCase(),n=s[t];return n?a.createElement(n,{className:e.className}):null}},701:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("g",{style:{fill:l}},a.createElement("path",{d:"M10.238 2.416c-0.432-0.895-1.259-1.504-2.202-1.504-1.386 0-2.521 1.318-2.521 2.927v5.481",fill:"none",stroke:l,strokeLinecap:"round",strokeWidth:"1.1429"}),a.createElement("path",{d:"M8.537 10.372v1.199h-1.099v-1.199c-0.638-0.228-1.099-0.832-1.099-1.546 0-0.909 0.739-1.649 1.648-1.649s1.649 0.74 1.649 1.649c0 0.715-0.461 1.32-1.099 1.546zM10.734 4.979h-5.494c-1.21 0-2.199 0.989-2.199 2.197v4.395c0 1.21 0.989 2.199 2.199 2.199h5.494c1.209 0 2.197-0.989 2.197-2.199v-4.395c0-1.209-0.989-2.197-2.197-2.197z"}),a.createElement("path",{d:"M4.030 6.352h6.923v6.923h-6.923z"}),a.createElement("path",{d:"M7.504 10.283c0-0.423 0.048-0.757 0.144-1.002s0.251-0.457 0.465-0.637c0.215-0.18 0.377-0.344 0.489-0.493s0.167-0.313 0.167-0.493c0-0.438-0.189-0.656-0.565-0.656-0.174 0-0.314 0.064-0.421 0.191s-0.164 0.3-0.17 0.518h-1.469c0.006-0.58 0.189-1.031 0.548-1.354s0.864-0.485 1.513-0.485c0.646 0 1.147 0.149 1.501 0.447s0.532 0.723 0.532 1.274c0 0.241-0.048 0.459-0.144 0.656s-0.249 0.398-0.46 0.604l-0.5 0.465c-0.142 0.136-0.241 0.276-0.296 0.42s-0.086 0.325-0.091 0.545h-1.243zM7.326 11.604c0-0.215 0.078-0.39 0.233-0.528s0.349-0.207 0.58-0.207c0.232 0 0.425 0.068 0.58 0.207s0.233 0.313 0.233 0.528-0.078 0.39-0.233 0.528c-0.155 0.138-0.349 0.207-0.58 0.207s-0.425-0.068-0.58-0.207c-0.155-0.138-0.233-0.313-0.233-0.528z",fill:"#fff"})))}},750:function(e,t,n){var a=n(820);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(539)(a,r);a.locals&&(e.exports=a.locals)},785:function(e,t,n){"use strict";var a,r=n(634),l=n.n(r),s=n(534),c=n(535),o=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSelect=function(e){e.stopPropagation(),e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onSelectChange(t.props.element,!t.props.selected)},t.handleHover=function(){return t.props.onHover(t.props.element)},t}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.disabled,a=c("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-invisible":n}),r=c({active:this.props.active,disabled:n});return s.createElement("li",null,s.createElement("a",{className:r,href:"#",onClick:this.handleSelect,onFocus:this.handleHover,onMouseOver:this.handleHover},s.createElement("i",{className:a})," ",this.props.custom&&"+ ",this.props.renderLabel(this.props.element)))},t}(s.PureComponent),u=n(584),m=n(7),d=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),p=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.handleSelectChange=function(e,t){t?n.onSelectItem(e):n.onUnselectItem(e)},n.handleSearchChange=function(e){n.onSearchQuery(n.props.validateSearchInput(e))},n.handleElementHover=function(e){n.setState(function(t,a){return{activeIdx:n.getAllElements(a,t).indexOf(e)}})},n.handleKeyboard=function(e){switch(e.keyCode){case 40:e.stopPropagation(),e.preventDefault(),n.setState(n.selectNextElement);break;case 38:e.stopPropagation(),e.preventDefault(),n.setState(n.selectPreviousElement);break;case 37:case 39:e.stopPropagation();break;case 13:n.state.activeIdx>=0&&n.toggleSelect(n.getAllElements(n.props,n.state)[n.state.activeIdx])}},n.onSearchQuery=function(e){n.setState({activeIdx:0,loading:!0,query:e}),n.props.onSearch(e).then(n.stopLoading,n.stopLoading)},n.onSelectItem=function(e){n.isNewElement(e,n.props)&&n.onSearchQuery(""),n.props.onSelect(e)},n.onUnselectItem=function(e){return n.props.onUnselect(e)},n.isNewElement=function(e,t){var n=t.selectedElements,a=t.elements;return e.length>0&&-1===n.indexOf(e)&&-1===a.indexOf(e)},n.updateSelectedElements=function(e){n.setState(function(t){return t.query?{selectedElements:e.filterSelected(t.query,e.selectedElements)}:{selectedElements:e.selectedElements.slice()}})},n.updateUnselectedElements=function(e){n.setState(function(t){return 0===e.listSize?{unselectedElements:l()(e.elements,e.selectedElements)}:e.listSize<t.selectedElements.length?{unselectedElements:[]}:{unselectedElements:l()(e.elements,e.selectedElements).slice(0,e.listSize-t.selectedElements.length)}})},n.getAllElements=function(e,t){return n.isNewElement(t.query,e)?t.selectedElements.concat(t.unselectedElements,[t.query]):t.selectedElements.concat(t.unselectedElements)},n.setElementActive=function(e){return n.setState({activeIdx:e})},n.selectNextElement=function(e,t){var a=e.activeIdx,r=n.getAllElements(t,e);return a<0||a>=r.length-1?{activeIdx:0}:{activeIdx:a+1}},n.selectPreviousElement=function(e,t){var a=e.activeIdx,r=n.getAllElements(t,e);return a<=0?{activeIdx:r.length-1}:{activeIdx:a-1}},n.stopLoading=function(){n.mounted&&n.setState({loading:!1})},n.toggleSelect=function(e){-1===n.props.selectedElements.indexOf(e)?n.onSelectItem(e):n.onUnselectItem(e)},n.state={activeIdx:0,loading:!0,query:"",selectedElements:[],unselectedElements:[]},n}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.onSearchQuery(""),this.updateSelectedElements(this.props),this.updateUnselectedElements(this.props),this.container&&this.container.addEventListener("keydown",this.handleKeyboard,!0)},t.prototype.componentWillReceiveProps=function(e){if(this.props.elements!==e.elements||this.props.selectedElements!==e.selectedElements){this.updateSelectedElements(e),this.updateUnselectedElements(e);var t=this.getAllElements(e,this.state).length;this.state.activeIdx>=t&&this.setState({activeIdx:t-1})}},t.prototype.componentDidUpdate=function(){this.searchInput&&this.searchInput.focus()},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.container&&this.container.removeEventListener("keydown",this.handleKeyboard)},t.prototype.render=function(){var e=this,t=this.props,n=t.allowSelection,a=void 0===n||n,r=t.allowNewElements,l=void 0===r||r,o=t.footerNode,d=void 0===o?"":o,p=this.props.renderLabel,h=this.state,f=h.query,v=h.activeIdx,E=h.selectedElements,C=h.unselectedElements,y=this.getAllElements(this.props,this.state)[v],g=l&&this.isNewElement(f,this.props),z=0===this.props.listSize,b=c("menu",{"menu-vertically-limited":z,"spacer-top":z,"with-top-separator":z,"with-bottom-separator":Boolean(d)});return s.createElement("div",{className:"multi-select",ref:function(t){return e.container=t}},s.createElement("div",{className:"menu-search"},s.createElement(u.a,{autoFocus:!0,className:"little-spacer-top",loading:this.state.loading,onChange:this.handleSearchChange,placeholder:this.props.placeholder,value:f})),s.createElement("ul",{className:b},E.length>0&&E.map(function(t){return s.createElement(i,{active:y===t,element:t,key:t,onHover:e.handleElementHover,onSelectChange:e.handleSelectChange,renderLabel:p,selected:!0})}),C.length>0&&C.map(function(t){return s.createElement(i,{active:y===t,disabled:!a,element:t,key:t,onHover:e.handleElementHover,onSelectChange:e.handleSelectChange,renderLabel:p})}),g&&s.createElement(i,{active:y===f,custom:!0,element:f,key:f,onHover:this.handleElementHover,onSelectChange:this.handleSelectChange,renderLabel:p}),!g&&E.length<1&&C.length<1&&s.createElement("li",{className:"spacer-left"},Object(m.m)("no_results_for_x",f))),d)},t.defaultProps={filterSelected:function(e,t){return t.filter(function(t){return t.includes(e)})},listSize:0,renderLabel:function(e){return e},validateSearchInput:function(e){return e}},t}(s.PureComponent);t.a=p},819:function(e,t,n){"use strict";var a,r=n(534),l=n(547),s=n(7),c=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.handleClick=function(e){e.preventDefault(),window.open(Object(l.o)(),"Markdown","height=300,width=600,scrollbars=1,resizable=1")},t.prototype.render=function(){return r.createElement("div",{className:"markdown-tips"},r.createElement("a",{className:"little-spacer-right",href:"#",onClick:this.handleClick},Object(s.l)("markdown.helplink")),":",r.createElement("span",{className:"spacer-left"},"*",Object(s.l)("bold"),"*"),r.createElement("span",{className:"spacer-left"},"``",Object(s.l)("code"),"``"),r.createElement("span",{className:"spacer-left"},"* ",Object(s.l)("bulleted_point")))},t}(r.PureComponent);t.a=o},820:function(e,t,n){(e.exports=n(540)(!1)).push([e.i,".tags-list{white-space:nowrap}.tags-list i:before{font-size:12px}.tags-list span{display:inline-block;vertical-align:middle;text-align:left;max-width:220px;padding-left:4px;padding-right:4px}",""])},821:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(534),r=n(785),l=n(7);n(750);function s(e){return a.createElement(r.a,{elements:e.tags,listSize:e.listSize,onSearch:e.onSearch,onSelect:e.onSelect,onUnselect:e.onUnselect,placeholder:Object(l.l)("search.search_for_tags"),selectedElements:e.selectedTags,validateSearchInput:c})}function c(e){return e.toLowerCase().replace(/[^-a-z0-9+#.]/gi,"")}},955:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(534),r=n(537);function l(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,s=e.size;return a.createElement(r.a,{className:t,size:s},a.createElement("path",{d:"M13.957 2.333a.536.536 0 0 1-.12.596l-4.2 4.202v6.323a.552.552 0 0 1-.333.503.632.632 0 0 1-.213.043.51.51 0 0 1-.384-.162l-2.181-2.182a.542.542 0 0 1-.162-.383V7.13L2.162 2.929a.536.536 0 0 1-.12-.596A.552.552 0 0 1 2.547 2h10.908c.222 0 .418.137.503.333z",style:{fill:l}}))}}}]);
//# sourceMappingURL=251.e5a1ebeb.chunk.js.map