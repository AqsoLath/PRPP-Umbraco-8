
let navbar = document.getElementById('navbar');
let hamburger = document.querySelector('.navbar-hamburger i')
let sidebar = document.getElementById('sidebar');
let x = document.querySelector('.sidebar-x i');
let bgHitam = document.getElementById('bg-hitam');
let tombolNaik = document.getElementById('tombol-naik');

let homeTanggungjawab = document.querySelector('.home-tanggungjawab');
let homeBisnis = document.querySelector('.home-bisnis');
let karir = document.querySelector('.karir');



let tentangNavbarArrowdown = document.getElementById('tentang-navbar-arrowdown');
let bisnisNavbarArrowdown = document.getElementById('bisnis-navbar-arrowdown');

let tentangNavbarLink = document.getElementById('tentang-navbar-link')
let bisnisNavbarLink = document.getElementById('bisnis-navbar-link')


hamburger.addEventListener('click', function(){
	sidebar.classList.add("active");
	bgHitam.classList.add('active')
})

x.addEventListener("click", function(){
	sidebar.classList.remove("active")
	bgHitam.classList.remove("active")
})

bgHitam.addEventListener("click", function(){
	sidebar.classList.remove("active")
	bgHitam.classList.remove("active")
})

window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        navbar.classList.add("scrolled");
        tombolNaik.style.display = "block";
    } 
    else {
        navbar.classList.remove("scrolled");
        tombolNaik.style.display = "none"
    }
};

$(function(){
    var current = location.pathname;
    // const pageNumber = $("#navbar .navbar-list").attr("data-page-number");
    const pageNumber = document.querySelector("meta[name=page-number]").content;
    const navList = document.querySelectorAll(".navbar-menu .navbar-list a")

    // console.log(pageNumber)

    switch(pageNumber){
        case '1':
            navList[0].classList.add('active')
            break;
        case '2':
            navList[1].classList.add('active')
            break;
        case '3':
            navList[2].classList.add('active')
            break;
        case '4':
            navList[3].classList.add('active')
            break;
        case '5':
            navList[4].classList.add('active')
            break;
        case '6':
            navList[5].classList.add('active')
            break;
    }

    $('.navbar-menu .navbar-list a').each(function(){
        var $this = $(this);


        // console.log($this.text())
        // console.log(current)
        // if the current path is like this link, make it active
        // if(current == "/" && $this.text() == "Home"){
        //     $this.addClass('active');
        // }else if(current.includes('/tentang-kami/') && $this.text() == "Tentang Kami"){
        //     $this.addClass('active')
        // }else if(current.includes('/bisnis/') && $this.text() == "Bisnis"){
        //     $this.addClass('active')
        // }else if((current.includes('/berita/') && $this.text() == "Media & Informasi") || (current.includes('/pengumuman/') && $this.text() == "Media & Informasi"))  {
        //     $this.addClass('active')
        // }else if(current != "/" && $this.attr('href').indexOf(current) !== -1){
        //     $this.addClass('active');
        // }
    })
})

$(function(){
    var currentSidebar = location.pathname;
    $('.sidebar-menu .sidebar-list a').each(function(){
        var $this = $(this);

        // console.log($this.text())
        // console.log(current)
        // if the current path is like this link, make it active
        if(currentSidebar == "/" && $this.text() == "Home"){
            $this.addClass('active');
        }else if(currentSidebar.includes('/tentang-kami/') && $this.text() == "Tentang Kami"){
            $this.addClass('active')
        }else if(currentSidebar.includes('/bisnis/') && $this.text() == "Bisnis"){
            $this.addClass('active')
        }else if((currentSidebar.includes('/berita/') && $this.text() == "Media & Informasi") || (currentSidebar.includes('/pengumuman/') && $this.text() == "Media & Informasi"))  {
            $this.addClass('active')
        }else if(currentSidebar != "/" && $this.attr('href').indexOf(currentSidebar) !== -1){
            $this.addClass('active');
        }
    })
})

