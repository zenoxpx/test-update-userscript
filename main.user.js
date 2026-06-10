// ==UserScript==
// @name    Update UserScript
// @namespace https://github.com/zenoxpx/
// @version 1.0.0
// @description UserScriptの自動更新テスト
// @author ZENO
// @match https://example.com
// @grant GM_info
// ==UserScript==

(function() {
    'use strict';

    alert(`${GM_info.script.name}はv${GM_info.script.version}です。`);
})();
