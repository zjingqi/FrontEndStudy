function mulit(a,b){
    console.log(a*b);
}
// module.exports = mulit;//函数
exports.mul = mulit;//方法

/**exports = mulit;//{};
 * 原因：
 * var module.exports = {};
 * var exports = module.exports;
 * reuire中接收的是 module.exports
 */
