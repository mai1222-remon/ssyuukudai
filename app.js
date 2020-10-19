
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
console.log(studentList[0]['hobby']);*/

let studentList = [
{name:'島尻　龍一',frome:'沖縄',hobby:'ゴルフ'},
{name:'澤岻剛毅',frome:'沖縄県',hobby:'サッカー'},
{name:'矢地道代',frome:'神奈川県',hobby:'旅行'},
{name:'大田勝己',frome:'沖縄　宮古島',hobby:'ゲーム'},
{name:'前本理央',frome:'沖縄',hobby:'バスケ'},
{name:'伊藝舞子',frome:'沖縄',hobby:'食べ歩き'}
];
console.log(studentList[0].hobby);
console.log(studentList[1].frome);
console.log(studentList[2].hobby);



