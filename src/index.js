import './index.css';

import numeral from 'numeral';

const ticketCost = numeral(1500).format('$0,0.00');
debugger;
console.log(`The flight ticket from Toronto to Paris is ${ticketCost} in summer!`);
