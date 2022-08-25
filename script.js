const bottom = document.getElementById("buttom_btn");

bottom.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.onscroll = () => {
  if (window.scrollY >= 555) {
    document.getElementById("buttom_btn").style.visibility = "visible";
  } else {
    document.getElementById("buttom_btn").style.visibility = "hidden";
  }
};

var Top = [
  {
    title: "Communication and Collaboration",
    des: [
      "50 GB e-mail box with school domain (e.g. yourname@yourschooldomain.in)",
      "Online sharing of documents",
    ],
    img: "./img/img1.png",
  },
  {
    title: "Productivity Tools and Platform",
    des: [
      "Upgrade to latest version of Windows 10",
      "Faculty and students can use Office ProPul Suite on up to five different devices",
      "Collaborative and co-create content for classes, assignments and projects",
    ],
    img: "./img/img2.png",
  },
  {
    title: "Cloude Services and Storage",
    des: [
      "1.0 TB of c;oud storage for your content on OneDrive",
      "Mobile Device Management with Microsoft Intune",
    ],
    img: "./img/img3.png",
  },
  {
    title: "Rich Learning Resources",
    des: [
      "Access to the latest learning content on Microsoft technology with Microsoft Imagine Academy",
      "Get students and faculty industry ready with Microsoft Certifications",
    ],
    img: "./img/img4.png",
  },
];

var Top2 = [
  {
    title: "Cloude Services and Storage",
    des: [
      "1.0 TB of c;oud storage for your content on OneDrive",
      "Mobile Device Management with Microsoft Intune",
    ],
    img: "./img/img3.png",
  },
  {
    title: "Communication and Collaboration",
    des: [
      "50 GB e-mail box with school domain (e.g. yourname@yourschooldomain.in)",
      "Online sharing of documents",
    ],
    img: "./img/img1.png",
  },
  {
    title: "Productivity Tools and Platform",
    des: [
      "Upgrade to latest version of Windows 10",
      "Faculty and students can use Office ProPul Suite on up to five different devices",
      "Collaborative and co-create content for classes, assignments and projects",
    ],
    img: "./img/img2.png",
  },

  {
    title: "Rich Learning Resources",
    des: [
      "Access to the latest learning content on Microsoft technology with Microsoft Imagine Academy",
      "Get students and faculty industry ready with Microsoft Certifications",
    ],
    img: "./img/img4.png",
  },
];
var Top3 = [
  {
    title: "Productivity Tools and Platform",
    des: [
      "Upgrade to latest version of Windows 10",
      "Faculty and students can use Office ProPul Suite on up to five different devices",
      "Collaborative and co-create content for classes, assignments and projects",
    ],
    img: "./img/img2.png",
  },

  {
    title: "Cloude Services and Storage",
    des: [
      "1.0 TB of c;oud storage for your content on OneDrive",
      "Mobile Device Management with Microsoft Intune",
    ],
    img: "./img/img3.png",
  },
  {
    title: "Rich Learning Resources",
    des: [
      "Access to the latest learning content on Microsoft technology with Microsoft Imagine Academy",
      "Get students and faculty industry ready with Microsoft Certifications",
    ],
    img: "./img/img4.png",
  },
  {
    title: "Communication and Collaboration",
    des: [
      "50 GB e-mail box with school domain (e.g. yourname@yourschooldomain.in)",
      "Online sharing of documents",
    ],
    img: "./img/img1.png",
  },
];

displayimg(Top);

let img = [];

function displayimg(img) {
  document.querySelector(".camp").innerHTML = "";

  img.map(function (ele) {
    var div = document.createElement("div");

    var image = document.createElement("img");

    image.src = ele.img;

    var h3 = document.createElement("h3");
    h3.innerHTML = ele.title;

    var ul = document.createElement("ul");
    for (let i = 0; i < ele.des.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = ele.des[i];
      ul.append(li);
    }

    div.append(image, h3, ul);
    document.querySelector(".camp").append(div);
  });
}

const pivot1 = document.getElementById("p1");
const pivot2 = document.getElementById("p2");
const pivot3 = document.getElementById("p3");

pivot1.addEventListener("click", function onClick() {
  // console.log("clicked")

  img = [];
  img = [...Top];
  displayimg(img);
});

pivot2.addEventListener("click", function () {
  img = [];
  img = [...Top2];
  displayimg(img);
});

pivot3.addEventListener("click", function () {
  img = [];
  img = [...Top3];
  displayimg(img);
});
