//axios import buraya gelecek
import axios from 'axios';
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek

const data = {
sorgu: "46.154.79.229",
durum: "OK",
kıta: "Asia",
ülke: "Turkey",
ülkeKodu: "TR",
ülkebayrağı: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdsIYg2a_7j5r4PDwRBMG5dpuZuxUuEHCejxjgzNPKbNAfnG8Ax3G3t4TI4I5e3auXiQ&usqp=CAU",
bölge: "07",
bölgeAdı: "Antalya",
şehir: "Antalya",
zip: "07090",
enlem: 36.9156,
boylam: 30.6538,
saatdilimi: "Europe/Istanbul",
parabirimi: "TRY",
isp: "Vodafone Turkey",
organizasyon: "Vodafone Telekomunikasyon A.S.",
as: "AS15897 Vodafone Telekomunikasyon A.S."

};

const container= document.querySelector(".cards");

function mineIp(g){
	const cardBasligi= document.createElement("div");
	cardBasligi.setAttribute("class", "card");

	const bayrak = document.createElement("img");
	cardBasligi.appendChild(bayrak);
	bayrak.src=g.ülkebayrağı;

	const info= document.createElement("div");
	info.setAttribute("class", "card-info");
	cardBasligi.appendChild(info);

	const title = document.createElement("h3");
	title.classList.add("ip");
	title.textContent=g.sorgu;
	info.appendChild(title);

	const ulke= document.createElement("p");
	ulke.classList.add("ulke");
	info.appendChild(ulke);
	ulke.textContent = `${g.ülke} (${g.ülkeKodu})`;

	const enlemBoylam= document.createElement("p");
	info.appendChild(enlemBoylam);
	enlemBoylam.textContent =  `Enlem: ${g.enlem} Boylam: ${g.boylam})`;

const city= document.createElement("p");
info.appendChild(city);
city.textContent =`Şehir: ${g.şehir}`;

const time = document.createElement("p");
info.appendChild(time);
time.textContent =`Saat dilimi: ${g.saatdilimi}`;

const para= document.createElement("p");
info.appendChild(para);
para.textContent= `Para birimi: ${g.parabirimi}`;

const isp =document.createElement("p");
info.appendChild(isp);
isp.textContent= `ISP: ${g.isp}`;

return cardBasligi;

}
container.appendChild(mineIp(data));


const connection = async function() {
	await ipAdresimiAl();
	await axios({
	  method: "get",
	  url: "https://apis.ergineer.com/ipgeoapi/"+ benimIP,
	})
	  .then(function (response) {
		return response.data;
	  })
	  .then(function (a) {
		container.appendChild(benimIP(a));
	  });
};

connection();