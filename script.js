let studentData = {
	math: 89,
	chemistry: 92,
	physics: 78,
	english: 76,
	computer: 67,
};

function computerResult() {
	let flag = true;
	Object.values(studentData).forEach((mark) => {
		if (mark < 40) {
			flag = false;
		}
	});
	return flag;
}

const total = Object.values(studentData).reduce(
	(total, mark) => (total += mark)
);

const result = computerResult()
	? "<b style='color:green;'>Pass</b>"
	: "<b style='color:red;'>Fail<b>";
