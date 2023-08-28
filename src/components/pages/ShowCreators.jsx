import { useState, useEffect } from 'react';
import Card from '../Card';
import './ShowCreators.css';
import {supabase} from '../../client.js';
const ShowCreators = (props) => {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        // READ all creators from table
        const fetchCreators = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .order('created_at', {ascending: true});

            // set state of posts
            setCreators(data)
        
        }
        fetchCreators();
    }, [props]);
    console.log(creators);
    console.log("In Show Creators!");
    return (
        <div className="ShowCreators">
            {
                creators && creators.length > 0 ?
                creators.map((creator, index) => 
                   <Card key={index} id={creator.id} name={creator.name} url = {creator.url} description = {creator.description} imageURL = {creator.imageURL} created={creator.created_at}/>
                ) : <h2>{'No Creators Yet! Click Add Creator to Include a New One!'}</h2>
            }
        </div>  
    )
}

export default ShowCreators;