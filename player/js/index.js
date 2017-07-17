var audio = document.getElementById("audio");
var songs = function(){
	var arr = Array.prototype.slice.call(audio.getElementsByTagName("source"));
	return arr;
}();
var songStatus = "stop";
var nowSong = "鹿 be free";
var pics={
	"鹿 be free":{url:"https://p1.music.126.net/3WtOYUST7vItM9nOg_xO7w==/18769762999434849.jpg"},
	"Dog Days Are Over":{url:"https://p1.music.126.net/usXBbxJMgehCh_OzOljAmA==/2300178325325356.jpg"},
	"荒岛":{url:"https://p1.music.126.net/Eg4cy0_HIF2nrX2gMCsWkQ==/17967119509636556.jpg"}
};

var lyrics={
	"鹿 be free":{url:"https://img.xiami.net/lyric/25/1795426525_1482983366_6808.lrc"},
	"Dog Days Are Over":{url:"https://img.xiami.net/lyric/67/1771730167_1451542172_2210.lrc"},
	"荒岛":{url:"https://img.xiami.net/lyric/32/1774471632_1458008988_9829.lrc"}
    // "锦鲤抄":"[00:33.47]蝉声陪伴着行云流浪[00:37.41]回忆开始后安静遥望远方[00:41.34]荒草覆没的古井枯塘[00:45.79]匀散一缕过往[00:49.73]晨曦惊扰了陌上新桑[00:53.78]风卷起庭前落花穿过回廊[00:57.82]浓墨追逐着情绪流淌[01:01.77]染我素衣白裳[01:07.45]阳光微凉琴弦微凉[01:11.50]风声疏狂人间仓皇[01:15.77]呼吸微凉心事微凉[01:19.70]流年匆忙对错何妨[01:24.73]你在尘世中辗转了千百年[01:28.78]却只让我看你最后一眼[01:32.93]火光描摹容颜燃尽了时间[01:36.98]别留我一人孑然一身凋零在梦境里面[02:02.26]萤火虫愿将夏夜遗忘[02:05.87]如果终究要挥别这段时光[02:09.81]裙袂不经意沾了荷香[02:13.86]从此坠入尘网[02:18.34]屐齿轻踩着烛焰摇晃[02:22.17]所有喧嚣沉默都描在画上[02:26.11]从惊蛰一路走到霜降[02:30.37]泪水凝成诗行[02:36.06]灯花微凉笔锋微凉[02:40.00]难绘虚妄难解惆怅[02:43.61]梦境微凉情节微凉[02:48.31]迷离幻象重叠忧伤[02:53.01]原来诀别是因为深藏眷恋[02:57.39]你用轮回换我枕边月圆[03:01.21]我愿记忆停止在枯瘦指尖[03:05.48]随繁花褪色尘埃散落渐渐地渐渐搁浅[03:14.56]多年之后我又梦到那天[03:21.89]画面遥远恍惚细雨绵绵[03:30.31]如果来生太远寄不到诺言[03:34.35]不如学着放下许多执念[03:38.62]以这断句残篇向岁月吊唁[03:42.56]老去的当年水色天边有谁将悲欢收殓[03:51.09]蝉声陪着行云流浪[03:54.81]回忆的远方[03:59.81]",
    // "房间":"[00:01.80]房间-刘瑞琦[00:02.05]作词：刘瑞琦[00:02.24]作曲：刘瑞琦[00:18.55]要用多少个晴天交换多少张相片[00:25.99]还记得锁在抽屉里面的滴滴点点[00:33.24]小而温馨的空间因为有你在身边[00:40.67]就不再感觉到害怕大步走向前[00:47.05]一天一月一起一年像不像永远[00:53.36]我们在同一个屋檐下[00:56.55]写着属于我们未来的诗篇[01:04.67]在这温暖的房间[01:08.42]我于是慢慢发现[01:12.74]相聚其实就是一种缘[01:16.69]多值得纪念[01:19.32]在这温暖的房间[01:23.63]我们都笑得很甜[01:27.32]一切停格在一瞬间[02:05.58]要用多少个晴天交换多少张相片[02:13.02]还记得锁在抽屉里面的滴滴点点[02:20.33]小而温馨的空间因为有你在身边[02:27.77]就不再感觉到害怕大步走向前[02:34.16]一天一月一起一年像不像永远[02:40.48]我们在同一个屋檐下[02:43.47]写着属于我们未来的诗篇[02:51.90]在这温暖的房间[02:55.53]我于是慢慢发现[02:59.84]相聚其实就是一种缘[03:03.72]多值得纪念[03:06.47]在这温暖的房间[03:10.65]我们都笑得很甜[03:14.47]一切停格在一瞬间[03:23.34]停在记忆里边最美的画面[03:30.59]因为有你在的每天[03:38.03]在这温暖的房间[03:41.65]我于是慢慢发现[03:46.16]相聚其实就是一种缘[03:49.91]多值得纪念[03:52.66]在这温暖的房间[03:56.84]我们都笑得很甜[04:00.53]一切停格在一瞬间[04:06.34]",
    // "岁月神偷": "[00:01.00]岁月神偷-金玟岐[00:06.00] [00:07.50]歌词编辑：薰风习习[00:12.50]QQ：980920533[00:17.50] [00:19.04]能够握紧的就别放了[00:23.09]能够拥抱的就别拉扯[00:27.22]时间着急的冲刷着[00:31.65]剩下了什么[00:35.18]原谅走过的那些曲折[00:39.14]原来留下的都是真的[00:43.22]纵然似梦啊半醒着[00:47.35]笑着哭着都快活[00:51.69]谁让[00:54.73]时间是让人猝不及防的东西[00:58.95]晴时有风阴有时雨[01:02.95]争不过朝夕又念着往昔[01:06.93]偷走了青丝却留住一个你[01:11.00]岁月是一场有去无回的旅行[01:15.01]好的坏的都是风景[01:18.98]别怪我贪心只是不愿醒[01:22.98]因为你只为你愿和我一起[01:27.00]看云淡风轻[01:31.14] [01:42.91]时间是让人猝不及防的东西[01:46.92]晴时有风阴有时雨[01:50.91]争不过朝夕又念着往昔[01:54.92]偷走了青丝却留住一个你[01:58.89]岁月是一场有去无回的旅行[02:02.88]好的坏的都是风景[02:06.96]别怪我贪心只是不愿醒[02:10.86]因为你只为你愿和我一起[02:16.32]看云淡风轻[02:20.07]",
    // "空に光る": "[00:01.00]暂无歌词哦[00:06.00]",
    // "Stuttering":"[00:00.58]stuttering-FefeDobson[00:10.87][00:10.87]There'sawholelotofthingsthatIwillforgive[00:13.50]我能放弃很多事情[00:13.50]ButIjustcan'ttakealiar[00:16.11]但就是不能撒谎[00:16.11]Iwasbyyoursidetilltheveryend[00:18.83]我一直在你身边直到生命终结[00:18.83]Tilyoupushedmeinthefire[00:21.46]肿瘤浸润淋巴细胞，是你把我推向火坑[00:21.46]Itriedtobelieveyou[00:24.27]我试图相信你[00:24.27]Butsomethingiswrong[00:26.99]但有些事情是错的[00:26.99]Youwon'tlookinmyeyes[00:29.78]你不再看着我的眼睛[00:29.78]Tellmewhat'sgoingon[00:32.59]告诉我你在做什么[00:32.59]It'syouandmeagainsttheworld[00:35.07]我和你与全世界为敌[00:35.07]That'swhatyousaid[00:36.29]这是你说的话[00:36.29]That'swhatyousaid[00:37.91]这是你说的话[00:37.91]Ifyoucan'tbehonestwithme[00:40.54]如果你不能对我忠诚[00:40.54]ThenI'mafraidthisistheend[00:43.22]恐怕这就是终点了[00:43.22]Hurryup'Hurryup[00:46.40]快点，快点[00:46.40]Ifyoueverreallycaredaboutme[00:48.82]如果你真的在乎我[00:48.82]Tellthetruth'giveitup[00:51.84]告诉我实情，且放弃它[00:51.84]You'restillguilty[00:54.05]你仍然感到内疚[00:54.05]Causeyou'restuttering[00:55.09]因为你结巴[00:55.09]Ohohohohayayay[00:59.39]哦....，啊......[00:59.39]Yeahyou'restuttering[01:00.38]你在结巴[01:00.38]Ohohohohayayay[01:04.73]哦....，啊......[01:04.73]Yeahyou'restuttering[01:05.80]你在结巴[01:05.80]Secondsturnintominutesnow[01:08.05]由秒开始变分钟了[01:08.05]Butyouwon'tgivemeananswer[01:10.77]但你仍没有给我一个答案[01:10.77]Youcantellmethis[01:12.24]你可以告诉我[01:12.24]Youcantellmethat[01:13.64]你可以告诉我[01:13.64]Butdon'tsayyoudon'tremmeber[01:16.18]不要说你不想回忆[01:16.18]CauseIknowyoubetter[01:18.99]因为我很了解你[01:18.99]Thanyouknowyourself[01:21.68]比你更了解你自己[01:21.68]Sodon'tsayI'mcrazy[01:24.43]不要说我疯了[01:24.43]Iknowverywell[01:27.27]我很了解你[01:27.27]It'syouandmeagainsttheworld[01:29.81]我和你与全世界为敌[01:29.81]That'swhatyousaid[01:30.92]这是你说的话[01:30.92]That'swhatyousaid[01:32.63]这是你说的话[01:32.63]Ifyoucan'tbehonestwithme[01:35.24]如果你不能对我忠诚[01:35.24]ThenI'mafraidthisistheend[01:37.87]恐怕这就是终点了[01:37.87]Hurryup'Hurryup[01:41.02]快点，快点[01:41.02]Ifyoueverreallycaredaboutme[01:43.30]如果你真的在乎我[01:43.30]Tellthetruth'giveitup[01:46.27]告诉我实情，且放弃它[01:46.27]You'restillguilty[01:48.34]你仍然感到内疚[01:48.34]Causeyou'restuttering[01:49.51]因为你在结巴[01:49.51]Ohohohohayayay[01:53.77]哦....，啊......[01:53.77]Yeahyou'restuttering[01:54.82]因为你在结巴[01:54.82]Ohohohohayayay[01:59.25]哦....，啊......[01:59.25]Yeahyou'restuttering[02:00.42]因为你在结巴[02:00.42]Ohohohohayayay[02:04.55]哦....，啊......[02:04.55]Yeahyou'restuttering[02:05.84]因为你在结巴[02:05.84]Ohohohohayayay[02:10.09]哦....，啊......[02:10.09]Yeahyou'restuttering[02:11.55]因为你在结巴[02:11.55]Idon'twannahearyou'resorrynow[02:16.71]我不想听你说抱歉[02:16.71]Thebestthingyoucandoforme[02:19.68]对我来说你能做的就是[02:19.68]Isjustspititout[02:22.14]放弃它[02:22.14]Idon'twannahearyou'resorrynow[02:27.16]我不想听你说抱歉[02:27.16]Stopstutteringyourwords[02:29.88]停止你那结巴的语言[02:29.88]It'sonlymakingyoulookworse[02:32.44]这只会让你变得更糟[02:32.44]Hurryup'Hurryup[02:35.48]快点，快点[02:35.48]Ifyoueverreallycaredaboutme[02:38.02]如果你真的在乎我[02:38.02]Tellthetruth'giveitup[02:40.81]告诉我实情，且放弃它[02:40.81]You'restillguilty[02:42.78]你仍然感到内疚[02:42.78]Causeyou'restuttering[02:44.13]因为你在结巴[02:44.13]Ohohohohayayay[02:48.22]哦....，啊......[02:48.22]Yeahyou'restuttering[02:49.32]因为你在结巴[02:49.32]Ohohohohayayay[02:53.73]哦....，啊......[02:53.73]Causeyou'restuttering[02:54.94]因为你在结巴[02:54.94]Ohohohohayayay[02:59.25]哦....，啊......[02:59.25]Yeahyou'restuttering[03:00.45]因为你在结巴[03:00.45]Ohohohohayayay[03:05.13]哦....，啊......[03:05.13]Causeyou'restuttering[03:07.13]因为你在结巴[03:07.13]",
    // "君だったら":"[00:01.00]暂无歌词哦[00:06.00]"
};

