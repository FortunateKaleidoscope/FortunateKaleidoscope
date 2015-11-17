'use strict';
// This is builds the structure of the snippet for download
module.exports = function (snipObj) {
  var snippet = unescape(snipObj.text);
  var tabPrefix = unescape(snipObj.tabPrefix);
  var scope = snipObj.scope !== undefined ?  "<scope>" + snipObj.scope + "</scope>" : '';
  return "<snippet>\n" +
    "<content><![CDATA[\n"+
    snippet +
    "\n]]></content>\n" +
    "<tabTrigger>" + tabPrefix + "</tabTrigger>\n"+
    scope +
    "\n</snippet>";

};
