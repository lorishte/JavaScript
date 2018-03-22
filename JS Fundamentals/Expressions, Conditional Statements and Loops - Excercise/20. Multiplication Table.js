
function generateTable(n) {

    let html = '<table border="1">\n';

    for (let i = 0; i <= n; i++) {

        if (i == 0) {
            html += '  <tr><th>x</th>';
            continue;
        }

        html += `<th>${i}</th>`;

        if (i == n) {
            html += '</tr>\n';
        }
    }

    for (let row = 1; row <= n; row++) {

        for (let col = 1; col <= n; col++) {

            if (col == 1) {
                html += `  <tr><th>${row}</th>` ;

            }

            html += `<td>${col * row}</td>`;

            if (col == n) {
                html += '</tr>\n';
            }
        }
    }

    html += '</table>';

    console.log(html);

}


generateTable(5)