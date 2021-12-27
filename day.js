const day = [];
/**
 * Start with a midnight datetime, in each loop, add 5 minutes, turn it into a string, and slice just the time off
 * and then push that string of just the time to the array
 */
function fillDay() {
  let incrementedMS = -57900000;
  for (let i = 0; i < 288; i++) {
    let newTime = new Date();
    incrementedMS += 300000;
    newTime.setTime(incrementedMS);
    let timeString = newTime.toLocaleTimeString('en-US');
    if (timeString.length === 11) {
      timeString = timeString.slice(0, 5) + timeString.slice(8);
    } else {
      timeString = timeString.slice(0, 4) + timeString.slice(7);
    }
    day.push({ time: timeString, color: '' });
  }
  //console.log(day);
}
fillDay();

function fillTable(day) {
  console.debug('fillTable ran');
  let headings = ['Time', 'Plan', 'Reality'];
  for (let i = 0; i < 3; i++) {
    $('thead tr').append(`<th>${headings[i]}</th>`);
  }
  //$('thead tr').append('TIME', 'PLAN', 'REALITY');
  for (let i = 0; i < day.length; i++) {
    let $newRow = $(`<tr>
    <td>${day[i].time}</td>
    <td class="plan"></td>
    <td class="reality"></td>
  </tr>`);
    // for (let j = 0; j < cats; j++) {
    //   $newRow.append(`<td class="r${i} c${j}">?</td>`);
    // }
    $('#tbody').append($newRow);
  }
}
fillTable(day);

$('table').on('click', function (event) {
  $(event.target).css('background-color', 'red');
});
