let navbar = document.getElementById("navbar");
let hamburger = document.querySelector(".navbar-hamburger i");
let sidebar = document.getElementById("sidebar");
let x = document.querySelector(".sidebar-x i");
let bgHitam = document.getElementById("bg-hitam");
let tombolNaik = document.getElementById("tombol-naik");

let homeTanggungjawab = document.querySelector(".home-tanggungjawab");
let homeBisnis = document.querySelector(".home-bisnis");
let karir = document.querySelector(".karir");

let tentangNavbarArrowdown = document.getElementById(
  "tentang-navbar-arrowdown"
);
let bisnisNavbarArrowdown = document.getElementById("bisnis-navbar-arrowdown");

let tentangNavbarLink = document.getElementById("tentang-navbar-link");
let bisnisNavbarLink = document.getElementById("bisnis-navbar-link");

hamburger.addEventListener("click", function () {
  sidebar.classList.add("active");
  bgHitam.classList.add("active");
});

x.addEventListener("click", function () {
  sidebar.classList.remove("active");
  bgHitam.classList.remove("active");
});

bgHitam.addEventListener("click", function () {
  sidebar.classList.remove("active");
  bgHitam.classList.remove("active");
});

window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add("scrolled");
    tombolNaik.style.display = "block";
  } else {
    navbar.classList.remove("scrolled");
    tombolNaik.style.display = "none";
  }
};

$(function () {
  const pageNumber = document.querySelector("meta[name=page-number]").content;
  const navList = document.querySelectorAll(".navbar-menu .navbar-list a");

  // console.log(pageNumber)

  switch (pageNumber) {
    case "1":
      navList[0].classList.add("active");
      break;
    case "2":
      navList[1].classList.add("active");
      break;
    case "3":
      navList[2].classList.add("active");
      break;
    case "4":
      navList[3].classList.add("active");
      break;
    case "5":
      navList[4].classList.add("active");
      break;
    case "6":
      navList[5].classList.add("active");
      break;
    case "7":
      navList[6].classList.add("active");
      break;
  }
});

$(function () {
  const pageNumber = document.querySelector("meta[name=page-number]").content;
  const sideList = document.querySelectorAll(".sidebar-menu .sidebar-list a");
  switch (pageNumber) {
    case "1":
      sideList[0].classList.add("active");
      break;
    case "2":
      sideList[1].classList.add("active");
      break;
    case "3":
      sideList[2].classList.add("active");
      break;
    case "4":
      sideList[3].classList.add("active");
      break;
    case "5":
      sideList[4].classList.add("active");
      break;
    case "6":
      sideList[5].classList.add("active");
      break;
    case "7":
      sideList[6].classList.add("active");
      break;
  }
});

// let a = 1;
// if(a == 0){
//     console.log("a adalah 0")
// }else if(a == 1){
//     console.log("a adalah 1")
// }else{
//     console.log("a bukan 0")
// }
// console.log("Test")

$(function () {
  var currentTentang = location.pathname;
  $(".tentang-navbar-link a").each(function () {
    var $this = $(this);
    // if the current path is like this link, make it active
    if ($this.attr("href").indexOf(currentTentang) !== -1) {
      $this.addClass("active");
    }
  });
});

$(function () {
  var currentBisnis = location.pathname;
  $(".bisnis-navbar-link a").each(function () {
    var $this = $(this);
    // if the current path is like this link, make it active
    if ($this.attr("href").indexOf(currentBisnis) !== -1) {
      $this.addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".year-2016").addClass("active");

  $(".year-2016").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2016").css({ display: "block" });
  });

  $(".year-2017").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2017").css({ display: "block" });
  });

  $(".year-2018").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2018").css({ display: "block" });
  });

  $(".year-2019").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2019").css({ display: "block" });
  });

  $(".year-2020").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2020").css({ display: "block" });
  });

  $(".year-2021").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2021").css({ display: "block" });
  });

  $(".year-2022").click(function () {
    $(".year").removeClass("active");
    $(this).addClass("active");

    $(".journey-content-year").css({ display: "none" });
    $(".journey-2022").css({ display: "block" });
  });
});

