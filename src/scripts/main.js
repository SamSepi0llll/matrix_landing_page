document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const targetTab = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            hideFyTab()
            tab.classList.add('tab--is-active')
            hideDetailTab()
        })
    }
})

function hideFyTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('tab--is-active')
    }
}
function hideDetailTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('tab--is-active')
    }
}