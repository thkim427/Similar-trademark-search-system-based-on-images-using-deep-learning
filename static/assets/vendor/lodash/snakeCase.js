var createCompounder=require("./_createCompounder"),snakeCase=createCompounder(function(e, r, o){return e+(o?"_":"")+r.toLowerCase()});module.exports=snakeCase;