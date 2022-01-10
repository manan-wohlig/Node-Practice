function currTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
} 

exports.sessionEnd = function() {
    console.log('Session ended at ' + currTime());
}