$(document).ready(function () {
  $(".tombol-medan").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-medan").css({ display: "block" });
  });
  $(".tombol-pekanbaru").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-pekanbaru").css({ display: "block" });
  });
  $(".tombol-padang").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-padang").css({ display: "block" });
  });
  $(".tombol-jambi").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-jambi").css({ display: "block" });
  });
  $(".tombol-batam").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-batam").css({ display: "block" });
  });
  $(".tombol-palembang").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-palembang").css({ display: "block" });
  });
  $(".tombol-dki-jakarta").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-dki-jakarta").css({ display: "block" });
  });
  $(".tombol-banten").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-banten").css({ display: "block" });
  });
  $(".tombol-bandung").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-bandung").css({ display: "block" });
  });
  $(".tombol-surabaya").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-surabaya").css({ display: "block" });
  });
  $(".tombol-banjarmasin").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-banjarmasin").css({ display: "block" });
  });
  $(".tombol-balikpapan").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-balikpapan").css({ display: "block" });
  });
  $(".tombol-makassar").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-makassar").css({ display: "block" });
  });
  $(".tombol-manado").click(function () {
    $(".tombol-daerah").removeClass("active");
    $(this).addClass("active");
    $(".kantor-daerah").css({ display: "none" });
    $(".kantor-manado").css({ display: "block" });
  });

  $(document).ready(function () {
    $("#tombol-direksi").click(function () {
      $("#tombol-direksi").addClass("active");
      $("#tombol-komisaris").removeClass("active");

      $(".tentang-manajemen-komisaris").css({ display: "none" });
      $(".tentang-manajemen-direksi").css({ display: "block" });
    });

    $("#tombol-komisaris").click(function () {
      $("#tombol-komisaris").addClass("active");
      $("#tombol-direksi").removeClass("active");

      $(".tentang-manajemen-direksi").css({ display: "none" });
      $(".tentang-manajemen-komisaris").css({ display: "block" });
    });
  });

  // $('.').hover(
  //   function(){
  //       $.css({'background-image': "url(../img/new-image.png)"})
  //  },
  //   function(){
  //       $(this).parent().css({'background-image': "url(../img/original-image.png)"})
  //   }
  // );
});

// const mediaQueryTablet = window.matchMedia('(max-width: 768px)')

// if (mediaQueryTablet.matches) {
//   // Then trigger an alert
//   alert('Media Query Matched!')
// }else{
//     alert("blok")
// }

// Create a condition that targets viewports less than 576px wide
const mediaQueryTablet = window.matchMedia("(max-width: 576px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (homeTanggungjawab && homeBisnis) {
    if (e.matches) {
      homeTanggungjawab.classList.remove("container");
      homeBisnis.classList.remove("container");
    } else {
      homeTanggungjawab.classList.add("container");
      homeBisnis.classList.add("container");
    }
  }

  if (karir) {
    if (e.matches) {
      karir.classList.remove("container");
    } else {
      karir.classList.add("container");
    }
  }
}
// Register event listener
mediaQueryTablet.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQueryTablet);

function naikKeAtas() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ======================= //
// ===  NAVBAR TENTANG === //
// ======================= //

tentangNavbarArrowdown &&
  tentangNavbarArrowdown.addEventListener("click", function () {
    tentangNavbarLink.classList.toggle("active");
  });

bisnisNavbarArrowdown &&
  bisnisNavbarArrowdown.addEventListener("click", function () {
    bisnisNavbarLink.classList.toggle("active");
  });

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
  offset: 150,
});

// =================
// === RECAPTCHA ===
// =================

