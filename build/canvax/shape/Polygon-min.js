define("canvax/shape/Polygon",["canvax/core/Base","canvax/shape/BrokenLine"],function(a,b){var c=function(b,c){var d=this;if(b=a.checkOpt(b),"clone"!==c){var e=b.context.pointList[0],f=b.context.pointList[b.context.pointList.length-1];b.context.smooth?b.context.pointList.unshift(f):("dashed"==b.context.lineType||"dotted"==b.context.lineType)&&b.context.pointList.push(e)}arguments.callee.superclass.constructor.apply(this,arguments),"clone"!==c&&b.context.smooth&&f,d._drawTypeOnly=null,d.type="polygon"};return a.creatClass(c,b,{draw:function(a,b){if(b.fillStyle&&("dashed"==b.lineType||"dotted"==b.lineType)){var c=b.pointList;a.save(),a.beginPath(),a.moveTo(c[0][0],c[0][1]);for(var d=1,e=c.length;e>d;d++)a.lineTo(c[d][0],c[d][1]);a.closePath(),a.restore(),a.fill(),this._drawTypeOnly="stroke"}a.save(),a.beginPath(),this._draw(a,b),a.closePath(),a.restore()}}),c});