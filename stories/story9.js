import reddit from '../api';
let output = '';
reddit.search()
    .then(results => {
        console.log(results);
        let post = results[18];
        let image = post.preview ? post.preview.images[0].source.url
            : `https://freesvg.org/img/Simple-Jack-O-Lantern-Silhouette.png' height=''140' width='140'`
        output += `
            <div class="stories">
               <h1 class="heading">${post.title}</h1>
               <p class="content">${decodeHtml(post.selftext_html)}</p>
               <p class="heading">No. of Upvotes : ${post.score}<p>
            </div>`
            document.querySelector('.main').innerHTML = output;
    });


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}