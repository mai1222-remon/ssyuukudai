
console.log("hello");

console.log('セブ島'+'留学');

console.log('① 5 たす 8='+String(5 + 8));
console.log(4 - 2);
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);

let country ="japan";
console.log(country);
country='Philippines';
console.log(country);


let name = 'NexSeed';
console.log(name);  //結果 NexSeed
let schoolName = 'NexSeed';
console.log('私の所属は'+ schoolName + 'です');
console.log(`私の所属先は、${schoolName}です`);

let applications = ['LINE', 'facebook','Twitter']
console.log(applications);
applications.push('Instagram');
console.log(applications[3]);

let capitalCities = { japan: 'Tokyo',Philippines: 'Manila'};
console.log(capitalCities); 
capitalCities.America = 'Washington';
console.log(capitalCities.America);
console.log(capitalCities['America']);

/*let studentList = [
{name:'Seedくん',frome:'セブ島',hobby:'サーフィン'},
{name:'Eriko ichinohe',frome:'青森',hobby:'旅'}];
console.log(studentList[0].hobby);
consoΩΩle.log(studentList[0]['hobby']);*/
let studentList=[
{name:'島尻　龍一',frome:'沖縄',hobby:'ゴルフ'},
{name:'澤岻剛毅',frome:'沖縄県',hobby:'サッカー'},
{name:'矢地道代',frome:'神奈川県',hobby:'旅行'},
{name:'大田勝己',frome:'沖縄　宮古島',hobby:'ゲーム'},
{naΩme:'前本理央',frome:'沖縄',hobby:'バスケ'},
{name:'伊藝舞子',frome:'沖縄',hobby:'食べ歩き'}
];
console.log(studentList[0].name);
console.log(studentList[1].frome);
console.log(studentList[2].hobby);

let weight =116;

if(weight >= 200){
console.log('ヘビー級');
}else if(weight >= 115 && weight <= 118){
	console.log('バンダム級');
}else{
	console.log('その他の階級');

}
//変数greetingに任意の文字列を代入してください。
//変数greetingに任意の文字列を代入してください。
//greetingがgood morningの場合は英語
//それ以外の場合は?
//とconsoleに表示してください。

let greeting = 'マーヨンガビー';

switch (greeting){
	case 'おはよう':
	console.log('日本語');
	break;
	case 'good morning':
		console.log('英語');
	break;
	default:
	console.log('？');
	break;
}
/*
	1から10までの数字を表示するプログラム
	変数jに1を代入する
	jが10以下の間だけ繰り返す(条件式)
	jを毎回+1する
*/
for (let i = 1;i <= 10; i++){
	console.log('繰り返しますよ');
	console.log(i);
}
//以下の条件にあうwhile文を書いてください。

//変数kに2を代入する
//kが20以下の間繰り返す
//1回ごとにkを1増やす
//繰り返しのたびにkをconsoleに表示する

for(let i = 2; i <=20; i++){
	console.log('繰り返しますよ');
	console.log(i);

}
let studentList2=[
{name:'島尻　龍一',frome:'沖縄',hobby:'ゴルフ'},
{name:'澤岻剛毅',frome:'沖縄県',hobby:'サッカー'},
{name:'矢地道代',frome:'神奈川県',hobby:'旅行'},
{name:'大田勝己',frome:'沖縄　宮古島',hobby:'ゲーム'},
{name:'前本理央',frome:'沖縄',hobby:'バスケ'},
{name:'伊藝舞子',frome:'沖縄',hobby:'食べ歩き'}
];
for(let i=0; i <= 5; i++){
	console.log(studentList2[i].name);
}
//1 - 30までの数値で、3の倍数ではないものを表示するプログラム
//3の倍数の時だけ処理が不要なため、continueでスキップする。
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
for (let i = 1; i <= 50; i++){
	if(i % 5 === 0){
	console.log(i)
}else{
	continue;
}