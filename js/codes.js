function encode() 
{
	var obj = document.getElementById('output');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
}
function decode() 
{
	var obj = document.getElementById('output');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}
function userpass()
{
	var obj = document.getElementById('userpassinput');
	var line = obj.value;
	
	var lines = document.getElementById('output');
	if (lines.value.length < 2)
		return;
	linessplit = lines.value.split('\n');
	lines.value = '';
	var temp = '';
	for (var i = 0; i < linessplit.length; i++)
	{
		temp += linessplit[i].replace('http://', '').replace('https://', '').replace(/^/, 'https://' + line + '@') + '\n';
	}
	lines.value = temp;
	window.scrollTo(0,document.body.scrollHeight);
}

function evilurl()
{
	var lines = document.getElementById('output');
	linessplit = lines.value.split('\n');

	var r = confirm("Warning - If you have not registered the relevant domains in cyrillic this will break the URLs");
	if (r == true) 
	{
		
		
	  if (document.getElementById('csegment1').checked)
		lines.value = lines.value.toLowerCase().replace('a', '\u0430');

	  if (document.getElementById('csegment2').checked)
		lines.value = lines.value.toLowerCase().replace('c', '\u03F2');

	  if (document.getElementById('csegment3').checked)
		lines.value = lines.value.toLowerCase().replace('e', '\u0435');

	  if (document.getElementById('csegment4').checked)
		lines.value = lines.value.toLowerCase().replace('o', '\u043E');

	  if (document.getElementById('csegment5').checked)
		lines.value = lines.value.toLowerCase().replace('p', '\u0440');

	  if (document.getElementById('csegment6').checked)
		lines.value = lines.value.toLowerCase().replace('s', '\u0455');

	  if (document.getElementById('csegment7').checked)
		lines.value = lines.value.toLowerCase().replace('d', '\u0501');

	  if (document.getElementById('csegment8').checked)
		lines.value = lines.value.toLowerCase().replace('q', '\u051B');

	  if (document.getElementById('csegment9').checked)
		lines.value = lines.value.toLowerCase().replace('w', '\u051D');
	
		window.scrollTo(0,document.body.scrollHeight);
	}
}

function openredirect()
{
	if (document.getElementById('vulntextarea').value == '')
	{
		alert("Input open redirect vulnerabilities for this feature to work! Place the URL into the URL box and '<url>' where the open redirect exists. Load the examples if you are uncertain.");
		return;
	}

if (output.value.length < 2)
{
		alert('You need to Obfuscate the IP first');
		return;
}
output.value = '';
var templines = output.value.split ('\n');

var textArea = document.getElementById('vulntextarea');
var lines = textArea.value.split('\n');
var res = '';

for (var m = 0; m < templines.length; m++)
{
for (var j = 0; j < lines.length; j++) 
{
  if (lines[j] === '')
	continue;
  if (j == 0)
	res = lines[j].replace(/<url>/g, templines[m]); 
  else
  {
	res = lines[j].replace (/<url>/g, res);
  }
}
output.value +=  res + '\n';	
window.scrollTo(0,document.body.scrollHeight);
}
}