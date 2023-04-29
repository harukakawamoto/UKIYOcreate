const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
serviceDomain: "ukiyo-test-blog",
// apiKey: process.env.API_KEY
apiKey:"1CdoKFONr4t66inzJ9GNc8kFcCmpjeRfJmdo"
});

client
.getObject({
    endpoint: 'articles',
    queries: { limit: 12}
})
.then(res => {
        let contents = res.contents
        // 親要素の取得
        let element = document.getElementsByClassName('contents')
        console.log(contents)
        for(let i = 0; i < contents.length;i++){
            // div要素とimg要素とp要素の生成
            let createDivElement1 = document.createElement('div')
            let imgElement1 = document.createElement('img')
            let pElement1 = document.createElement('p')
            // classnameの指定
            createDivElement1.className = 'content'
            // 要素にAPIで取得した画像とテキストを挿入
            imgElement1.src = contents[i].eyecatch.url
            pElement1.textContent = contents[i].title
            // divに画像とテキストの要素を追加
            createDivElement1.appendChild(imgElement1)
            createDivElement1.appendChild(pElement1)
            // 親要素にcontentのDivを追加
            element[0].appendChild(createDivElement1)
        }
    }
    )
.catch((err) => console.error(err));