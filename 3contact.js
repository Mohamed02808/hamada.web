// اللينكات

const links=[

    {
name:"Instagram",
url:"https://www.instagram.com/mohamed.__.2007__?igsh=MWE2NXEzaXhkamxheA==",
icon:"fab fa-instagram"
},

{
name:"Whatsapp",
url:"https://wa.me/201227854044",
icon:"fab fa-whatsapp"
},

{
name:"Discord",
url:"https://discord.gg/bdPkgtykkD",
icon:"fab fa-discord"
},

{
name:"Facebook",
url:"https://www.facebook.com/profile.php?id=100080355617997&mibextid=ZbWKwL",
icon:"fab fa-facebook"
},

{
name:"Telegram",
url:"https://t.me/Just_M_2007",
icon:"fab fa-telegram"
},

{
name:"YouTube",
url:"https://www.youtube.com/@Mohamed_Ahmed_2007",
icon:"fab fa-youtube"
},

{
name:"Twitter_X",
url:"https://x.com/2_F5AMA",
icon:"fab fa-x-twitter"
},

]

const container=document.getElementById("links")

links.forEach(link=>{

const a=document.createElement("a")

a.className="btn"

a.href=link.url

a.target="_blank"

a.innerHTML=`<i class="${link.icon}"></i>${link.name}`

container.appendChild(a)

})


// cursor

const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"

})

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("touchstart",()=>{

btn.style.transform="scale(0.95)"

})

btn.addEventListener("touchend",()=>{

btn.style.transform="scale(1)"

})

})

