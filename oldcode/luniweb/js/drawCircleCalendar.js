function drawCircleCalendar(circleLayer) {

    var radius = calendarParams.space2Height/2;
    var arcx = calendarParams.space2Width/2;
    var arcy = radius;
    var blockDateArray = circleBlocks.blockDateArray;
    var blockMonthArray = circleBlocks.blockMonthArray;
    var blockSeasonArray = circleBlocks.blockSeasonArray;
    var blockMoonArray = moonArray;

    var year = calendarData.currentYear;
    var dataIndex = calendarData["index"][year];
    var dataData = calendarData["data"];
    var startID = dataIndex[1];
    var endID = calendarData["index"][year+1][1];
    var totalWeeks = dataData[endID-1]["wn"]-dataData[startID]["wn"]+1;

    calendarData.currentYear_hindu = "Hindu : "+dataData[startID]["hindu_date"]["year"]+" - "+dataData[endID]["hindu_date"]["year"];
    calendarData.currentYear_islamic = "Islamic : "+dataData[startID]["islamic_date"]["year"]+" - "+dataData[endID]["islamic_date"]["year"];
    calendarData.currentYear_hebrew = "Hebrew : "+dataData[startID]["hebrew_date"]["year"]+" - "+dataData[endID]["hebrew_date"]["year"];
    calendarData.currentYear_chinese = "Chinese : "+((dataData[startID]["chinese_date"]["cycle"]*60)+dataData[startID]["chinese_date"]["year"])+
        " - "+((dataData[endID]["chinese_date"]["cycle"]*60)+dataData[endID]["chinese_date"]["year"]);

    var iArray = 0;
    var currMonth = 0;
    var currWeek = 0;
    var seasonWeeks = [];
    var tmpWeeks = 0;
    for(var i = startID; i < endID; i++) {(function(){
        var info = dataData[i];
        var month = info["m"];
        var date = info["d"];
        var day = info["wd"];
        var weekNum = info["wn"]-dataData[startID]["wn"];
        var holiday = info["h"];
        var weeksInAMonth = dataData[dataIndex[(month%12+1)]]["wn"]-info["wn"];

        // re-assign months' block
        if(currMonth != month) {
            blockMonthArray[currMonth].weekStart = weekNum;
            blockMonthArray[currMonth].pos = calculateCircleBlockPosition(weekNum, weeksInAMonth, 7, totalWeeks, radius);
            currMonth++;
        }
        // re-assign days' block
        var basecolor = calendarParams.grey[3];
        if(day === 0 || day === 6) { // weekend
            basecolor = calendarParams.grey[1];
        } else if(month%2 === 0) { // light/dark between each month
            basecolor = calendarParams.grey[2];
        }

        var fillcolor = basecolor;
        var calendarOptions = calendarParams.calendarOptions.calendarOpt;
        var tooltipLayer = calendarParams.tooltipText[0];
        var tooltipText = calendarParams.tooltipText[1];
        var holidayCheck = false;
        var holidayText = null;
        if(holiday != null) {
            for(var m = 0; m < calendarOptions.length; m++){
                if(holiday[calendarOptions[m].name] != null && calendarOptions[m].on) {
                    fillcolor = calendarOptions[m].textcolor;
                    holidayCheck = true;
                    // create tooltip text
                    holidayText = calendarParams.dayNameShort[day]+" "+date+" "+
                        calendarParams.monthNameShort[month-1]+" "+year+": "+holiday[calendarOptions[m].name];
                    break;
                }
            }
        }
        var lociArray = iArray;

        blockDateArray[lociArray].textdate = date;
        blockDateArray[lociArray].pos = calculateCircleBlockPosition(weekNum, 1, day, totalWeeks, radius);

        if(holidayCheck && holidayText != null) {
            blockDateArray[lociArray].on("mouseover mousemove", function() {
                var mousePos = calendarParams.canvasSpace2.getMousePosition();
                tooltipText.setPosition(mousePos.x+10, mousePos.y-20);
                tooltipText.setText(holidayText);
                tooltipText.show();

                var mouseovergrey = calendarParams.grey[6];
                blockDateArray[lociArray].fillcolor = mouseovergrey;
                blockDateArray[lociArray].textcolor = textColor(mouseovergrey);
                layerRedraw(tooltipLayer);
                // layerRedraw(circleLayer);
            });
            blockDateArray[lociArray].on("mouseout", function() {
                tooltipText.hide();
                blockDateArray[lociArray].fillcolor = fillcolor;
                blockDateArray[lociArray].textcolor = textColor(fillcolor);
                layerRedraw(tooltipLayer);
                // layerRedraw(circleLayer);
            });

            blockDateArray[lociArray].fillcolor = fillcolor;
            blockDateArray[lociArray].textcolor = textColor(fillcolor);
        } else {
            blockDateArray[lociArray].fillcolor = basecolor;
            blockDateArray[lociArray].textcolor = textColor(basecolor);

            blockDateArray[lociArray].off("mouseover mousemove");
            blockDateArray[lociArray].off("mouseout");
        }
        iArray++;

        // moon phase stuff
        var singleBlock = (radius/calendarParams.shells);
        var moonday = dataData[i]["hindu_date"]["day"];
        var locWeek = currWeek;
        if(moonday === 1) { // new moon
            blockMoonArray[locWeek].image = calendarParams.moonImages[0];
        } else if(moonday === 15) {  // full moon
            blockMoonArray[locWeek].image = calendarParams.moonImages[5];
        } else {
            blockMoonArray[locWeek].image = calendarParams.moonImages[2];
        }
        if(moonday === 1 || moonday === 15 || moonday === 8 || moonday === 22) {
            var pos = calculateCircleBlockPosition(weekNum, 1, 9, totalWeeks, radius);
            var thisSin = Math.sin((pos.start+pos.end)/2);
            var thisCos = Math.cos((pos.start+pos.end)/2);
            var thisR = (pos.outer+pos.inner)/2;
            // moon's position
            blockMoonArray[locWeek].setPosition(arcx+(thisR*thisCos)-singleBlock/2, arcy+(thisR*thisSin)-singleBlock/2);
            blockMoonArray[locWeek].setSize(singleBlock, singleBlock);
            currWeek++;
        }

        // solstice
        if((month === 3 && date === 20) ||
            (month === 6 && date === 21) ||
            (month === 9 && date === 22) ||
            (month === 12 && date === 21)) {
            seasonWeeks.push(weekNum-tmpWeeks);
            tmpWeeks = weekNum;
        }
    }());}
    seasonWeeks.push(totalWeeks-tmpWeeks);

    while(iArray < blockDateArray.length) {
        blockDateArray[iArray].setPosition(0,0);
        blockDateArray[iArray].off("mouseover mousemove");
        iArray++;
    }

    var tmp = 0;
    for(var i = 0; i < seasonWeeks.length; i++) {
        blockSeasonArray[i].pos = calculateCircleBlockPosition(tmp, seasonWeeks[i], 8, totalWeeks, radius);
        tmp = tmp+seasonWeeks[i];
    }

    while(currWeek < 54){
        blockMoonArray[currWeek].setSize(0, 0);
        currWeek++;
    }

}

