const post = {
    username : "Natansh",
    content : "reel",
    likes : 200,
    reposts : 20,
    tags : ["attitude", "sigma", "extrovert"],
    city : "Banglore",
}
console.log(post);

console.log(post["username"]);
console.log(post["likes"]);
console.log(post.tags[1]);

post.city = "Sirsa";
post.gender = "male";
post.likes = 206;
delete post.content;

console.log(post);