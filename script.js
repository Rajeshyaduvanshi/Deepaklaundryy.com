// EDIT THIS: your WhatsApp number with country code, digits only (e.g. 919876543210)
var PHONE="918795849824";
var N={press:"Press (Iron)",wash:"Dhulai (Wash)",dye:"Rangai (Dye)",dry:"Dry Cleaning"};
var R={
press:["Pant|पैंट|10","Shirt|शर्ट|10","Safari suit|सफारी-सूट|40","Saree, silk plain|साड़ी सिल्क सादा|50","Saree, zari / moti|साड़ी जरी, मोती|70","Blouse|ब्लाउज|10","Punjabi suit (3 pc)|पंजाबी सूट ३ पीस|30","Anarkali (3 pc)|अनारकली ३ पीस|80","Coat-pant|कोट-पैंट|Ask us","Jacket|जाकेट|60–100","Tie|टाई|15","Bedsheet, single|चादर सिंगल बेड|40","Bedsheet, double|चादर डबल बेड|50","Pillow cover|पिलो कवर|10","Curtain, single|परदा सिंगल|80","Curtain, double|परदा डबल|100","Pathani suit (2 pc)|पठानी सूट २ पीस|30","Saree roll press|साड़ी रोल प्रेस|80"],
wash:["Pant|पैंट|70","Shirt|शर्ट|70","Bedsheet, single|चादर सिंगल बेड|100","Bedsheet, double|चादर डबल बेड|150–200","Pillow cover|पिलो कवर|60","Curtain, single|परदा सिंगल|200–300","Curtain, double|परदा डबल|300–500","Sofa cover|सोफा कवर|100–150","Cushion cover|कुशन कवर|70–100","Towel|तौलिया|Ask us","Mattress cover|गद्दा खोल|Ask us","Carpet (per ft)|कारपेट पर फुट|45"],
dye:["Pant|पैंट|220","Shirt|शर्ट|220","Saree|साड़ी|420","Punjabi suit|पंजाबी सूट|500","Blouse|ब्लाउज|200","Dupatta|दुपट्टा|180"],
dry:["Pant|पैंट|80","Shirt|शर्ट|80","Safari suit|सफारी-सूट|200","Saree, terrylene|साड़ी टेरोलीन|220","Saree, zari|साड़ी जरी|250–300","Blouse|ब्लाउज|80","Punjabi suit (3 pc)|पंजाबी सूट ३ पीस|240","Anarkali|अनारकली|200–300","Coat-pant|कोट-पैंट|350–400","Jacket|जाकेट|150–200","Tie|टाई|70","Sherwani|शेरवानी|300–400","Bedsheet, single|चादर सिंगल बेड|150","Bedsheet, double|चादर डबल बेड|200","Curtain, single|परदा सिंगल|250–350","Curtain, double|परदा डबल|350–600","Sofa cover|सोफा कवर|150–200","Cushion cover|कुशन कवर|70–100","Blanket|ब्लैंकेट|400+"]};
function show(k){
  document.querySelectorAll("#tabs button").forEach(function(x){x.className=x.dataset.k===k?"on":""});
  document.getElementById("rt").innerHTML=R[k].map(function(s){var a=s.split("|"),p=a[2];if(/^\d/.test(p))p="₹"+p;return "<tr><td>"+a[0]+" <span class=\"time\">"+a[1]+"</span></td><td>"+p+"</td></tr>"}).join("");
}
Object.keys(N).forEach(function(k){var x=document.createElement("button");x.textContent=N[k];x.dataset.k=k;x.onclick=function(){show(k)};document.getElementById("tabs").appendChild(x)});
show("press");
var ok=/^\d{11,13}$/.test(PHONE);
var link=ok?"https://wa.me/"+PHONE:"#book";
document.getElementById("wa").href=link;
if(ok){var t=document.getElementById("tel");t.href="tel:+"+PHONE;t.textContent="+91 87958 49824";}
document.getElementById("f").addEventListener("submit",function(e){
  e.preventDefault();
  var v=function(i){return document.getElementById(i).value.trim()};
  var msg="New laundry booking\nName: "+v("n")+"\nPhone: "+v("p")+"\nAddress: "+v("a")+"\nService: "+v("s")+"\nPickup time: "+v("t")+(v("m")?"\nNote: "+v("m"):"");
  if(!ok){alert("Booking number is not set yet. Please add your WhatsApp number in the page code.");return;}
  window.open(link+"?text="+encodeURIComponent(msg),"_blank");
});
