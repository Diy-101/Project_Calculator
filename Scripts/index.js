

const numbers = document.querySelector('#numbers');

for (let i = 1; i < 10; ++i) {
    const btn = document.createElement('button');
    btn.className = "btn";
    btn.textContent = `${i}`;
    numbers.appendChild(btn);
}

const btn = document.createElement('button');
btn.className = "btn";
btn.id = "zero"
btn.textContent = `0`;
numbers.appendChild(btn);

const moveBtn = document.querySelectorAll('.btn');

moveBtn.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.target.setAttribute('style', 'background-color: #8E979E')
    })
    item.addEventListener('mouseout', (e) => {
        e.target.setAttribute('style', 'background-color: #D3D3D3')
    })
})

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
        } else if (e.target.textContent === '←') {
            input.value = input.value.slice(0, input.value.length - 1)
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


