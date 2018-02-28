function loadCSS(file) {
    var link = document.createElement("link");
    link.href = chrome.extension.getURL("css/" + file + ".css");
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("html")[0].appendChild(link);
}

function unloadCSS(file) {
    var cssNode = document.getElementById(file);
    cssNode && cssNode.parentNode.removeChild(cssNode);
}

function start(checkbox, namefile) {

    chrome["storage"].sync.get(checkbox, function(item) {

        if (Object.keys(item).length != 0) {
            if (item[checkbox] === "checked") {
                loadCSS(namefile);
            } else {
                unloadCSS(namefile);
            }
        } else {
            var obj = {};
            if (checkbox == "ch_g_donAdmin" || checkbox == "ch_sp_possFriend" ||
                checkbox == "ch_sp_recomGr" || checkbox == "ch_sp_clearGames" ||
                checkbox == "ch_sp_advertising" || checkbox == "ch_sp_mv_info"
            ) {
                obj[checkbox] = "checked";
                loadCSS(namefile);
            } else {
                obj[checkbox] = false;
                unloadCSS(namefile);
            }
            chrome.storage.sync.set(obj);
        }
    });
}

var checkbox = [
    "ch_pr", "ch_nwsf",
    "ch_msg", "ch_fr",
    "ch_gr", "ch_ph",
    "ch_aud", "ch_vid",
    "ch_ap", "ch_mk",
    "ch_fav", "ch_doc",
    "ch_blog", "ch_apm",
    "ch_ads",

    "ch_av_g", "ch_friend_g",
    "ch_frOn_g", "ch_intPage_g",
    "ch_video_g", "ch_audio_g",
    "ch_blName_g", "ch_blSub_g",
    "ch_whatNew_g", "ch_addFhoto_g",
    "ch_wall_g", "ch_info_g",
    "ch_blName_g", "ch_fhotoBook_g",
    "ch_gift_g", "ch_Commonfriend_g",
    "ch_notAv_g", "ch_sp_fotoPeople",

    "ch_g_attach", "ch_g_video",
    "ch_g_goods", "ch_g_quiz",
    "ch_g_dis", "ch_g_pict",
    "ch_g_audio", "ch_g_add",
    "ch_g_wall", "ch_g_av",
    "ch_g_link", "ch_g_cont",
    "ch_g_follow", "ch_g_donAdmin",
    "ch_g_metting", "ch_g_doc",
    "ch_g_app",

    "ch_g_attach", "ch_g_video",
    "ch_g_goods", "ch_g_quiz",
    "ch_g_dis", "ch_g_pict",
    "ch_g_audio", "ch_g_add",
    "ch_g_wall", "ch_g_av",
    "ch_g_link", "ch_g_cont",
    "ch_g_follow", "ch_g_donAdmin",
    "ch_g_metting", "ch_g_doc",
    "ch_g_app",

    "ch_sp_likes", "ch_sp_comment",
    "ch_sp_save", "ch_sp_possFriend",
    "ch_sp_recomGr", "ch_sp_notific",
    "ch_sp_firstHot", "ch_sp_videoCatalog",
    "ch_sp_clearGames", "ch_sp_advertising",
    "ch_sp_audioFrList", "ch_sp_mv_info",
    "ch_sp_news", "ch_sp_fastChat",
    "ch_sp_fhOutCom", "ch_sp_vdOutCom"

];
var namefile = [];

for (var i = 0; i < checkbox.length; i++) {
    namefile.push(checkbox[i]);
    start(checkbox[i], namefile[i]);
}

chrome.runtime.onMessage.addListener(function(request) {

    for (var value in request) {

        var file = value;
        var isId = $("#" + file).length;

        if (request[value] === "checked" && isId == 0) {
            loadCSS(file);
        } else if (request[value] === false && isId == 1) {
            unloadCSS(file);
        }

    }

});