$(document).ready(function () {
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

  if ($(".umbraco-forms-submitmessage")[0]) {
    $(".modal-pesan-terkirim").css({ display: "block" });
  }

  $(".bg-hitam-transparent-modal").click(function () {
    $(".modal-pesan-terkirim").css({ display: "none" });
  });

  $(".modal-pesan-terkirim-x").click(function () {
    $(".modal-pesan-terkirim").css({ display: "none" });
  });
});

// ============
// === KARIR PAGE ===
// ============

// const dataKarir = [
//   {
//     posisi: "HR Analyst",
//     lokasi: "Tuban",
//     fungsi: "Human Resource",
//     keterangan:
//       `<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, 
//       quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, 
//       quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, 
//       neque porro quisquam est, qui dolorem ipsum</p>
      
//       <ol>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//       </ol>
      
//       `,
//   },
//   {
//     posisi: "IT Analyst",
//     lokasi: "Tuban",
//     fungsi: "IT",
//     keterangan:
//       `<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, 
//       quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, 
//       quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, 
//       neque porro quisquam est, qui dolorem ipsum</p>
      
//       <ol>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//       </ol>
      
//       `,
//   },
//   {
//     posisi: "IT Engineer",
//     lokasi: "Jakarta",
//     fungsi: "IT",
//     keterangan:
//       `<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, 
//       quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, 
//       quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, 
//       neque porro quisquam est, qui dolorem ipsum</p>
      
//       <ol>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//         <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
//       </ol>
      
//       `,
//   },
// ];

// const renderKarir = () => {
//   const bodyKarir = document.querySelector(".body-table-karir");
//   dataKarir.map((item, index) => {
//     if (bodyKarir) {
//       document.querySelector(".body-table-karir").innerHTML += `
//         <tr>
//           <th scope="row">
//               <div class="px-3 m-2 py-3 w-full border-green text-center rounded me-3 fw-bold text-primary">${item.posisi}</div>
//           </th>
//           <td>
//               <div class="px-3 m-2 py-3 w-full border-green text-center rounded me-3 fw-bold text-primary">${item.lokasi}</div>
//           </td>
//           <td>
//               <div class="px-3 m-2 py-3 w-full border-green text-center rounded me-3 fw-bold text-primary">${item.fungsi}</div>
//           </td>
//           <td>
//               <div class="px-3 m-2 py-3 w-full text-center rounded me-3 fw-bold text-white bg-primary pointer" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">Keterangan</div>
//           </td>
//         </tr>
//         <tr id="collapse${index}" class="klasifikasi collapse">
//           <td colspan="3">
//             <div class="bg-primary p-3 w-full text-white fw-bold m-2 rounded">
//               <h2 class="text-center">Klasifikasi</h2>
//               ${item.keterangan}
//             </div>
//           </td>
//         </tr>
//       `;
//     }
//   });
// };

// renderKarir();



// ==============
// === GALERI ===
// ==============

// const dataGaleri= [
//   {
//   image: "/images/galeri-grid-img-1.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
// },
//   {
//   image: "/images/galeri-grid-img-2.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
// },
//   {
//   image: "/images/galeri-grid-img-3.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
// },
//   {
//   image: "/images/galeri-grid-img-1.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
// },
//   {
//   image: "/images/galeri-grid-img-2.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
// },
//   {
//   image: "/images/galeri-grid-img-3.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor "
// },
// ]

// const renderGaleri = () => {
//   const bodyGaleri = document.querySelector(".swiper-wrapper-galeri");
//   dataGaleri.map((item, index) => {
//     if(bodyGaleri){
//       // console.log(item);
//       document.querySelector(".swiper-wrapper-galeri").innerHTML+= `
// 			<div class="swiper-slide">
// 				<div class="text-center d-flex flex-column align-items-center justify-content-center">
// 					<div class="gambar w-100">
// 							<img src=${item.image} width="100%" style="cursor:pointer" onclick="setIndexGaleri(${index})"/>
// 					</div>
// 				</div>
// 			</div>
//       `
//     }
//   })
// }


