document.addEventListener('DOMContentLoaded', function(){
    
    //programação das abas & botão ativo
    const buttonfy = document.querySelectorAll('[data-tab-button=may-like]')
    const buttonDetails = document.querySelectorAll('[data-tab-button=details]')
            
            for(let i = 0; i < buttonfy.length; i++){
                const buttonfy = document.querySelectorAll('[data-tab-button=may-like]')
                buttonfy[i].addEventListener('click', function(){
                removeActiveButton()
                hideDetailTab()
                showFyTab()
                showActiveButtonFy()
                })
            }
            for(let i = 0; i < buttonDetails.length; i++){
                const buttonDetails = document.querySelectorAll('[data-tab-button=details]')
                buttonDetails[i].addEventListener('click', function(){
                    removeActiveButton()
                    hideFyTab()
                    showDetailTab()
                    showActiveButtonDetails()
                })
            }

            
        })

function hideFyTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id=may-like]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('for__you__list--active')
    }
}
function showFyTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id=may-like]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.add('for__you__list--active')
    }
}
function hideDetailTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id=details]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('details--is-active')
    }
}

function showDetailTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id=details]')

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.add('details--is-active')
    }
}

function removeActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('button--is-active')
    }
}

function showActiveButtonDetails(){
    const buttonDetails = document.querySelectorAll('[data-tab-button=details]')

    for(let i = 0; i < buttonDetails.length; i++){
        buttonDetails[i].classList.add('button--is-active')
    }
}

function showActiveButtonFy(){
    const buttonfy = document.querySelectorAll('[data-tab-button=may-like]')

    for(let i = 0; i < buttonfy.length; i++){
        buttonfy[i].classList.add('button--is-active')
    }
}