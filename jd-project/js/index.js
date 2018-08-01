for (var i = 0; i < 2; i++) {
	var LunBoChild=my$('LunBoTop').children[i];
	LunBoChild.setAttribute('index',i);
	LunBoChild.onmouseover=LunBoClick;
}

function LunBoClick() {
	//使所有的body隐藏，并让事件源显示
	var body=my$('LunBoBody');
	for (var i = 0; i < body.children.length; i++) {
		body.children[i].className='news-b hide';
	}
	var index=parseInt(this.getAttribute('index'));
	body.children[index].className='news-b';
	//移动小红条
	var line=my$('LunBoTop').children[3];
	//line.style.left=this.offsetLeft-3+'px';
	animate(line,this.offsetLeft-3);
}

my$('box').onmouseover=function(){
	var arr=my$('arr');
	for (var i = 0; i < arr.children.length; i++) {
		arr.children[i].style.display='block';
	}
	clearInterval(timerId);
}

my$('box').onmouseout=function(){
	var arr=my$('arr');
	for (var i = 0; i < arr.children.length; i++) {
		arr.children[i].style.display='none';
	}
	setInterval(Interval, 1500);

}
var roundPoints=my$('roundPoint').getElementsByTagName('li');
roundPoints[0].style.backgroundColor='#f10215';
var index=0;
var timerId = setInterval(Interval, 1500);
function Interval() {
    for (var i = 0; i < roundPoints.length; i++) {
    	roundPoints[i].style.backgroundColor='';
    	if (i===0) {continue;}
    }
    if(index>7){
    	index=0;
    }
    roundPoints[index].style.backgroundColor='#f10215';
    index++;
}