// let a = 1;
// if(a == 0){
//     console.log("a adalah 0")
// }else if(a == 1){
//     console.log("a adalah 1")
// }else{
//     console.log("a bukan 0")
// }
// console.log("Test")


$(function(){
    var currentTentang = location.pathname;
    $('.tentang-navbar-link a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(currentTentang) !== -1){
            $this.addClass('active');
        }
    })
})

$(function(){
    var currentBisnis = location.pathname;
    $('.bisnis-navbar-link a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(currentBisnis) !== -1){
            $this.addClass('active');
        }
    })
})


$(document).ready(function(){

    $(".year-2016").addClass("active")
    
    $(".year-2016").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active")

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2016").css({"display": "block"})
    })

    $(".year-2017").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active")

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2017").css({"display": "block"})    
    })

    $(".year-2018").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active") 

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2018").css({"display": "block"})   
    })

    $(".year-2019").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active") 

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2019").css({"display": "block"})   
    })

    $(".year-2020").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active")    

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2020").css({"display": "block"})
    })

    $(".year-2021").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active")    

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2021").css({"display": "block"})
    })

    $(".year-2022").click(function(){
        $(".year").removeClass("active")
        $(this).addClass("active") 

        $(".journey-content-year").css({"display": "none"})
        $(".journey-2022").css({"display": "block"})   
    })

})


$(document).ready(function(){
    $(".tombol-medan").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-medan").css({'display' : "block"})
    })
    $(".tombol-pekanbaru").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-pekanbaru").css({'display' : "block"})
    })
    $(".tombol-padang").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-padang").css({'display' : "block"})
    })
    $(".tombol-jambi").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-jambi").css({'display' : "block"})
    })
    $(".tombol-batam").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-batam").css({'display' : "block"})
    })
    $(".tombol-palembang").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-palembang").css({'display' : "block"})
    })
    $(".tombol-dki-jakarta").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-dki-jakarta").css({'display' : "block"})
    })
    $(".tombol-banten").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-banten").css({'display' : "block"})
    })
    $(".tombol-bandung").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-bandung").css({'display' : "block"})
    })
    $(".tombol-surabaya").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-surabaya").css({'display' : "block"})
    })
    $(".tombol-banjarmasin").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-banjarmasin").css({'display' : "block"})
    })
    $(".tombol-balikpapan").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-balikpapan").css({'display' : "block"})
    })
    $(".tombol-makassar").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-makassar").css({'display' : "block"})
    })
    $(".tombol-manado").click(function(){
        $(".tombol-daerah").removeClass("active")
        $(this).addClass("active")
        $(".kantor-daerah").css({'display' : "none"})
        $(".kantor-manado").css({'display' : "block"})
    })

    
$(document).ready(function(){
    $("#tombol-direksi").click(function (){
        $("#tombol-direksi").addClass("active")
        $("#tombol-komisaris").removeClass("active")

        $(".tentang-manajemen-komisaris").css({'display' : 'none'})
        $(".tentang-manajemen-direksi").css({'display' : 'block'})
    })

    $("#tombol-komisaris").click(function (){
        $("#tombol-komisaris").addClass("active")
        $("#tombol-direksi").removeClass("active")

        $(".tentang-manajemen-direksi").css({'display' : 'none'})
        $(".tentang-manajemen-komisaris").css({'display' : 'block'})

    })
})



  // $('.').hover(
  //   function(){
  //       $.css({'background-image': "url(../img/new-image.png)"})
  //  },
  //   function(){
  //       $(this).parent().css({'background-image': "url(../img/original-image.png)"})
  //   }
  // );
})


// const mediaQueryTablet = window.matchMedia('(max-width: 768px)')

// if (mediaQueryTablet.matches) {
//   // Then trigger an alert
//   alert('Media Query Matched!')
// }else{
//     alert("blok")
// }

// Create a condition that targets viewports less than 576px wide
const mediaQueryTablet = window.matchMedia('(max-width: 576px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if(homeTanggungjawab && homeBisnis){
    if (e.matches) {
        homeTanggungjawab.classList.remove("container")
        homeBisnis.classList.remove("container")
      }else{
        homeTanggungjawab.classList.add("container")
        homeBisnis.classList.add("container")
      }
  }

  if(karir){
    if (e.matches) {
      karir.classList.remove("container")
    }else{
      karir.classList.add("container")
    }
  }
  
}
// Register event listener
mediaQueryTablet.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQueryTablet)