var pattern = {
	order: function(){
		var i = seekNum();
		console.log(i);
		if(i === songs.length - 1){
			return;
		}
		audio.src = songs[i+1].src;
		nowSong = songs[i+1].title;
		songStatus = "stop";
		play();
		console.log("1");
	},
	random: function(){
		var randomNum = parseInt(Math.random()*songs.length);
		if(audio.src === songs[randomNum].src){
			randomNum = parseInt(Math.random()*songs.length);
		}
		audio.src = songs[randomNum].src;
		nowSong = songs[randomNum].title;
		console.log(randomNum);
		songStatus = "stop";
		play();
		console.log("2");
	},
	listloop: function(){
		pattern.order();
		var i = seekNum();
		if (i === songs.length-1){
			audio.src = songs[0].src;
			nowSong.title = songs[0].title;
			songStatus = "stop";
			play();
			console.log("3");
		}
	},
	onesloop: function(){
		songStatus = "stop";
		play();
		console.log("4");
	}
};

//load
function loadMusic(){
	var listContent = document.getElementById("list-content");
	var frag = document.createDocumentFragment();
	var songCount = document.getElementById("song-count");

	listContent.innerHTML = "";

	for(let i = 0; i < songs.length; i++){
		var tr = document.createElement("tr");
		tr.innerHTML = "<td class='song-name'><a href='#'>" + songs[i].title + "</a></td><td class='singer'>" +
				songs[i].getAttribute("singer") + "</td><td class='delete-song' id='delete-song'><a href='#' class='delete-button'>" +
				"×</a></td>";
		frag.appendChild(tr);
		requestLyrics(lyrics[songs[i].title]);
	}

	listContent.appendChild(frag);
	songCount.innerText = songs.length;
}

