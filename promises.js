const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.style.background = '#000'
        document.body.style.color = 'yellow'
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('oops Error BOSS: SOMETHING WENT WRONG')
            }
        }, 2000);
    });

}

createPost({ title: 'POST THREE PROMISES', body: 'This is postthree'})
.then(getPosts);
.catch(err => console.log(err));
