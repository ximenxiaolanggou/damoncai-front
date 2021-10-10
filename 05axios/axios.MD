# axios使用方式

1. npm

   ```shell
   npm install axios
   ```

2.  bower

   ```shell
   bower install axios
   ```

3. yarn

   ```shell
   yarn add axios
   ```

4. jsDelivr CDN

   ```shell
   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
   ```

5. unpkg CDN

   ```shell
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   ```


# axios数据发送方式

1. axios对象

   ```js
   function add() {
       axios({
           url: 'http://127.0.0.1:10000',
           method: 'POST',
           data: {name: 'damoncai',age: 12}
       }).then(res => {
           console.log(res)
       })
   }
   
   function modify() {
       axios({
           url: 'http://127.0.0.1:10000/1',
           method: 'PUT',
           data: {name: 'damoncai',age: 12}
       }).then(res => {
           console.log(res)
       })
   }
   function remove() {
       axios({
           url: 'http://127.0.0.1:10000/1',
           method: 'DELETE',
           data: {name: 'damoncai',age: 12}
       }).then(res => {
           console.log(res)
       })
   }
   
   function search() {
       axios({
           url: 'http://127.0.0.1:10000/1',
           method: 'GET'
       }).then(res => {
           console.log(res)
       })
   }
   ```

2. request方法

   ```js
   function add() {
       axios.request({
           url: 'http://127.0.0.1:10000',
           method: 'POST',
           data: {name: 'damoncai',age: 12}
       }).then(res => {
           console.log(res)
       })
   }
   ```

3. axios.post(url[, data[, config]])

   ```js
   function add() {
       axios.post(
           'http://127.0.0.1:10000',
           {name: 'damoncai',age: 12}
       ).then(res => {
           console.log(res)
       })
   }
   ```

# axios 响应对象组成

![](./images/1.png)

# axios默认配置使用方式

```js
<script>
    axios.defaults.baseURL = 'https://api.example.com';
    
    // Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
    // See below for an example using Custom instance defaults instead.
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
</script>
```

# axios实例创建

```js
<script>
   const firstInstance = axios.create({
       baseURL: 'https://api.apiopen.top',
       timeout: 2000
   })

   const secondInstance = axios.create({
       baseURL: 'https://b.com',
       timeout: 2000
   })

   firstInstance({
       url: '/getJoke'
   }).then(res => {
       console.log(res.data)
   })

   secondInstance({
       url: '/getJoke'
   }).then(res => {
       console.log(res.data)
   })
</script>
```

# axios拦截器

```js
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
```



