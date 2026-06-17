const drawDate = new Date("December 31, 2026 18:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();

    const distance = drawDate - now;

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

},1000);

function submitEntry(){

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const coupon = document.getElementById("coupon").value;

    if(!name || !contact || !coupon){
        document.getElementById("message").innerHTML =
        "❌ Please complete all fields.";
        return;
    }

    document.getElementById("message").innerHTML =
    "✅ Entry received. Google Sheets connection coming next.";
}
