function reloadin()
{
  location.replace("./index.html");
}
function myfun()
{
  var names = [
    "Sourav",
    "Sarvesh",
    "Puneet",
    "Ashish",
    "Carry",
    "Vishnu",
    "Rohit",
    "Grahil",
  ];
  var namestr = document.querySelectorAll("[id='name']");  
  var namelist = [];
  for (let index = 0; index < namestr.length; index++) {
    const element = namestr[index];
    namelist.push(element.value)
  }
  if (namelist.length>8){
    return;
  }
  for (let index = 0; index < namelist.length; index++) {
    const element = namelist[index];
    if (element==''){
      namelist.splice(index);
    }
  }
  console.log(namelist)
  var Index = 0;
  for (let index = namelist.length; index < 8; index++) 
  {
    namelist.push(names[Index]);
    Index++;
  }
  console.log(namelist)
  sessionStorage.setItem("Name", namelist);
  location.replace("./index2.html");
}
var names = (sessionStorage.getItem("Name")).split(',');
names = [...names, ...names];
console.log(names);
var matches = 0;
var active = true;

var front_name = document.querySelectorAll(".container");
front_name.forEach((f) => {
  var temp = Math.floor(Math.random() * names.length);
  f.querySelector(".front").innerHTML = "<br>" + names[temp];
  names.splice(temp, 1);
});
var count = 0;
var data = [];
var curr = [];
var clic = 0;

front_name.forEach((f) => {
  f.addEventListener("click", () => {
    if (clic <= 1) 
    {
      f.querySelector(".front").classList.toggle("flip");
      f.querySelector(".back").classList.toggle("flip");
      if (!curr.includes(f)) {
        clic++;
        curr.push(f);
        data.push(f.querySelector(".front").innerHTML);
        count += 1;
      } else if (curr.includes(f)) {
        if (count == 1) {
          curr[0].querySelector(".front").classList.toggle("flip");
          curr[0].querySelector(".back").classList.toggle("flip");
        }
      }
      if (count == 2) {
        setTimeout(() => {
          if (data[0] == data[1]) {
            matches++;
            curr[0].style.visibility = "hidden";
            curr[1].style.visibility = "hidden";
          } else {
            console.log(curr);
            console.log(data);
            curr[0].querySelector(".front").classList.toggle("flip");
            curr[0].querySelector(".back").classList.toggle("flip");
            curr[1].querySelector(".front").classList.toggle("flip");
            curr[1].querySelector(".back").classList.toggle("flip");
          }
          data = [];
          count = 0;
          curr = [];
          clic = 0;
        }, 500);
      }
    }
  });
});



setInterval(() => {
  if (matches === 8) {
    document.querySelector(".main").style.visibility = "hidden";
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".popup > div > h2").innerHTML = "You Won !!";
  }
}, 100);

document.getElementById("reload").addEventListener("click", (e) => {
  window.location.reload();
});
