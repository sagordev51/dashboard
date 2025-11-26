//////  Time and Date Section START ///////
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
(() => {
  const targets = document.querySelectorAll(".bd-date");
  if (!targets.length) return;

  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).formatToParts(now);

  const day = parts.find((p) => p.type === "day")?.value ?? "";
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const year = parts.find((p) => p.type === "year")?.value ?? "";

  const bdDate = `${day} ${month}, ${year}`;

  targets.forEach((el) => {
    el.textContent = bdDate;
    el.setAttribute("aria-label", `Date in Bangladesh: ${bdDate}`);
  });
})();

//////  Time and Date Section END ///////

//////  Google and Youtube Search Section START ///////
///Google Search///
const google_input = document.querySelector("#google_input");
const search_icon_google = document.querySelector("#search_icon_google");
search_icon_google.addEventListener("click", (event) => {
  const value = google_input.value;
  if (value == "") {
    return 0;
  } else {
    location.href = `https://www.google.com/search?q=${value}`;
  }
});
google_input.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    const value = google_input.value;
    if (value == "") {
      return 0;
    } else {
      location.href = `https://www.google.com/search?q=${value}`;
    }
  }
});
///Youtube Search///
const youtube_input = document.querySelector("#youtube_input");
const search_icon_youtube = document.querySelector("#search_icon_youtube");
search_icon_youtube.addEventListener("click", (event) => {
  const value = youtube_input.value;
  if (value == "") {
    return 0;
  } else {
    location.href = `https://www.youtube.com/results?search_query=${value}`;
  }
});
youtube_input.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    const value = youtube_input.value;
    if (value == "") {
      return 0;
    } else {
      location.href = `https://www.youtube.com/results?search_query=${value}`;
    }
  }
});
//////  Google and Youtube Search Section END ///////
//////  Homepage Links Section START ///////

const link_section = document.querySelector(".link_section");
const links_array = [
  { link: "https://youtube.com/", banner: "youtube.png" },
  { link: "https://investing.com/", banner: "investing.png" },
  { link: "https://marketwatch.com/", banner: "marketwatch.png" },
  { link: "https://tradingeconomics.com/", banner: "tradingeconomics.png" },
  { link: "https://mail.google.com/", banner: "gmail.png" },
];
links_array.forEach((array) => {
  const links_html = `
    <a href="${array.link}">
        <div class="link">
            <img src="banner/${array.banner}" alt="">
        </div>
    </a>`;
  link_section.insertAdjacentHTML("beforeend", links_html);
});
//////  Homepage Links Section START ///////


