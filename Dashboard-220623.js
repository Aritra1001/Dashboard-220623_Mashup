var prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);
var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:",
};
require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources",
});


// Toggling the menu in sm an xs devices

let menu = document.querySelector(".menu");
// console.log(menu);
let sidebar = document.querySelector("aside");

// let count = 0;
let toggle = false;
const showMenu = () => {
  // console.log("Menu btn is clicked");
  if (!toggle) {
    sidebar.style.display = "block";
    // sidebar.style.marginTop = "0rem";
    sidebar.style.marginLeft = "1rem";
    sidebar.style.marginRight = "1rem";
    sidebar.style.borderRadius = "0.5rem";
    toggle = true;
  } else {
    sidebar.style.display = "none";
    toggle = false;
  }
  // count++;

  // console.log("count", count);
};

// Switching between different sections of menubar

// let listItem = document.querySelectorAll(".list-item");
// // let activeClass = document.querySelector(".active");

// listItem.forEach(item =>{
//     item.addEventListener('click', ()=>{
//         document.querySelector(".active")?.classList.remove("active");
//         item.classList.add("active");
//     })
// })

// Changing the contents of the page depending on the menubar

let dashboard = document.querySelector(".dashboard");
// console.log(dashboard);
let analyse = document.querySelector(".analysis");
let documents = document.querySelector(".documents");
let inbox = document.querySelector(".inbox");
let history = document.querySelector(".history");
let settings = document.querySelector(".settings");

let welcomeHead = document.querySelector(".welcome");
let mediaBox = document.querySelector(".media-box");
let tableBody = document.querySelector(".media-box .div-body");
let userBox = document.querySelector(".user-box");
let sideContainer = document.querySelector(".side-container");
let myStudents = document.querySelector(".my-students");
let workHours = document.querySelector(".work-hours");
let spinner = document.querySelector(".spinner");
let layer = document.querySelector(".show-layer");
let chart1 = document.querySelector("#chart1");

// Functions for view all popups
let background = document.querySelector("main");
const showLayer = () => {
  layer.style.display = "block";
  spinner.style.display = "block";
};

const showContent = () => {
  layer.style.display = "none";
  spinner.style.display = "none";
  background.style.filter = "blur(10px)";
  background.style.opacity = "0.3";
  sidebar.style.opacity = "0.1";
  userBox.style.opacity = "0.1";
};

const showMainContent = () => {
  background.style.filter = "blur(0px)";
  background.style.opacity = "1";
  sidebar.style.opacity = "1";
  userBox.style.opacity = "1";
};

const hideLayer = () => {
  layer.style.display = "none";
  spinner.style.display = "none";
};

// View all pop-up for students
let viewStudent = document.querySelector("#viewStudent");
let sudentDetails = document.querySelector(".studentDetails");
let stuCloseBtn = document.querySelector(".stuCloseBtn");

viewStudent.addEventListener("mouseenter", () => {
  viewStudent.style.cursor = "pointer";
});

viewStudent.addEventListener("click", () => {
  // console.log("ViewStudent is clicked")
  showLayer();
  setTimeout(() => {
    showContent();
    sudentDetails.style.display = "block";
  }, 1000);
});

stuCloseBtn.addEventListener("mouseenter", () => {
  stuCloseBtn.style.cursor = "pointer";
});

stuCloseBtn.addEventListener("click", () => {
  sudentDetails.style.display = "none";
  showMainContent();
});

// Popup for media box
let viewMedia = document.querySelector("#media-view");
let medDetails = document.querySelector(".mediaDetails");
let medCloseBtn = document.querySelector(".medCloseBtn");

viewMedia.addEventListener("mouseenter", () => {
  viewMedia.style.cursor = "pointer";
});

viewMedia.addEventListener("click", () => {
  // console.log("viewMedia is clicked");
  showLayer();
  setTimeout(() => {
    showContent();
    medDetails.style.display = "block";
  }, 1000);
});

medCloseBtn.addEventListener("mouseenter", () => {
  medCloseBtn.style.cursor = "pointer";
});

