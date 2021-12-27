const day = [];
/**
 * Start with a midnight datetime, in each loop, add 5 minutes, turn it into a string, and slice just the time off
 * and then push that string of just the time to the array
 */
function fillDay() {
  let incrementedMS = -57900000;
  for (let i = 0; i < 288; i++) {
    let newTime = new Date;
    incrementedMS += 300000;
    newTime.setTime(incrementedMS);
    let timeString = newTime.toLocaleTimeString('en-US');
    timeString = timeString.slice(0,5) + timeString.slice(8)
    //console.log(timeString);
    day.push(timeString)
  }
}
// fillDay()

function fillTable(day) {
  console.debug('fillTable ran');
  // for (let i = 0; i < cats; i++) {
  //   $('thead tr').append(`<th>${categories[i].title}</th>`);
  // }
  $('thead tr').append('TIME', 'PLAN', 'REALITY');
  for (let i = 0; i < day.length; i++) {
    let $newRow = $(`<tr>
    <td>${day[i]}</td>
    <td></td>
    <td></td>
  </tr>`);
    for (let j = 0; j < cats; j++) {
      $newRow.append(`<td class="r${i} c${j}">?</td>`);
    }
    $('#tbody').append($newRow);
  }
}

class Day(){

}
