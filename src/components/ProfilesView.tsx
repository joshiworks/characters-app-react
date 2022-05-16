import { useCallback, useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import APIService from "../utils/APIService";
import CharacterCard from "./CharacterCard";

const ProfilesView = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [characters, setCharacters] = useState<Character[]|null>(null);
     
    const fetchData =  useCallback(async () => {          
        const characters = await APIService.fetchCharacters();
        setCharacters(characters);
        setIsLoaded(true);
    }, []);

    useEffect( () => {
        try {
            fetchData();
        } catch(error:any) {
            setIsLoaded(true);
            setError(error);
        }
    }, [fetchData]);

    
    if (error) {
        return <div>Error: {'Error fetching data !'}</div>;
    }
    
    if (!isLoaded) {
        return <ScaleLoader />
    }

    if(characters) {
       return(
            <main>
                <section className="showcase__Wrapper">
                    <div className="showcase__Inner">
                        { characters.map((c)=> <CharacterCard key={c.id} {...c} />) }
                    </div>      
                </section>
            </main> 
       );
             
    } else {
        return <div>No Characters to showup !!</div>
    }
};

export default ProfilesView;