medCloseBtn.addEventListener("click", () => {
  medDetails.style.display = "none";
  showMainContent();
});

// Popup for lessons
let lessonView = document.querySelector("#lesson-view");
let lessonDetails = document.querySelector(".lessonDetails");
let lessCloseBtn = document.querySelector(".lessCloseBtn");

lessonView.addEventListener("mouseenter", () => {
  lessonView.style.cursor = "pointer";
});

lessonView.addEventListener("click", () => {
  // console.log("viewLesson is clicked");
  showLayer();
  setTimeout(() => {
    showContent();
    lessonDetails.style.display = "block";
  }, 1000);
});

lessCloseBtn.addEventListener("mouseenter", () => {
  lessCloseBtn.style.cursor = "pointer";
});

lessCloseBtn.addEventListener("click", () => {
  lessonDetails.style.display = "none";
  showMainContent();
});

// Popup for completed tasks
let taskView = document.querySelector("#task-view");
let taskDetails = document.querySelector(".taskDetails");
let taskCloseBtn = document.querySelector(".taskCloseBtn");

taskView.addEventListener("mouseenter", () => {
  taskView.style.cursor = "pointer";
});

taskView.addEventListener("click", () => {
  // console.log("viewTask is clicked");
  showLayer();
  setTimeout(() => {
    showContent();
    taskDetails.style.display = "block";
  }, 1000);
});

taskCloseBtn.addEventListener("mouseenter", () => {
  taskCloseBtn.style.cursor = "pointer";
});

taskCloseBtn.addEventListener("click", () => {
  taskDetails.style.display = "none";
  showMainContent();
});

// Toggling of search icon

let searchBar = document.querySelector(".search-dropdown");
let searchBtn = document.querySelector(".search-btn");
let searchIndicator = document.querySelector(".search-indicator");
let toggleSearch = false;

searchBtn.addEventListener("click", (event) => {
  if (!toggleSearch) {
    // event.target.style.transform = "rotate(90deg)";
    setTimeout(() => {
      searchIndicator.classList.add("show-search");
      searchBar.classList.add("show-search");
      console.log(searchBar.classList);
    }, 200);
    toggleSearch = true;
  } else {
    // event.target.style.transform = "";
    searchIndicator.classList.remove("show-search");
    searchBar.classList.remove("show-search");
    toggleSearch = false;
  }
});

// Toggling of notification menu

let notifyMenu = document.querySelector(".notify-dropdown-container");
let notifyBtn = document.querySelector(".notification-btn");
let notifyIndicator = document.querySelector(".notify-indicator");
let toggleNotify = false;

notifyBtn.addEventListener("click", (event) => {
  if (!toggleNotify) {
    // event.target.style.transform = "rotate(45deg)";
    setTimeout(() => {
      notifyIndicator.classList.add("show-notify");
      notifyMenu.classList.add("show-notify");
      console.log(notifyMenu.classList);
    }, 200);
    toggleNotify = true;
  } else {
    // event.target.style.transform = "";
    notifyIndicator.classList.remove("show-notify");
    notifyMenu.classList.remove("show-notify");
    toggleNotify = false;
  }
});

// Toggling of profilemenu

let profileMenu = document.querySelector(".profile-dropdown-container");
let profileImage = document.querySelector(".profile-img");
let profileIndicator = document.querySelector(".profile-indicator");
// console.log(profileMenu);
let toggleProfile = false;

profileImage.addEventListener("click", (event) => {
  if (!toggleProfile) {
    setTimeout(() => {
      profileIndicator.classList.add("show-profile");
      profileMenu.classList.add("show-profile");
      console.log(profileMenu.classList);
    }, 100);
    toggleProfile = true;
  } else {
    profileIndicator.classList.remove("show-profile");
    profileMenu.classList.remove("show-profile");
    toggleProfile = false;
  }
});

