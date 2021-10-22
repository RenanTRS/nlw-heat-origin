const linksSocialMedia = {
    github: "RenanTRS",
    youtube: "youtube",
    instagram: "instagram",
    facebook: "facebook",
    twitter: "twitter"
}

function showMeUser(){
    const li = document.querySelectorAll('ul li');
    for(let media of li){
        const socialMedia = media.dataset.social
        media.children[0].href = `https://www.${socialMedia}.com/`
    }
}

showMeUser()