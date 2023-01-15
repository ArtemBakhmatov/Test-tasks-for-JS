(function (c) {
    if (isEngineInited()){
        return;
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 1;
    script.src = c.managerUrl;
    script.dataset.roxotInited = 'true';

    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    window.rom = window.rom || {cmd: [], icmd: []};
    window.rom.icmd = window.rom.icmd || [];
    window.rom.icmd.push(c);

    function isEngineInited(){
        return  document.querySelectorAll('[data-roxot-inited]').length;
    }
})({"publisherId":"8c86a31e-948e-4d37-9b5a-304d2fbc4c0c","publisher":"Ilibrary","adBlockMode":"main","iframeSspList":[],"managerUrl":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/common-engine.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672","wrapperUrl":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/wrapper.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672","placementConfigTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/placement\/__PLACEMENT_ID__?v=d-1673527389","gfsPlacementOptionsTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/gfs-placement\/__PLACEMENT_ID__?v=d-1673527389","isLanguageSpecific":false,"hostConfig":{"ilibrary.ru":{"wrapperOptions":[],"isAcceptableAdsEnabled":true}},"isBrowserSpecific":false,"isOsSpecific":false,"isDeviceTypeSpecific":false,"isGeoSpecific":false,"isGetParamSpecific":false,"dynamicUrlTemplate":"https:\/\/cdn.skcrtxr.com\/wrapper-builder\/8c86a31e-948e-4d37-9b5a-304d2fbc4c0c\/dynamic.js?host=__HOST__&v=d-1673527389__s-3630d1d1-9052-414f-aa9e-a88025e4b672","wrapperConfig":{"host":"ilibrary.ru","engineFileName":"roxot-common-engine.js","universalPlaceHolder":{"enabled":false},"monetizationStatsIntegration":{"enabled":true,"requestSettings":{"isNeedToSend":true,"sampleCoefficient":1},"impressionSettings":{"isNeedToSend":true,"sampleCoefficient":1}},"adfox":{"hb":{"biddersMap":{"betweenDigital":"1945468","myTarget":"1945461","otm":"1945469","segmento":"1945470","getintent":"1945477","hybrid":"1945478","adriver":"1945479","buzzoola":"1945480","relap":"1945481","adfox_yandex_premium-publisher-network":"1946302","adfox_adsmart":"1998999","adfox_yandex_roxot-adfox-hb":"2043702","rtbhouse":"1393902","criteo":"1393905","videonow":"1407059"},"timeout":1000}},"roxotYaMetric":{"enabled":true,"counterId":88477929},"enableAdFirstLoadInHiddenTab":true,"limits":{"roxot_adfox_video":{"refreshTimeSeconds":3000,"requestTimeout":20,"noServerTimeout":10000}},"pageKeyValues":{"enabled":true,"keyList":["age","device","time","siteid","size"]},"prebid":{"path":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/prebid.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672"},"videojsLibs":{"path":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/video-libs.js?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672"},"pageUrlVariableName":"roxotPlusPageUrl","stubVideoPath":"https:\/\/cdn.skcrtxr.com\/wrapper\/js\/video-ad?v=s-3630d1d1-9052-414f-aa9e-a88025e4b672","adfoxIntegrationType":"direct","yandexIntegrationType":"common","openRtbHost":"https:\/\/openrtb.skcrtxr.com"},"lazyLoading":[],"geoSpecificUrl":"https:\/\/geo-worker.skcrtxr.com\/api\/geo\/region"})