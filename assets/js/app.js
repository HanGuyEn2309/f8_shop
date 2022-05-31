const modal = document.querySelector('.js-modal');
const modalBody = document.querySelector('.js-modal__body');
const registerBtns = document.querySelectorAll('.js-auth-form__register-btn');
const authFormRegister = document.querySelector('.js-auth-form__register');
const loginBtns = document.querySelectorAll('.js-auth-form__login-btn');
const authFormLogin = document.querySelector('.js-auth-form__login');
const closeBtns = document.querySelectorAll('.js-auth-form__close-btn');
const switchBtns = document.querySelectorAll('.js-auth-form__switch-btn');

// Đóng / mở auth-form login register
function showFormRegister() {
    modal.classList.add('open');
    authFormRegister.classList.add('open');
}

function showFormLogin() {
    modal.classList.add('open');
    authFormLogin.classList.add('open');
}

function closeAuthForm() {
    modal.classList.remove('open');
    authFormLogin.classList.remove('open');
    authFormRegister.classList.remove('open');
}

// Nghe hành vi click button
for(const registerBtn of registerBtns) {
    registerBtn.addEventListener('click', showFormRegister);
}

for(const loginBtn of loginBtns) {
    loginBtn.addEventListener('click', showFormLogin);
}

for(const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', closeAuthForm);
}

modal.addEventListener('click', closeAuthForm);

for(const switchBtn of switchBtns) {
    switchBtn.addEventListener('click', function() {
        const authFormRegisterHeight = authFormRegister.clientHeight;
        if(authFormRegisterHeight === 0) {
            authFormRegister.classList.add('open');
            authFormLogin.classList.remove('open');
        } else {
            authFormRegister.classList.remove('open');
            authFormLogin.classList.add('open');
        }
    });
}

// Ngừng nổi bọt
modalBody.addEventListener('click', function(event) {
    event.stopPropagation();
})

const loginAccountBtn = document.querySelector('.js-auth-form__account-btn');
const logoutAccountBtn = document.querySelector('.js-auth-form__logout-btn');
const navbarUser = document.querySelector('.js-header__navbar-user');
const cartNotice = document.querySelector('.js-header__cart-notice');
const noCart = document.querySelector('.js-header__cart--no-cart');
const hasCart = document.querySelector('.js-header__cart--has-cart');
const noNotify = document.querySelector('.js-header__notify--no-user');
const hasNotify = document.querySelector('.js-header__notify--has-user');

// Login user
loginAccountBtn.addEventListener('click', function() {
    for(const registerBtn of registerBtns) {
        registerBtn.classList.add('header__navbar-item--hide');
    }
    for(const loginBtn of loginBtns) {
        loginBtn.classList.add('header__navbar-item--hide');
    }

    navbarUser.classList.remove('header__navbar-item--hide');
    cartNotice.classList.remove('header__cart-notice--hide');
    noCart.classList.remove('header__cart-list--no-cart');
    hasCart.classList.add('header__cart-list--has-cart');

    noNotify.style.display = 'none';
    hasNotify.style.display = 'block';
    closeAuthForm();
})

// Logout user
logoutAccountBtn.addEventListener('click', function() {
    for(const registerBtn of registerBtns) {
        registerBtn.classList.remove('header__navbar-item--hide');
    }
    for(const loginBtn of loginBtns) {
        loginBtn.classList.remove('header__navbar-item--hide');
    }

    navbarUser.classList.add('header__navbar-item--hide');
    cartNotice.classList.add('header__cart-notice--hide');
    noCart.classList.add('header__cart-list--no-cart');
    hasCart.classList.remove('header__cart-list--has-cart');

    noNotify.style.display = 'block';
    hasNotify.style.display = 'none';
})

// Click notifyItem
const notifyItems = document.querySelectorAll('.js-header__notify-item');
for (const notifyItem of notifyItems) {
    notifyItem.addEventListener('click', function() {
        this.classList.add('header__notify-item--viewd');
    })
}

// Search trong shop hoặc trong shopee
function toast({title =''}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        toast.innerHTML = `
            <span class="header__search-select-label">${title}</span>
        `;
        
        main.appendChild(toast);
    }
}
const headerSearchOption = document.querySelector('.header__search-option');
const headerSearchOptionItems = document.querySelectorAll('.header__search-option-item');
for(const headerSearchOptionItem of headerSearchOptionItems){
    headerSearchOptionItem.addEventListener('click', function(){
        const headerSearchOptionChildrens = headerSearchOption.children;
        for(const headerSearchOptionChildren of headerSearchOptionChildrens){
            headerSearchOptionChildren.classList.remove('header__search-option-item--active')
        }
        this.classList.add('header__search-option-item--active');
        isInShop = this.classList.contains('in-shop');
        if(isInShop) {
            const headerSearchSelects = document.querySelectorAll('.header__search-select-label');
            for(const headerSearchSelect of headerSearchSelects){
                headerSearchSelect.style.display = 'none';
            }
            toast({
                title: 'Trong Shop này'
            });
        } else {
            const headerSearchSelects = document.querySelectorAll('.header__search-select-label');
            for(const headerSearchSelect of headerSearchSelects){
                headerSearchSelect.style.display = 'none';
            }
            toast({
                title: 'Trong Shopee'
            });
        }
    })
}

// Click button
const homeFilterBtns = document.querySelectorAll('.js-home-filter__nav-btn');
// const homeFilterBtnPrimary = document.querySelector('.btn--primary.js-home-filter__nav-btn');
homeFilterBtns.forEach(homeFilterBtn => {
    homeFilterBtn.onclick = function () {
        const homeFilterBtnPrimary = document.querySelector('.btn--primary.js-home-filter__nav-btn');
        homeFilterBtnPrimary.classList.remove('btn--primary');

        this.classList.add('btn--primary');
    }
})

const headerSortLinks = document.querySelectorAll('.js-header__sort-link');
headerSortLinks.forEach(headerSortLink => {
    headerSortLink.onclick = function () {
        const headerSortLinkActive = document.querySelector('.header__sort-link--active.js-header__sort-link');
        headerSortLinkActive.classList.remove('header__sort-link--active');

        this.classList.add('header__sort-link--active');
    }
})

// Giá
function toast({title =''}) {
    const main = document.getElementById('toast-price');
    if(main) {
        const toast = document.createElement('div');

        toast.innerHTML = `
            <span class="select-input__label">${title}</span>
        `;
        
        main.appendChild(toast);
    }
}