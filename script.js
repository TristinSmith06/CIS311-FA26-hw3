const contact_submit_toast = document.getElementById("toast");
const submit_button = document.getElementById("submit_contact");

submit_button.addEventListener('click', () => {
    show_toast();
})


let hideTimer

function show_toast(duration = 4000){
    contact_submit_toast.showPopover();
    restart_timer(duration)
};

function restart_timer(duration = 4000){
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {contact_submit_toast.hidePopover();}, duration)
}

contact_submit_toast.addEventListener('pointerenter', () => {clearTimeout(hideTimer)})
contact_submit_toast.addEventListener('pointerleave', () => {restart_timer()})