function requestLyrics(song) {
	var url = song["url"];
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4){
			if(xhr.status == 200 || xhr.status > 200 && xhr.status < 300 || xhr.status == 304){
				song.originLyrics=xhr.response;
			}
		}
	};
	xhr.send(null);
}

function deleteAll(){
	var bn = document.getElementsByClassName("clear-all")[0];
	bn.onclick = function(){
		songs = [];
		loadMusic();
		audio.src = "";
		nowSong="";
		songStatus = "stop";
		play();
	}
}

function deleteItem(){
	var bns = document.getElementsByClassName("delete-button");
	var songCount = document.getElementById("song-count");

	for(let i = 0; i < bns.length; i++){
		bns[i].onclick = function(){
			var name = this.parentNode.parentNode.getElementsByTagName("a")[0].innerText;
			songCount.innerText = songCount.innerText - 1;
			for(let j = 0; j < songs.length; j++){
				if(songs[j].title == name){
					if(songs[j].src == audio.src){
						changeSong("next");
					}
					songs.splice(j,1)
				}
			}
			this.parentNode.parentNode.innerHTML = "";
		}
	}
}
//play
function play(){
	var bn = document.getElementById("btn-stop");
	var lyrics=document.getElementById("lyrics");
	if(songStatus === "stop"){
		audio.play();
		processControl();

		if(nowSong!=""){
			lyrics.innerText="";
			lyricsSynchronization(nowSong);           //歌词开始同步
		}

		songStatus = "play";
		bn.style.backgroundImage = "url(img/icon/play-ac.png)";
		bn.style.backgroundPosition = "0px 1px;"
	}else{
		audio.pause();
		songStatus = "stop";
		bn.style.backgroundImage = "url(img/icon/stop-normal.png)";
		bn.onmouseover = function(){
			bn.style.backgroundImage = "url(img/icon/stop-ac.png)"
		}
	}

	var songPic = document.getElementById("song-pic");
	songPic.innerHTML = "<img src=" + pics[nowSong]["url"] + "/>";

	var songName = document.getElementById("c-song-name");
	songName.innerText = songs[seekNum()].title;
}