// Closing of the dropdown on clicking anywhere on the sidebar
sidebar.onclick = function () {
  for (let i = 0; i < searchBar.classList.length; i++) {
    if (searchBar.classList[i] === "show-search") {
      console.log("matches");
      searchBtn.style.transform = "";
      searchIndicator.classList.remove("show-search");
      searchBar.classList.remove("show-search");
      // if(searchBar.classList.contains('show')){
      // }
      toggleSearch = false;
    }
  }
  for (let j = 0; j < notifyMenu.classList.length; j++) {
    if (notifyMenu.classList[j] === "show-notify") {
      console.log("matches 2");
      notifyBtn.style.transform = "";
      notifyIndicator.classList.remove("show-notify");
      notifyMenu.classList.remove("show-notify");
      toggleNotify = false;
    }
  }
  for (let k = 0; k < profileMenu.classList.length; k++) {
    if (profileMenu.classList[k] === "show-profile") {
      console.log("matches-3");
      profileIndicator.classList.remove("show-profile");
      profileMenu.classList.remove("show-profile");
      toggleProfile = false;
    }
  }
};

// Doughnut graph
// Chart.defaults.font.family = "Poppins, sans-serif"; //Changing the font-family of the charts

// let doughnut = document.querySelector("#doughnut");
// const doughnutLabel = {
//   beforeDatasetsDraw: (chart, args, pluginOptions)=>{
//     const {ctx, data} = chart;
//     ctx.save();
//     const xCoor = chart.getDatasetMeta(0).data[0].x;
//     const yCoor = chart.getDatasetMeta(0).data[0].y;
//     ctx.font = "bold 20px Poppins";
//     ctx.fillStyle = "black";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText('70%', xCoor, yCoor);
//   }

// }
// let graph = new Chart(doughnut, {
//   type: "doughnut",
//   data: {
//     labels: ["Done", "Pending"],
//     datasets: [
//       {
//         label: "Task Completion Chart",
//         data: [70, 15, 15],
//         backgroundColor: ["rgb(19, 64, 160)", "orange", "lightgrey"],
//       },
//     ],
//   },
//   options: {
//     // layout:{
//     //   padding:20
//     // },
//     borderWidth: 0,
//     aspectRatio: 1.8,
//     responsive: true,
//     cutout: "85%",
//     plugins: {
//       legend: {
//         // maxWidth: '200',
//         // itemWidth: 100,
//         color: 'black',
//         labels: {
//           color:'black',
//           font:{
//             // color: 'black',
//             weight: 'bold'
//           },
//           usePointStyle: true,
//           boxWidth: 7
//         },
//         display: true,
//         position: "bottom",
//         align: "center",
//       },
//     },
//   },
//   plugins:[doughnutLabel]
// });

// Qlik sense objects
let chart2 = document.querySelector("#chart2");
let chart3 = document.querySelector("#chart3");
let chart4 = document.querySelector("#chart4");
let chart5 = document.querySelector("#chart5");
let chart6 = document.querySelector("#chart6");
let chart7 = document.querySelector("#chart7");
let chart8 = document.querySelector("#chart8");

const hideChart = ()=>{
  chart1.style.filter = "opacity(0)";
  chart2.style.filter = "opacity(0)";
  chart3.style.filter = "opacity(0)";
  chart4.style.filter = "opacity(0)";
  chart5.style.filter = "opacity(0)";
  chart6.style.filter = "opacity(0)";
  chart7.style.filter = "opacity(0)";
  chart8.style.filter = "opacity(0)";
}

const showChart = ()=>{
  chart2.style.filter = "opacity(1)";
  chart3.style.filter = "opacity(1)";
  chart4.style.filter = "opacity(1)";
  chart5.style.filter = "opacity(1)";
  chart6.style.filter = "opacity(1)";
  chart7.style.filter = "opacity(1)";
  chart8.style.filter = "opacity(1)";
}

// Dynamic swtiching of tabs

