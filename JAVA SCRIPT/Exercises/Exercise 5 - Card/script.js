function createCard(title,cName,views,monthsOld,duration,thumbnail){
    let html = `<div class="card">
            <div class="image">
                    <img src="https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ" alt="">
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . 560000k . 2 Months old</p>
            </div>
        </div>`
}

createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", "560000k", "2 Months old", "31:33", "https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDHpDiAzX3RJIFqB-cFW-sRYzUfGQ")