var playbn = document.getElementById("btn-stop");
playbn.onclick = function(){
	play();
};

function changeSong(a){
	var nowSrc = audio.src;
	var i = seekNum();
	if (a === "next") {
		if (i === songs.length-1) {
			audio.src = songs[0].src;
			nowSong= songs[0].title;
		}else{
			audio.src = songs[i+1].src;
			nowSong= songs[i+1].title;
		}
		songStatus = 'stop';
		play();
	}
	else{
		if (i === 0) {
			audio.src = songs[songs.length-1].src;
			nowSong= songs[songs.length-1].title;
		}else{
			audio.src = songs[i-1].src;
			nowSong = songs[i-1].title;
		}
		songStatus = 'stop';
		play();
	}
}

var nextbn = document.getElementById("btn-next");
nextbn.onclick = function(){
	changeSong("next");
};

var lastbn = document.getElementById("btn-last");
lastbn.onclick = function(){
	changeSong("last");
};

function seekNum(){
	var nowSrc = audio.src;
	for(let i = 0; i < songs.length; i++){
		if(songs[i].src === nowSrc){
			return i;
		}
	}
}

function soundControl(){
	var sc = document.getElementById("soundrange");
	sc.addEventListener("change", function(){
		change();
	});
	function change(){
		audio.volume = sc.value;
		console.log(audio.volume);
	}
}

