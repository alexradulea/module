function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZSkvYQNGGy":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = 'alexandru.radulea@gmail.com';
var fbk = player.GetVar('Feedback');
var subject = 'Course Feedback';
var emailBody = 'Here is some feedback:' + '\n' + fbk;
window.location.href='mailto:'+email+'?subject='+subject+'&body='+encodeURIComponent(emailBody);
}

