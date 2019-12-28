var hidden = false;

function hideSleepIn()
{
    hidden = !hidden;

    if(btn === onclick)
    {
        document.getElementById('btn').style.visibility = 'visible';
    }
    else
    {
        document.getElementById('high').style.visibility = 'hidden';
        document.getElementById('exit').style.visibility = 'hidden';
    }
}