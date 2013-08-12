chrome.bookmarks.getTree(function(bookmarks){
    alert(getNumber(bookmarks[0]));
});

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
