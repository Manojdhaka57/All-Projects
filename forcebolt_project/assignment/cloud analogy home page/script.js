let addressObj={
    'india':{
        'noida':{
            'name':'Noida Address',
            'address':'A-17, Ground Floor, Sector-63, Noida-201307',
            'phone':'Ph : +91 (7428) 535324',
            'email':'Email : info@cloudanalogy.com'
        },
        
        'kurukshetra':{
            'name':'Kurukshetra Address',
            'address':'SCO 144, 1st Floor Sector 3 Market, Kurukshetra, Haryana - 136118',
            'phone':'Ph : +91 (93064) 08258',
            'email':'Email : info@cloudanalogy.com'
        },
        'mohali' :{
            'name':'Mohali / Chandigarh Address',
            'address':'7th floor SEBIZ square IT park. C6- sector 67 Mohali',
            'phone':'Ph : +919041241192',
            'email':'Email : info@cloudanalogy.com'
        }
    },
    uk:{
        'name':'UK Address',
        'address':'406A Birmingham Road, Sutton Coldfield, West Midlands, England, B72 1YJ',
        'phone':'Ph : +44 121 288 9424',
        'email': "Ph : info@cloudanalogy.com"
    },
    'australia':{
        'name':'Australia Address',
        'address':'Level 14, 309 Kent Street, Sydney, NSW 2000, Australia',
        'phone':'Ph : +61-2-8006-8515',
        'email':'Ph : info@cloudanalogy.com'
    },
    'canada':{
        'name':'Canada Address',
        'address':'301-220 Brew Street, Port Moody, BC V3H0H6.',
        'phone':'Ph : +61-2-8006-8515',
        'email':'Ph : info@cloudanalogy.com'
    },
    'usa':{
        'name':'USA Address',
        'address':'8 The Green, suite 5648, Dover, Delaware - 19901 USA',
        'phone':'Ph : +1 (415) 830-3899',
        'email':'Ph : info@cloudanalogy.com'
    }
}
let btns= document.querySelector('.contries');
let countryarray=['USA','India','Canada','UK','Australia']
for(let i=0;i<countryarray.length;i++){
    let btn=document.createElement('button');
    btn.classList.add('contries-btn')
    btn.innerText=`${countryarray[i]}`;

    let addressSet=document.querySelector('.office-address')
    btn.addEventListener('click',()=>{
        let adS=btn.innerText;
        if(adS.toLowerCase()=='india'){
            let indiaaddress=''
                for(let i of ['noida','kurukshetra','mohali']){
                    indiaaddress+=`<div><h3>${addressObj[adS.toLowerCase()][i]['name']}</h3>
                <h4>${addressObj[adS.toLowerCase()][i]['address']}</h4>    
                <h4>${addressObj[adS.toLowerCase()][i]['phone']}</h4>
                <h4>${addressObj[adS.toLowerCase()][i]['email']}</h4></div>`;
        
                }
                addressSet.innerHTML=indiaaddress
               
            
        }
        else{
            addressSet.innerHTML=`<div><h3>${addressObj[adS.toLowerCase()]['name']}</h3>
                <h4>${addressObj[adS.toLowerCase()]['address']}</h4>    
                <h4>${addressObj[adS.toLowerCase()]['phone']}</h4>
                <h4>${addressObj[adS.toLowerCase()]['email']}</h4></div>`;
        
        }
        
    })
    btns.appendChild(btn);
}
//slideshow
var showIndex=1;
        showSlide(showIndex);
        function plusSlide(n){
            showSlide(showIndex+=n)
        }
        function showSlide(n){
            var i;
            var x=document.getElementsByClassName('slide');
            if(n>x.length){
                showIndex=1;
            }  
            if(n<1){
                showIndex=x.length;
            }
            for(i=0;i<x.length;i++){
                x[i].style.display='none';
            }
            x[showIndex-1].style.display='block';
        }
        var slidePartnerIndex=0;
        showPartnerSlide();
        
        function showPartnerSlide(){
            var slides=document.getElementsByClassName('slide-partner');
            for(var i=0;i<slides.length;i++){
                slides[i].style.display='none';
            }
            for(let i=0;i<4;i++){
                slidePartnerIndex++;
                if(slidePartnerIndex>slides.length){
                     slidePartnerIndex=1;
                }
            
                slides[slidePartnerIndex-1].style.display='block';
                
            }
            
            setTimeout(showPartnerSlide,1000);
        }