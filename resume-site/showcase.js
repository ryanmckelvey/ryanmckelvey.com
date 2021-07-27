function getRepos() {
    try {
        var repos = fetch("https://api.github.com/users/ryanmckelvey/repos");
        return repos.then(async(list) => {
            var repoList = list.json();
            const x = await repoList;
            return x.reverse();
        })
    } catch {
        console.log("error retrieving repos")
    }
}
getRepos().then((result) => {
    var index = 0
    result.forEach(repo => {
        if (index <= 4) {
            console.log(repo)
            var url = "https://github.com/ryanmckelvey/" + repo.name
            var div = document.createElement('div');
            div.setAttribute('class', 'project');
            div.innerHTML = `
            <a href="${url}">
            <h5 class="project_name">${repo.name}</h5>
            <p>${repo.language}
            <p>${repo.description}</p>
            <p>${repo.created_at}</p>
            <a href="${url}"><i class="fab fa-github"></i></a>
            </a>
            `;
            document.getElementById('projects').appendChild(div)
            index++;
        }
    });
});