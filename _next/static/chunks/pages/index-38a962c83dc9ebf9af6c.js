(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(9414),i=t(4651),u=t(7426),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=(0,i.useRouter)(),f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),E=r(m,2),w=E[0],k=E[1],C=a.default.useCallback((function(e){w(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,w]);(0,a.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,k,y,t,o]);var L={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:i}))}(e,o,d,p,h,g,b,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof y?y:o&&o.locale,x=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,M,o&&o.locales,o&&o.domainLocales);L.href=x||(0,c.addBasePath)((0,c.addLocale)(p,M,o&&o.defaultLocale))}return a.default.cloneElement(n,L)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},7406:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),o=t(9163),a=t(1664),c=t(7294),i=o.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-15ggiv8-0"})(["font-size:50px;color:",";"],(function(e){return e.theme.colors.primary})),u=o.ZP.div.withConfig({displayName:"pages__MinhaDiv",componentId:"sc-15ggiv8-1"})(["background-color:#ccc;"]);function l(){var e=(0,c.useState)(1),n=e[0],t=e[1];return(0,r.jsxs)(u,{children:[(0,r.jsx)(i,{children:" My page blabla"})," ",(0,r.jsx)(a.default,{href:"/joel",children:"Joel"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{children:n}),(0,r.jsx)("button",{onClick:function(){t(n+1)},children:"++"})]})}},3685:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7406)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);