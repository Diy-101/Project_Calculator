

const numbers = document.querySelector('#numbers');

for (let i = 1; i < 10; ++i) {
    const btn = document.createElement('button');
    btn.className = "btn";
    btn.textContent = `${i}`;
    numbers.appendChild(btn);
}


// logica

const input = document.querySelector('#windowInput');
const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener('click', (e) => {
        if (e.target.textContent === '=') {
            const result = String(strToMath(input.value));
            if (result === 'NaN') {
                input.value = 'ERROR';
            } else {
                input.value = result;
            }
        } else if (e.target.textContent === 'C') {
            input.value = '';
        } else {
            input.value += e.target.textContent;
        }
        
    })
}



function strToMath(string) {
    string = string.replaceAll(' ', '').replaceAll('+', ' + ').replaceAll('*', ' * ').replaceAll('-', ' - ').replaceAll('/', ' / ').split(' ');

	for(let i = 0; i < string.length; i++){
		if(string[i] == ''){
			string.splice(i, 2);
			string[i] = '-'+string[i];
		}
	}

	let calc = document.createElement('calc');

	calc.style['opacity'] = `calc(${string.join(' ')})`;

	let result = parseFloat(calc.style['opacity'].replace('calc(', '').replace(')', ''))

	calc.remove();
  
	return result;
}


