KISSY.add("canvax/shape/Line",function(a,b,c){var d=function(a){var b=this;this.type="line",this.drawTypeOnly="stroke",a=c.checkOpt(a),b._context={lineType:a.context.lineType||null,xStart:a.context.xStart||0,yStart:a.context.yStart||0,xEnd:a.context.xEnd||0,yEnd:a.context.yEnd||0,dashLength:a.context.dashLength||5},arguments.callee.superclass.constructor.apply(this,arguments)};return c.creatClass(d,b,{draw:function(a,b){b.lineType&&"solid"!=b.lineType?("dashed"==b.lineType||"dotted"==b.lineType)&&this.dashedLineTo(a,b.xStart,b.yStart,b.xEnd,b.yEnd,b.dashLength):(a.moveTo(parseInt(b.xStart),parseInt(b.yStart)),a.lineTo(parseInt(b.xEnd),parseInt(b.yEnd)))},getRect:function(a){var b=a.lineWidth||1,a=a?a:this.context;return{x:Math.min(a.xStart,a.xEnd)-b,y:Math.min(a.yStart,a.yEnd)-b,width:Math.abs(a.xStart-a.xEnd)+b,height:Math.abs(a.yStart-a.yEnd)+b}}}),d},{requires:["canvax/display/Shape","canvax/core/Base"]});