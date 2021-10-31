export default{
    search: function () {
       return fetch(`http://www.reddit.com/r/nosleep/top/.json?sort=top&t=all`)
        .then(res => res.json())
        .then(data=> data.data.children.map(data => data.data))
        .catch(err => console.log(err));
    }
}