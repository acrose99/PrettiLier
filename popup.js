const colorScheme = ["primaryColor", "secondaryColor", "tertiaryColor", "backgroundColor", "surfaceColor", "surfaceColorHover", "mainButtonColor", "defaultWhite", "arrowColor", "activeBoardColor", "primaryBoardColor"]
const colorDefaults = ["#8F93A2", "#717CB4", "#adb5dc", "#0F111A", "#8F93A2", "#adb5dc", "#adb5dc", "#FFFFFF", "#550ec7", "4a5588", "21273e"];
const liChessDefaults = [""]

var i;
for (i = 0; i < colorScheme.length; i++) {
    pickrCreate(colorScheme[i], colorDefaults[i]);
}
document.querySelector('#resetButton').addEventListener('click', () => {
    chrome.storage.sync.clear()
    tabScript('window.location.reload();');
})
document.querySelector('#resetliChessButtonDark').addEventListener('click', () => {
    lichessDefaultDark();
})
document.querySelector('#resetliChessButtonLight').addEventListener('click', () => {
    lichessDefaultLight();
})
function pickrCreate(scheme, color) {
    chrome.storage.sync.get(scheme, function (result) {
        color = result[scheme] ? result[scheme] : color;

        let schemeElement = document.querySelector(`#${scheme}`);
        let pickr = new Pickr({
            el: schemeElement,
            default: color,
            theme: 'nano',

            components: {
                preview: true,
                opacity: true,
                hue: true,

                interaction: {
                    hex: true,
                    input: true,
                    save: true
                }
            }
        });

        pickr.on('save', (color) => {
            color = color.toHEXA().toString();
            console.log('setting color to: ' + color)
            console.log(typeof color)
            let schemeCode = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + scheme + ': ' + color + ' !important;")'

            tabScript(schemeCode);

            chrome.storage.sync.set({
                [scheme]: color
            });

        });
    });
}
function lichessDefaultDark() {
    let schemeCode = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'backgroundColor' + ': ' + '#161513' + ' !important;")';
    let schemeCode1 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'primaryColor' + ': ' + '#CCC' + ' !important;")';
    let schemeCode2 =  'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'mainButtonColor' + ': ' + '#2d2b28' + ' !important;")';
    let schemeCode3 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'secondaryColor' + ': ' + '#91908f' + ' !important;")';
    let schemeCode4= 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'tertiaryColor' + ': ' + '#373531' + ' !important;")';
    let schemeCode5 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'primaryBoardColor' + ': ' + '#262421' + ' !important;")';
    // let schemeCode7 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'arrowColor' + ': ' + '#91908f' + ' !important;")';

    tabScript(schemeCode);
    tabScript(schemeCode1);
    tabScript(schemeCode2);
    tabScript(schemeCode3)
    tabScript(schemeCode4)
    tabScript(schemeCode5)

    chrome.storage.sync.set({
        ['backgroundColor']: '#161513'
    });
}
function lichessDefaultLight() {
    let schemeCode = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'backgroundColor' + ': ' + '#e1ddd9' + ' !important;")';
    let schemeCode1 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'primaryColor' + ': ' + '#000000' + ' !important;")';
    let schemeCode2 =  'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'mainButtonColor' + ': ' + '#f1f1f1' + ' !important;")';
    let schemeCode3 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'secondaryColor' + ': ' + '#d59020' + ' !important;")';
    let schemeCode4= 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'tertiaryColor' + ': ' + '#f1f1f1' + ' !important;")';
    let schemeCode5 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'primaryBoardColor' + ': ' + '#f7f6f5' + ' !important;")';
    // let schemeCode7 = 'document.documentElement.setAttribute("style", (document.documentElement.getAttribute("style") ? document.documentElement.getAttribute("style") : "") + "--' + 'arrowColor' + ': ' + '#91908f' + ' !important;")';

    tabScript(schemeCode);
    tabScript(schemeCode1);
    tabScript(schemeCode2);
    tabScript(schemeCode3)
    tabScript(schemeCode4)
    tabScript(schemeCode5)

    chrome.storage.sync.set({
        ['backgroundColor']: '#161513'
    });
}
function tabScript(code) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: code
            });
    });
}
