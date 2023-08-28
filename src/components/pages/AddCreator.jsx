import {useState} from "react";
import './AddCreator.css';
import {supabase} from '../../client.js';

const AddCreator = () => {
    const [creator, setCreator] = useState([{
        name: "",
        url: "",
        description: "",
        imageURL: "",
    }]);
    const [creatorName, setCreatorName] = useState("");
    const [creatorUrl, setCreatorUrl] = useState("");
    const [creatorDescr, setCreatorDescr] = useState("");
    const [creatorImageURL, setCreatorImageURL] = useState("");

    const handleName = (event) => {
        setCreatorName(event.target.value);
    };
    const handleUrl = (event) => {
        setCreatorUrl(event.target.value);
    };
    const handleDescr = (event) => {
        setCreatorDescr(event.target.value);
    };
    const handleImageURL = (event) => {
        setCreatorImageURL(event.target.value);
    }
    const handleNewCreator = () => {
        setCreator({name: creatorName, url: creatorUrl, description: creatorDescr, imageURL: creatorImageURL});
    }
    console.log(creator);
    const addCreator = async (event) => {
        event.preventDefault();
        
        handleNewCreator();
        if (creator.name != null) {
        await supabase
         .from('creators')
         .insert({name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL})
         .select();
     
         window.location = "/";
        }
    }
    return (
        <div>
            <form onSubmit={addCreator}>
                <label htmlFor="name">Creator Name</label> <br />
                <input type="text" id="name" name="title" onChange={handleName} /><br />
                <br/>

                <label htmlFor="url">Creator Url</label><br />
                <input type="text" id="url" name="artist" onChange={handleUrl} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <input type="text" id="description" name="description" onChange={handleDescr} /><br />
                <br/>

                <label htmlFor="imageURL">Image URL</label><br />
                <input type="text" id="imageURL" name="description" onChange={handleImageURL} /><br />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddCreator