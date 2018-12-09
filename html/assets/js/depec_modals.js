

// Array of modals available for the questions (pa = pergunta aluno/ pe = pergunta empresa)
let M = ['pa1', 'pa2', 'pa3', 'pa4', 'pa5', 'pa6', 'pa7', 'pa8', 'pa9', 
		 'pa10', 'pe1', 'pe2', 'pe3', 'pe4',  'pe5', 'pe6', 'pe7', 'pe8']

// For some weird way without the timeout to execute the code below it 
// says that it can't find the elements on the page and the onclick
// event cannot be set because the document.getElementById is null.
window.setTimeout(() => {
	M.map((m) => {
		document.getElementById(m).onclick = event => {
			document.getElementById('m' + m).classList.add("is-active")
		}
	})

	var dbutton = document.getElementsByClassName('delete')

	for (var i = 0; i < dbutton.length; i++) {
		dbutton[i].onclick = event => {
			M.forEach((e) => {
				document.getElementById('m' + e).classList.remove('is-active')
			})
		}
	}
}, 50)