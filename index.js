display();
chrome.bookmarks.onCreated.addListener(display);
chrome.bookmarks.onRemoved.addListener(display);

function display() {
    chrome.bookmarks.getTree(function(bookmarks){
        chrome.browserAction.setBadgeText({text: String(getNumber(bookmarks[0]))});
    });
}

function getNumber(tree) {
        if (tree.children == undefined) {
            return 1;
        } else {
            var number = 0;
            tree.children.forEach(function(subTree){
                number += getNumber(subTree);
            });
            return number;
        }
}
