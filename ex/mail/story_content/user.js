function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XL0E5FGoVr":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = 'soltean@deloitte.de';
var fbk = player.GetVar('Feedback');
var subject = 'Course Feedback';
var emailBody = 'Here is some feedback:' + '\n' + fbk;
window.location.href='mailto:'+email+'?subject='+subject+'&body='+encodeURIComponent(emailBody);
}