window.onload = () => {
  // chart objects for first page
  require(["js/qlik"], function (qlik) {
    qlik.on("error", function (error) {
      $("#popupText").append(error.message + "<br>");
      $("#popup").fadeIn(1000);
    });
    $("#closePopup").click(function () {
      $("#popup").hide();
    });
  
  // Connecting with the app
  let app = qlik.openApp("777e6a9b-c805-4575-9b16-fc1d13bc8bdc", config);
  
  // Getting the objects here
  app.getObject("chart1", "MEAjCJ");
  });

  let tab_switchers = document.querySelectorAll("[data-switcher]");
  // console.log(tab_switchers);
  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;
    // console.log(page_id);

    tab_switcher.addEventListener("click", () => {
      document.querySelector(".list-item.active").classList.remove("active");
      tab_switcher.parentNode.classList.add("active");
      // layer.style.display = "block";
      // spinner.style.display = "block";
      showLayer();
      hideChart();
      setTimeout(() => {
        hideLayer();
        switchPage(page_id);
      }, 800);
    });
  }
};

function switchPage(page_id) {
  require(["js/qlik"], function (qlik) {
    qlik.on("error", function (error) {
      $("#popupText").append(error.message + "<br>");
      $("#popup").fadeIn(1000);
    });
    $("#closePopup").click(function () {
      $("#popup").hide();
    });
  
  // Connecting with the app
  let app = qlik.openApp("777e6a9b-c805-4575-9b16-fc1d13bc8bdc", config);
  
  
  // Getting the objects here
  // app.getObject("chart1", "MEAjCJ");
  app.getObject("chart2", "qamd");
  app.getObject("chart3", "JcJvj");
  app.getObject("chart4", "gjDHS");
  app.getObject("chart5", "puvScB");
  app.getObject("chart6", "BqZP");
  app.getObject("chart7", "PyQXKt");
  app.getObject("chart8", "WJYuPN");
  });

  console.log("pageID",page_id);
  if(page_id == 1){
    chart1.style.filter = "opacity(1)";
  }
  if(page_id == 2){
    showChart();
  }
  const currPage = document.querySelector(".page.active-page");
  console.log(currPage);
  currPage.classList.remove("active-page");
  const nextPage = document.querySelector(`.page[data-page='${page_id}']`);
  nextPage.classList.add("active-page");
}

// Insight Graphs

// Insight Graph 1
// let graph1 = document.getElementById("insightGraph1");
// console.log(graph1);
// let chart1 = new Chart(graph1, {
//   type: "line",
//   data: {
//     labels: [
//       "white-shirt",
//       "black-trouser",
//       "formal-shirts",
//       "t-shirt",
//       "kurta",
//     ],
//     datasets: [
//       {
//         label: "Total Orders",
//         data: [20, 30, 25, 30, 27],
//         borderColor: ["rgb(29, 98, 228)"],
//         borderWidth: 2,
//         pointRadius: 0,
//         fill: {
//           target: "origin",
//           above: "rgb(204, 219, 247)",
//         },
//       },
//     ],
//   },
//   options: {
//     responsive: false,
//     font: {
//       family: "Poppins",
//     },
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//   },
// });

// *******End Insight Graph1********

// Insight Graph2

// let graph2 = document.getElementById("insightGraph2");
// let chart2 = new Chart(graph2, {
//   type: "line",
//   data: {
//     labels: [
//       "white-shirt",
//       "black-trouser",
//       "formal-shirts",
//       "t-shirt",
//       "kurta",
//     ],
//     datasets: [
//       {
//         label: "Total sales",
//         data: [25, 20, 30, 25, 27],
//         borderColor: ["rgb(29, 98, 228)"],
//         borderWidth: 2,
//         pointRadius: 0,
//         fill: {
//           target: "origin",
//           above: "rgb(204, 219, 247)",
//         },
//       },
//     ],
//   },
//   options: {
//     responsive: false,
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//   },
// });

// ******End Insight Graph2*******

// Insight Graph3

