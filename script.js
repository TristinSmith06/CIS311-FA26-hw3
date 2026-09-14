const contact_submit_toast = document.getElementById("toast");
const submit_button = document.getElementById("submit_contact");
const contact_form = document.getElementById("contact-form");

submit_button.addEventListener('click', () => {
    if(contact_form.checkValidity()){
        show_toast();
    }
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

let contact_required_text = document.getElementById("contact-consent-text")
let contact_checkbox = document.getElementById("contact_consent")

contact_checkbox.addEventListener('change', (event) => {
    if (!event.target.checked) {
        contact_required_text.style.display = "block";
    }else{
        contact_required_text.style.display = "none";
    }
});