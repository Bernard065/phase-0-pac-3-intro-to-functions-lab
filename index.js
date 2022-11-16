function shout(string) {
    return string.toUpperCase();
} 
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log (string.toUpperCase());
}
function logWhisper(string) {
    console.log (string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
   const cantHearYou = "I can't hear you!";
   const yesIndeed = "YES INDEED!";
   const wouldLove = "I would love to!";
   if  (string.toLowerCase() === string) {
    return cantHearYou;
   }
   else if (string.toUpperCase() === string) {
    return yesIndeed;
   }
   else if("Let's have dinner together!" === string) {
    return wouldLove;
   }
}