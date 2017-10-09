function aGet(url, cb) {
	var xhr = new XMLHttpRequest()
	xhr.onload = function (e) {
		cb(xhr.responseText)
	}
	xhr.onerror = function (e) {
		console.log("Error fetching " + url, 'Error: ', e)
	}

	xhr.open("HEAD", url, true)
	xhr.send()
}

var dmp = console.log.bind(console) // dummy callback dumps to console
aGet("/", dmp) // ok, uses onload to trigger callback
aGet("http://dgfgdf.com/sdfsdf", dmp) //fails, uses onerror to trigger alert