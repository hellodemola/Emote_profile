export default function choseColor(score: string) {
	if (score === '500+') {
		return {
			textColor: '#fff',
			bgColor: '#BFD962'
		};
	}
	if (score === '10')
		return {
			textColor: '#203136',
			bgColor: '#ACE7F2'
		};
	if (score === '100')
		return {
			textColor: '#203136',
			bgColor: '#FDBD48'
		};
	if (score === '250')
		return {
			textColor: '#fff',
			bgColor: '#425DB6'
		};
}
