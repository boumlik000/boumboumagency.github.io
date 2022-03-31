function scrollFunction(){
    if(document.documentElement.scrollTop>200){
        document.getElementById('navbar').classList.add('notransparant');
    }
    else{
        document.getElementById('navbar').classList.remove('notransparant');
    }
}
window.onscroll=function(){
    scrollFunction();
}
/*count */
window.onload=function(){
    let web=new CountUp('website-count',0,250,0,2.5);
    let app=new CountUp('app-count',0,100,2.5);
    let user=new CountUp('user-count',0,10000,0,2.5);
    let vid=new CountUp('video-count',0,30,0,2.5);
    web.start();
    app.start();
    user.start();
    vid.start();
}
/*validation */
// Example starter JavaScript for disabling form submissions if there are invalid fields
function validate() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
}
validate();
/*copyright */
document.getElementById('fullYear').innerHTML=new Date().getFullYear()