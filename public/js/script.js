// Sidebar Toggle Animation
const hamburger = document.querySelector('.hamburger');
const sidebar   = document.querySelector('.sidebar');
const stick = hamburger.querySelectorAll('.stick');

hamburger.addEventListener('click', () => {
    if(sidebar.classList.contains('d-none')) {
        sidebar.classList.remove('d-none');
    }

    if(!sidebar.classList.toggle('sidebar-none')) {
        if(sidebar.classList.contains('sidebar-open')) {
            sidebar.classList.remove('sidebar-open');
        }
        if(sidebar.classList.contains('sidebar-close')) {
            sidebar.classList.remove('sidebar-close');
        }
        sidebar.classList.add('sidebar-open');
    } else {
        if(sidebar.classList.contains('sidebar-close')) {
            sidebar.classList.remove('sidebar-close');
        }
        if(sidebar.classList.contains('sidebar-open')) {
            sidebar.classList.remove('sidebar-open');
        }
        sidebar.classList.add('sidebar-close');
    }

    stick.forEach(e => {
        e.classList.toggle('bg-white');
    });
});
const account_navbar = document.querySelector('.account-navbar');
if(document.querySelector('.account-navbar') !== null && document.querySelector('.account-dropdown') != null){
    const account_navbar = document.querySelector('.account-navbar');
    const account_dropdown = document.querySelector('.account-dropdown');
    account_navbar.addEventListener('click', () => {
        event.preventDefault();
        account_dropdown.classList.toggle('d-none');
    });
}


if( document.getElementById('logout') != null ){
    const logout = document.getElementById('logout');
    const form_logout = document.querySelector('form#form-logout');
    logout.addEventListener('click', () => {
        event.preventDefault();
        form_logout.setAttribute('method', 'POST');
        form_logout.setAttribute('action', './logout.php');
        form_logout.submit();
    })
}

if(document.querySelector('.list-hospital-from-province-wrapper') !== null) {
    const list_hospital_wrapper = document.querySelector('.list-hospital-from-province-wrapper');

    list_hospital_wrapper.addEventListener('click', (e) => {

        if(e.target.classList.contains('hospital-name') || e.target.classList.contains('image-hospital-name') || e.target.classList.contains('span-hospital-name')) {

            if(e.target.classList.contains('hospital-name')) {
                if(e.target.nextElementSibling.classList.contains('hospital-description')){
                    e.target.children[1].setAttribute('src', './public/images/icon/minus-icon.png')
                    const arr_hospital_desc = document.querySelectorAll('.hospital-description')
                    arr_hospital_desc.forEach((hospital_desc_from_arr) => {
                        if(hospital_desc_from_arr != e.target.nextElementSibling) {
                            if(!hospital_desc_from_arr.classList.contains('d-none')) {
                                hospital_desc_from_arr.classList.add('d-none');
                            }
                        }
                    });
                    e.target.nextElementSibling.classList.toggle('d-none');
                }
            } else {
                if(e.target.parentElement.nextElementSibling.classList.contains('hospital-description')) {
                    const arr_hospital_desc = document.querySelectorAll('.hospital-description')
                    arr_hospital_desc.forEach((hospital_desc_from_arr) => {
                        if(hospital_desc_from_arr != e.target.parentElement.nextElementSibling) {
                            if(!hospital_desc_from_arr.classList.contains('d-none')) {
                                hospital_desc_from_arr.classList.add('d-none');
                            }
                        }
                    });
                    e.target.parentElement.nextElementSibling.classList.toggle('d-none');
                }
            }
        }
    })


}

