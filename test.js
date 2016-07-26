casper.test.begin('Test', 1, function suite(test) {
    casper.start('http://develop.www.singuerinc.com.surge.sh/', function() {
        test.assertTitle("Nahuel Scotti - Portfolio", "homepage title is the one expected");
    });

    casper.run(function() {
        test.done();
    });
});