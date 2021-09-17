function fn(callback) {
    setTimeout(() => {
        callback(123)
},1000)
}

 fn(function (data) {
     console.log(data)
 })
