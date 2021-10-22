const linksSocialMedia = {
    github: "RenanTRS",
    youtube: "youtube",
    instagram: "instagram",
    facebook: "facebook",
    twitter: "twitter"
}

function showMeUser(){
    getGitHubProfileInfos()
    const li = document.querySelectorAll('ul li');
    for(let media of li){
        const socialMedia = media.dataset.social
        media.children[0].href = `https://www.${socialMedia}.com/`
    }
}

showMeUser()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(data => {
        const link = `https://github.com/${data.login}`

        imagem.src = data.avatar_url
        nameUser.innerHTML = data.name
        aLink.href = data.html_url
        userLogin.innerHTML = data.login
        bio.innerHTML = data.bio
    });
}