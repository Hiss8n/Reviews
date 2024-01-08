
const reviews=[
    {
    id:1,
    auhtor:"Hellen James",
    image:"./img1.jpg",
    job:"Art & design",
    description:"I am an  artist and designer.I have worked in this field with a team of amazing and talented individuals"
    },
    {
        id:2,
        author:"Alex",
        image:"./img2.jpg",
        job:"C++ developer",
        description:" Game development is fun.I couldn't imagine my life wihtout coding a game programme"
        },
        {
            id:3,
            author:"Emmanuel Kuku",
            image:"./img3.jpg",
            job:"Photographer",
            description:"My job is to take a glich of any moment that can ever  be imagine.How wonderful!"
            }


]

const img=document.querySelector('#person');
const author=document.querySelector('#author');
const job=document.querySelector('#job');
const description=document.querySelector('#description');


const forwardbtn=document.querySelector('.forwardbtn');
const backbtn=document.querySelector('.backbtn');
const random=document.querySelector('.random');


   
let currentItem=0;
function showPerson(){
    const item=reviews[currentItem];
    img.src=item.image;
    author.textContent=item.auhtor;
    job.textContent=item.job;
    description.textContent=item.description;
}

forwardbtn.addEventListener('click',()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
       currentItem=0;
    }
    showPerson();
});


backbtn.addEventListener('click',()=>{
    currentItem--;
    if(currentItem<0){
       currentItem=reviews.length-1;
    }
    showPerson();
});




    /*let item=0;
function showPerson(){
 const currentPerson=reviews[item];
 img.src=reviews[item].image;
 job.textContent=reviews[item].job;
};*/


random.addEventListener('click',()=>{

    currentItem=Math.floor(Math.random()*reviews.length);
  showPerson(currentItem);
});
