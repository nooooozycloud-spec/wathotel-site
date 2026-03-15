/**
 * @author ability consultant
 * @version 1.01
 */

function setYproSearch(){

	var nInitDay       = 1;
	var nInitPer       = 1;
	var nInitStay      = 1;
	var nInitRoom      = 1;
	var nInitBudgetMin = 0;
	var nInitBudgetMax = 0;

	var nOpMaxYear = 2;
	var nOpMaxPer  = 10;
	var nOpMaxStay = 10;
	var nOpMaxRoom = 10;

	var arrBudget = [
		[1, "5,000円"],
		[2, "6,000円"],
		[3, "7,000円"],
		[4, "8,000円"],
		[5, "9,000円"],
		[6, "10,000円"],
		[7, "12,000円"],
		[8, "14,000円"],
		[9, "16,000円"],
		[10, "18,000円"],
		[11, "20,000円"],
		[12, "30,000円"],
		[13, "40,000円"],
		[14, "50,000円"]
	];

	var thisDate = new Date();
	thisDate.setTime( thisDate.getTime() + nInitDay * 1000 * 60 * 60 * 24 );

	var thisYear = thisDate.getFullYear();
	var thisMonth = thisDate.getMonth()+1;
	var thisDay = thisDate.getDate();	

	var arrYear = getYproElementsByClass( "obj_year" );
	if( arrYear != undefined && arrYear != null ){
		for( var nCnt = 0; nCnt < arrYear.length; nCnt++ ){
			var objYear = arrYear[ nCnt ];
			if( objYear != undefined ){
				while( objYear.lastChild ){
					objYear.removeChild(objYear.lastChild);
				}
				for(optionYear = thisYear; optionYear < thisYear+nOpMaxYear; optionYear++){
					selectLn = objYear.options.length;
					objYear.options[selectLn] = new Option(optionYear, optionYear);
					if( optionYear == thisDay ){
						objYear.options[selectLn].selected = true;
					}
				}
				if(window.attachEvent){
					objYear.attachEvent('onchange', updateYproDaySelect);
				}
				else{
					objYear.addEventListener('change', updateYproDaySelect, false);
				}
			}
		}
	}

	var arrMonth = getYproElementsByClass( "obj_month" );
	if( arrMonth != undefined && arrMonth != null ){
		for( var nCnt = 0; nCnt < arrMonth.length; nCnt++ ){
			var objMonth = arrMonth[ nCnt ];
			if( objMonth != undefined ){
				while( objMonth.lastChild ){
					objMonth.removeChild(objMonth.lastChild);
				}
				for(var optionMonth = 1; optionMonth < 13; optionMonth++){
					var selectLn = objMonth.options.length;
					objMonth.options[selectLn] = new Option(optionMonth, optionMonth);
					if( optionMonth == thisMonth ){
						objMonth.options[selectLn].selected = true;
					}
				}
				if(window.attachEvent){
					objMonth.attachEvent('onchange', updateYproDaySelect);
				}
				else{
					objMonth.addEventListener('change', updateYproDaySelect, false);
				}
			}
		}
	}

	var arrDay = getYproElementsByClass( "obj_day" );
	if( arrDay != undefined && arrDay != null ){
		for( var nCnt = 0; nCnt < arrDay.length; nCnt++ ){
			var objDay = arrDay[ nCnt ];
			if( objDay != undefined ){
				while( objDay.lastChild ){
					objDay.removeChild(objDay.lastChild);
				}
				for(var optionDay = 1; optionDay < 32; optionDay++){
					var selectLn = objDay.options.length;
					objDay.options[selectLn] = new Option(optionDay, optionDay);
					if( optionDay == thisDay ){
						objDay.options[selectLn].selected = true;
					}
				}
				if(window.attachEvent){
					objDay.attachEvent('onchange', updateYproDaySelect);
				}
				else{
					objDay.addEventListener('change', updateYproDaySelect, false);
				}
			}
		}
	}

	var arrPerNum = getYproElementsByClass( "obj_per_num" );
	if( arrPerNum != undefined && arrPerNum != null ){
		for( var nCnt = 0; nCnt < arrPerNum.length; nCnt++ ){
			var objPerNum = arrPerNum[ nCnt ];
			if( objPerNum != undefined ){
				while( objPerNum.lastChild ){
					objPerNum.removeChild(objPerNum.lastChild);
				}
				for(var optionPerNum = 1; optionPerNum <= nOpMaxPer; optionPerNum++){
					var selectLn = objPerNum.options.length;
					objPerNum.options[selectLn] = new Option(optionPerNum, optionPerNum);
					if( optionPerNum == nInitPer ){
						objPerNum.options[selectLn].selected = true;
					}
				}
			}
		}
	}

	var arrStayNum = getYproElementsByClass( "obj_stay_num" );
	if( arrStayNum != undefined && arrStayNum != null ){
		for( var nCnt = 0; nCnt < arrStayNum.length; nCnt++ ){
			var objStayNum = arrStayNum[ nCnt ];
			if( objStayNum != undefined ){
				while( objStayNum.lastChild ){
					objStayNum.removeChild(objStayNum.lastChild);
				}
				for(optionStayNum = 1; optionStayNum <= nOpMaxStay; optionStayNum++){
					var selectLn = objStayNum.options.length;
					objStayNum.options[selectLn] = new Option(optionStayNum, optionStayNum);
					if( optionStayNum == nInitStay ){
						objStayNum.options[selectLn].selected = true;
					}
				}
			}
		}
	}

	var arrRoomNum = getYproElementsByClass( "obj_room_num" );
	if( arrRoomNum != undefined && arrRoomNum != null ){
		for( var nCnt = 0; nCnt < arrRoomNum.length; nCnt++ ){
			var objRoomNum = arrRoomNum[ nCnt ];
			if( objRoomNum != undefined ){
				while( objRoomNum.lastChild ){
					objRoomNum.removeChild(objRoomNum.lastChild);
				}
				for(optionRoomNum = 1; optionRoomNum <= nOpMaxRoom; optionRoomNum++){
					var selectLn = objRoomNum.options.length;
					objRoomNum.options[selectLn] = new Option(optionRoomNum, optionRoomNum);
					if( optionRoomNum == nInitRoom ){
						objRoomNum.options[selectLn].selected = true;
					}
				}
			}
		}
	}

	var arrBudgetMin = getYproElementsByClass( "obj_budget_min" );
	if( arrBudgetMin != undefined && arrBudgetMin != null ){
		for( var nCnt = 0; nCnt < arrBudgetMin.length; nCnt++ ){
			var objBudgetMin = arrBudgetMin[ nCnt ];
			if( objBudgetMin != undefined ){
				for(optionBudgetMin = 0; optionBudgetMin < arrBudget.length; optionBudgetMin++){
					var selectLn = objBudgetMin.options.length;
					objBudgetMin.options[selectLn] = new Option(arrBudget[optionBudgetMin][1], arrBudget[optionBudgetMin][0]);
					if( arrBudget[optionBudgetMin][0] == nInitBudgetMin ){
						objBudgetMin.options[selectLn].selected = true;
					}
				}
			}
		}
	}

	var arrBudgetMax = getYproElementsByClass( "obj_budget_max" );
	if( arrBudgetMax != undefined && arrBudgetMax != null ){
		for( var nCnt = 0; nCnt < arrBudgetMax.length; nCnt++ ){
			var objBudgetMax = arrBudgetMax[ nCnt ];
			if( objBudgetMax != undefined ){
				for(optionBudgetMax = 0; optionBudgetMax < arrBudget.length; optionBudgetMax++){
					var selectLn = objBudgetMax.options.length;
					objBudgetMax.options[selectLn] = new Option(arrBudget[optionBudgetMax][1], arrBudget[optionBudgetMax][0]);
					if( arrBudget[optionBudgetMax][0] == nInitBudgetMax ){
						objBudgetMax.options[selectLn].selected = true;
					}
				}
			}
		}
	}
	updateYproDaySelect();
}

