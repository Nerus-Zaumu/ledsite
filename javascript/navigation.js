let linkClone;
let dropdownStyleClone;
let dropdownHideClone;


function showAndHideDropdown(dropdownEl, show, hide){
    list = document.getElementById(dropdownEl).classList
    linkClone = list
    dropdownStyleClone = show
    dropdownHideClone = hide
    list.toggle(show)
    list.toggle(hide)
}

// document.addEventListener('click', (event) => {
//     if(event.target != linkClone){
//         linkClone.remove(dropdownStyleClone)
//         linkClone.add(dropdownHideClone)
//         console.log(linkClone)
//     }
// })

function closeSidebar(sidebarId, hide, show){
   let sidebar = document.getElementById(sidebarId).classList
    sidebar.toggle(hide)
    sidebar.toggle(show)
}
