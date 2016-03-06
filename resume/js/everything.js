$("ul.nav li a:first").addClass('youarehere');

// changes nav link on scroll

  var sections = $('section');
  var nav = $('nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {

      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('ul.nav li a').removeClass('youarehere');
        sections.removeClass('youarehere');

        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('youarehere');
      }
    });
  });

// changes nav link on click

  nav.find('ul.nav li a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
  });


// adds fading in animation on scroll

  $('.about').addClass('animated fadeIn animateTiming');
  $('.portfolio .row').addClass('notVisible');
  $('.contact .row').addClass('notVisible');

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 150 && scroll <= 200) {
        $(".portfolio .row").addClass("animated fadeIn animateTiming");
    }

    else if (scroll >= 201) { /* FIX fade in for contacts */
      $(".portfolio .row").addClass("animated fadeIn animateTiming");
      $(".contact .row").addClass("animated fadeIn animateTiming2");
    }
});



/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-htmlimports-inlinesvg-json-objectfit-overflowscrolling-rgba-scrollsnappoints-svg-svgclippaths-svgfilters-printshiv-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),E.push((o?"":"no-")+s.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?w.className.baseVal=t:w.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&s(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function u(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?c(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function m(e,n,r,o){var i,s,l,f,c="modernizr",u=a("div"),d=p();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:c+(r+1),u.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+c,(d.fake?d:u).appendChild(i),d.appendChild(u),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),u.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(d)),s=n(u,e),d.fake?(d.parentNode.removeChild(d),w.style.overflow=f,w.offsetHeight):u.parentNode.removeChild(u),!!s}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),m("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,o,i){function s(){u&&(delete k.style,delete k.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=h(e,o);if(!r(c,"undefined"))return c}for(var u,d,p,m,v,g=["modernizr","tspan"];!k.style;)u=!0,k.modElem=a(g.shift()),k.style=k.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=k.style[m],f(m,"-")&&(m=l(m)),k.style[m]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{k.style[m]=o}catch(y){}if(k.style[m]!=v)return s(),"pfx"==t?m:!0}return s(),!1}function g(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+P.join(a+" ")+a).split(" "),u(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var E=[],S=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr,Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var w=t.documentElement,b="svg"===w.nodeName.toLowerCase();b||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=T.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=T.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),T.elements=n+" "+e,f(t)}function i(e){var t=b[e[C]];return t||(t={},w++,e[C]=w,b[w]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():S.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||E.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return T.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(T,t.frag)}function f(e){e||(e=t);var r=i(e);return!T.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(u(t)));return a}function u(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(x+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+x+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof s[x]&&s.add(x),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,f=[],u=l.length,p=Array(u);u--;)p[u]=l[u];for(;s=p.pop();)if(!s.disabled&&_.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(u=0;a>u;u++)p.push(i[u]);try{f.push(s.cssText)}catch(m){}}f=d(f.reverse().join("")),o=c(e),r=n(e,f)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",y=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,S=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,C="_html5shiv",w=0,b={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var T={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:f,createElement:a,createDocumentFragment:s,addElements:o};e.html5=T,f(t);var _=/^$|\b(?:all|print)\b/,x="html5shiv",N=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();T.type+=" print",T.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=T)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var T={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(T.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var _;!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=s}),s("htmlimports","import"in a("link"));var x="Moz O ms Webkit",N=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=N;var j=function(t){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=prefixes[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=j;var P=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=P;var F={elem:a("modernizr")};Modernizr._q.push(function(){delete F.elem});var k={style:F.elem.style};Modernizr._q.unshift(function(){delete k.style}),C.testAllProps=g;var O=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=l(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),C.testAllProps=y,Modernizr.addTest("overflowscrolling",y("overflowScrolling","touch",!0)),Modernizr.addTest("scrollsnappoints",y("scrollSnapType")),o(),i(E),delete C.addTest,delete C.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);


// because object-fit doesn't work on IE/edge
// replaces img as the background image
if (!Modernizr.objectfit ) {
  $('.post__image-container').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }
  });
}
