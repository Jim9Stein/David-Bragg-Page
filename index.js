template_pjd47ds
service_mbpx5ao
kT_Ps3pkv36G7JdY2

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm(
       // 'service_mbpx5ao',
       // 'template_pjd47ds',
      // event.target,
       //'kT_Ps3pkv36G7JdY2'
   // ).then(() => {
     //   console.log('this worked1')
   // })
   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
   loading.classList += " modal__overlay--visible"
   setTimeout(() => {
    loading.classList.remove("modal__overlay--visible")
    console.log('it worked 1')
   }, 1000);
    
}

