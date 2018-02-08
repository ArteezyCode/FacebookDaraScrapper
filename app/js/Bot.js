import $ from 'jquery';

let interval = null;
let dataArray = [];
let complete = 0;



function getDataGroupList() {
  complete = 0;
  dataArray = [];
  let queryLength = 0;
  let currentQuery;
  let count = 0;
  interval = setInterval(() => {
    $(document).scrollTop($(document).height());
    $(document).ready(function () {
      currentQuery = $('div._60rh.clearfix._gse');

      if (queryLength !== 0) {
        currentQuery = currentQuery.slice(queryLength, currentQuery.length);
      }
      if(currentQuery.length == 0)
        count++;
      console.log(queryLength, currentQuery.length,count);
      if (currentQuery.length == 0 && count > 2) {
        clearInterval(interval);
      }
      currentQuery.each(function () {
        const [name, ...surname] = $(this).find('._60ri.fsl.fwb.fcb').text().split(' ');
        let workInfo = $(this).find('._60rj');
        workInfo = workInfo.eq(workInfo.length - 1).text().split(' at ');
        const url = $(this).find('a').attr('href').toString() || '';
        let comp;
        if (workInfo[0].indexOf('Advertising/') === -1) {
          comp = workInfo[0] !== '' && workInfo[1] !== undefined;
          if (comp) complete += 1;
          dataArray.push({
            firstName: name,
            lastName: surname.join(' '),
            company: workInfo[1],
            position: workInfo[0],
            url,
            isComplete: comp
          });
        }
      });

      queryLength += currentQuery.length;
      // console.log(dataArray);
    })
  }, 2000);
}


function getDataSearchList() {
  complete = 0;
  dataArray = [];
  let queryLength = 0;
  let currentQuery;
  let count = 0;
  interval = setInterval(() => {
    $(document).scrollTop($(document).height());
    currentQuery = $('div._3u1._gli._uvb');
    if(currentQuery.length == 0) count++;
    if (queryLength !== 0) {
      currentQuery = currentQuery.slice(queryLength, currentQuery.length);
    }

    currentQuery.each(function () {
      const [name, ...surname] = $(this).find('._52eh._5bcu').text().split(' ');
      const workInfo = $(this).find('._52eh').text().split(' at ');
      const url = $(this).find('a').attr('href').toString() || '';
      let comp;
      if (workInfo[0].indexOf('Advertising/') === -1) {
        comp = workInfo[0] !== '' && workInfo[1] !== undefined;
        if (comp) complete += 1;
        dataArray.push({
          firstName: name,
          lastName: surname.join(' '),
          company: workInfo[1],
          position: workInfo[0],
          url,
          isComplete: comp
        });
      }
    });
    queryLength += currentQuery.length;
    // console.log(dataArray);
  }, 2000);
}


function clrInterval() {
  clearInterval(interval);
  console.log('stop');
  return {
    dataArray,
    complete
  };
}

const t = {
  getDataGroupList,
  getDataSearchList,
  clrInterval
};

export default t;
