import './style.scss';
import {printDeveloper} from './me';
import {showDate} from './date';

const btn = document.createElement('button');
const elem = document.createElement('div');

elem.innerHTML = `Hello ${printDeveloper('Pavel')}`;
btn.textContent = 'Click me!';

// btn.addEventListener('click', () => showDate());
btn.onclick = () => showDate();

elem.appendChild(btn);
document.body.appendChild(elem);



