let start=10;
let time=start*60;
let startMinutes=60;
setInterval(count,1000);
function count()
{
    let second=time%60;
    if(second<10)
        second=`0${second}`;

    if(startMinutes>=0)
    {
        console.log(second);
        let minutes=Math.floor(startMinutes/60);
        console.log(`${minutes}:${second}`);
        startMinutes--;
        time--;
    }
    else
    {
        console.log('stop');
    }
}