// const dataAlbum= [
//   {
//   image: "/images/galeri-grid-img-1.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-1.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-1.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-2.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-2.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-2.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-3.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-3.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
//   {
//   image: "/images/galeri-grid-img-3.png",
//   caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
// },
// ]

// const renderAlbum = () => {
//   const body = document.querySelector(".container-album");
//   dataAlbum.map((item, index) => {
//     // console.log(item);
//     if(body){
//       // console.log(item);
//       document.querySelector(".container-album").innerHTML+= `
//       <div class="image-container my-3 pointer" style="width:30%;height:35vh;position:relative;background: url(${item.image}) center bottom no-repeat; background-size: cover;" onclick="callNewAlbum(${index})">
//         <div class="album-caption w-100 p-3 text-white" style="position:absolute; bottom: 0;">${item.caption.substr(0, 128)}...</div>
//     </div>
//             `
//     }
//   })
// }


// renderGaleri()
// renderAlbum()

// const callNewAlbum = (index) => {
//   console.log(`supposed to call API to render album with selected index => ${index}`);
// }

// const setIndexGaleri = (index) => {
//   swiperGaleri.slideTo(index)
//   if(typeof document !== 'undefined') {
//       document.querySelector("#main-image-swiper").innerHTML= `
//       <div style="position: relative;height: 95vh; width:100%" class="d-flex flex-column align-items-center">
//         <img src=${dataGaleri[index].image} alt="" style="width: 100%; height: 100%;">
//         <div class="album-caption p-3 pb-5 text-white" style="position:absolute; bottom: 0; max-width:100">${dataGaleri[index].caption}</div>
//       </div>

//     `
//     //   document.querySelector("#main-image-swiper").innerHTML= `
//     //   <div class="image-container" style=width: 100%; height:100%%;position:relative;background: url('${dataGaleri[index].image}') center bottom no-repeat; background-size: cover; ">
//     //   <div class="album-caption w-100 p-3 text-white" style="position:absolute; bottom: 0">${dataGaleri[index].caption}</div>
//     // </div>

//     // `
//   }
// }

// $(".slide-galeri-item").on("click", function () {
//   // console.log(this.find(".gambar img").src);
//   console.log(this);
// })

$(".album-thumbnail").click(function(event){
  // console.log($(this).attr("data-album-ke"))

  document.querySelector("#main-image-swiper").innerHTML= ``;

  $("#judul-album").text($(this).find(".album-caption").text())
  
  const dataAlbumKe = $(this).attr("data-album-ke");

  const htmlSelectedAlbum = $(`#swiper-wrapper-galeri-${dataAlbumKe}`).get(0).outerHTML;

  // console.log(htmlSelectedAlbum.html())

  // document.querySelector("#swiper-galeri").innerHTML =
  // `
  //   ${htmlSelectedAlbum}
  // `

  var buttonNavigation = 
  `
  <div>
    <img src="/images/tombol-kiri.svg" class="swiper-button-prev" style="--swiper-navigation-size: 100px">
  </div>
  <div>
    <img src="/images/tombol-kanan.svg" class="swiper-button-next" style="--swiper-navigation-size: 100px">
  </div>
  `

  $("#swiper-galeri").html("")

  $("#swiper-galeri").html(htmlSelectedAlbum)

  $(buttonNavigation).appendTo("#swiper-galeri")
  
  initiateSwiperGaleri();
})

$(document).ready(function(){
  
})

// let slideGaleriItem = document.querySelectorAll(".slide-galeri-item");

// // for (let i = 0; i < slideGaleriItem.length; i++) {
// //   const element = slideGaleriItem[i];

// //   console.log(element)

// //   element.addEventListener("click", function(){
// //     console.log("TERKLIKK")
// //   })
// // }

