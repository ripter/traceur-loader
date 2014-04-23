/*global module */
module.exports = function(source, map) {
  this.cacheable();

  return source + '// loooooader';
}