var cloneArrayBuffer=require("./_cloneArrayBuffer");function cloneDataView(e, r){var f=r?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(f,e.byteOffset,e.byteLength)}module.exports=cloneDataView;