// let graph3 = document.getElementById("insightGraph3");
// let chart3 = new Chart(graph3, {
//   type: "line",
//   data: {
//     labels: [
//       "white-shirt",
//       "black-trouser",
//       "formal-shirts",
//       "t-shirt",
//       "kurta",
//     ],
//     datasets: [
//       {
//         label: "Online Sessions",
//         data: [40, 30, 35, 45, 37],
//         borderColor: ["rgb(29, 98, 228)"],
//         borderWidth: 2,
//         pointRadius: 0,
//         fill: {
//           target: "origin",
//           above: "rgb(204, 219, 247)",
//         },
//       },
//     ],
//   },
//   options: {
//     responsive: false,
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//   },
// });

// *******End Insight Graph3******

// Insight Graph4

// let graph4 = document.getElementById("insightGraph4");
// let chart4 = new Chart(graph4, {
//   type: "line",
//   data: {
//     labels: [
//       "white-shirt",
//       "black-trouser",
//       "formal-shirts",
//       "t-shirt",
//       "kurta",
//     ],
//     datasets: [
//       {
//         label: "Average Order value",
//         data: [35, 25, 30, 25, 22],
//         borderColor: ["red"],
//         borderWidth: 2,
//         pointRadius: 0,
//         fill: {
//           target: "origin",
//           above: "#ffd9d9",
//         },
//       },
//     ],
//   },
//   options: {
//     responsive: false,
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//   },
// });

// ******End Insight Graph4********

// Total sales Graph

// let dataset1 = {
//   label: "Online Sales",
//   data: [
//     20000, 19000, 27000, 24000, 22000, 23000, 24500, 15000, 20000, 17000, 30000,
//     27000,
//   ],
//   backgroundColor: ["cornflowerblue"],
//   barPercentage: 0.5,
//   borderRadius: 10,
// };

// let dataset2 = {
//   label: "Offline Sales",
//   data: [
//     8000, 5000, 7000, 7000, 10000, 6000, 4000, 2000, 5000, 8000, 6000, 5500,
//   ],
//   backgroundColor: ["bisque"],
//   barPercentage: 0.5,
//   borderRadius: 10,
// };

// let combinedData = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],
//   datasets: [dataset1, dataset2],
// };

// const legendMargin = {
//   id: 'legendMargin',
//   beforeInit: (chart, legend, options)=>{
//     console.log("fit", chart.legend.fit);
//     const fitValue = chart.legend.fit;
//     chart.legend.fit = function fit(){
//       fitValue.bind(chart.legend)();
//       return this.height += 50;
//     }
//   }
// }

// let graph5 = document.getElementById("sales-graph");
// let chart5 = new Chart(graph5, {
//   type: "bar",
//   data: combinedData,
//   options: {
//     responsive: true,
//     // layout:{
//     //   height: "500px",
//     //   width: "500px"
//     // },
//     aspectRatio: 3.7,
//     plugins: {
//       legend: {
//         position: 'top',
//         align:'end',
//         labels: {
//           // padding: {
//           //   left: 10
//           // },
//           font:{
//             weight: 'bold'
//           },
//           usePointStyle: true,
//           boxWidth: 5
//         },
//         // display: true,
//         // position: "top",
//         // align: "right",
//       },
//     },
//     scales: {
//       y: {
//         min: 0,
//         max: 35000,
//       },
//     },
//   },
//   // plugins: [legendMargin]
// });

// ******End of Total sales graph*******

// Sales distribution radial bar chart

// let data = {
//   datasets: [
//     {
//       label: "Online Sales",
//       data: [18],
//       backgroundColor: ["cornflowerblue"],
//       borderRadius: 10,
//       borderWidth: 5,
//       borderColor: ["white"],
//       // align: "left",
//       circumference: (ctx) => {
//         return (ctx.dataset.data[0] / 18) * 270;
//       },
//     },
//     {
//       label: "Offline Sales",
//       data: [14],
//       backgroundColor: ["bisque"],
//       borderRadius: 10,
//       borderWidth: 5,
//       borderColor: ["white"],
//       // align: "left",
//       rotation: 40,
//       circumference: (ctx) => {
//         return (ctx.dataset.data[0] / 18) * 270;
//       },
//     },
//     {
//       label: "Returns",
//       data: [8],
//       backgroundColor: ["rgba(255, 26, 104, 0.5)"],
//       borderRadius: 10,
//       borderWidth: 5,
//       borderColor: ["white"],
//       // align: "left",
//       rotation: 80,
//       circumference: (ctx) => {
//         return (ctx.dataset.data[0] / 18) * 270;
//       },
//     },
//   ],
// };

