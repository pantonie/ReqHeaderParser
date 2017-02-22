var express = require('express');
var app = express();

function OS(str){
    var arr = new Array(
        ['Windows 3.11','Win16'],
        ['Windows 95', 'Windows 95|Win95|Windows_95'],
        ['Windows 98', 'Windows 98|Win98'],
        ['Windows 2000', 'Windows NT 5.0|Windows 2000'],
        ['Windows XP', 'Windows NT 5.1|Windows XP'],
        ['Windows Server 2003', 'Windows NT 5.2'],
        ['Windows Vista/Windows server 2008', 'Windows NT 6.0'],
        ['Windows 7/Windows server 2008 R2', 'Windows NT 6.1'],
        ['Windows 8', 'Windows NT 6.2'],
        ['Windows 10', 'Windows NT 10.0'],
        ['Windows NT 4.0', 'Windows NT 4.0|WinNT4.0|WinNT|Windows NT'],
        ['Windows ME', 'Windows ME'],
        ['Open BSD', 'OpenBSD'],
        ['Sun OS', 'SunOS'],
        ['Linux', 'Linux|X11'],
        ['Mac OS', 'Mac_PowerPC|Macintosh|Mac'],
        ['QNX', 'QNX'],
        ['BeOS', 'BeOS'],
        ['OS/2', 'OS/2']
    )
    for (var i=0; i < arr.length; i++){
        if (str.match(arr[i][1])) return arr[i][0];
    }
    return 'unknown'
}
app.get('*', function(req, res){
    console.log(req.headers);
    var response = {
        'ip': req.headers['x-forwarded-for'],
        'language': req.headers['accept-language'].split(',')[0],
        'os': OS(req.headers['user-agent'])
    }  
    res.json(response);
})

app.listen(8080, function(){
    console.log('application is listening port 80');
})