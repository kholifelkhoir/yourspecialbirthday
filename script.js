alert('Assalamualaikum Warahmatullahi Wabarakatuh, Aku berharap hadiah kecil ini bisa membawa senyum di wajahmu, meskipun mungkin tak sepenuhnya mencerminkan betapa besar rasa sayang dan perhatian yang ingin kusampaikan... dan Maaf yaa jika hadiah ini tak sepenuhnya sempurna atau sesuai harapanmu, tapi semua ini dari hati. Love you....')
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('bx-x');
}
const sr = ScrollReveal ({
    distance: '65px' ,
    duration: '2600',
    delay: 450,
    reset: true
});
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});