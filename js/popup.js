$(document).ready(function() {
    function f(a, c) {
        chrome["storage"].sync.get(a, function(b) {
            b = b[a];
            "checked" === b ? $(c).attr("checked", b) : ($(c).attr("checked", "checked"), !1 === b ? $(c).attr("checked", b) : $(c).attr("checked", "checked"))
        })
    }

    function g(a, c) {
        $(c).on("change", function() {
            var b = {};
            chrome["storage"].sync.get(a, function(d) {
                "checked" === d[a] ? ($(c).attr("checked", !1), b[a] = !1) : ($(c).attr("checked", "checked"), b[a] = "checked");
                chrome.storage.sync.set(b);
                chrome.runtime.sendMessage(b)
            })
        })
    }
    for (var d = "ch_pr ch_nwsf ch_msg ch_fr ch_gr ch_ph ch_aud ch_vid ch_ap ch_mk ch_fav ch_doc ch_blog ch_apm ch_ads ch_av_g ch_friend_g ch_frOn_g ch_intPage_g ch_video_g ch_audio_g ch_blName_g ch_blSub_g ch_whatNew_g ch_addFhoto_g ch_wall_g ch_info_g ch_blName_g ch_fhotoBook_g ch_gift_g ch_Commonfriend_g ch_notAv_g ch_sp_fotoPeople ch_g_attach ch_g_video ch_g_goods ch_g_quiz ch_g_dis ch_g_pict ch_g_audio ch_g_add ch_g_wall ch_g_av ch_g_link ch_g_cont ch_g_follow ch_g_donAdmin ch_g_metting ch_g_doc ch_g_app ch_sp_likes ch_sp_comment ch_sp_save ch_sp_possFriend ch_sp_recomGr ch_sp_notific ch_sp_firstHot ch_sp_videoCatalog ch_sp_clearGames ch_sp_advertising ch_sp_audioFrList ch_sp_mv_info ch_sp_news ch_sp_fastChat ch_sp_fhOutCom ch_sp_vdOutCom".split(" "),
            e = [], a = 0; a < d.length; a++) e.push("#" + d[a]), f(d[a], e[a]), g(d[a], e[a])
});