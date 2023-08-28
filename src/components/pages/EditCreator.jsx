import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditCreator.css';
import {supabase} from '../../client.js';

const EditCreator = (props) => {

    const [dataInput, setDataInput] = useState([{}]);
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

    // Read data from table
    useEffect(() => {
        // READ all creators from table
        const fetchCreators = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .order('created_at', {ascending: true});

            // set state of creators
            setDataInput(data);
        
        }
        fetchCreators();
    }, [props]);

    // Filter data to include only specific id
    const {id} = useParams();
    console.log({id});
    const editedCreator = dataInput.filter(item => item.id == id)[0];

    const handleName = (event) => {
        setCreatorName(event.target.value);
    };
    const handleUrl = (event) => {
        setCreatorUrl(event.target.value);
    };
    const handleDescr = (event) => {
        setCreatorDescr(event.target.value);
    }
    const handleImageURL = (event) => {
        setCreatorImageURL(event.target.value);
    }
    const handleUpdatedCreator = () => {
        console.log(creatorName);
        console.log(creatorUrl);
        console.log(creatorDescr);
        console.log(creatorImageURL);
        setCreator({name: creatorName, url: creatorUrl, description: creatorDescr, imageURL: creatorImageURL});
        console.log(creator);
    }

    // Update existing post
    // UPDATE post
    const updateCreator = async (event) => {
        event.preventDefault();

        handleUpdatedCreator();
        console.log(creator);
        if (creator.name != null) {
            await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url,  description: creator.description, imageURL: creator.imageURL})
            .eq('id', id);

            window.location = "/";
        }
    }


    // DELETE existing post
    const deleteCreator = async (event) => {
        event.preventDefault();

        await supabase
        .from('creators')
        .delete()
        .eq('id', id); 

        window.location = "/";
    }

    return (
        <div>
            <h2 className='title-edit'> Creator Details </h2>
            {editedCreator != null ? 
            <>
            <div className="temp-card" style={{backgroundColor: "rgb(49, 49, 110)"}}>
                <img src={editedCreator.imageURL} alt="Creator Image"></img>
                <h3> Name: {editedCreator.name} </h3>
                <h4> Description: {editedCreator.description} </h4>
                <h4> Url: {editedCreator.url}</h4>
            </div>
            <p className='text-edit'> Proceed below if you want to edit your creator post! </p>
            <form>
                <label htmlFor="title">Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleName} /><br />
                <br/>

                <label htmlFor="artist">Creator Url</label><br />
                <input type="text" id="artist" name="artist" onChange={handleUrl} /><br />
                <br/>
                
                <label htmlFor="descr">Description</label><br />
                <input type="text" id="descr" name="descr" onChange={handleDescr} /><br />

                <label htmlFor="descr">Image URL</label><br />
                <input type="text" id="imageURL" name="imageURL" onChange={handleImageURL} /><br />
                
                <input style={{backgroundColor: "green"}} type="submit" value="Update Post!" onClick={updateCreator}/>
                <button className="deleteButton" onClick={deleteCreator}>Delete Creator</button>
            </form>
            </>
            : <h1></h1>}
        </div>
    )
}

export default EditCreator