function updateYproDaySelect(){
	var arrSearch = getYproElementsByClass( "obj_search" );
	if( arrSearch != undefined && arrSearch != null ){
		for( var nCnt = 0; nCnt < arrSearch.length; nCnt++ ){
			var objSearch = arrSearch[ nCnt ];
			if( objSearch != undefined ){
				var objYear = objSearch.obj_year;
				var objMonth = objSearch.obj_month;
				var objDay = objSearch.obj_day;
				if( objYear != undefined && objMonth != undefined && objDay != undefined ){
					var nYear = objYear.options[ objYear.selectedIndex ].value;
					var nMonth = objMonth.options[ objMonth.selectedIndex ].value;
					var nDay = objDay.options[ objDay.selectedIndex ].value;
					var nDayNum = new Date( nYear, nMonth, 0).getDate();
					while( objDay.lastChild ){
						objDay.removeChild(objDay.lastChild);
					}
					for(var optionDay = 1; optionDay < nDayNum + 1; optionDay++){
						var selectLn = objDay.options.length;
						objDay.options[selectLn] = new Option(optionDay, optionDay);
						if( optionDay == nDay ){
							objDay.options[selectLn].selected = true;
						}
					}
					if( nDay > nDayNum ){
						objDay.selectedIndex = ( nDayNum ) - 1;
					}
				}
			}
		}
	}
}

