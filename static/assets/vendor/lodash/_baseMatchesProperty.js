var baseIsEqual=require("./_baseIsEqual"),get=require("./get"),hasIn=require("./hasIn"),isKey=require("./_isKey"),isStrictComparable=require("./_isStrictComparable"),matchesStrictComparable=require("./_matchesStrictComparable"),toKey=require("./_toKey"),COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty(a, t){return isKey(a)&&isStrictComparable(t)?matchesStrictComparable(toKey(a),t):function(e){var r=get(e,a);return void 0===r&&r===t?hasIn(e,a):baseIsEqual(t,r,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}module.exports=baseMatchesProperty;