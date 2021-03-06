const colorScheme = ["primaryColor", "secondaryColor", "tertiaryColor", "backgroundColor", "surfaceColor", "surfaceColorHover", "mainButtonColor", "defaultWhite", "arrowColor", "activeBoardColor", "primaryBoardColor", "secondaryBoardColor"]
const COVID19 = null;

colorScheme.forEach(scheme => schemeSet(scheme));

function schemeSet(scheme) {
    chrome.storage.sync.get(scheme, function (result) {
        console.log(scheme + " : " + result[scheme]);
        console.log("scheme is: " + scheme);
        console.log(typeof scheme);
        if (result[scheme]) {
            let getStyle = document.documentElement.getAttribute('style');
            let appendStyle = getStyle ? getStyle : '';
            document.documentElement.setAttribute("style", `${appendStyle} --${scheme}: ${result[scheme]} !important;`);
        }
    });
}