function getYproElementsByClass( sSearchClass ){

	var ii;
	var jj;
	var arrClassElements = new Array();
	if( document.all ){
		var objAllElements = document.all;
		for( ii = 0, jj = 0; ii < objAllElements.length; ii++ ){
			if( objAllElements[ii].className == sSearchClass ){
				arrClassElements[jj] = objAllElements[ii];
				jj++;
			}
		}
	}
	else if( document.getElementsByTagName ){
		var objAllElements = document.getElementsByTagName("*");
		for( ii = 0, jj = 0; ii < objAllElements.length; ii++ ){
			if( objAllElements[ii].className == sSearchClass ){
				arrClassElements[jj] = objAllElements[ii];
				jj++;
			}
		}
	}
	else{
		return null;
	}
	return arrClassElements;
}

function setYproKeywordForRadio( sHiddenName, sHiddenVaue ){
	eval( "document.ypro_search." + sHiddenName + "_value.value='" + sHiddenVaue + "'" );
}

function setYproKeywordForSelect( objSelect, sHiddenName ){
	var sOptionValue = objSelect.options[ objSelect.selectedIndex ].value;
	eval( "document.ypro_search." + sHiddenName + "_value.value='" + sOptionValue + "'" );
}

function setYproKeyword( sHiddenName, sHiddenVaue ){
	eval( "document.ypro_search." + sHiddenName + "_value.value='" + sHiddenVaue + "'" );
}

function addYproDateToUrl( sUrl, nDayNum ){

	var sUrl1;
	var sUrl2;
	var sRetUrl;
	var nIndex;

	var thisDate = new Date();
	thisDate.setTime( thisDate.getTime() + nDayNum * 1000 * 60 * 60 * 24 );

	var thisYear = thisDate.getFullYear();
	var thisMonth = thisDate.getMonth()+1;
	var thisDay = thisDate.getDate();	

	nIndex = sUrl.indexOf( "#" );
	if( nIndex >= 0 ){
		sUrl1 = sUrl.substring( 0, nIndex );
		sUrl2 = sUrl.substring( nIndex, sUrl.length );
	}
	else{
		sUrl1 = sUrl;
		sUrl2 = "";
	}

	if( sUrl1.indexOf( "?" ) >= 0 ){
		sRetUrl = sUrl1 + "&s_y=" + thisYear + "&s_m=" + thisMonth + "&s_d=" + thisDay + sUrl2;
	}
	else{
		sRetUrl = sUrl1 + "?s_y=" + thisYear + "&s_m=" + thisMonth + "&s_d=" + thisDay + sUrl2;
	}

	return sRetUrl;

}

if(window.attachEvent){
	window.attachEvent('onload', setYproSearch);
}
else{
	window.addEventListener('load', setYproSearch, false);
}
