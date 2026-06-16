// settle means Resolve or Reject a promise.
// Resolve means Promise has settled successfully and we have the result.
// Reject means Promise has settled with an error and we have the reason for the failure.

async function getData () {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(455)
        }, 3500)
    })
}

async function main(){
    console.log('Loading Modules');
    console.log('Do something else...');
    console.log('Loading data... Please wait');
    let data = await getData()
    console.log('Process Data');
    console.log('Task 2');    
}

main()