let howManyTime = 0
// this week -> from total weeks
// week block -> to draw multiple block (ex. month)
// this day -> mon-sun to determine where the block in that week
function calculateCircleBlockPosition(thisWeek, weekBlocks, day, totalWeeks, radius) {
    console.log(`${thisWeek}:${day} ${weekBlocks} ${totalWeeks} ${radius} ${++howManyTime}`)
    const pi = Math.PI;
    // maybe the padding in the middle
    var shellsDist = parseInt(calendarParams.shellsDist); // make the circle blocks further from center
    // shells = rings of the calendar
    var shells = parseInt(calendarParams.shells); // 3:sol, 4-10:days, 11:month, 13:moon
    var thisDay = day+4+shellsDist;
    var moveblock = 3;
    
    // sols = seasons
    var rotateSols = pi*3/2+((pi/(totalWeeks/2))*moveblock);

    var startAngle = (pi/(totalWeeks/2) * thisWeek) + rotateSols;
    var endAngle = (pi/(totalWeeks/2) * thisWeek) + ((pi/(totalWeeks/2))*weekBlocks) + rotateSols;
    var outerRadius = (radius/shells * thisDay);
    var innerRadius = (radius/shells * thisDay) - ((radius/shells));

    return {
        outer: outerRadius,
        inner: innerRadius,
        start: startAngle,
        end: endAngle
    };
}