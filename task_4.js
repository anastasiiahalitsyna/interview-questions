const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve('Data 1'), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve('Data 2'), 2000));

async function fetchData() {
    const data1 = fetchData1();
    const data2 = await fetchData2();
    console.log([data1, data2]);
}

fetchData();

/*OUTPUT: [ Promise { 'Data 1' }, 'Data 2' ]
In the fetchData function, data1 is assigned the result of calling fetchData1(),
without awaiting it. 
This means data1 is assigned the unresolved promise returned by fetchData1, 
not the resolved value 'Data 1'.
data2 uses await to wait for fetchData2() to resolve, 
so data2 is assigned the resolved value 'Data 2'.*/