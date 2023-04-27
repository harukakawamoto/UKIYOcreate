const { createClient } = microcms;

        // Initialize Client SDK.
        const client = createClient({
        serviceDomain: "ukiyo-test-blog",
        apiKey: process.env.API_KEY
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
                for(let i = 0; i < contents.length;i = i+2){
                    // div要素とimg要素とp要素の生成
                    let parentDivElement = document.createElement('div')
                    let createDivElement1 = document.createElement('div')
                    let createDivElement2 = document.createElement('div')
                    let imgElement1 = document.createElement('img')
                    let imgElement2 = document.createElement('img')
                    let pElement1 = document.createElement('p')
                    let pElement2 = document.createElement('p')
                    
                    parentDivElement.className = 'content'
                    imgElement1.src = contents[i].eyecatch.url
                    imgElement2.src = contents[i+1].eyecatch.url
                    pElement1.textContent = contents[i].title
                    pElement2.textContent = contents[i+1].title

                    createDivElement1.appendChild(imgElement1)
                    createDivElement1.appendChild(pElement1)
                    createDivElement2.appendChild(imgElement2)
                    createDivElement2.appendChild(pElement2)

                    parentDivElement.appendChild(createDivElement1)
                    parentDivElement.appendChild(createDivElement2)

                    element[0].appendChild(parentDivElement)
                }
            }
            
            )
        .catch((err) => console.error(err));