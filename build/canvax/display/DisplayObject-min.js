KISSY.add("canvax/display/DisplayObject",function(a,b,c,d,e,f,g){var h=function(a){arguments.callee.superclass.constructor.apply(this,arguments);var b=this;a=e.checkOpt(a),b.id=a.id||null,b._transform=null,b._heartBeatNum=0,b.stage=null,b.parent=null,b._eventEnabled=!1,b.dragEnabled=!1,b._createContext(a);var c=e.createId(b.type);null==b.id&&(b.id=c),b.init.apply(b,arguments),this._updateTransform()};return e.creatClass(h,b,{init:function(){},_createContext:function(a){var b=this;b.context=null;var c=e.copy({width:0,height:0,x:0,y:0,scaleX:1,scaleY:1,scaleOrigin:{x:0,y:0},rotation:0,rotateOrigin:{x:0,y:0},visible:!0,cursor:"default",fillStyle:null,lineCap:null,lineJoin:null,lineWidth:null,miterLimit:null,shadowBlur:null,shadowColor:null,shadowOffsetX:null,shadowOffsetY:null,strokeStyle:"#000000",globalAlpha:1,font:null,textAlign:"left",textBaseline:"top",arcScaleX_:null,arcScaleY_:null,lineScale_:null,globalCompositeOperation:null},a.context,!0);b._context&&(c=_.extend(c,b._context)),b._notWatch=!1,c.$owner=b,c.$watch=function(a,b,c){var d=["x","y","scaleX","scaleY","rotation","scaleOrigin","rotateOrigin, lineWidth"];_.indexOf(d,a)>=0&&this.$owner._updateTransform(),this.$owner._notWatch||(this.$owner.$watch&&this.$owner.$watch(a,b,c),this.$owner.heartBeat({convertType:"context",shape:this.$owner,name:a,value:b,preValue:c}))},b.context=g(c)},clone:function(a){var b={id:this.id,context:this.context.$model};this.img&&(b.img=this.img);var c=new this.constructor(b);return a||(c.id=e.createId(c.type)),c},heartBeat:function(a){var b=this.getStage();b&&(this._heartBeatNum++,b.heartBeat&&b.heartBeat(a))},getCurrentWidth:function(){return Math.abs(this.context.width*this.context.scaleX)},getCurrentHeight:function(){return Math.abs(this.context.height*this.context.scaleY)},getStage:function(){if(this.stage)return this.stage;var a=this;if("stage"!=a.type){for(;a.parent&&(a=a.parent,"stage"!=a.type););if("stage"!==a.type)return!1}return this.stage=a,a},localToGlobal:function(a,b){!a&&(a=new d(0,0));var e=this.getConcatenatedMatrix(b);if(null==e)return d(0,0);var f=new c(1,0,0,1,a.x,a.y);return f.concat(e),new d(f.tx,f.ty)},globalToLocal:function(a,b){!a&&(a=new d(0,0));var e=this.getConcatenatedMatrix(b);if(null==e)return new d(0,0);e.invert();var f=new c(1,0,0,1,a.x,a.y);return f.concat(e),new d(f.tx,f.ty)},localToTarget:function(a,b){var c=localToGlobal(a);return b.globalToLocal(c)},getConcatenatedMatrix:function(a){for(var b=new c,d=this;null!=d&&(b.concat(d._transform),!(!d.parent||a&&d.parent&&d.parent==a||d.parent&&"stage"==d.parent.type));d=d.parent);return b},setEventEnable:function(a){return _.isBoolean(a)?(this._eventEnabled=a,!0):!1},getIndex:function(){return this.parent?_.indexOf(this.parent.children,this):void 0},toBack:function(a){if(this.parent){var b=this.getIndex(),c=0;if(_.isNumber(a)){if(0==a)return;c=b-a}var d=this.parent.children.splice(b,1)[0];0>c&&(c=0),this.parent.addChildAt(d,c)}},toFront:function(a){if(this.parent){var b=this.getIndex(),c=this.parent.children.length,d=c;if(_.isNumber(a)){if(0==a)return;d=b+a+1}var e=this.parent.children.splice(b,1)[0];d>c&&(d=c),this.parent.addChildAt(e,d-1)}},_transformHander:function(a){var b=this._transform;b||(b=this._updateTransform()),a.transform.apply(a,b.toArray())},_updateTransform:function(){var a=new c;if(a.identity(),1!==this.context.scaleX||1!==this.context.scaleY){var b=new d(this.context.scaleOrigin);(b.x||b.y)&&a.translate(-b.x,-b.y),a.scale(this.context.scaleX,this.context.scaleY),(b.x||b.y)&&a.translate(b.x,b.y)}var e=this.context.rotation;if(e){var b=new d(this.context.rotateOrigin);(b.x||b.y)&&a.translate(-b.x,-b.y),a.rotate(e%360*Math.PI/180),(b.x||b.y)&&a.translate(b.x,b.y)}var f=Math.round(this.context.x),g=Math.round(this.context.y);return parseInt(this.context.lineWidth)%2==1&&this.context.strokeStyle&&(f+=.5,g+=.5),(0!=f||0!=g)&&a.translate(f,g),this._transform=a,a},getRect:function(a){return{x:0,y:0,width:a.width,height:a.height}},getChildInPoint:function(a){var b;"stage"!=this.type&&this.parent&&"stage"!=this.parent.type&&(a=this.parent.globalToLocal(a));var c=a.x,d=a.y;if(this._notWatch=!0,this._transform){var e=this._transform.clone().invert(),g=[c,d];e.mulVector(g,[c,d]),c=g[0],d=g[1]}var h=this._rect=this.getRect(this.context);return h?(!this.context.width&&h.width&&(this.context.width=h.width),!this.context.height&&h.height&&(this.context.height=h.height),h.width&&h.height?(b=c>=h.x&&c<=h.x+h.width&&d>=h.y&&d<=h.y+h.height?f.isInside(this,c,d):!1,this._notWatch=!1,b):!1):!1},_render:function(a){!this.context.visible||this.context.globalAlpha<=0||(a.save(),this._transformHander(a),"text"!=this.type&&e.setContextStyle(a,this.context.$model),this.render(a),a.restore())},render:function(){},remove:function(){this.parent&&this.parent.removeChild(this)},destroy:function(){this.remove(),this.context=null,delete this.context}}),h},{requires:["canvax/event/EventDispatcher","canvax/geom/Matrix","canvax/display/Point","canvax/core/Base","canvax/geom/HitTestPoint","canvax/core/PropertyFactory"]});