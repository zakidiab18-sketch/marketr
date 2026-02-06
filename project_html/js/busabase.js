


  const client = supabase.createClient(
    "https://niysbqztppaappqrojbw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5peXNicXp0cHBhYXBwcXJvamJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMjk5NTMsImV4cCI6MjA4NDkwNTk1M30.M_UmQTG97qOh5yAzw-W6fAb6auEcabcF6MjpsigXk9A"
  );

  async function register(){
    //alert("اشتغلت");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await client.auth.signInWithPassword ({
      email,
      password
    });
    const msg=document.getElementById("msg");
 
    if (error) {
  alert(error.message);
  console.log("ERROR:", error);
} else {
  alert("تم تسجيل الدخول بنجاح ✔");
  console.log("USER:", data.user);
  window.location.href = "pro_f.html";
}
 
 }


  async function login(){
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const { data, error } = await client.auth.signInWithPassword({
      email,
      password
    });

    if(error){
      document.getElementById("msg").innerText = error.message;
    }else{
      document.getElementById("msg").innerText = "تم تسجيل الدخول ✔";
      console.log(data);
      // هنا لاحقًا: تحويل لصفحة dashboard
     
    }

  }
 function showRegister() {
       document.getElementById("login").className = "form hide";
    document.getElementById("register").className = "form show";
    }
function showlogin()
{
   document.getElementById("register").className = "form hide";
    document.getElementById("login").className = "form show";
}
