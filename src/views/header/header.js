import { reactive, onMounted } from 'vue';

function handleTime() {
  const reactData = reactive({
    dateYear: '',
    weekDay: '',
    dateHH: '00',
    dateMM: '00',
    dateSS: '00',
  })

  function getTime() {
    const { dateYear, weekDay, dateHH, dateMM, dateSS } = showTime()
    reactData.dateYear = dateYear;
    reactData.weekDay = weekDay;
    reactData.dateHH = dateHH;
    reactData.dateMM = dateMM;
    reactData.dateSS = dateSS;
  }

  onMounted(() => {
    getTime();

    setInterval(() => {
      getTime();
    }, 1000)
  })

  return {
    reactData,
  }
}

function showTime () {

  var mydate = new Date()
  let arr_week = new Array(
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  )
  let year = '',
    month = '',
    date = '',
    hh = '',
    mm = '',
    ss = '',
    week = ''
  year = '' + mydate.getFullYear()
  month +=
            (mydate.getMonth() + 1 < 10 ? '0' : '') +
            (mydate.getMonth() + 1)
  date += (mydate.getDate() < 10 ? '0' : '') + mydate.getDate()
  hh += (mydate.getHours() < 10 ? '0' : '') + mydate.getHours()
  mm += (mydate.getMinutes() < 10 ? '0' : '') + mydate.getMinutes()
  ss += (mydate.getSeconds() < 10 ? '0' : '') + mydate.getSeconds()
  week = arr_week[mydate.getDay()]

  let dateYear = year + '年' + month + '月' + date + '日'
  let weekDay = week
  let dateHH = hh
  let dateMM = mm
  let dateSS = ss

  return { dateYear, weekDay, dateHH, dateMM, dateSS }
}

export {
  handleTime,
}