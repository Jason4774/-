// ==UserScript==
// @name		腾讯视频VIP替换
// @namespace	http://tampermonkey.net/
// @version		1.0
// @description	直接在视频页查看会员视频
// @author		申杰
// @match		*v.qq.com/x/*
// @match		*m.v.qq.com/*
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
			'src="http://www.82190555.com/index/qqvod.php?url=' + current_url + '"></iframe>';
		$('#mod_player').empty().html(request_url);
    };
    function clear_html(){
        $(".tvip_layer").remove();
        $(".mask_layer").remove();
    }
    setTimeout(function(){
		replace_original_player();
	}, 1000);
    setTimeout(function(){
		clear_html();
	}, 1000);
})();