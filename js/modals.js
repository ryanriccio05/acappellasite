// Artwork paths from the Apple Music catalog.
const coverPaths = {
  "all-yours": "Music221/v4/c5/d5/b5/c5d5b559-57a2-5242-0375-1c3a3a482017/artwork.jpg",
  "deny-deny-deny": "Music211/v4/9a/9c/40/9a9c40b0-0ef2-5bc5-6c25-250862e48f77/26UMGIM02802.rgb.jpg",
  "troublemaker": "Features124/v4/16/18/3e/16183e96-1c4e-254d-c085-184c4c964f63/dj.qenxacei.jpg",
  "make-me-a-better-man": "Music211/v4/93/68/85/9368851d-cc58-b883-5c2a-d08e8826b145/196872917871.jpg",
  "the-cure": "Music221/v4/ea/cc/ad/eaccad77-3cb8-ddc2-a2e1-224c409aa26b/26UMGIM64019.rgb.jpg",
  "right-in-front-of-me": "Music221/v4/a4/29/18/a42918aa-6ad9-8bcc-3d8a-b5852f42852a/810090098968_Cover.jpg",
  "i-want-you-back": "Music114/v4/dc/5d/6d/dc5d6d8e-61dc-401b-80a6-c2a745fe048a/08UMGIM28826.rgb.jpg",
  "vodka-cranberry": "Music221/v4/1b/95/f6/1b95f6d8-dcbd-2ce0-2c35-f2336de9bbc2/25UMGIM71376.rgb.jpg",
  "fearless": "Music221/v4/cb/6e/a7/cb6ea70a-6cb8-89a0-4da7-91e2d04a7bba/08PNDIM05386.rgb.jpg",
  "the-longest-time": "Music125/v4/b3/ed/8e/b3ed8eb8-e276-ee92-bf69-fba2865516b6/dj.yjsnvawq.jpg",
  "uptown-girl": "Music125/v4/b3/ed/8e/b3ed8eb8-e276-ee92-bf69-fba2865516b6/dj.yjsnvawq.jpg",
  "baby-one-more-time": "Music221/v4/a3/78/83/a3788355-9932-b0b0-8314-f0717a13b8a6/888880333476.jpg",
  "reckless-driving": "Music122/v4/11/6a/64/116a64ee-0db3-4e59-bd86-f44008e47f85/5056167170006.jpg",
  "bad-romance": "Music122/v4/4a/f1/23/4af123aa-c30e-db5d-c095-1c140fd37550/09UMGIM39393.rgb.jpg",
  "thriller": "Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg",
  "coming-around": "Music211/v4/9e/b5/ae/9eb5ae7f-3381-5635-f629-ea2201f73d90/199538142105.jpg",
  "shatter": "Music116/v4/f0/1d/1d/f01d1d02-8f85-3a9d-cd28-f7fed1010d02/22UMGIM04212.rgb.jpg",
  "linger": "Music211/v4/5c/cb/18/5ccb18f7-ab44-3478-cf33-7953837907d2/18UMGIM43740.rgb.jpg",
  "livin-la-vida-loca": "Music211/v4/ab/3c/ed/ab3cedd0-03a6-0802-ec42-2f48c4eb118c/074646989128.jpg",
  "disturbia": "Music126/v4/2b/c0/81/2bc081c8-25f0-ba43-d451-587a54613778/16UMGIM59202.rgb.jpg",
  "she-wolf": "Music/51/e4/1a/mzi.hvpbrkmc.jpg",
  "good-kisser": "Music115/v4/21/a0/7c/21a07c8d-5d03-0e97-e355-acce695fc820/075597930399.jpg",
  "birds": "Music112/v4/3f/80/a8/3f80a8ef-5409-42ac-c126-c7354698c7fc/18UMGIM65849.rgb.jpg",
  "telephone": "Music115/v4/1b/98/88/1b9888da-6a1f-bff0-ec03-518f445019f6/19UMGIM73435.rgb.jpg",
  "pirate-radio": "Music122/v4/f2/f5/b0/f2f5b0d2-23e5-c09d-2cac-6315eb844da2/670087792909_Cover.jpg",
  "first-light": "Music116/v4/02/4f/be/024fbe59-7bf9-098b-9a75-8a801e5edb0a/196871101493.jpg",
  "i-drink-wine": "Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg",
  "false-confidence": "Music124/v4/c3/80/d0/c380d05c-5f46-5d25-f479-3c57481ace68/00602577648090.rgb.jpg",
  "remember": "Music125/v4/aa/2b/b9/aa2bb92a-4ace-da16-5118-21b78935e185/829619167054.jpg",
  "close-to-you": "Music221/v4/52/9a/a7/529aa76f-5d60-cd81-9eb0-0eb521de861d/24UMGIM43968.rgb.jpg",
  "shot": "Music211/v4/a5/0b/8b/a50b8bc6-7dfe-5072-aa45-82b6335bdd3d/artwork.jpg",
  "snow-angel": "Music126/v4/b7/27/57/b727577e-1e90-2209-ec08-169232cd17f7/23UMGIM60775.rgb.jpg",
  "golden-years": "Music221/v4/53/dc/6b/53dc6b9a-0163-e1b8-0809-08ecaf08585b/054391267726.jpg",
  "good-luck-babe": "Music221/v4/29/a7/c4/29a7c478-351d-25eb-a116-3e68118cdab8/24UMGIM31246.rgb.jpg",
  "rise": "Music116/v4/f5/b3/31/f5b3314b-3055-9f4c-def1-0d219878bb8f/16UMGIM55274.rgb.jpg",
  "youre-gonna-go-far": "Music116/v4/e4/75/f3/e475f31a-ade1-50bf-e983-1467aaf62c46/23UMGIM59938.rgb.jpg",
  "for-good": "Music112/v4/15/f6/4d/15f64dc7-6ee9-a29a-4846-c22488cca889/06UMGIM10671.rgb.jpg",
  "alright": "Music116/v4/ce/cd/c5/cecdc55c-c1da-fd64-0e41-da2364a28dcf/019805348712_alrighthighRes.jpg",
  "if-im-honest": "Music112/v4/26/95/b7/2695b72b-b942-a56d-f0c9-ae8c3da91cdd/7316474902584.jpg",
  "rock-bottom": "Music125/v4/e8/94/5e/e8945ea2-e99c-e143-a37c-8748e820b3a1/15UMGIM67677.rgb.jpg",
  "sledgehammer": "Music125/v4/d7/97/a4/d797a4bf-dfde-4614-a7a7-46c6ea8fb33f/00857591006085.rgb.jpg",
  "doomsday": "Music122/v4/11/6a/64/116a64ee-0db3-4e59-bd86-f44008e47f85/5056167170006.jpg",
  "clarity": "Music122/v4/d9/f2/2b/d9f22b74-8ef3-73d8-5da1-e5268c42f114/12UMGIM52120.rgb.jpg",
  "read-your-mind": "Music112/v4/07/ef/6a/07ef6a69-ee75-ae04-f6a2-971be4b53828/22UMGIM63572.rgb.jpg",
  "vampire": "Music116/v4/9e/0d/17/9e0d17e0-c068-fbd9-fd85-610cc87c86aa/23UMGIM71511.rgb.jpg",
  "electric-touch": "Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg",
  "crazy": "Music211/v4/fc/6e/1e/fc6e1e95-7f93-09d8-455e-2f24a537a71f/603497823703.jpg",
  "fishbowl": "Music125/v4/a2/77/6a/a2776ac4-798a-7881-9403-9253c0ae1479/21UMGIM83636.rgb.jpg",
  "it-would-be-you": "Music221/v4/d0/da/f2/d0daf2ed-7f53-7945-4782-34a98559ef45/859739044249_cover.jpg",
};

