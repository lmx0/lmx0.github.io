var posts=["post/5409.html","post/668c.html","post/ec43.html","post/9f93.html","post/f7ee.html","post/d3ff.html","post/7ffe.html","post/d812.html","post/3402.html","post/9c12.html","post/d7cf.html","post/d86b.html","post/c405.html","post/baed.html","post/5824.html","post/16107.html","post/d828.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};