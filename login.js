

const email=document.querySelector('#email');
const password=document.querySelector('#password');

const loginBtn=document.querySelector('.btn');

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!email.value || !password.value){
        alert('Lutfen Email ve Password giriniz');
    }
    else{
   kontrol();
   if(bool==false){
      email.value="";
      password.value="";
    }    
    else if(bool==true){
      sonuclariGoster();
    }
  
  }
});
let bool=true;
function emailKontrolEt (eposta)
{
  var duzenli = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
  return duzenli.test(eposta);
}
function kontrol()
{
  const email=document.querySelector('#email');
  if(emailKontrolEt(email.value)){

      email.style.backgroundColor="white"; 
  }
  else{
    alert("Uygun email giriniz");
    bool=false;
    email.style.backgroundColor="#F0D0DD";
  }
}

const sonuclariGoster = () => {
      const sonuclar=document.querySelector('.sonuclar');
      sonuclar.innerHTML+=` <h2 class="mt-3 text-center">User Bilgileri</h2>
      <table class="table table-bordered border-warning  mt-4 w-50 m-auto ">
       <tbody class="center">
        <tr class="w-50">
          <th>Email </th>
          <td>${email.value} </td>
         
        </tr>
        <tr class="w-50">
        <th>Password</th>
        <td>${"*".repeat((password.value).length)}</td>
        </tr>
      </tbody>
    
    </table>`;
    email.value="";
    password.value="";

};