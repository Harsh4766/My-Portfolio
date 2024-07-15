var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-content');
function opentab(tabname)
{
    for(tablink of tablinks)
        {
            tablink.classList.remove('active-link');
        }

    for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove('active-tab');
        }
    
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

var menu=document.getElementById('sidemenu');

function openmenu(){
    menu.style.right="0px";
}

function closemenu(){
    menu.style.right="-250px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzkTpnzyMhGIiuunaHPGuUKdjVlpv_KFKL_45sEhMTq7EW_UbvmyHH4u4rOHlKx1smJg/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      document.getElementById('Name').value="";
      document.getElementById('Email').value="";
      document.getElementById('Message').value="";

      alert("Your message sent successfully");
  })
  var seebtn=document.getElementById('seemore');
  var seemore=document.getElementsByClassName('see-more');
  seebtn.addEventListener('click', () => {
    setTimeout(()=>{
    if (seebtn.innerHTML === "See More") {
      for (var i = 0; i < seemore.length; i++) {
        seemore[i].style.display = 'block';
      }
      seebtn.innerHTML = "See Less";
    } else {
      for (var i = 0; i < seemore.length; i++) {
        seemore[i].style.display = 'none';
      }
      seebtn.innerHTML = "See More";
    }
  },500);
  });