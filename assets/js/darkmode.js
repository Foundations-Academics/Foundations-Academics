var dark = false;
var all = document.getElementsByTagName("*");

function toggleDarkMode(){
	document.getElementById('background_video').classList.toggle('video-overlay-darkmode');
	document.getElementById('main_header').classList.toggle('main-header-darkmode');
	document.getElementById('feature_1').classList.toggle('features-content-darkmode');
	document.getElementById('feature_2').classList.toggle('features-content-darkmode');
	document.getElementById('feature_3').classList.toggle('features-content-darkmode');
	document.getElementById('feature_1_h4').classList.toggle('features-content-darkmode-h4');
	document.getElementById('feature_2_h4').classList.toggle('features-content-darkmode-h4');
	document.getElementById('feature_3_h4').classList.toggle('features-content-darkmode-h4');
	document.getElementById('main_logo').classList.toggle('main-logo-darkmode');
	document.getElementById('menu').classList.toggle('main-menu-darkmode-li-a');
	document.getElementById('sub_menu_about').classList.toggle('sub-menu-darkmode');
	document.getElementById('section_2').classList.toggle('section-2-darkmode');
	document.getElementById('top').style.marginBottom = '0px';
	
	document.getElementById('why_choose_us').classList.toggle('darkmode-black-text');
	document.getElementById('why_choose_us').classList.toggle('darkmode-black-border');
	
	
	//document.getElementById('ui-id-1').classList.toggle('darkmode-black-text');
	//document.getElementById('ui-id-2').classList.toggle('darkmode-black-text');
	//document.getElementById('ui-id-3').classList.toggle('darkmode-black-text');

	if (dark){		
		document.getElementById('bg-video').style.display = 'block';
		document.getElementById('bg-video-darkmode').style.display = 'none';
	}
	else{
		document.getElementById('bg-video').style.display = 'none';
		document.getElementById('bg-video-darkmode').style.display = 'block';
	}
	dark = !dark;
}