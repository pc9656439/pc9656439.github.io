﻿rltPost2.labelSet=[];rltPost2.titleSet=[];rltPost2.urlSet=[];rltPost2.picSet=[];rltPost2.totalPost=0;rltPost2.check=0;rltPost2.drawCheck=[];rltPost2.info="N";if(!Array.indexOf){Array.prototype.indexOf=function(b){for(var a=0;a<this.length;a++){if(this[a]==b){return a}}return -1}}rltPost2.postCollect=function(){var d=jQuery,j=rltPost2.labelSet,c=j.length,b=rltPost2.show+1,f=0,a=[],e,l;rltPost2.titleSet=[];rltPost2.urlSet=[];rltPost2.picSet=[];rltPost2.drawCheck=[];d(".rltPost2_allPost").css("display","block").html("<span id='rp2_host' class='item-control blog-admin'></span><img style='display: block; margin: 20px auto;' src='https://lh5.googleusercontent.com/-EyVZ0f8J0qQ/UCeEG7aa8nI/AAAAAAAADtY/9sXw53XkYXM/s512/indicator-light.gif'/>");l=d("#rp2_host")[0];rltPost2.host=(window.getComputedStyle)?(window.getComputedStyle(l).display=="none")?0:1:(l.currentStyle&&l.currentStyle.display=="none")?0:1;for(e=0;e<c;e++){f+=parseInt(j[e].postNum)}rltPost2.totalPost=f;for(e=0;e<b;e++){h()}function h(){var i=rltPost2.totalPost,m=Math.ceil(Math.random()*i);if(rltPost2.drawCheck.length==i){return}if(rltPost2.drawCheck.indexOf(m)<0){rltPost2.drawCheck.push(m);k(m)}else{h()}}function k(o){var m,q,p;for(m=0;m<c;m++){q=o-j[m].postNum;if(q>0){o=q;continue}else{p="/feeds/posts/summary/-/"+j[m].name+"?start-index="+o+"&max-results=1&alt=json-in-script&callback=?";d.getJSON(p,function(i){g(i)});break}}}function g(p){var s=p.feed.entry[0],m=s.link.length,o,r,n,q;for(o=0;o<m;o++){if(s.link[o].rel=="alternate"){r=s.link[o].href;break}}if(rltPost2.postUrl!=r&&rltPost2.urlSet.indexOf(r)<0){if(rltPost2.urlSet.length==rltPost2.show){rltPost2.info="Y";rltPost2.showPost()}if(rltPost2.urlSet.length<rltPost2.show){rltPost2.urlSet.push(r);rltPost2.titleSet.push(s.title.$t);n=s.media$thumbnail?s.media$thumbnail.url:rltPost2.noImage;q=/(\/\w\d+(-\w\d.*)*)\/([^\/]+)$/;n=n.replace(q,"/s72-c/$3");rltPost2.picSet.push(n)}}else{h()}if(rltPost2.drawCheck.length==rltPost2.totalPost){rltPost2.showPost()}}};rltPost2.showPost=function(){var _0x2695=["\x4B\x20\x24\x3D\x56\x2C\x6C\x3D\x31\x2E\x76\x2E\x4A\x2C\x35\x3D\x31\x2E\x35\x2C\x39\x3D\x31\x2E\x39\x2C\x65\x3D\x22\x77\x22\x2B\x35\x2B\x22\x2D\x68\x22\x2B\x39\x2C\x33\x3D\x22\x22\x2C\x36\x3D\x22\x22\x2C\x64\x3D\x22\x22\x2C\x38\x2C\x37\x2C\x69\x3B\x71\x28\x31\x2E\x64\x3D\x3D\x22\x59\x22\x29\x7B\x36\x3D\x31\x2E\x31\x43\x3B\x36\x3D\x28\x36\x2E\x49\x28\x22\x6B\x22\x29\x3C\x30\x29\x3F\x36\x3A\x22\x3C\x4D\x20\x4E\x3D\x27\x22\x2B\x36\x2B\x22\x27\x2F\x3E\x22\x3B\x64\x3D\x28\x21\x31\x2E\x4F\x26\x26\x21\x24\x28\x22\x2E\x50\x22\x29\x2E\x53\x28\x29\x2E\x33\x28\x29\x29\x3F\x22\x3C\x61\x20\x6A\x3D\x27\x6B\x3A\x2F\x2F\x31\x67\x2E\x31\x6A\x2E\x31\x6B\x2F\x31\x6D\x2F\x31\x6F\x2F\x31\x70\x2D\x31\x77\x2D\x31\x78\x2D\x32\x2D\x31\x44\x2D\x31\x4A\x2E\x33\x27\x20\x74\x3D\x27\x43\x27\x20\x66\x3D\x27\x4C\x3A\x20\x75\x3B\x20\x6D\x2D\x78\x3A\x20\x79\x3B\x20\x51\x3A\x20\x23\x52\x3B\x20\x7A\x2D\x54\x3A\x20\x55\x2C\x20\x48\x2C\x20\x57\x2D\x58\x3B\x20\x7A\x2D\x65\x3A\x20\x5A\x3B\x20\x6D\x2D\x31\x30\x3A\x20\x6F\x20\x6F\x20\x6F\x20\x31\x31\x3B\x20\x31\x32\x2D\x39\x3A\x20\x31\x33\x3B\x20\x31\x34\x2D\x31\x35\x3A\x20\x31\x36\x3B\x20\x31\x37\x2D\x75\x3A\x20\x31\x38\x3B\x27\x20\x37\x3D\x27\u76F8\u95DC\u6587\u7AE0\uFF0B\u4EFB\u610F\u5C3A\u5BF8\u7E2E\u5716\uFF0B\u66F4\u591A\u76F8\u95DC\u6587\u7AE0\x20\x31\x39\x5C\x6E\u7A0B\u5F0F\u8A2D\u8A08\uFF1A\x31\x61\x20\x31\x62\x27\x3E\u24E6\x20\x31\x63\x20\x31\x64\x20\x32\x3C\x2F\x61\x3E\x22\x3A\x22\x22\x7D\x31\x65\x28\x69\x3D\x30\x3B\x69\x3C\x6C\x3B\x69\x2B\x2B\x29\x7B\x38\x3D\x31\x2E\x31\x66\x5B\x69\x5D\x2E\x70\x28\x22\x6B\x3A\x22\x2C\x22\x31\x68\x3A\x22\x29\x3B\x38\x3D\x28\x31\x2E\x31\x69\x3D\x3D\x22\x59\x22\x29\x3F\x38\x2E\x70\x28\x22\x41\x2D\x63\x22\x2C\x65\x2B\x22\x2D\x6E\x22\x29\x3A\x38\x2E\x70\x28\x22\x41\x2D\x63\x22\x2C\x65\x2B\x22\x2D\x73\x22\x29\x3B\x37\x3D\x31\x2E\x31\x6C\x5B\x69\x5D\x3B\x33\x2B\x3D\x22\x3C\x61\x20\x62\x3D\x27\x31\x6E\x27\x20\x37\x3D\x27\x22\x2B\x37\x2B\x22\x27\x20\x66\x3D\x27\x35\x3A\x22\x2B\x28\x35\x2B\x34\x29\x2B\x22\x72\x3B\x27\x20\x6A\x3D\x27\x22\x2B\x31\x2E\x76\x5B\x69\x5D\x2B\x22\x27\x20\x74\x3D\x27\x43\x27\x3E\x22\x3B\x33\x2B\x3D\x22\x3C\x67\x20\x62\x3D\x27\x31\x71\x27\x3E\x3C\x67\x20\x62\x3D\x27\x31\x72\x27\x20\x66\x3D\x27\x31\x73\x3A\x20\x31\x74\x28\x22\x2B\x38\x2B\x22\x29\x31\x75\x2D\x31\x76\x20\x44\x20\x44\x3B\x20\x35\x3A\x22\x2B\x35\x2B\x22\x72\x3B\x20\x39\x3A\x20\x22\x2B\x39\x2B\x22\x72\x3B\x27\x3E\x3C\x2F\x67\x3E\x3C\x2F\x67\x3E\x22\x3B\x33\x2B\x3D\x22\x3C\x45\x20\x62\x3D\x27\x31\x79\x27\x20\x3E\x22\x2B\x37\x2B\x22\x3C\x2F\x45\x3E\x22\x3B\x33\x2B\x3D\x22\x3C\x2F\x61\x3E\x22\x7D\x33\x2B\x3D\x22\x3C\x61\x20\x62\x3D\x27\x31\x7A\x27\x20\x6A\x3D\x27\x31\x41\x3A\x31\x2E\x31\x42\x28\x29\x3B\x27\x20\x66\x3D\x27\x6D\x2D\x78\x3A\x20\x79\x3B\x27\x20\x37\x3D\x27\u66F4\u591A\u76F8\u95DC\u6587\u7AE0\x27\x3E\x22\x2B\x36\x2B\x22\x3C\x2F\x61\x3E\x22\x3B\x24\x28\x22\x2E\x46\x22\x29\x2E\x47\x28\x29\x2E\x33\x28\x33\x29\x2E\x31\x45\x28\x22\x31\x46\x22\x2C\x22\x31\x47\x2D\x31\x48\x22\x29\x2E\x31\x49\x28\x29\x3B\x71\x28\x64\x29\x7B\x24\x28\x22\x2E\x42\x22\x29\x2E\x35\x28\x24\x28\x22\x2E\x46\x22\x29\x2E\x35\x28\x29\x29\x2E\x31\x4B\x28\x64\x29\x7D\x71\x28\x21\x6C\x29\x7B\x24\x28\x22\x2E\x42\x22\x29\x2E\x47\x28\x29\x7D\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x7C\x7C\x68\x74\x6D\x6C\x7C\x7C\x77\x69\x64\x74\x68\x7C\x6D\x6F\x72\x65\x7C\x74\x69\x74\x6C\x65\x7C\x70\x69\x63\x7C\x68\x65\x69\x67\x68\x74\x7C\x7C\x63\x6C\x61\x73\x73\x7C\x7C\x69\x6E\x66\x6F\x7C\x73\x69\x7A\x65\x7C\x73\x74\x79\x6C\x65\x7C\x64\x69\x76\x7C\x7C\x7C\x68\x72\x65\x66\x7C\x68\x74\x74\x70\x7C\x7C\x74\x65\x78\x74\x7C\x7C\x31\x70\x78\x7C\x72\x65\x70\x6C\x61\x63\x65\x7C\x69\x66\x7C\x70\x78\x7C\x7C\x74\x61\x72\x67\x65\x74\x7C\x72\x69\x67\x68\x74\x7C\x75\x72\x6C\x53\x65\x74\x7C\x7C\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x7C\x6E\x6F\x6E\x65\x7C\x66\x6F\x6E\x74\x7C\x73\x37\x32\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x62\x61\x72\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x63\x65\x6E\x74\x65\x72\x7C\x73\x70\x61\x6E\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x61\x6C\x6C\x50\x6F\x73\x74\x7C\x68\x69\x64\x65\x7C\x61\x72\x69\x61\x6C\x7C\x73\x65\x61\x72\x63\x68\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x76\x61\x72\x7C\x66\x6C\x6F\x61\x74\x7C\x69\x6D\x67\x7C\x73\x72\x63\x7C\x68\x6F\x73\x74\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x63\x61\x70\x74\x69\x6F\x6E\x7C\x63\x6F\x6C\x6F\x72\x7C\x63\x63\x63\x7C\x6E\x65\x78\x74\x7C\x66\x61\x6D\x69\x6C\x79\x7C\x68\x65\x6C\x76\x65\x74\x69\x63\x61\x7C\x6A\x51\x75\x65\x72\x79\x7C\x73\x61\x6E\x73\x7C\x73\x65\x72\x69\x66\x7C\x7C\x31\x31\x70\x78\x7C\x73\x68\x61\x64\x6F\x77\x7C\x6C\x61\x76\x65\x6E\x64\x65\x72\x7C\x6C\x69\x6E\x65\x7C\x33\x30\x70\x78\x7C\x76\x65\x72\x74\x69\x63\x61\x6C\x7C\x61\x6C\x69\x67\x6E\x7C\x6D\x69\x64\x64\x6C\x65\x7C\x6D\x61\x72\x67\x69\x6E\x7C\x31\x30\x70\x78\x7C\x56\x32\x7C\x57\x46\x55\x7C\x42\x4C\x4F\x47\x7C\x52\x65\x6C\x61\x74\x65\x64\x7C\x50\x6F\x73\x74\x73\x7C\x66\x6F\x72\x7C\x70\x69\x63\x53\x65\x74\x7C\x77\x77\x77\x7C\x68\x74\x74\x70\x73\x7C\x63\x75\x74\x7C\x77\x66\x75\x62\x6C\x6F\x67\x7C\x63\x6F\x6D\x7C\x74\x69\x74\x6C\x65\x53\x65\x74\x7C\x32\x30\x31\x34\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x70\x6F\x73\x74\x7C\x30\x35\x7C\x62\x6C\x6F\x67\x67\x65\x72\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x70\x69\x63\x46\x72\x61\x6D\x65\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x70\x69\x63\x7C\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x7C\x75\x72\x6C\x7C\x6E\x6F\x7C\x72\x65\x70\x65\x61\x74\x7C\x72\x65\x6C\x61\x74\x65\x64\x7C\x70\x6F\x73\x74\x73\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x74\x69\x74\x6C\x65\x7C\x72\x6C\x74\x50\x6F\x73\x74\x32\x5F\x6D\x6F\x72\x65\x7C\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x7C\x70\x6F\x73\x74\x43\x6F\x6C\x6C\x65\x63\x74\x7C\x6D\x6F\x72\x65\x4C\x6F\x67\x6F\x7C\x63\x75\x73\x74\x6F\x6D\x7C\x63\x73\x73\x7C\x64\x69\x73\x70\x6C\x61\x79\x7C\x74\x61\x62\x6C\x65\x7C\x72\x6F\x77\x7C\x66\x61\x64\x65\x49\x6E\x7C\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x7C\x61\x70\x70\x65\x6E\x64","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0x1a77x1,_0x1a77x2,_0x1a77x3,_0x1a77x4,_0x1a77x5,_0x1a77x6){_0x1a77x5=function(_0x1a77x3){return(_0x1a77x3<_0x1a77x2?_0x2695[4]:_0x1a77x5(parseInt(_0x1a77x3/_0x1a77x2)))+((_0x1a77x3=_0x1a77x3%_0x1a77x2)>35?String[_0x2695[5]](_0x1a77x3+29):_0x1a77x3.toString(36))};if(!_0x2695[4][_0x2695[6]](/^/,String)){while(_0x1a77x3--){_0x1a77x6[_0x1a77x5(_0x1a77x3)]=_0x1a77x4[_0x1a77x3]||_0x1a77x5(_0x1a77x3)}_0x1a77x4=[function(_0x1a77x5){return _0x1a77x6[_0x1a77x5]}];_0x1a77x5=function(){return _0x2695[7]};_0x1a77x3=1}while(_0x1a77x3--){if(_0x1a77x4[_0x1a77x3]){_0x1a77x1=_0x1a77x1[_0x2695[6]](new RegExp(_0x2695[8]+_0x1a77x5(_0x1a77x3)+_0x2695[8],_0x2695[9]),_0x1a77x4[_0x1a77x3])}}return _0x1a77x1}(_0x2695[0],62,109,_0x2695[3][_0x2695[2]](_0x2695[1]),0,{}))};rltPost2.layout=function(){var b=jQuery,a="";a+="<div class='rltPost2_bar'><span class='rltPost2_caption'>"+rltPost2.caption+"</span></div><div style='clear: both;'></div>";a+="<div class='rltPost2_allPost'></div>";b(rltPost2.location).append(a)};rltPost2.init=function(){var g=jQuery,d=rltPost2.labelSet,c=d.length,f="&max-results=0",b=top.location.href,e,a;if(b.search(".html")<0||b.search("/p/")>0){return}for(e=0;e<c;e++){a="/feeds/posts/summary/-/"+d[e].name+"?alt=json-in-script&callback=?"+f;(function(h){g.getJSON(a,function(i){rltPost2.waitFeed(h,i)})})(e)}rltPost2.layout()};rltPost2.waitFeed=function(a,b){rltPost2.labelSet[a].postNum=b.feed.openSearch$totalResults.$t;rltPost2.check++;if(rltPost2.check==rltPost2.labelSet.length){rltPost2.check=0;rltPost2.postCollect()}};(function(){var f=function(){var h=jQuery,i=h("link[rel='service.post']").attr("href").replace("default","summary"),j=h(".post-body").attr("id").replace("post-body-",""),g=i+"/"+j+"?alt=json-in-script&callback=?";h.getJSON(g,function(o){var p=o.entry.category,k=p.length,m=[],n;for(n=0;n<k;n++){m[n]={};m[n].name=p[n].term}rltPost2.labelSet=m;rltPost2.init()})},a=function(g,h){var i=document.createElement("script");if(i.readyState){i.onreadystatechange=function(){if(i.readyState=="loaded"||i.readyState=="complete"){i.onreadystatechange=null;if(h){h()}}}}else{i.onload=function(){if(h){h()}}}i.src=g;document.documentElement.firstChild.appendChild(i)},c=function(){a("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js",f)};if(typeof jQuery==="undefined"){c()}else{var b=jQuery().jquery,e=b.split("."),d="1.08.2";if(e[1]<10){e[1]="0"+e[1]}b=e.join(".");if(b<d){c()}else{f()}}})();
