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
            var div = document.createElement('div');
            div.setAttribute('id', 'project');
            div.innerHTML = `
            <a>
            <h5>made with loop :o ${index}</h5>
            <p>description description description</p>
            <p>Created date</p>
            <a>Linky boy</a>
            </a>
            `;
            document.getElementById('projects').appendChild(div)
            index++;
        }
    });
});