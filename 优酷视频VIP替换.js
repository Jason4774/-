// ==UserScript==
// @name         优酷视频VIP替换
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  直接在视频页查看会员视频
// @author       申杰
// @match        *v.youku.com/v_show/*
// @match        *m.youku.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 获取一级域名
    var domain = document.domain;
    function is_domain(domain_key){
        if (domain.indexOf(domain_key) != -1){
            return true;
        }else{
            return false;
        }
    }
    // 替换播放器
    function replace_original_player(){
        // 生成替换源
        var current_url = window.location.href;
        var request_url = '<iframe id="play_iframe" allowfullscreen="true" style="background-color: #000;" width="100%" height="100%" allowtransparency="true" frameborder="0" scrolling="no" src="http://y.mt2t.com/lines?url=' + current_url +'" __idm_id__="347789313"></iframe>';
        // 根据各网站匹配替换规则
        if (is_domain('youku'))
        {
            $(".youku-film-player").empty();
            $('.youku-film-player').prepend(request_url);
        }
    }
    setTimeout(function(){ replace_original_player(); }, 5000);
})();