const songListCovers = {
  "fall-2026": ["all-yours", "deny-deny-deny", "troublemaker", "make-me-a-better-man", "the-cure", "right-in-front-of-me", "i-want-you-back"],
  "spring-2026": ["vodka-cranberry", "fearless", "the-longest-time", "uptown-girl", "baby-one-more-time", "reckless-driving", "bad-romance", "i-want-you-back"],
  "palooza-2026": ["baby-one-more-time", "reckless-driving", "bad-romance"],
  "fall-2025": ["thriller", "coming-around", "shatter", "linger", "livin-la-vida-loca", "disturbia", "she-wolf", "good-kisser", "birds", "i-want-you-back"],
  "spring-2025": ["telephone", "pirate-radio", "first-light", "i-drink-wine", "false-confidence", "i-want-you-back"],
  "palooza-2025": ["telephone", "pirate-radio", "first-light"],
  "modal2": ["remember", "close-to-you", "shot", "snow-angel", "golden-years", "good-luck-babe", "rise", "i-want-you-back"],
  "modal3": ["youre-gonna-go-far", "for-good", "alright", "if-im-honest", "rock-bottom", "sledgehammer", "i-want-you-back"],
  "modal4": ["rock-bottom", "sledgehammer", "if-im-honest"],
  "modal5": ["doomsday", "clarity", "read-your-mind", "vampire", "electric-touch", "crazy", "fishbowl", "it-would-be-you", "i-want-you-back"],
};

function addSongCoverRain(modal) {
  const songs = songListCovers[modal.id];
  if (!songs || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.className = "song-cover-rain";
  layer.setAttribute("aria-hidden", "true");

  for (const song of songs) {
    const cover = document.createElement("img");
    const duration = 12 + Math.random() * 10;
    cover.src = `https://is1-ssl.mzstatic.com/image/thumb/${coverPaths[song]}/100x100bb.jpg`;
    cover.alt = "";
    cover.decoding = "async";
    cover.style.left = `${Math.random() * 88}%`;
    cover.style.animationDuration = `${duration}s`;
    cover.style.animationDelay = `-${Math.random() * duration}s`;
    cover.style.setProperty("--cover-angle", `${Math.random() * 36 - 18}deg`);
    cover.addEventListener("error", () => cover.remove(), { once: true });
    layer.append(cover);
  }

  modal.querySelector(".modal-content").prepend(layer);
}

function closeSongList(modal) {
  modal.style.display = "none";
  modal.querySelector(".song-cover-rain")?.remove();
}

// Get all buttons that open modals
var buttons = document.querySelectorAll(".modalBtn");

// Loop through all buttons to add event listeners
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var modalId = this.getAttribute("data-modal");
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    if (!modal.querySelector(".song-cover-rain")) addSongCoverRain(modal);
  });
});

// Get all close buttons
var closeButtons = document.querySelectorAll(".close");

// Loop through all close buttons to add event listeners
closeButtons.forEach(function(close) {
  close.addEventListener("click", function() {
    closeSongList(this.closest(".modal"));
  });
});

// Close modal when clicking outside of it
window.onclick = function(event) {
  var modals = document.querySelectorAll(".modal");
  modals.forEach(function(modal) {
    if (event.target == modal) {
      closeSongList(modal);
    }
  });
};
