var memberList = document.getElementById('list');

var member = memberList.getElementsByClassName('memberBtn');



for(var i = 0; i < member.length; i++)
{
  member[i].addEventListener("click",function ()

  {
    var current = document.getElementsByClassName("active");

    if (current.length > 0)
    {
    current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";

  }

);
}



function showParth()
{
  document.getElementById("parth").style.display = "block";
  document.getElementById("varun").style.display = "none";
  document.getElementById("jayb").style.display = "none";
  document.getElementById("mihika").style.display = "none";
  document.getElementById("jays").style.display = "none";
  document.getElementById("khushal").style.display = "none";
  document.getElementById("dheeraj").style.display = "none";
  document.getElementById('list').style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";





  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var par = document.getElementById('list');
  var parAct = par.getElementsByClassName('6');
  parAct[0].className += " active";


}

function showVarun()
{
  document.getElementById("parth").style.display = "none";
  document.getElementById("varun").style.display = "block";
  document.getElementById("jayb").style.display = "none";
  document.getElementById("mihika").style.display = "none";
  document.getElementById("jays").style.display = "none";
  document.getElementById("khushal").style.display = "none";
  document.getElementById("dheeraj").style.display = "none";
  document.getElementById("list").style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";


  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var varu = document.getElementById('list');
  var varuAct = varu.getElementsByClassName('7');
  varuAct[0].className += " active";

}

function showJayb()
{
  document.getElementById("parth").style.display = "none";
  document.getElementById("varun").style.display = "none";
  document.getElementById("jayb").style.display = "block";
  document.getElementById("mihika").style.display = "none";
  document.getElementById("jays").style.display = "none";
  document.getElementById("khushal").style.display = "none";
  document.getElementById("dheeraj").style.display = "none";
  document.getElementById('list').style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";


  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var jb = document.getElementById('list');
  var jbAct = jb.getElementsByClassName('2');
  jbAct[0].className += " active";

}

function showMihika()
{
  document.getElementById("parth").style.display = "none";
  document.getElementById("varun").style.display = "none";
  document.getElementById("jayb").style.display = "none";
  document.getElementById("mihika").style.display = "block";
  document.getElementById("jays").style.display = "none";
  document.getElementById("khushal").style.display = "none";
  document.getElementById("dheeraj").style.display = "none";
  document.getElementById('list').style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";

  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var miki = document.getElementById('list');
  var mikiAct = miki.getElementsByClassName('5');
  mikiAct[0].className += " active";

}

function showJays()
{
  document.getElementById("parth").style.display = "none";
  document.getElementById("varun").style.display = "none";
  document.getElementById("jayb").style.display = "none";
  document.getElementById("mihika").style.display = "none";
  document.getElementById("jays").style.display = "block";
  document.getElementById("khushal").style.display = "none";
  document.getElementById("dheeraj").style.display = "none";
  document.getElementById('list').style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";
  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var js = document.getElementById('list');
  var jsAct = js.getElementsByClassName('3');
  jsAct[0].className += " active";
}

function showKhushal()
{
  document.getElementById("parth").style.display = "none";
  document.getElementById("varun").style.display = "none";
  document.getElementById("jayb").style.display = "none";
  document.getElementById("mihika").style.display = "none";
  document.getElementById("jays").style.display = "none";
  document.getElementById("khushal").style.display = "block";
  document.getElementById("dheeraj").style.display = "none";
  document.getElementById('list').style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";
  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var khu = document.getElementById('list');
  var khuAct = khu.getElementsByClassName('4');
  khuAct[0].className += " active";
}

function showDheeraj()
{
  document.getElementById("parth").style.display = "none";
  document.getElementById("varun").style.display = "none";
  document.getElementById("jayb").style.display = "none";
  document.getElementById("mihika").style.display = "none";
  document.getElementById("jays").style.display = "none";
  document.getElementById("khushal").style.display = "none";
  document.getElementById("dheeraj").style.display = "block";
  document.getElementById('list').style.display = "block";
  document.getElementById("cover").style.display = "none";
  document.getElementById("cover2").style.display = "none";
  var memberList = document.getElementById('list');

  var member = memberList.getElementsByClassName('memberBtn');

  for(var i = 0; i < member.length; i++)
  {
    var current = document.getElementsByClassName("active");

      if (current.length > 0)
      {
      current[0].className = current[0].className.replace(" active", "");
      }
  }
  var khu = document.getElementById('list');
  var khuAct = khu.getElementsByClassName('1');
  khuAct[0].className += " active";
}
