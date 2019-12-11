
$(document).ready(function()
{
	var html1 = '<ul>', html2 = '</ul>'

	events.sort(
	function(a,b)
	{
  		// Turn your strings into dates, and then subtract them
	  	// to get a value that is either negative, positive, or zero.
  		return new Date(a[6]) - new Date(b[6]);
	}
	);



	for (var i=0; i<events.length; ++i)
	{
		if (new Date(events[i][6]).valueOf() == null) console.log(events[i])

		if (Date.now() < new Date(events[i][6]).valueOf())
		{
			html1+="<li><a style='font-weight:normal;' href='"+events[i][0]+"'><b>"+events[i][1]+"</b>, "+events[i][2]+" : "+events[i][3]+" - "+events[i][4]+" - "+events[i][5]+"</a>"
		}
		else
		{
			html2="<li><a style='font-weight:normal;color:darkgray' href='"+events[i][0]+"'><b>"+events[i][1]+"</b>, "+events[i][2]+" : "+events[i][3]+" - "+events[i][4]+" - "+events[i][5]+"</a>"+html2
		}
	}
	html1+= "</ul>"
	
	html2= "<ul>"+html2

	$('#events2come').html(html1)
	$('#eventspast').html(html2)
})
