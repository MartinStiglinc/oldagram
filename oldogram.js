const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let sectionEl = document.getElementById("section-el")

for (let i = 0; i < posts.length; i++)
{
    sectionEl.innerHTML += `<div class="post">
    <div class="post-header">
        <img class="avatar img-small" src="${posts[i].avatar}">
        <div>
            <h3>${posts[i].name}</h3>
            <p>${posts[i].location}</p>
        </div>
    </div>
        <img class="post-img" src="${posts[i].post}">
    <div class="social-media">
        <img id="likeInput${i}" src="images/icon-heart.png">
        <img src="images/icon-comment.png">
        <img src="images/icon-dm.png">
    </div>
    <div class="likes">
        <h3 id="likeOutput${i}">${posts[i].likes} likes</h3>
    </div>
    <div class="comments">
    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
    </div>
    </div>`

}


    let likeInput = []
    let likeOutput = []
    let likeNum = []
    
    for (let i = 0; i < posts.length; i++){
        likeInput.push(document.getElementById(`likeInput${i}`))
        likeOutput.push(document.getElementById(`likeOutput${i}`)) 
       
        likeNum.push(posts[i].likes)
         
        likeInput[i].addEventListener("click", function(){
        likeNum[i] += 1
        likeOutput[i].textContent = likeNum[i] + " likes"
        })   
    
    }   
