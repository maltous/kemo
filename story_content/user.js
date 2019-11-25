function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Znq5ltPCge":
        Script1();
        break;
      case "6UsTAeYLDx1":
        Script2();
        break;
      case "6DAkPD8baeG":
        Script3();
        break;
      case "5VMEl53I5Nz":
        Script4();
        break;
      case "5hTR6VY15sX":
        Script5();
        break;
      case "5xFgGWNlG05":
        Script6();
        break;
      case "5oU9hviquYB":
        Script7();
        break;
      case "5rC3qPyoQJH":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var player = GetPlayer();
var email="nsdd_courses@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script6()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

