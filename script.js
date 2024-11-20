document.addEventListener("DOMContentLoaded", () => {
    const emojiOptions = document.querySelectorAll('.emoji-option');
    
    emojiOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'selected' class from all options
            emojiOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add 'selected' class to the clicked option
            option.classList.add('selected');
        });
    });
});


let z=["Attack_on_TitanD.html","BorutoD.html","Death_NoteD.html","ErasedD.html","Garden_of_WordsD.html","Hello_WorldD.html","HorimiyaD.html","jjk0D.html","My_starD.html","Naruto_movieD.html","NarutoD.html","One_PieceD.html","PancreasD.html","Solo_levelingD.html","Tamako_love_storyD.html","Weathering_with_youD.html","Your_nameD.html"];
function random(){
let x = Math.floor(Math.random() * z.length); 
    let a = z[x];
    window.location.href = a;
}
function find(){
    let x=document.getElementById("name").value;
     x+="D.html";
    x = x.replace(/ /g, "_");
    let y="";
    for(let i of z){
        if(i.toLowerCase() == x.toLowerCase())
        {
            y=i;
            break;
        }
    }
    if(y==""){
        window.alert("Results not found");
    }
    else{
        window.location.href=y;
    }
}
function display() {
    // Show the pop-up
    const popUp = document.getElementById('pop');
    popUp.style.display = 'block';
    
    // Hide the pop-up after 3 seconds
    setTimeout(function() {
        popUp.style.display = 'none';
    }, 3000);
    document.getElementById("dis").innerHTML="✔️ Added to List";
}
