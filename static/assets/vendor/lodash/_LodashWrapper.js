var baseCreate=require("./_baseCreate"),baseLodash=require("./_baseLodash");function LodashWrapper(e, a){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=void 0}LodashWrapper.prototype=baseCreate(baseLodash.prototype),LodashWrapper.prototype.constructor=LodashWrapper,module.exports=LodashWrapper;