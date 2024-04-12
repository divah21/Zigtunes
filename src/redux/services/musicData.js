import axios from "axios"

 const getMusicData = async() =>{
    try {
        const response = await axios.get('https://ws.audioscrobbler.com/2.0',{
            params:{
                method: 'chart.gettoptracks',
                api_key: 'f29dc2cf26acf621453f693545703bb7',
                format: 'json'
            },
        });
        return response.data.tracks.track;

    } catch (error) {
        console.error('Error fetching music data', error);
        return[];
    }
};

 export {getMusicData};