function clickPlay(){
	var names = document.getElementsByClassName("song-name");
	for(let i = 0; i < names.length; i++){
		names[i].firstChild.onclick = function(){
			audio.src = songs[i].src;
			nowSong = songs[i].title;
			songStatus = "stop";
			play();
		}
	}
}

function changePattern(){
	var patterns = document.getElementsByClassName("pattern-control")[0].getElementsByTagName("a");
	for(let i = 0; i < patterns.length; i++){
		patterns[i].onclick = function(){
			var id = this.id;
			audio.onended = function(){
				pattern[id]();
			}
		}
	}
}

function lyricsFormatting(name){
	var originLyrics=lyrics[name]["originLyrics"];
	// console.log(originLyrics);
	var regexp1=/\d+(?=\:)/g;
	var regexp2=/\d+\.\d+(?=\])/g;
	var regexp3=/\[\d+:\d+.\d+\](.*)/g;
	var minuteGroup=originLyrics.match(regexp1);
	var secondGroup=originLyrics.match(regexp2);
	var lyricGroup=originLyrics.match(regexp3).map(function (x) {
		x.match(regexp3);
		return RegExp.$1;
	});
	var lyricsCount=originLyrics.match(regexp1).length;
	var result=[];

	for(let i=0;i<lyricsCount-1;i++){
		var second=parseFloat(minuteGroup[i]*60) + parseFloat(secondGroup[i]);
		var arr={"time":second,"lyric":lyricGroup[i]};
		result[i]=arr;
	}
	return {"result":result,"lyricsCount":lyricsCount - 1};
}


function lyricsSynchronization(name){                  //也可以用this的吧，调那个歌词对象。
	var formattingLyrics=lyricsFormatting(name).result;
	var lyricsCount=lyricsFormatting(name).lyricsCount;
	var lyricsDom=document.getElementById("lyrics");
	audio.addEventListener("timeupdate",listener,false);

	function listener(){
		for(let i=0;i<lyricsCount;i++){
			if (audio.currentTime >= formattingLyrics[i]["time"]) {
				lyricsDom.innerText = formattingLyrics[i]["lyric"];
			}
		}
	}
}

loadMusic();
deleteAll();
deleteItem();
soundControl();
clickPlay();
changePattern();
audio.onended = function(){
	pattern.order();
};

function processControl(){
	var songTime = document.getElementById("song-time");
	var slider = document.querySelector(".slider");
	var buffer = document.querySelector(".buffer");
	var processor=document.querySelector(".processor");
	var controller=document.querySelector(".controller");
	var sw = slider.offsetWidth;
	var timer2=window.setInterval(function(){
		var dw = audio.duration;
		var ct = audio.currentTime;
		var ds = 400/audio.duration;
		var th=parseInt((audio.currentTime-audio.duration)/60);
		var tm=parseInt((audio.duration-audio.currentTime)%60);
		if(th==0) th="-"+th;
		if(tm<10) tm="0"+tm;
		songTime.innerText =th+":"+tm;
		processor.style.width = ds*ct +"px";
		controller.style.left = ds*ct*0.97 +"px";
		buffer.style.width = ds*ct*5 +"px";
		if(ds*ct*5>=400){
			buffer.style.width="400px";
		}
		if(ct==sw){
			window.clearInterval(timer2);
		}
	},500);
	slider.addEventListener("mousedown",function(e){
		processor.style.width = e.offsetX+"px";
		controller.style.left = e.offsetX*0.97+"px";
		audio.currentTime = (audio.duration/400)*(e.offsetX);
		var th=parseInt((audio.currentTime-audio.duration)/60);
		var tm=parseInt((audio.duration-audio.currentTime)%60);
		if(th==0) th="-"+th;
		if(tm<10)tm="0"+tm;
		songTime.innerText =th+":"+tm;
	});
}
