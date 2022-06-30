function showAndHideDropdown(bossID, dropdownEl, show, hide){
    list = document.getElementById(dropdownEl).classList
    list.toggle(show)
    list.toggle(hide)

    document.addEventListener('click', (event) => { 
        if(event.target !== document.getElementById(bossID)){
        list.remove(show)
        list.add(hide)
    
        }
    })
}

function closeSidebar(sidebarId, hide, show){
   let sidebar = document.getElementById(sidebarId).classList
    sidebar.toggle(hide)
    sidebar.toggle(show)
}
