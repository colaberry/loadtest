var page = require('webpage').create();
page.open('https://refactored.ai', function() {
    setTimeout(function() {
        page.render('rf_home.png');
        phantom.exit();
    }, 200);
});