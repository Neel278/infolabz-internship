var no = 6;
document.write("<table border='1'>");

for (let i = 1; i <= 10; i++) {
	document.write(`
        <tr>
            <td>5</td>
            <td>*</td>
            <td>${i}</td>
            <td>=</td>
            <td>${no * i}</td>
        </tr>
    `);
}
document.write("</table>");