// $(".slide-galeri-item").click(function(event){
//   console.log("PANTEKK")
//   swiperGaleri.slideTo($(this).attr("data-ke"))

//   console.log($(this).find(".gambar img").attr("src"))
//   console.log($(this).find(".gambar .caption-item").text())

//   var imageSrc = $(this).find(".gambar img").attr("src");
//   var captionItem = $(this).find(".gambar .caption-item").text();

//   document.querySelector("#main-image-swiper").innerHTML= `
//     <div class="image-container" style="width: 100%; height:75vh;position:relative;background: url('${imageSrc}') center bottom no-repeat; background-size: cover; ">
//       <div class="album-caption w-100 p-3 text-white" style="position:absolute; bottom: 0">${captionItem}</div>
//     </div>
//     `
// })

function handleSlideGaleriItem(obj){
  console.log("PANTEKK");

  console.log(obj.getAttribute('data-ke'))

  // initiateSwiperGaleri();

  // swiperGaleri.slideTo($(this).attr("data-ke"))

  // console.log($(this).find(".gambar img").attr("src"))
  // console.log($(this).find(".gambar .caption-item").text())

  
  console.log(obj.querySelector(".gambar img").getAttribute("src"))
  console.log(obj.querySelector(".gambar .caption-item").innerText)
  
  var imageSrc = obj.querySelector(".gambar img").getAttribute("src");
  var captionItem = obj.querySelector(".gambar .caption-item").innerText;

  document.querySelector("#main-image-swiper").innerHTML=
   `
     <div class="image-container" style="width: 100%; min-height: 50vh; position:relative; display: flex; align-items: center; justify-content: center; ">
        <img src="${imageSrc}" style="width: 100%; height: 100%; ">
        <div class="album-caption w-100 text-white" style="position:absolute; bottom: 5%; left: 0%; padding: 1vw 4vw; background-color: #333333aa; font-size: 1.6vw; color: #333333; font-weight: 500; ">${captionItem}</div>
     </div>
    `
}
 
// ============
// === GSAP ===
// ============

const timeline = gsap.timeline({ defaults: { duration: 4 }, repeat: -1 });

timeline
  .to(".header-truk", { x: "-40vw", delay: "0.5" })
  .to(".header-truk", { opacity: 0, duration: "0.5" })
  .from(
    ".header-burung",
    { opacity: 0, x: "-20vw", y: 100, width: "10%", delay: "0.5" },
    0
  )
  .to(".header-burung", { opacity: 0, duration: "0.5" })
  .from(".header-awan", { x: "-20vw", delay: "0.5" }, 0)
  .to(".header-awan", { opacity: 0, duration: "0.5" }, "5.8")
  .from(".header-awan-kecil", { x: "15vw", delay: "0.5" }, 0)
  .to(".header-awan-kecil", { opacity: 0, duration: "0.5" }, "5.8");

// ==============
// === SWIPER ===
// ==============

// let menu = ["01", "02", "03"]