// let config2 = {
//   type: "doughnut",
//   data,
//   options: {
//     // aspectRatio: 1,
//     responsive: true,
//     rotation: 15,
//     plugins: {
//       legend: {
//         position: "chartArea",
//         align: "start",
//         // position:'left',
//         // align: 'end',
//         // marginTop: 100,
//         onClick: (evt, legendItem, legend) => {
//           // console.log("evt", evt);
//           // console.log("legendItem",legendItem.text);
//           console.log("legend", legend);
//           const datasets = legend.legendItems.map((dataset, index) => {
//             return dataset.text;
//           });
//           console.log("datasets", datasets);
//           const index = datasets.indexOf(legendItem.text);
//           console.log("index", index);
//           if (legend.chart.isDatasetVisible(index) === true) {
//             legend.chart.hide(index);
//           } else {
//             legend.chart.show(index);
//           }
//         },
//         labels: {
//           font:{
//             weight: 'bold'
//           },
//           usePointStyle: true,
//           boxWidth: 5,
//           // position: "bottom",
//           generateLabels: (chart) => {
//             let visibility = [];
//             for (let i = 0; i < chart.data.datasets.length; i++) {
//               if (chart.isDatasetVisible(i) === false) {
//                 visibility.push(true);
//               } else {
//                 visibility.push(false);
//               }
//             }

//             console.log("chart", chart);
//             return chart.data.datasets.map((dataset, index) => ({
//               text: dataset.label,
//               fillStyle: dataset.backgroundColor,
//               strokeStyle: dataset.borderColor,
//               // fontColor: dataset.backgroundColor,
//               hidden: visibility[index],
//             }));
//           },
//         },
//       },
//     },
//   },
// };

// let chart6 = new Chart(document.getElementById("distribution-graph"), config2);
// *******End of sales distribution chart********

// Table last column Styling
// let tableData = document.querySelectorAll('.order-table tbody tr td:nth-child(4)');
// console.log(tableData);

// for(let i = 0; i < tableData.length; i++){
//   if(tableData[i].firstChild.data === 'Shipped'){
//     tableData[i].style.color = "orange";
//     tableData[i].style.backgroundColor = "#fff0c2";
//   }
//   else if(tableData[i].firstChild.data === 'Delivered'){
//     tableData[i].style.color = "green";
//     tableData[i].style.backgroundColor = "#adf3de";
//   }
//   else{
//     tableData[i].style.color = "red";
//   }
// }

// ******End of table last column styling*******

// Customer chart

// let data1 = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "Loyal Customers",
//       data: [1000, 1500, 2240, 2000, 2500, 1900],
//       borderColor: ["cornflowerblue"],
//       backgroundColor: ["cornflowerblue"],
//       borderWidth: 2,
//     },
//     {
//       label: "New Customers",
//       data: [500, 1200, 1050, 1500, 900, 750],
//       borderColor: ["bisque"],
//       backgroundColor: ["bisque"],
//       borderWidth: 2,
//     },
//   ],
// };

// let config1 = {
//   type: "line",
//   data: data1,
//   options: {
//     plugins:{
//       legend:{
//         align: 'end',
//         labels:{
//           font:{
//             weight: 'bold'
//           },
//           usePointStyle: true,
//           boxWidth: 5
//         }
//       }
//     },
//     responsive: true,
//     aspectRatio: 3.7,
//     tension: 0.4,
//     scales: {
//       y: {
//         beginAtZero: true,
//         min: 0,
//         max: 3000,
//       },
//     },
//   },
// };

// let chart7 = new Chart(document.getElementById("customer-graph"), config1);
// ********End of Customer Chart********