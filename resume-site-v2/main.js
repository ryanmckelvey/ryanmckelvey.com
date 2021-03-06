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
            //console.log(repo)
            var url = "https://github.com/ryanmckelvey/" + repo.name
            var div = document.createElement('div');
            var date = repo.created_at.split('T')
            div.setAttribute('class', 'project');
            div.innerHTML = `
            <a href="${url}" style="text-decoration: none; color: var(--jet);">
            <h3 class="project_name">${repo.name}</h3>
            <p>${repo.language}
            <p>${repo.description}</p>
            <p>${date[0]}</p>
            </a>
            `;
            document.getElementById('projects').appendChild(div)
            index++;
        }
    });
});