const swiperHomeMainSlider = new Swiper(".swiper-home-main-slider", {
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const namaBapak = document.querySelectorAll(
  ".tentang-manajemen-direksi .manajemen-head h3"
);
const posisiBapak = document.querySelectorAll(
  ".tentang-manajemen-direksi .manajemen-head h4"
);
const fotoBapak = document.querySelectorAll(
  ".tentang-manajemen-direksi .manajemen-gambar img"
);

const textNamaBapak = [];
const textPosisiBapak = [];
const srcFotoBapak = [];

for (let i = 0; i < namaBapak.length; i++) {
  textNamaBapak.push(namaBapak[i].innerText);
}

for (let i = 0; i < posisiBapak.length; i++) {
  textPosisiBapak.push(posisiBapak[i].innerText);
}

for (let i = 0; i < fotoBapak.length; i++) {
  srcFotoBapak.push(fotoBapak[i].src);
}

// console.log(textNamaBapak)
// console.log(textPosisiBapak)
// console.log(srcFotoBapak)

const bapakbapak = {
  namaBapak: textNamaBapak,
  posisiBapak: textPosisiBapak,
  fotoBapak: srcFotoBapak,
};

// const namaBapak = ["agus", "Aceng", "kokom", "Wanto", "Udin"]
const swiperManajemenContainer = new Swiper(".swiper-manajemen-container", {
  speed: 400,
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
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const namaBapak2 = document.querySelectorAll(
  ".tentang-manajemen-komisaris .manajemen-head h3"
);
const posisiBapak2 = document.querySelectorAll(
  ".tentang-manajemen-komisaris .manajemen-head h4"
);
const fotoBapak2 = document.querySelectorAll(
  ".tentang-manajemen-komisaris .manajemen-gambar img"
);

const textNamaBapak2 = [];
const textPosisiBapak2 = [];
const srcFotoBapak2 = [];

for (let i = 0; i < namaBapak2.length; i++) {
  textNamaBapak2.push(namaBapak2[i].innerText);
}

for (let i = 0; i < posisiBapak2.length; i++) {
  textPosisiBapak2.push(posisiBapak2[i].innerText);
}

for (let i = 0; i < fotoBapak2.length; i++) {
  srcFotoBapak2.push(fotoBapak2[i].src);
}

// console.log(textNamaBapak2)
// console.log(textPosisiBapak2)
// console.log(srcFotoBapak2)

const bapakbapak2 = {
  namaBapak: textNamaBapak2,
  posisiBapak: textPosisiBapak2,
  fotoBapak: srcFotoBapak2,
};

// const namaBapak = ["agus", "Aceng", "kokom", "Wanto", "Udin"]
const swiperManajemenContainer2 = new Swiper(".swiper-manajemen-container-2", {
  speed: 400,
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
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperHomeMedia = new Swiper(".home-media", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,

  breakpoints: {
    769: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperOurProjectLower = new Swiper(".our-project-slider-lower", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  slidesPerView: 3,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const swiperOurProjectUpper = new Swiper(".our-project-slider-upper", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  slidesPerView: 3,
  spaceBetween: 32,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const swiperHomePengadaan = new Swiper(".home-pengadaan", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,

  breakpoints: {
    769: {
      slidesPerView: 2,
      enabled: false,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperHomeBisnis = new Swiper(".home-bisnis", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,

  breakpoints: {
    769: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperHomeTanggungjawab = new Swiper(".home-tanggungjawab", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  slideWidth: 120,

  breakpoints: {
    769: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperKarir = new Swiper(".karir", {
  // Optional parameters
  // slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  slideWidth: 120,

  breakpoints: {
    768: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 32,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperBeritaSlider = new Swiper(".berita-slider", {
  // Optional parameters
  slidesPerView: 1.2,
  // loop: true,
  spaceBetween: 50,

  breakpoints: {
    280: {
      slidesPerView: 1.3,
    },
    300: {
      slidesPerView: 1.4,
    },
    320: {
      slidesPerView: 1.5,
    },
    340: {
      slidesPerView: 1.6,
    },
    360: {
      slidesPerView: 1.7,
    },
    380: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2,
    },
    440: {
      slidesPerView: 2.1,
    },
    460: {
      slidesPerView: 2.2,
    },
    480: {
      slidesPerView: 2.3,
    },
    500: {
      slidesPerView: 2.4,
    },
    530: {
      slidesPerView: 2.5,
    },
    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.3,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperPengumumanSlider = new Swiper(".pengumuman-slider", {
  // Optional parameters
  slidesPerView: 1.2,
  // loop: true,
  spaceBetween: 50,

  breakpoints: {
    280: {
      slidesPerView: 1.3,
    },
    300: {
      slidesPerView: 1.4,
    },
    320: {
      slidesPerView: 1.5,
    },
    340: {
      slidesPerView: 1.6,
    },
    360: {
      slidesPerView: 1.7,
    },
    380: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2,
    },
    440: {
      slidesPerView: 2.1,
    },
    460: {
      slidesPerView: 2.2,
    },
    480: {
      slidesPerView: 2.3,
    },
    500: {
      slidesPerView: 2.4,
    },
    530: {
      slidesPerView: 2.5,
    },
    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.3,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperLaporantahunanSlider = new Swiper(".laporantahunan-slider", {
  // Optional parameters
  slidesPerView: 1.2,
  // loop: true,
  spaceBetween: 50,

  breakpoints: {
    280: {
      slidesPerView: 1.3,
    },
    300: {
      slidesPerView: 1.4,
    },
    320: {
      slidesPerView: 1.5,
    },
    340: {
      slidesPerView: 1.6,
    },
    360: {
      slidesPerView: 1.7,
    },
    380: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2,
    },
    440: {
      slidesPerView: 2.1,
    },
    460: {
      slidesPerView: 2.2,
    },
    480: {
      slidesPerView: 2.3,
    },
    500: {
      slidesPerView: 2.4,
    },
    530: {
      slidesPerView: 2.5,
    },
    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.3,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperPengadaanSlider = new Swiper(".pengadaan-slider", {
  // Optional parameters
  slidesPerView: 1.2,
  // loop: true,
  spaceBetween: 50,

  breakpoints: {
    280: {
      slidesPerView: 1.3,
    },
    300: {
      slidesPerView: 1.4,
    },
    320: {
      slidesPerView: 1.5,
    },
    340: {
      slidesPerView: 1.6,
    },
    360: {
      slidesPerView: 1.7,
    },
    380: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2,
    },
    440: {
      slidesPerView: 2.1,
    },
    460: {
      slidesPerView: 2.2,
    },
    480: {
      slidesPerView: 2.3,
    },
    500: {
      slidesPerView: 2.4,
    },
    530: {
      slidesPerView: 2.5,
    },
    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.3,
    },
    992: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperBapakbapakList = new Swiper(".bapakbapak-list", {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,

  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 7,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function initiateSwiperGaleri(){
  const swiperGaleri = new Swiper(".swiper-galeri", {
    // Optional parameters
    // slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    // autoplay: {
    //   delay: 1500,
      disableOnInteraction: false,
    // },

    slidesPerView: 5,
    spaceBetween: 48,
    centeredSlides: true,
    slideToClickedSlide: true,


    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      // clickable: true
      dynamicBullets: true,
    },
  });

}

initiateSwiperGaleri()

// if(document.querySelector("#main-image-swiper") && typeof swiperGaleri !== "undefined"){
//   setIndexGaleri(0)
// }


// ===========================
// ======= DATATABLE =========
// ===========================


$(document).ready(function () {
  let tableKarir = $('#tableKarir').DataTable({
    pageLength: 5,
    "lengthChange": false,
    "ordering": false
  });

  var dataTableKarir = [];
  $(this).find('#data-tableKarir .data-list .data-item').each(function() {
    dataTableKarir.push($(this).text());
  });

  var dataLabelKlasifikasi = $("#data-tableKarir .label-klasifikasi").text();

  function generateKeterangan() {
    tableKarir.rows().every(function(rowIdx, tableLoop, rowLoop) {
      var newRow = $(`
        <tr>
          <td colspan="3">
            <div id="collapse-${rowIdx}" class="klasifikasi collapse bg-biruPRPP p-3 w-full text-white fw-bold m-2 rounded" data-parent="#tableKarir">
              <h2 class="text-center">${dataLabelKlasifikasi}</h2>
                ${dataTableKarir[rowIdx]}
            </div>
          </td>
        </tr>
      `);
      $(this.node()).after(newRow);
    })
  }

  tableKarir.on("draw", function(){
    generateKeterangan()
  })

  generateKeterangan()
});