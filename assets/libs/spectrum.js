(function(e,t,n){function c(e,t,n,r){var i=[];for(var s=0;s<e.length;s++){var o=e[s];if(o){var a=tinycolor(o);var f=a.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";f+=tinycolor.equals(t,o)?" sp-thumb-active":"";var l=a.toString(r||"rgb");var c=u?"background-color:"+a.toRgbString():"filter:"+a.toFilter();i.push('<span title="'+l+'" data-color="'+a.toRgbString()+'" class="'+f+'"><span class="sp-thumb-inner" style="'+c+';" /></span>')}else{var h="sp-clear-display";i.push('<span title="No Color Selected" data-color="" style="background-color:transparent;" class="'+h+'"></span>')}}return"<div class='sp-cf "+n+"'>"+i.join("")+"</div>"}function h(){for(var e=0;e<s.length;e++){if(s[e]){s[e].hide()}}}function p(e,n){var i=t.extend({},r,e);i.callbacks={move:y(i.move,n),change:y(i.change,n),show:y(i.show,n),hide:y(i.hide,n),beforeShow:y(i.beforeShow,n)};return i}function d(r,d){function Tt(){if(m.showPaletteOnly){m.showPalette=true}if(m.palette){I=m.palette.slice(0);q=t.isArray(I[0])?I:[I];R={};for(var e=0;e<q.length;e++){for(var n=0;n<q[e].length;n++){var r=tinycolor(q[e][n]).toRgbString();R[r]=true}}}G.toggleClass("sp-flat",y);G.toggleClass("sp-input-disabled",!m.showInput);G.toggleClass("sp-alpha-enabled",m.showAlpha);G.toggleClass("sp-clear-enabled",xt);G.toggleClass("sp-buttons-disabled",!m.showButtons);G.toggleClass("sp-palette-disabled",!m.showPalette);G.toggleClass("sp-palette-only",m.showPaletteOnly);G.toggleClass("sp-initial-disabled",!m.showInitial);G.addClass(m.className).addClass(m.containerClassName);Xt()}function Nt(){function n(e){if(e.data&&e.data.ignore){Ft(t(this).data("color"));Rt()}else{Ft(t(this).data("color"));Rt();Wt(true);Bt()}return false}if(o){G.find("*:not(input)").attr("unselectable","on")}Tt();if(pt){K.after(dt).hide()}if(!xt){ft.hide()}if(y){K.after(G).hide()}else{var e=m.appendTo==="parent"?K.parent():t(m.appendTo);if(e.length!==1){e=t("body")}e.append(G)}Ct();vt.bind("click.spectrum touchstart.spectrum",function(e){if(!Q){Pt()}e.stopPropagation();if(!t(e.target).is("input")){e.preventDefault()}});if(K.is(":disabled")||m.disabled===true){Kt()}G.click(g);st.change(Dt);st.bind("paste",function(){setTimeout(Dt,1)});st.keydown(function(e){if(e.keyCode==13){Dt()}});at.text(m.cancelText);at.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();Bt("cancel")});ft.attr("title",m.clearText);ft.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();St=true;Rt();if(y){Wt(true)}});lt.text(m.chooseText);lt.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();if(qt()){Wt(true);Bt()}});b(rt,function(e,t,n){F=e/_;St=false;if(n.shiftKey){F=Math.round(F*10)/10}Rt()},Mt,_t);b(et,function(e,t){H=parseFloat(t/O);St=false;if(!m.showAlpha){F=1}Rt()},Mt,_t);b(Y,function(e,t,n){if(!n.shiftKey){X=null}else if(!X){var r=B*k;var i=L-j*L;var s=Math.abs(e-r)>Math.abs(t-i);X=s?"x":"y"}var o=!X||X==="x";var u=!X||X==="y";if(o){B=parseFloat(e/k)}if(u){j=parseFloat((L-t)/L)}St=false;if(!m.showAlpha){F=1}Rt()},Mt,_t);if(!!gt){Ft(gt);Ut();wt=bt||tinycolor(gt).format;kt(gt)}else{Ut()}if(y){Ht()}var r=o?"mousedown.spectrum":"click.spectrum touchstart.spectrum";ot.delegate(".sp-thumb-el",r,n);ut.delegate(".sp-thumb-el:nth-child(1)",r,{ignore:true},n)}function Ct(){if(S&&e.localStorage){try{var n=e.localStorage[S].split(",#");if(n.length>1){delete e.localStorage[S];t.each(n,function(e,t){kt(t)})}}catch(r){}try{U=e.localStorage[S].split(";")}catch(r){}}}function kt(n){if(E){var r=tinycolor(n).toRgbString();if(!R[r]&&t.inArray(r,U)===-1){U.push(r);while(U.length>z){U.shift()}}if(S&&e.localStorage){try{e.localStorage[S]=U.join(";")}catch(i){}}}}function Lt(){var e=[];if(m.showPalette){for(i=0;i<U.length;i++){var t=tinycolor(U[i]).toRgbString();if(!R[t]){e.push(U[i])}}}return e.reverse().slice(0,m.maxSelectionSize)}function At(){var e=It();var n=t.map(q,function(t,n){return c(t,e,"sp-palette-row sp-palette-row-"+n,m.preferredFormat)});Ct();if(U){n.push(c(Lt(),e,"sp-palette-row sp-palette-row-selection",m.preferredFormat))}ot.html(n.join(""))}function Ot(){if(m.showInitial){var e=yt;var t=It();ut.html(c([e,t],t,"sp-palette-row-initial",m.preferredFormat))}}function Mt(){if(L<=0||k<=0||O<=0){Xt()}G.addClass(W);X=null;K.trigger("dragstart.spectrum",[It()])}function _t(){G.removeClass(W);K.trigger("dragstop.spectrum",[It()])}function Dt(){var e=st.val();if((e===null||e==="")&&xt){Ft(null);Wt(true)}else{var t=tinycolor(e);if(t.ok){Ft(t);Wt(true)}else{st.addClass("sp-validation-error")}}}function Pt(){if(C){Bt()}else{Ht()}}function Ht(){var n=t.Event("beforeShow.spectrum");if(C){Xt();return}K.trigger(n,[It()]);if(T.beforeShow(It())===false||n.isDefaultPrevented()){return}h();C=true;t(V).bind("click.spectrum",Bt);t(e).bind("resize.spectrum",N);dt.addClass("sp-active");G.removeClass("sp-hidden");Xt();Ut();yt=It();Ot();T.show(yt);K.trigger("show.spectrum",[yt])}function Bt(n){if(n&&n.type=="click"&&n.button==2){return}if(!C||y){return}C=false;t(V).unbind("click.spectrum",Bt);t(e).unbind("resize.spectrum",N);dt.removeClass("sp-active");G.addClass("sp-hidden");var r=!tinycolor.equals(It(),yt);if(r){if(Et&&n!=="cancel"){Wt(true)}else{jt()}}T.hide(It());K.trigger("hide.spectrum",[It()])}function jt(){Ft(yt,true)}function Ft(e,t){if(tinycolor.equals(e,It())){Ut();return}var n,r;if(!e&&xt){St=true}else{St=false;n=tinycolor(e);r=n.toHsv();H=r.h%360/360;B=r.s;j=r.v;F=r.a}Ut();if(n&&n.ok&&!t){wt=bt||n.format}}function It(e){e=e||{};if(xt&&St){return null}return tinycolor.fromRatio({h:H,s:B,v:j,a:Math.round(F*100)/100},{format:e.format||wt})}function qt(){return!st.hasClass("sp-validation-error")}function Rt(){Ut();T.move(It());K.trigger("move.spectrum",[It()])}function Ut(){st.removeClass("sp-validation-error");zt();var e=tinycolor.fromRatio({h:H,s:1,v:1});Y.css("background-color",e.toHexString());var t=wt;if(F<1&&!(F===0&&t==="name")){if(t==="hex"||t==="hex3"||t==="hex6"||t==="name"){t="rgb"}}var n=It({format:t}),r="";mt.removeClass("sp-clear-display");mt.css("background-color","transparent");if(!n&&xt){mt.addClass("sp-clear-display")}else{var i=n.toHexString(),s=n.toRgbString();if(u||n.alpha===1){mt.css("background-color",s)}else{mt.css("background-color","transparent");mt.css("filter",n.toFilter())}if(m.showAlpha){var a=n.toRgb();a.a=0;var f=tinycolor(a).toRgbString();var l="linear-gradient(left, "+f+", "+i+")";if(o){nt.css("filter",tinycolor(f).toFilter({gradientType:1},i))}else{nt.css("background","-webkit-"+l);nt.css("background","-moz-"+l);nt.css("background","-ms-"+l);nt.css("background","linear-gradient(to right, "+f+", "+i+")")}}r=n.toString(t)}if(m.showInput){st.val(r)}if(m.showPalette){At()}Ot()}function zt(){var e=B;var t=j;if(xt&&St){it.hide();tt.hide();Z.hide()}else{it.show();tt.show();Z.show();var n=e*k;var r=L-t*L;n=Math.max(-A,Math.min(k-A,n-A));r=Math.max(-A,Math.min(L-A,r-A));Z.css({top:r+"px",left:n+"px"});var i=F*_;it.css({left:i-D/2+"px"});var s=H*O;tt.css({top:s-P+"px"})}}function Wt(e){var t=It(),n="",r=!tinycolor.equals(t,yt);if(t){n=t.toString(wt);kt(t)}if(ct){K.val(n)}yt=t;if(e&&r){T.change(t);K.trigger("change",[t])}}function Xt(){k=Y.width();L=Y.height();A=Z.height();M=et.width();O=et.height();P=tt.height();_=rt.width();D=it.width();if(!y){G.css("position","absolute");G.offset(v(G,vt))}zt();if(m.showPalette){At()}K.trigger("reflow.spectrum")}function Vt(){K.show();vt.unbind("click.spectrum touchstart.spectrum");G.remove();dt.remove();s[Qt.id]=null}function $t(e,r){if(e===n){return t.extend({},m)}if(r===n){return m[e]}m[e]=r;Tt()}function Jt(){Q=false;K.attr("disabled",false);vt.removeClass("sp-disabled")}function Kt(){Bt();Q=true;K.attr("disabled",true);vt.addClass("sp-disabled")}var m=p(d,r),y=m.flat,E=m.showSelectionPalette,S=m.localStorageKey,x=m.theme,T=m.callbacks,N=w(Xt,10),C=false,k=0,L=0,A=0,O=0,M=0,_=0,D=0,P=0,H=0,B=0,j=0,F=1,I=[],q=[],R={},U=m.selectionPalette.slice(0),z=m.maxSelectionSize,W="sp-dragging",X=null;var V=r.ownerDocument,J=V.body,K=t(r),Q=false,G=t(l,V).addClass(x),Y=G.find(".sp-color"),Z=G.find(".sp-dragger"),et=G.find(".sp-hue"),tt=G.find(".sp-slider"),nt=G.find(".sp-alpha-inner"),rt=G.find(".sp-alpha"),it=G.find(".sp-alpha-handle"),st=G.find(".sp-input"),ot=G.find(".sp-palette"),ut=G.find(".sp-initial"),at=G.find(".sp-cancel"),ft=G.find(".sp-clear"),lt=G.find(".sp-choose"),ct=K.is("input"),ht=ct&&a&&K.attr("type")==="color",pt=ct&&!y,dt=pt?t(f).addClass(x).addClass(m.className).addClass(m.replacerClassName):t([]),vt=pt?dt:K,mt=dt.find(".sp-preview-inner"),gt=m.color||ct&&K.val(),yt=false,bt=m.preferredFormat,wt=bt,Et=!m.showButtons||m.clickoutFiresChange,St=!gt,xt=m.allowEmpty&&!ht;Nt();var Qt={show:Ht,hide:Bt,toggle:Pt,reflow:Xt,option:$t,enable:Jt,disable:Kt,set:function(e){Ft(e);Wt()},get:It,destroy:Vt,container:G};Qt.id=s.push(Qt)-1;return Qt}function v(e,n){var r=0;var i=e.outerWidth();var s=e.outerHeight();var o=n.outerHeight();var u=e[0].ownerDocument;var a=u.documentElement;var f=a.clientWidth+t(u).scrollLeft();var l=a.clientHeight+t(u).scrollTop();var c=n.offset();c.top+=o+3;c.left-=Math.min(c.left,c.left+i>f&&f>i?Math.abs(c.left+i-f):0);c.top-=Math.min(c.top,c.top+s>l&&l>s?Math.abs(s+o-r):r);return c}function m(){}function g(e){e.stopPropagation()}function y(e,t){var n=Array.prototype.slice;var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}function b(n,r,i,s){function d(e){if(e.stopPropagation){e.stopPropagation()}if(e.preventDefault){e.preventDefault()}e.returnValue=false}function v(e){if(a){if(o&&document.documentMode<9&&!e.button){return g()}var t=e.originalEvent.touches;var i=t?t[0].pageX:e.pageX;var s=t?t[0].pageY:e.pageY;var u=Math.max(0,Math.min(i-f.left,c));var p=Math.max(0,Math.min(s-f.top,l));if(h){d(e)}r.apply(n,[u,p,e])}}function m(e){var r=e.which?e.which==3:e.button==2;var s=e.originalEvent.touches;if(!r&&!a){if(i.apply(n,arguments)!==false){a=true;l=t(n).height();c=t(n).width();f=t(n).offset();t(u).bind(p);t(u.body).addClass("sp-dragging");if(!h){v(e)}d(e)}}}function g(){if(a){t(u).unbind(p);t(u.body).removeClass("sp-dragging");s.apply(n,arguments)}a=false}r=r||function(){};i=i||function(){};s=s||function(){};var u=n.ownerDocument||document;var a=false;var f={};var l=0;var c=0;var h="ontouchstart"in e;var p={};p["selectstart"]=d;p["dragstart"]=d;p["touchmove mousemove"]=v;p["touchend mouseup"]=g;t(n).bind("touchstart mousedown",m)}function w(e,t,n){var r;return function(){var i=this,s=arguments;var o=function(){r=null;e.apply(i,s)};if(n)clearTimeout(r);if(n||!r)r=setTimeout(o,t)}}function E(){if(e.console){if(Function.prototype.bind)E=Function.prototype.bind.call(console.log,console);else E=function(){Function.prototype.apply.call(console.log,console,arguments)};E.apply(this,arguments)}}var r={beforeShow:m,move:m,change:m,show:m,hide:m,color:false,flat:false,showInput:false,allowEmpty:false,showButtons:true,clickoutFiresChange:false,showInitial:false,showPalette:false,showPaletteOnly:false,showSelectionPalette:true,localStorageKey:false,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",clearText:"Clear Color Selection",preferredFormat:false,className:"",containerClassName:"",replacerClassName:"",showAlpha:false,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:false},s=[],o=!!/msie/i.exec(e.navigator.userAgent),u=function(){function e(e,t){return!!~(""+e).indexOf(t)}var t=document.createElement("div");var n=t.style;n.cssText="background-color:rgba(0,0,0,.5)";return e(n.backgroundColor,"rgba")||e(n.backgroundColor,"hsla")}(),a=function(){var e=t("<input type='color' value='!' />")[0];return e.type==="color"&&e.value!=="!"}(),f=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","</div>"].join(""),l=function(){var e="";if(o){for(var t=1;t<=6;t++){e+="<div class='sp-"+t+"'></div>"}}return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",e,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();var S="spectrum.id";t.fn.spectrum=function(e,n){if(typeof e=="string"){var r=this;var i=Array.prototype.slice.call(arguments,1);this.each(function(){var n=s[t(this).data(S)];if(n){var o=n[e];if(!o){throw new Error("Spectrum: no such method: '"+e+"'")}if(e=="get"){r=n.get()}else if(e=="container"){r=n.container}else if(e=="option"){r=n.option.apply(n,i)}else if(e=="destroy"){n.destroy();t(this).removeData(S)}else{o.apply(n,i)}}});return r}return this.spectrum("destroy").each(function(){var n=t.extend({},e,t(this).data());var r=d(this,n);t(this).data(S,r.id)})};t.fn.spectrum.load=true;t.fn.spectrum.loadOpts={};t.fn.spectrum.draggable=b;t.fn.spectrum.defaults=r;t.spectrum={};t.spectrum.localization={};t.spectrum.palettes={};t.fn.spectrum.processNativeColorInputs=function(){if(!a){t("input[type=color]").spectrum({preferredFormat:"hex6"})}};(function(){function f(e,t){e=e?e:"";t=t||{};if(typeof e=="object"&&e.hasOwnProperty("_tc_id")){return e}var n=l(e);var i=n.r,o=n.g,u=n.b,a=n.a,c=s(100*a)/100,p=t.format||n.format;if(i<1){i=s(i)}if(o<1){o=s(o)}if(u<1){u=s(u)}return{ok:n.ok,format:p,_tc_id:r++,alpha:a,getAlpha:function(){return a},setAlpha:function(e){a=E(e);c=s(100*a)/100},toHsv:function(){var e=d(i,o,u);return{h:e.h*360,s:e.s,v:e.v,a:a}},toHsvString:function(){var e=d(i,o,u);var t=s(e.h*360),n=s(e.s*100),r=s(e.v*100);return a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+c+")"},toHsl:function(){var e=h(i,o,u);return{h:e.h*360,s:e.s,l:e.l,a:a}},toHslString:function(){var e=h(i,o,u);var t=s(e.h*360),n=s(e.s*100),r=s(e.l*100);return a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+c+")"},toHex:function(e){return m(i,o,u,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(){return g(i,o,u,a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:s(i),g:s(o),b:s(u),a:a}},toRgbString:function(){return a==1?"rgb("+s(i)+", "+s(o)+", "+s(u)+")":"rgba("+s(i)+", "+s(o)+", "+s(u)+", "+c+")"},toPercentageRgb:function(){return{r:s(S(i,255)*100)+"%",g:s(S(o,255)*100)+"%",b:s(S(u,255)*100)+"%",a:a}},toPercentageRgbString:function(){return a==1?"rgb("+s(S(i,255)*100)+"%, "+s(S(o,255)*100)+"%, "+s(S(u,255)*100)+"%)":"rgba("+s(S(i,255)*100)+"%, "+s(S(o,255)*100)+"%, "+s(S(u,255)*100)+"%, "+c+")"},toName:function(){if(a===0){return"transparent"}return b[m(i,o,u,true)]||false},toFilter:function(e){var n="#"+g(i,o,u,a);var r=n;var s=t&&t.gradientType?"GradientType = 1, ":"";if(e){var l=f(e);r=l.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+n+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this.format;var n=false;var r=!t&&a<1&&a>0;var i=r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="name");if(e==="rgb"){n=this.toRgbString()}if(e==="prgb"){n=this.toPercentageRgbString()}if(e==="hex"||e==="hex6"){n=this.toHexString()}if(e==="hex3"){n=this.toHexString(true)}if(e==="hex8"){n=this.toHex8String()}if(e==="name"){n=this.toName()}if(e==="hsl"){n=this.toHslString()}if(e==="hsv"){n=this.toHsvString()}if(i){return this.toRgbString()}return n||this.toHexString()}}}function l(e){var t={r:0,g:0,b:0};var n=1;var r=false;var i=false;if(typeof e=="string"){e=_(e)}if(typeof e=="object"){if(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")){t=c(e.r,e.g,e.b);r=true;i=String(e.r).substr(-1)==="%"?"prgb":"rgb"}else if(e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")){e.s=L(e.s);e.v=L(e.v);t=v(e.h,e.s,e.v);r=true;i="hsv"}else if(e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")){e.s=L(e.s);e.l=L(e.l);t=p(e.h,e.s,e.l);r=true;i="hsl"}if(e.hasOwnProperty("a")){n=e.a}}n=E(n);return{ok:r,format:e.format||i,r:o(255,u(t.r,0)),g:o(255,u(t.g,0)),b:o(255,u(t.b,0)),a:n}}function c(e,t,n){return{r:S(e,255)*255,g:S(t,255)*255,b:S(n,255)*255}}function h(e,t,n){e=S(e,255);t=S(t,255);n=S(n,255);var r=u(e,t,n),i=o(e,t,n);var s,a,f=(r+i)/2;if(r==i){s=a=0}else{var l=r-i;a=f>.5?l/(2-r-i):l/(r+i);switch(r){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4;break}s/=6}return{h:s,s:a,l:f}}function p(e,t,n){function o(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<1/6)return e+(t-e)*6*n;if(n<1/2)return t;if(n<2/3)return e+(t-e)*(2/3-n)*6;return e}var r,i,s;e=S(e,360);t=S(t,100);n=S(n,100);if(t===0){r=i=s=n}else{var u=n<.5?n*(1+t):n+t-n*t;var a=2*n-u;r=o(a,u,e+1/3);i=o(a,u,e);s=o(a,u,e-1/3)}return{r:r*255,g:i*255,b:s*255}}function d(e,t,n){e=S(e,255);t=S(t,255);n=S(n,255);var r=u(e,t,n),i=o(e,t,n);var s,a,f=r;var l=r-i;a=r===0?0:l/r;if(r==i){s=0}else{switch(r){case e:s=(t-n)/l+(t<n?6:0);break;case t:s=(n-e)/l+2;break;case n:s=(e-t)/l+4;break}s/=6}return{h:s,s:a,v:f}}function v(e,t,n){e=S(e,360)*6;t=S(t,100);n=S(n,100);var r=i.floor(e),s=e-r,o=n*(1-t),u=n*(1-s*t),a=n*(1-(1-s)*t),f=r%6,l=[n,u,o,o,a,n][f],c=[a,n,n,u,o,o][f],h=[o,o,a,n,n,u][f];return{r:l*255,g:c*255,b:h*255}}function m(e,t,n,r){var i=[k(s(e).toString(16)),k(s(t).toString(16)),k(s(n).toString(16))];if(r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)){return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)}return i.join("")}function g(e,t,n,r){var i=[k(A(r)),k(s(e).toString(16)),k(s(t).toString(16)),k(s(n).toString(16))];return i.join("")}function w(e){var t={};for(var n in e){if(e.hasOwnProperty(n)){t[e[n]]=n}}return t}function E(e){e=parseFloat(e);if(isNaN(e)||e<0||e>1){e=1}return e}function S(e,t){if(N(e)){e="100%"}var n=C(e);e=o(t,u(0,parseFloat(e)));if(n){e=parseInt(e*t,10)/100}if(i.abs(e-t)<1e-6){return 1}return e%t/parseFloat(t)}function x(e){return o(1,u(0,e))}function T(e){return parseInt(e,16)}function N(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function C(e){return typeof e==="string"&&e.indexOf("%")!=-1}function k(e){return e.length==1?"0"+e:""+e}function L(e){if(e<=1){e=e*100+"%"}return e}function A(e){return Math.round(parseFloat(e)*255).toString(16)}function O(e){return T(e)/255}function _(e){e=e.replace(t,"").replace(n,"").toLowerCase();var r=false;if(y[e]){e=y[e];r=true}else if(e=="transparent"){return{r:0,g:0,b:0,a:0,format:"name"}}var i;if(i=M.rgb.exec(e)){return{r:i[1],g:i[2],b:i[3]}}if(i=M.rgba.exec(e)){return{r:i[1],g:i[2],b:i[3],a:i[4]}}if(i=M.hsl.exec(e)){return{h:i[1],s:i[2],l:i[3]}}if(i=M.hsla.exec(e)){return{h:i[1],s:i[2],l:i[3],a:i[4]}}if(i=M.hsv.exec(e)){return{h:i[1],s:i[2],v:i[3]}}if(i=M.hex8.exec(e)){return{a:O(i[1]),r:T(i[2]),g:T(i[3]),b:T(i[4]),format:r?"name":"hex8"}}if(i=M.hex6.exec(e)){return{r:T(i[1]),g:T(i[2]),b:T(i[3]),format:r?"name":"hex"}}if(i=M.hex3.exec(e)){return{r:T(i[1]+""+i[1]),g:T(i[2]+""+i[2]),b:T(i[3]+""+i[3]),format:r?"name":"hex"}}return false}var t=/^[\s,#]+/,n=/\s+$/,r=0,i=Math,s=i.round,o=i.min,u=i.max,a=i.random;f.fromRatio=function(e,t){if(typeof e=="object"){var n={};for(var r in e){if(e.hasOwnProperty(r)){if(r==="a"){n[r]=e[r]}else{n[r]=L(e[r])}}}e=n}return f(e,t)};f.equals=function(e,t){if(!e||!t){return false}return f(e).toRgbString()==f(t).toRgbString()};f.random=function(){return f.fromRatio({r:a(),g:a(),b:a()})};f.desaturate=function(e,t){t=t===0?0:t||10;var n=f(e).toHsl();n.s-=t/100;n.s=x(n.s);return f(n)};f.saturate=function(e,t){t=t===0?0:t||10;var n=f(e).toHsl();n.s+=t/100;n.s=x(n.s);return f(n)};f.greyscale=function(e){return f.desaturate(e,100)};f.lighten=function(e,t){t=t===0?0:t||10;var n=f(e).toHsl();n.l+=t/100;n.l=x(n.l);return f(n)};f.darken=function(e,t){t=t===0?0:t||10;var n=f(e).toHsl();n.l-=t/100;n.l=x(n.l);return f(n)};f.complement=function(e){var t=f(e).toHsl();t.h=(t.h+180)%360;return f(t)};f.triad=function(e){var t=f(e).toHsl();var n=t.h;return[f(e),f({h:(n+120)%360,s:t.s,l:t.l}),f({h:(n+240)%360,s:t.s,l:t.l})]};f.tetrad=function(e){var t=f(e).toHsl();var n=t.h;return[f(e),f({h:(n+90)%360,s:t.s,l:t.l}),f({h:(n+180)%360,s:t.s,l:t.l}),f({h:(n+270)%360,s:t.s,l:t.l})]};f.splitcomplement=function(e){var t=f(e).toHsl();var n=t.h;return[f(e),f({h:(n+72)%360,s:t.s,l:t.l}),f({h:(n+216)%360,s:t.s,l:t.l})]};f.analogous=function(e,t,n){t=t||6;n=n||30;var r=f(e).toHsl();var i=360/n;var s=[f(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;){r.h=(r.h+i)%360;s.push(f(r))}return s};f.monochromatic=function(e,t){t=t||6;var n=f(e).toHsv();var r=n.h,i=n.s,s=n.v;var o=[];var u=1/t;while(t--){o.push(f({h:r,s:i,v:s}));s=(s+u)%1}return o};f.readability=function(e,t){var n=f(e).toRgb();var r=f(t).toRgb();var i=(n.r*299+n.g*587+n.b*114)/1e3;var s=(r.r*299+r.g*587+r.b*114)/1e3;var o=Math.max(n.r,r.r)-Math.min(n.r,r.r)+Math.max(n.g,r.g)-Math.min(n.g,r.g)+Math.max(n.b,r.b)-Math.min(n.b,r.b);return{brightness:Math.abs(i-s),color:o}};f.readable=function(e,t){var n=f.readability(e,t);return n.brightness>125&&n.color>500};f.mostReadable=function(e,t){var n=null;var r=0;var i=false;for(var s=0;s<t.length;s++){var o=f.readability(e,t[s]);var u=o.brightness>125&&o.color>500;var a=3*(o.brightness/125)+o.color/500;if(u&&!i||u&&i&&a>r||!u&&!i&&a>r){i=u;r=a;n=f(t[s])}}return n};var y=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var b=f.hexNames=w(y);var M=function(){var e="[-\\+]?\\d+%?";var t="[-\\+]?\\d*\\.\\d+%?";var n="(?:"+t+")|(?:"+e+")";var r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";var i="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();e.tinycolor=f})();t(function(){if(t.fn.spectrum.load){t.fn.spectrum.processNativeColorInputs()}})})(window,jQuery)