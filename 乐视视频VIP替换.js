// ==UserScript==
// @name		乐视视频VIP替换
// @namespace	http://tampermonkey.net/
// @version		1.0
// @description	直接在视频页查看会员视频
// @author		申杰
// @match		*.le.com/ptv/vplay/*
// @match		m.le.com/*
// @grant		none
// @run-at		document-start
// ==/UserScript==

(function() {
    'use strict';
    // 替换播放器
    function replace_original_player() {
        // 生成替换源
        var current_url = window.location.href;
        var request_url = '<iframe id="play_iframe" allowfullscreen="true" ' +
			'style="background-color: #000;" width="100%" height="100%" ' +
			'allowtransparency="true" frameborder="0" scrolling="no" ' +
			'src="http://api.pu.tn/vve11/?url=' + current_url + '"></iframe>';
		$('#video').empty().html(request_url);
    };
    setTimeout(function(){
		replace_original_player();
	}, 1000);
})();