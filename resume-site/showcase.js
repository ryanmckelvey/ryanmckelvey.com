function getRepos() {
    try {
        var repos = fetch("https://api.github.com/users/ryanmckelvey/repos");
        return repos.then(async(list) => {
            var repoList = list.json();
            const x = await repoList;
            return x;
        })
    } catch {
        console.log("error retrieving repos")
    }
}
getRepos().then((result) => {
    var index = 0
    result.forEach(repo => {
        if (index <= 6) {
            console.log(repo)
            var url = "https://github.com/ryanmckelvey/" + repo.name
            var div = document.createElement('div');
            div.setAttribute('id', 'project');
            div.innerHTML = `
            <a href="${url}">
            <h5>${repo.name}</h5>
            <p>${repo.language}
            <p>${repo.description}</p>
            <p>${repo.created_at}</p>
            <a href="${url}">Linky</a>
            </a>
            `;
            document.getElementById('projects').appendChild(div)
            index++;
        }
    });
});