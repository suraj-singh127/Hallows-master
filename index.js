import reddit from './api';
let output = '';
reddit.search()
    .then(results => {
        console.log(results);
        results.forEach(post => {
            let image = post.preview ? post.preview.images[0].source.url
                : `https://freesvg.org/img/Simple-Jack-O-Lantern-Silhouette.png' height=''140' width='140'`
            output += `
            <img src="../images/desktop/num1.png" alt="">
            <div class="stories">
               <h1>${post.title}</h1>
               <p>${decodeHtml(post.selftext_html)}</p>
               <p>${post.score}<p>
            </div>`
        });
        document.querySelector('.main').innerHTML = output;
    });


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


