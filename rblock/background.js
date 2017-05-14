var re = (function () {
    var domains = ["mixadvert.com", "relap.io", "2mdn.net", "onthe.io", "zero.kz"
            , "aidata.io", "aidata.me", "doubleclick.net", "digitaltarget.ru"
            , "uptolike.com", "mediator.media", "yadro.ru", "i-vengo.com", "ad.mail.ru"
            , "adriver.ru", "mds.yandex.net", "an.yandex.ru", "mc.yandex.net"
            , "mc.yandex.ru", "stats.tmtm.ru"
            , "pagead2.googlesyndication.com"
            , "marketgid.com"     
            , "criteo.net"
            , "betweendigital.com"
            , "openstat.net"
            , "sape.ru"
            , "acint.net"
            , "media-rotate.com"
            , "betsonsport.ru"
             , "recreativ.ru"
            , "ssl-services.com"
            , "adlabs.ru"
            , "dumedia.ru"
            , "windcdna.com"
            , "luxup.ru"
            , "luxup2.ru"
        ].map(function (a) {
            return a.replace(/\./, '\\.');
        })
        .join('|')
    var s = "(^[^/]+//(.*\\.)?((" + domains + ")(\\:\\d+)?/.*)";
    s += "|mail\\.ru/tracker.*";
    s += "|vk\\.com/js/al/aes_light\\.js.*";
    s += "|.*(adriver|adver).*\\.js.*";
    s += "|.*google-analytics.com/(collect\\?|ga.js).*";
    s += "|.*youtube.com/api/stats/ads.*";
    s += "|.*rutrk.org/misc/.*";
    s += "|.*rutrk.org/\\d+.*";
    s += ")";
    return new RegExp(s, "i");
})();
//var bkg = chrome.extension.getBackgroundPage();
//bkg.console.log('foo');
chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
    var r = !!details.url.match(re);
    //if(!r) bkg.console.log(details.url);
    return { cancel: r };
}, { urls: ["<all_urls>"] }, ['requestHeaders', 'blocking']);
