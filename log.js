//https://www.npmjs.com/package/figlet
//http://patorjk.com/software/taag/#p=display&f=3D%20Diagonal&t=Type%20Something%20
const figlet = require('figlet');

function test (){

    // example 1
    figlet('Hello World!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

    // example 2
    figlet.text('Boo!', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });

    // example 3
    console.log(figlet.textSync('122333 This is a example!', {
        font: 'ANSI Shadow',
        // font: 'Bloody',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));

    // example 4
    const text = figlet.textSync("hellooooo aaaaa");
    console.log(text);
}

function logText(text, font) {
    console.log(figlet.textSync(text, {
        font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));
}

module.exports = {
    logText
};












