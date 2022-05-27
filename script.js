// write JS prog to get the cirrent date
// (expected output: mm/dd/yyyy or dd-mm-yyyy or dd/mm/yyyy

const formateDate = (date = new Date()) => {
	const days = date.getDate() +1;
	const months = date.getMonth() +1;
	const years = date.getFullYear() +1;
	return `${days}/${months}/${years}`;
}

console.log(formateDate());

// need to +1 bc it starts at 0