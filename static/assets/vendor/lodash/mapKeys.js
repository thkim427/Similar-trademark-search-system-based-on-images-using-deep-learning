var baseAssignValue=require("./_baseAssignValue"),baseForOwn=require("./_baseForOwn"),baseIteratee=require("./_baseIteratee");function mapKeys(e, r){var n={};return r=baseIteratee(r,3),baseForOwn(e,function(e, a, s){baseAssignValue(n,r(e,a,s),e)}),n}module.exports=mapKeys;