function naikKeAtas(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ======================= //
// ===  NAVBAR TENTANG === //
// ======================= //

tentangNavbarArrowdown && tentangNavbarArrowdown.addEventListener("click", function(){
    tentangNavbarLink.classList.toggle("active")
})

bisnisNavbarArrowdown && bisnisNavbarArrowdown.addEventListener("click", function(){
    bisnisNavbarLink.classList.toggle("active")
})

// ====================
 // === LIGHTSLIDER ===
 // ===================

 // $(document).ready(function() {
 //    $('.autoWidth').lightSlider({
 //        autoWidth:true,
 //        loop:false,
 //        onSliderLoad: function() {
 //            $('.autoWidth').removeClass('cS-hidden');
 //        } 
 //    });  
 //  });


 // ============
 // === AOS ===
 // ============

  AOS.init({
    offset: 150
  });


 // =================
 // === RECAPTCHA ===
 // =================

 $(document).ready(function(){
    // $(".kontak-form").on("submit", function(event){
    //     var recaptcha = $("#g-recaptcha-response").val();
    //     event.preventDefault();
    //     if(recaptcha == ""){
    //         $(".recaptcha-warning").css({"display": "block"})
    //     }else{
    //         console.log("captcha terceklis")
    //         $(".recaptcha-warning").css({"display": "none"})
    //         $(".modal-pesan-terkirim").css({"display": "block"})
    //     }
    // })

    if ($(".umbraco-forms-submitmessage")[0]){
        $(".modal-pesan-terkirim").css({"display": "block"})
    }

    $(".bg-hitam-transparent-modal").click(function(){
        $(".modal-pesan-terkirim").css({"display": "none"})
    })

     $(".modal-pesan-terkirim-x").click(function(){
        $(".modal-pesan-terkirim").css({"display": "none"})
    })
 })


 // ============
 // === GSAP ===
 // ============

 const timeline = gsap.timeline({defaults: {duration: 4}, repeat: -1})

 timeline
    .to(".header-truk", { x: "-40vw", delay: "0.5"})
    .to(".header-truk", {opacity: 0, duration: "0.5"})
    .from(".header-burung", {opacity: 0, x: "-20vw", y: 100, width: "10%", delay: "0.5"}, 0)
    .to(".header-burung", {opacity: 0, duration: "0.5"})
    .from(".header-awan", {x: "-20vw", delay: "0.5"}, 0)
    .to(".header-awan", {opacity: 0, duration: "0.5"}, "5.8")
    .from(".header-awan-kecil", {x: "15vw", delay: "0.5"}, 0)
    .to(".header-awan-kecil", {opacity: 0, duration: "0.5"}, "5.8")


 // ==============
 // === SWIPER ===
 // ==============

    // let menu = ["01", "02", "03"]

     const swiperHomeMainSlider = new Swiper('.swiper-home-main-slider', {
      speed:1000,
      loop: true,
      autoplay:{
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      }
    });

    const namaBapak = document.querySelectorAll(".tentang-manajemen-direksi .manajemen-head h3")
    const posisiBapak = document.querySelectorAll(".tentang-manajemen-direksi .manajemen-head h4")
    const fotoBapak = document.querySelectorAll(".tentang-manajemen-direksi .manajemen-gambar img")

    const textNamaBapak = [];
    const textPosisiBapak = [];
    const srcFotoBapak = [];

    
    for (let i = 0; i < namaBapak.length; i++) {
        textNamaBapak.push(namaBapak[i].innerText)
    }

    for (let i = 0; i < posisiBapak.length; i++) {
        textPosisiBapak.push(posisiBapak[i].innerText)
    }
    
    for (let i = 0; i < fotoBapak.length; i++) {
        srcFotoBapak.push(fotoBapak[i].src)
    }

    // console.log(textNamaBapak)
    // console.log(textPosisiBapak)
    // console.log(srcFotoBapak)

    const bapakbapak = {
        namaBapak: textNamaBapak,
        posisiBapak: textPosisiBapak,
        fotoBapak: srcFotoBapak,
    }

     // const namaBapak = ["agus", "Aceng", "kokom", "Wanto", "Udin"]
    const swiperManajemenContainer = new Swiper('.swiper-manajemen-container', {
        speed:400,
        loop: true,
      // autoplay:{
      //   delay: 2000,
      //   disableOnInteraction: false
      // },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `
            <span class="${className}">
                    <li class="bapak-list">
                        <div class="bapak-list-thumbnail" style="background-image: url('${bapakbapak.fotoBapak[index]}')"></div>
                        <h4>${bapakbapak.namaBapak[index]}</h4>
                        <h5>${bapakbapak.posisiBapak[index]}</h5>
                    </li>
            </span>
            `;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });


    const namaBapak2 = document.querySelectorAll(".tentang-manajemen-komisaris .manajemen-head h3")
    const posisiBapak2 = document.querySelectorAll(".tentang-manajemen-komisaris .manajemen-head h4")
    const fotoBapak2 = document.querySelectorAll(".tentang-manajemen-komisaris .manajemen-gambar img")

    const textNamaBapak2 = [];
    const textPosisiBapak2 = [];
    const srcFotoBapak2 = [];

    
    for (let i = 0; i < namaBapak2.length; i++) {
        textNamaBapak2.push(namaBapak2[i].innerText)
    }

    for (let i = 0; i < posisiBapak2.length; i++) {
        textPosisiBapak2.push(posisiBapak2[i].innerText)
    }
    
    for (let i = 0; i < fotoBapak2.length; i++) {
        srcFotoBapak2.push(fotoBapak2[i].src)
    }

    // console.log(textNamaBapak2)
    // console.log(textPosisiBapak2)
    // console.log(srcFotoBapak2)

    const bapakbapak2 = {
        namaBapak: textNamaBapak2,
        posisiBapak: textPosisiBapak2,
        fotoBapak: srcFotoBapak2,
    }

     // const namaBapak = ["agus", "Aceng", "kokom", "Wanto", "Udin"]
    const swiperManajemenContainer2 = new Swiper('.swiper-manajemen-container-2', {
        speed:400,
        loop: true,
      // autoplay:{
      //   delay: 2000,
      //   disableOnInteraction: false
      // },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `
            <span class="${className}">
                    <li class="bapak-list">
                        <div class="bapak-list-thumbnail" style="background-image: url('${bapakbapak2.fotoBapak[index]}')"></div>
                        <h4>${bapakbapak2.namaBapak[index]}</h4>
                        <h5>${bapakbapak2.posisiBapak[index]}</h5>
                    </li>
            </span>
            `;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    const swiperHomeMedia = new Swiper('.home-media', {
      // Optional parameters
      // slidesPerView: 1,
      loop: true,
      spaceBetween: 100,

      breakpoints:{
        768:{
            slidesPerView: 3,
            enabled: false, 
            spaceBetween: 32
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


    const swiperHomePengadaan = new Swiper('.home-pengadaan', {
      // Optional parameters
      // slidesPerView: 1,
      loop: true,
      spaceBetween: 100,

      breakpoints:{
        768:{
            slidesPerView: 3,
            enabled: false, 
            spaceBetween: 32
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

    const swiperHomeBisnis = new Swiper('.home-bisnis', {
      // Optional parameters
      // slidesPerView: 1,
      loop: true,
      spaceBetween: 100,


      breakpoints:{
        768:{
            slidesPerView: 3,
            enabled: false, 
            spaceBetween: 32
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

    const swiperHomeTanggungjawab = new Swiper('.home-tanggungjawab', {
      // Optional parameters
      // slidesPerView: 1,
      loop: true,
      spaceBetween: 100,
      slideWidth:120,

      breakpoints:{
        768:{
            slidesPerView: 3,
            enabled: false, 
            spaceBetween: 32
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });


    const swiperKarir = new Swiper('.karir', {
      // Optional parameters
      // slidesPerView: 1,
      loop: true,
      spaceBetween: 100,
      slideWidth:120,

      breakpoints:{
        768:{
            slidesPerView: 3,
            enabled: false, 
            spaceBetween: 32
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

    const swiperBeritaSlider = new Swiper('.berita-slider', {
      // Optional parameters
      slidesPerView: 1.2,
      // loop: true,
      spaceBetween: 32,

      breakpoints:{
        280:{
            slidesPerView: 1.3,
        },
        300:{
            slidesPerView: 1.4,
        },
        320:{
            slidesPerView: 1.5,
        },
        340:{
            slidesPerView: 1.6,
        },
        360:{
            slidesPerView: 1.7,
        },
        380:{
            slidesPerView: 1.8,
        },
        400:{
            slidesPerView: 1.9,
        },
        420:{
            slidesPerView: 2,
        },
        440:{
            slidesPerView: 2.1,
        },
        460:{
            slidesPerView: 2.2,
        },
        480:{
            slidesPerView: 2.3,
        },
        500:{
            slidesPerView: 2.4,
        },
        530:{
            slidesPerView: 2.5,
        },
        576:{
            slidesPerView: 2.5,
        },
        768:{
            slidesPerView: 3.3,
        },
        992:{
            slidesPerView: 3.5
        },
        1200:{
            slidesPerView: 4.2
        }
      },




      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

const swiperPengumumanSlider = new Swiper('.pengumuman-slider', {
      // Optional parameters
      slidesPerView: 1.2,
      // loop: true,
      spaceBetween: 32,

      breakpoints:{
        280:{
            slidesPerView: 1.3,
        },
        300:{
            slidesPerView: 1.4,
        },
        320:{
            slidesPerView: 1.5,
        },
        340:{
            slidesPerView: 1.6,
        },
        360:{
            slidesPerView: 1.7,
        },
        380:{
            slidesPerView: 1.8,
        },
        400:{
            slidesPerView: 1.9,
        },
        420:{
            slidesPerView: 2,
        },
        440:{
            slidesPerView: 2.1,
        },
        460:{
            slidesPerView: 2.2,
        },
        480:{
            slidesPerView: 2.3,
        },
        500:{
            slidesPerView: 2.4,
        },
        530:{
            slidesPerView: 2.5,
        },
        576:{
            slidesPerView: 2.5,
        },
        768:{
            slidesPerView: 3.3,
        },
        992:{
            slidesPerView: 3.5
        },
        1200:{
            slidesPerView: 4.2
        }
      },





      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

const swiperLaporantahunanSlider = new Swiper('.laporantahunan-slider', {
      // Optional parameters
      slidesPerView: 1.2,
      // loop: true,
      spaceBetween: 32,

      breakpoints:{
        280:{
            slidesPerView: 1.3,
        },
        300:{
            slidesPerView: 1.4,
        },
        320:{
            slidesPerView: 1.5,
        },
        340:{
            slidesPerView: 1.6,
        },
        360:{
            slidesPerView: 1.7,
        },
        380:{
            slidesPerView: 1.8,
        },
        400:{
            slidesPerView: 1.9,
        },
        420:{
            slidesPerView: 2,
        },
        440:{
            slidesPerView: 2.1,
        },
        460:{
            slidesPerView: 2.2,
        },
        480:{
            slidesPerView: 2.3,
        },
        500:{
            slidesPerView: 2.4,
        },
        530:{
            slidesPerView: 2.5,
        },
        576:{
            slidesPerView: 2.5,
        },
        768:{
            slidesPerView: 3.3,
        },
        992:{
            slidesPerView: 3.5
        },
        1200:{
            slidesPerView: 4.2
        }
      },





      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });







    const swiperBapakbapakList = new Swiper('.bapakbapak-list', {
      // Optional parameters
      slidesPerView: 3,
      loop: true,
      spaceBetween: 0,
      centeredSlides: true,
      
      breakpoints:{
        768:{
            slidesPerView: 5,
        },
        992:{
          slidesPerView:7
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });