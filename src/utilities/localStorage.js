const getLocalStorageData = () =>{
    const getData = localStorage.getItem('donations');
    if(getData){
        return JSON.parse(getData);
    }
    return []
}

const saveToLocalStorage = (id) => {
    const localData = getLocalStorageData();
    const checkData = localData.find(dataId => dataId === id);
    if(!checkData){
        localData.push(id)
        localStorage.setItem('donations', JSON.stringify(localData));
    }
}

export {saveToLocalStorage, getLocalStorageData}