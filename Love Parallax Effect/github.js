const apiurl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const getuser = async (username) => {
    const response = await fetch(apiurl + username);
    const data = await response.json();
    // console.log(data);








    const card = `<div class="card">
    <div>
        <img class="avatar" src="${data.avatar_url
        }" alt="Florin Pop">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p>${data.bio}</p>

        <ul class="info">
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos
            }<strong>Repos</strong></li>
        </ul>

        <div id="repos">
            
        </div>
    </div>
</div>`

// <a class="repo" href="#" target="_blank"></a>
            // <a class="repo" href="#" target="_blank"></a>
            // <a class="repo" href="#" target="_blank"></a>

main.innerHTML = card;

getRepos(username);




}

getuser("Nazim452")
// getuser();



const getRepos = async(username)=>{
    const repos = document.querySelector("#repos");
    const response = await fetch(apiurl+username+'/repos');
    const data  = await response.json();
    // console.log(data);

    data.forEach(
        (item)=>{
            // console.log(item);

            const elem = document.createElement("a");
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.innerText =item.name;
            elem.target ="_blank";
            repos.appendChild(elem);
            
        }
    )
}

const formSubmit = ()=>{
    const searchbox = document.querySelector("#search")
    if(searchbox.value!=""){
        getuser(searchbox.value);
        searchbox.value = "";
    }
    return false;
}


searchbox.addEventListener(
    "focusout",
    function() {
        formSubmit()
    }
)
















