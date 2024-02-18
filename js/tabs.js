function removeClass(arr) {
    arr.forEach((item) => {
        if(item.classList.contains("active-list")) item.classList.remove("active-list");
        if(item.classList.contains("active-btn")) item.classList.remove("active-btn");
        if(item.classList.contains("active-tab")) item.classList.remove("active-tab");
        if(item.classList.contains("active-container")) item.classList.remove("active-container");
    });
};


//Tabs team
const teamTabs = document.querySelectorAll(".team__tabs");
const teambtn = document.querySelectorAll(".team__list__point");
for(let i = 0; i < teambtn.length; i++) {
    teambtn[i].addEventListener("click", function() {
        removeClass(teamTabs);
        removeClass(teambtn);
        teambtn[i].classList.add("active-list");
        teamTabs[i].classList.add("active-tab");
    });
};


// Tabs oriented
const orientedContainer = document.querySelectorAll(".oriented__container");
const orientedBtn = document.querySelectorAll(".oriented__btn");
for(let i = 0; i < orientedBtn.length; i++) {
    orientedBtn[i].addEventListener("click", function() {
        removeClass(orientedBtn);
        removeClass(orientedContainer);
        orientedBtn[i].classList.add("active-btn");
        orientedContainer[i].classList.add("active-container");
    });
};