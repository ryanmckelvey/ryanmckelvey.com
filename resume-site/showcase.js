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
    result.forEach(repo => {
        
    });
});