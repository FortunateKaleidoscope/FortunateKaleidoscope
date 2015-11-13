'use strict';

module.exports = function (snipObj) {
  var snippet = unescape(snipObj.text);
  var tabPrefix = unescape(snipObj.tabPrefix);
  var scope = snipObj.scope !== undefined ?  " <!-- <scope>scope." + snipObj.scope + "</scope> -->" : '';
  return "<snippet>" +
    "<content><![CDATA["+
    snippet +
    "]]></content>"
    "  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->"+
    "  <!-- <tabTrigger>" + tabPrefix + "</tabTrigger> -->"+
    "  <!-- Optional: Set a scope to limit where the snippet will trigger -->"+
    scope +
    "</snippet>";

};
