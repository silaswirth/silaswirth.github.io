self.addEventListener('install', event => {
    event.waitUntil(
        new Promise((resolve, reject) => {
            resolve('Installing');
        })
        .then(result => console.log(result))
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
        new Promise((resolve, reject) => {
            resolve ('Waiting');
        })
        .then(result => console.log(result))
    )
})