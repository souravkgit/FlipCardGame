var names = ["Sourav", "Sarvesh", "Puneet", "Ashish", "Carry", "Amit", "Anubhav", "Abhishek"];
names = [...names, ...names];
var matches = 0;
var active = true;

var front_name = document.querySelectorAll(".container");
front_name.forEach(f => {
    var temp = Math.floor(Math.random() * names.length);
    f.querySelector(".front").innerHTML = "<br>" + names[temp];
    names.splice(temp, 1);
});
var count = 0;
var data = [];
var curr = [];
front_name.forEach(f => {
    f.addEventListener('click', () => {
        f.querySelector(".front").classList.toggle("flip");
        f.querySelector(".back").classList.toggle("flip");
        if (!curr.includes(f)) {
            curr.push(f)
            data.push(f.querySelector(".front").innerHTML)
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
                    curr[0].querySelector(".front").classList.toggle("flip");
                    curr[0].querySelector(".back").classList.toggle("flip");
                    curr[1].querySelector(".front").classList.toggle("flip");
                    curr[1].querySelector(".back").classList.toggle("flip");
                }
                data = [];
                count = 0;
                curr = [];
            }, 500);
        }
    });
});

setInterval(() => {
    if (matches === 8) {
        document.querySelector(".main").style.visibility = "hidden";
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".container").style.display = "none";
        document.querySelector(".popup > div > h2").innerHTML = "You Won !!"
    }
}, 100);

document.getElementById("reload").addEventListener("click", (e) => {
    window.location.reload();
})
