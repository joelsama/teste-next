(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(9414),u=t(4651),i=t(7426),l={};function f(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=(0,u.useRouter)(),s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),E=r(m,2),w=E[0],L=E[1],k=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=L&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,L,b,t,o]);var C={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,y,_,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof b?b:o&&o.locale,N=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,M,o&&o.locales,o&&o.domainLocales);C.href=N||(0,c.addBasePath)((0,c.addLocale)(p,M,o&&o.defaultLocale))}return a.default.cloneElement(n,C)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},2940:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),o=t(9163),a=t(1664);function c(){return(0,r.jsxs)("div",{className:"joel",children:[(0,r.jsx)(u,{children:"Joel"}),(0,r.jsx)(a.default,{href:"/",children:"home"})]})}var u=o.ZP.h1.withConfig({displayName:"joel__Title",componentId:"sc-102zple-0"})(["font-size:50px;color:blue;"])},4640:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joel",function(){return t(2940)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=4640,e(e.s=n);var n}));var n=e.O();_N_E=n}]);