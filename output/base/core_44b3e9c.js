!function(i){var e={};e.version="1.0.0",e.name="MapAds";var n=+new Date,o=(n+"").slice(-3);e.getId=function(){return o++},e.emptyFn=function(){},e.inherit=function(i,e){if(2!=arguments.length)throw new Error("must assign subClass");for(var n=0,o=arguments.length;o>n;n++)if("function"!=typeof arguments[n])throw new Error("all class must be function");var r=new e;for(var t in r)i.prototype[t]||(i.prototype[t]=r[t]);i.prototype.constructor=i};var r=function(){var i={},e=navigator.userAgent,n=/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i,o=/ip(hone|ad|od)/i;e||(e=""),e=e.toLowerCase(),i.isAndroid=e.indexOf("android")>-1,i.isIos=o.test(e),i.isWeixin=e.indexOf("micromessenger")>-1,i.isWeibo=e.indexOf("weibo")>-1,i.isMobile=n.test(e)||i.isNull,i.isPc=!i.isMobile;var r=e.indexOf("baidumap_andr")>-1||e.indexOf("baidumap_ipho")>-1||e.indexOf("baidumap_ipad")>-1;return i.isNative=!i.isWeibo&&!i.isWeixin&&r,i}();e.plat=r,i[e.name]=e}(window);