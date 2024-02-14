function createUnityInstance(e,r,t){function n(e,t){if(!n.aborted&&r.showBanner)return"error"==t&&(n.aborted=!0),r.showBanner(e,t);switch(t){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function o(e){var r=e.reason||e.error,t=r?r.toString():e.message||e.reason||"",n=r&&r.stack?r.stack.toString():"";n.startsWith(t)&&(n=n.substring(t.length)),(t+="\n"+n.trim())&&d.stackTraceRegExp&&d.stackTraceRegExp.test(t)&&s(t,e.filename||r&&(r.fileName||r.sourceURL)||"",e.lineno||r&&(r.lineNumber||r.line)||0)}function a(e){e.preventDefault()}function s(e,r,t){d.startupErrorHandler?d.startupErrorHandler(e,r,t):d.errorHandler&&d.errorHandler(e,r,t)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),-1!=e.indexOf("UnknownError")||-1!=e.indexOf("Program terminated with exit(0)")||s.didShowErrorMessage)||(-1!=(e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),s.didShowErrorMessage=!0)}function i(e,r){if("symbolsUrl"!=e){(l=d.downloadProgress[e])||(l=d.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof r||"progress"!=r.type&&"load"!=r.type||(l.started||(l.started=!0,l.lengthComputable=r.lengthComputable,l.total=r.total),l.loaded=r.loaded,"load"==r.type&&(l.finished=!0));var n=0,o=0,a=0,s=0,i=0;for(var e in d.downloadProgress){var l;if(!(l=d.downloadProgress[e]).started)return 0;a++,l.lengthComputable?(n+=l.loaded,o+=l.total,s++):l.finished||i++}t(.9*(a?(a-i-(o?s*(o-n)/o:0))/a:0))}}t=t||function(){};var d={canvas:e,webglContextAttributes:{preserveDrawingBuffer:!1},cacheControl:function(e){return e==d.dataUrl?"must-revalidate":"no-store"},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,r){var t=window.setInterval(e,r);return this.intervals[t]=!0,t},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?n('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+d.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):n('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+d.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(var l in r)d[l]=r[l];d.streamingAssetsUrl=new URL(d.streamingAssetsUrl,document.URL).href;var u=d.disabledCanvasEvents.slice();u.forEach(function(r){e.addEventListener(r,a)}),window.addEventListener("error",o),window.addEventListener("unhandledrejection",o);var c="",h="";document.addEventListener("webkitfullscreenchange",function(r){document.webkitCurrentFullScreenElement===e?e.style.width&&(c=e.style.width,h=e.style.height,e.style.width="100%",e.style.height="100%"):c&&(e.style.width=c,e.style.height=h,c="",h="")});var f={Module:d,SetFullscreen:function(){return d.SetFullscreen?d.SetFullscreen.apply(d,arguments):void d.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){return d.SendMessage?d.SendMessage.apply(d,arguments):void d.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(r,t){d.shouldQuit=!0,d.onQuit=r,u.forEach(function(r){e.removeEventListener(r,a)}),window.removeEventListener("error",o),window.removeEventListener("unhandledrejection",o)})}};return d.SystemInfo=function(){function e(e,r,t){return(e=RegExp(e,"i").exec(r))&&e[t]}for(var r,t,n,o,a,s,i=navigator.userAgent+" ",d=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]],l=0;l<d.length;++l)if(t=e(d[l][0]+"[/ ](.*?)[ \\)]",i,1)){r=d[l][1];break}"Safari"==r&&(t=e("Version/(.*?) ",i,1)),"Internet Explorer"==r&&(t=e("rv:(.*?)\\)? ",i,1)||t);for(var u=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_.]+)","macOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],c=0;c<u.length;++c)if(o=e(u[c][0],i,1)){n=u[c][1],o=o.replace(/_/g,".");break}o={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[o]||o,(a=document.createElement("canvas"))&&(gl=a.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=a&&a.getContext("webgl"))&&(glVersion=1),gl&&(s=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937)));var h="undefined"!=typeof SharedArrayBuffer,f="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:i.trim(),browser:r||"Unknown browser",browserVersion:t||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:n||"Unknown OS",osVersion:o||"Unknown OS Version",gpu:s||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:h,hasWasm:f,hasWasmThreads:!1}}(),d.abortHandler=function(e){return s(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),d.XMLHttpRequest=function(){function e(e){console.log("[UnityCache] "+e)}function r(e){return r.link=r.link||document.createElement("a"),r.link.href=e,r.link.href}function t(){function r(r){if(void 0===t.database)for(t.database=r,t.database||e("indexedDB database could not be opened");t.queue.length;){var n=t.queue.shift();t.database?t.execute.apply(t,n.arguments):"function"==typeof n.onerror&&n.onerror(new Error("operation cancelled"))}}var t=this;t.queue=[];try{var n=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,o=setTimeout(function(){void 0===t.database&&r(null)},2e3),d=n.open(a.name);d.onupgradeneeded=function(e){var r=e.target.result.createObjectStore(s.name,{keyPath:"url"});["version","company","product","updated","revalidated","accessed"].forEach(function(e){r.createIndex(e,e)})},d.onsuccess=function(e){clearTimeout(o);var t=e.target.result;t.version<a.version?(t.close(),function(){var e=n.open(a.name,a.version);e.onupgradeneeded=function(e){var r=e.target.result;r.objectStoreNames.contains(i.name)||r.createObjectStore(i.name)},e.onsuccess=function(e){r(e.target.result)},e.onerror=function(){r(null)}}()):r(t)},d.onerror=function(){clearTimeout(o),r(null)}}catch(e){clearTimeout(o),r(null)}}function n(e,r,t,n,o){var a={url:e,version:s.version,company:r,product:t,updated:n,revalidated:n,accessed:n,responseHeaders:{},xhr:{}};return o&&(["Last-Modified","ETag"].forEach(function(e){a.responseHeaders[e]=o.getResponseHeader(e)}),["responseURL","status","statusText","response"].forEach(function(e){a.xhr[e]=o[e]})),a}function o(r){this.cache={enabled:!1},r&&(this.cache.control=r.cacheControl,this.cache.company=r.companyName,this.cache.product=r.productName),this.xhr=new XMLHttpRequest(r),this.xhr.addEventListener("load",function(){var r=this.xhr,t=this.cache;t.enabled&&!t.revalidated&&(304==r.status?(t.result.revalidated=t.result.accessed,t.revalidated=!0,d.execute(s.name,"put",[t.result]),e("'"+t.result.url+"' successfully revalidated and served from the indexedDB cache")):200==r.status?(t.result=n(t.result.url,t.company,t.product,t.result.accessed,r),t.revalidated=!0,d.execute(s.name,"put",[t.result],function(r){e("'"+t.result.url+"' successfully downloaded and stored in the indexedDB cache")},function(r){e("'"+t.result.url+"' successfully downloaded but not stored in the indexedDB cache due to the error: "+r)})):e("'"+t.result.url+"' request failed with status: "+r.status+" "+r.statusText))}.bind(this))}var a={name:"UnityCache",version:2},s={name:"XMLHttpRequest",version:1},i={name:"WebAssembly",version:1};t.prototype.execute=function(e,r,t,n,o){if(this.database)try{var a=this.database.transaction([e],-1!=["put","delete","clear"].indexOf(r)?"readwrite":"readonly").objectStore(e);"openKeyCursor"==r&&(a=a.index(t[0]),t=t.slice(1));var s=a[r].apply(a,t);"function"==typeof n&&(s.onsuccess=function(e){n(e.target.result)}),s.onerror=o}catch(e){"function"==typeof o&&o(e)}else void 0===this.database?this.queue.push({arguments:arguments,onerror:o}):"function"==typeof o&&o(new Error("indexedDB access denied"))};var d=new t;o.prototype.send=function(r){var t=this.xhr,n=this.cache,o=arguments;return n.enabled=n.enabled&&"arraybuffer"==t.responseType&&!r,n.enabled?void d.execute(s.name,"get",[n.result.url],function(r){if(r&&r.version==s.version)if(n.result=r,n.result.accessed=Date.now(),"immutable"==n.control)n.revalidated=!0,d.execute(s.name,"put",[n.result]),t.dispatchEvent(new Event("load")),e("'"+n.result.url+"' served from the indexedDB cache without revalidation");else if(function(e){var r=window.location.href.match(/^[a-z]+:\/\/[^\/]+/);return!r||e.lastIndexOf(r[0],0)}(n.result.url)&&(n.result.responseHeaders["Last-Modified"]||n.result.responseHeaders.ETag)){var a=new XMLHttpRequest;a.open("HEAD",n.result.url),a.onload=function(){n.revalidated=["Last-Modified","ETag"].every(function(e){return!n.result.responseHeaders[e]||n.result.responseHeaders[e]==a.getResponseHeader(e)}),n.revalidated?(n.result.revalidated=n.result.accessed,d.execute(s.name,"put",[n.result]),t.dispatchEvent(new Event("load")),e("'"+n.result.url+"' successfully revalidated and served from the indexedDB cache")):t.send.apply(t,o)},a.send()}else n.result.responseHeaders["Last-Modified"]?(t.setRequestHeader("If-Modified-Since",n.result.responseHeaders["Last-Modified"]),t.setRequestHeader("Cache-Control","no-cache")):n.result.responseHeaders.ETag&&(t.setRequestHeader("If-None-Match",n.result.responseHeaders.ETag),t.setRequestHeader("Cache-Control","no-cache")),t.send.apply(t,o);else t.send.apply(t,o)},function(e){t.send.apply(t,o)}):t.send.apply(t,o)},o.prototype.open=function(e,t,o,a,s){return this.cache.result=n(r(t),this.cache.company,this.cache.product,Date.now()),this.cache.enabled=-1!=["must-revalidate","immutable"].indexOf(this.cache.control)&&"GET"==e&&this.cache.result.url.match("^https?://")&&(void 0===o||o)&&void 0===a&&void 0===s,this.cache.revalidated=!1,this.xhr.open.apply(this.xhr,arguments)},o.prototype.setRequestHeader=function(e,r){return this.cache.enabled=!1,this.xhr.setRequestHeader.apply(this.xhr,arguments)};var l=new XMLHttpRequest;for(var u in l)o.prototype.hasOwnProperty(u)||function(e){Object.defineProperty(o.prototype,e,"function"==typeof l[e]?{value:function(){return this.xhr[e].apply(this.xhr,arguments)}}:{get:function(){return this.cache.revalidated&&this.cache.result.xhr.hasOwnProperty(e)?this.cache.result.xhr[e]:this.xhr[e]},set:function(r){this.xhr[e]=r}})}(u);return o}(),new Promise(function(e,r){d.SystemInfo.hasWebGL?d.SystemInfo.hasWasm?(d.startupErrorHandler=r,t(0),d.postRun.push(function(){t(1),delete d.startupErrorHandler,e(f)}),function(){new Promise(function(e,r){var t=document.createElement("script");t.src=d.frameworkUrl,t.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var r=[["br","br"],["gz","gzip"]];for(var o in r){var a=r[o];if(d.frameworkUrl.endsWith("."+a[0])){var s="Unable to parse "+d.frameworkUrl+"!";if("file:"==location.protocol)return void n(s+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error");if(s+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+a[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==a[0]&&"http:"==location.protocol){var i=-1!=["localhost","127.0.0.1"].indexOf(location.hostname)?"":"Migrate your server to use HTTPS.";s=/Firefox/.test(navigator.userAgent)?"Unable to parse "+d.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+i+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+d.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'}return void n(s,"error")}}n("Unable to parse "+d.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var l=unityFramework;unityFramework=null,t.onload=null,e(l)},t.onerror=function(e){n("Unable to load file "+d.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(t),d.deinitializers.push(function(){document.body.removeChild(t)})}).then(function(e){e(d)});var e=function(e){return new Promise(function(r,t){i(e);var o=d.companyName&&d.productName?new d.XMLHttpRequest({companyName:d.companyName,productName:d.productName,cacheControl:d.cacheControl(d[e])}):new XMLHttpRequest;o.open("GET",d[e]),o.responseType="arraybuffer",o.addEventListener("progress",function(r){i(e,r)}),o.addEventListener("load",function(t){i(e,t),r(new Uint8Array(o.response))}),o.addEventListener("error",function(r){var t="Failed to download file "+d[e];"file:"==location.protocol?n(t+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(t)}),o.send()})}("dataUrl");d.preRun.push(function(){d.addRunDependency("dataUrl"),e.then(function(e){var r=new DataView(e.buffer,e.byteOffset,e.byteLength),t=0,n="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(t,t+n.length))==n)throw"unknown data format";t+=n.length;var o=r.getUint32(t,!0);for(t+=4;t<o;){var a=r.getUint32(t,!0);t+=4;var s=r.getUint32(t,!0);t+=4;var i=r.getUint32(t,!0);t+=4;var l=String.fromCharCode.apply(null,e.subarray(t,t+i));t+=i;for(var u=0,c=l.indexOf("/",u)+1;c>0;u=c,c=l.indexOf("/",u)+1)d.FS_createPath(l.substring(0,u),l.substring(u,c-1),!0,!0);d.FS_createDataFile(l,null,e.subarray(a,a+s),!0,!0,!0)}d.removeRunDependency("dataUrl")})})}()):r("Your browser does not support WebAssembly."):r("Your browser does not support WebGL.")})}