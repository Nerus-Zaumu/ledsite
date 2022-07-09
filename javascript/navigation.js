function showAndHideDropdown(bossID, dropdownEl, show, hide){
    let elementRef = document.getElementById(dropdownEl)
    let list = elementRef.classList
    list.toggle(show)
    list.toggle(hide)

    document.addEventListener('click', (event) => { 
        if(event.target !== document.getElementById(bossID)){
            list.remove(show)
            list.add(hide)
            console.log('Wrong location: ');
        }
    })
}

function closeSidebar(sidebarId, hide, show){
   let sidebar = document.getElementById(sidebarId).classList
    sidebar.toggle(hide)
    sidebar.toggle(show)
}
