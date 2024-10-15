const bannerContainer = document.querySelector(".banner_container");
const bannersData = [
    {
        img: "banner1.jpg",
        title: "Oppenheimer",
        details:
            "Oppenheimer Oppenheimer là cha đẻ của bom nguyên tử doChristopher Nolan đạo diễn. Bộ phim dựa trên những sự kiện có thật với câu chuyện của J. Robert Oppenheimer. Dựa trên tiểu sử của Kay Byrd và Martin J. Sherwin. Phimdự kiến ​​sẽ ra rạp ở Mỹ vào ngày 21 tháng 7 năm 2023.Bộ phim sẽ được phát hành lần đầu tiên bởi Universal Pictures.",
        category: " Lịch sử, kịch, tiểu sử",
        point: "8.3/10",
        duration: "2h10p",
    },

    {
        img: "img1.jpg",
        title: "Oppenheimer",
        details:
            "Oppenheimer Oppenheimer là cha đẻ của bom nguyên tử doChristopher Nolan đạo diễn. Bộ phim dựa trên những sự kiện có thật với câu chuyện của J. Robert Oppenheimer. Dựa trên tiểu sử của Kay Byrd và Martin J. Sherwin. Phimdự kiến ​​sẽ ra rạp ở Mỹ vào ngày 21 tháng 7 năm 2023.Bộ phim sẽ được phát hành lần đầu tiên bởi Universal Pictures.",
        category: " Lịch sử, kịch, tiểu sử",
        point: "8.3/10",
        duration: "2h10p",
    },

    {
        img: "img2.jpg",
        title: "Oppenheimer",
        details:
            "Oppenheimer Oppenheimer là cha đẻ của bom nguyên tử doChristopher Nolan đạo diễn. Bộ phim dựa trên những sự kiện có thật với câu chuyện của J. Robert Oppenheimer. Dựa trên tiểu sử của Kay Byrd và Martin J. Sherwin. Phimdự kiến ​​sẽ ra rạp ở Mỹ vào ngày 21 tháng 7 năm 2023.Bộ phim sẽ được phát hành lần đầu tiên bởi Universal Pictures.",
        category: " Lịch sử, kịch, tiểu sử",
        point: "8.3/10",
        duration: "2h10p",
    },

    {
        img: "img3.jpg",
        title: "Oppenheimer",
        details:
            "Oppenheimer Oppenheimer là cha đẻ của bom nguyên tử doChristopher Nolan đạo diễn. Bộ phim dựa trên những sự kiện có thật với câu chuyện của J. Robert Oppenheimer. Dựa trên tiểu sử của Kay Byrd và Martin J. Sherwin. Phimdự kiến ​​sẽ ra rạp ở Mỹ vào ngày 21 tháng 7 năm 2023.Bộ phim sẽ được phát hành lần đầu tiên bởi Universal Pictures.",
        category: " Lịch sử, kịch, tiểu sử",
        point: "8.3/10",
        duration: "2h10p",
    },

    {
        img: "img4.jpg",
        title: "Oppenheimer",
        details:
            "Oppenheimer Oppenheimer là cha đẻ của bom nguyên tử doChristopher Nolan đạo diễn. Bộ phim dựa trên những sự kiện có thật với câu chuyện của J. Robert Oppenheimer. Dựa trên tiểu sử của Kay Byrd và Martin J. Sherwin. Phimdự kiến ​​sẽ ra rạp ở Mỹ vào ngày 21 tháng 7 năm 2023.Bộ phim sẽ được phát hành lần đầu tiên bởi Universal Pictures.",
        category: " Lịch sử, kịch, tiểu sử",
        point: "8.3/10",
        duration: "2h10p",
    },

    {
        img: "img5.jpeg",
        title: "Oppenheimer",
        details:
            "Oppenheimer Oppenheimer là cha đẻ của bom nguyên tử doChristopher Nolan đạo diễn. Bộ phim dựa trên những sự kiện có thật với câu chuyện của J. Robert Oppenheimer. Dựa trên tiểu sử của Kay Byrd và Martin J. Sherwin. Phimdự kiến ​​sẽ ra rạp ở Mỹ vào ngày 21 tháng 7 năm 2023.Bộ phim sẽ được phát hành lần đầu tiên bởi Universal Pictures.",
        category: " Lịch sử, kịch, tiểu sử",
        point: "8.3/10",
        duration: "2h10p",
    },
];

var str = "";
for (index = 0; index < bannersData.length; index++) {
    str += `
    <div class="banner fade">
                <img src="./image/${bannersData[index].img}" alt="" />
                <div class="content">
                    <h1>${bannersData[index].title}</h1>
                    <p class="intro">Giới thiệu phim</p>
                    <p class="ct">
                        ${bannersData[index].details}
                    </p>
                    <div class="content_child">
                        <h2>Thể loại</h2>
                        <p>${bannersData[index].category}</p>
                        <div class="response">
                            <div class="rp">
                                <img src="./image/cib_imdb.svg" alt="" />
                                <p>${bannersData[index].point}</p>
                            </div>
                            <div class="rp">
                                <img src="./image/zondicons_time.svg" alt="" />
                                <p>${bannersData[index].duration}</p>
                            </div>
                        </div>
                        <button class="details">Chi tiết</button>
                    </div>
                </div>
            </div>
    `;
}

document.querySelector(".banner_container").innerHTML = str;

let slideIndex = 1;
showBanners(slideIndex);
function plusSlides(n) {
    showBanners((slideIndex += n));
}

function currentSlide(n) {
    showBanners((slideIndex = n));
}
function showBanners(n) {
    let i;
    let banners = document.getElementsByClassName("banner");
    let dots = document.getElementsByClassName("dot");
    if (n > banners.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = banners.length;
    }
    for (i = 0; i < banners.length; i++) {
        banners[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    banners[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
