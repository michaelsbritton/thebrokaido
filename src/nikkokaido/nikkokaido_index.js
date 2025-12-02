// import react from 'react';

const nikkokaido_index = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                The Nikko Kaido
            </div>
            <div className='ArticleImage'>
                <img src={require('../assets/nikkokaido/Nikko-Kaido.png')} alt='Nikko-Kaido' width='100%' />
            </div>
            <div className='ArticleBody'>
                <p>
                    Coming in at about 150km (93 mi) long, the Nikko Kaido is the shortest of the five routes, starting in 
                    Nihonbashi, Tokyo, and ending on the Shinkyo Bridge in Nikko, Tochigi Prefecture, the Nikko Kaido 
                    connected Edo to the world-famous Toshogu Shrine. Terrain-wise and distance-wise, it’s not a particularly 
                    challenging Kaido, but the last 12km or so is flanked by beautiful rows of tall Cedar trees, giving the 
                    approach into Nikko a one-of-a-kind finish.
                </p>

                <p>
                    Below you will find all articles related to the Nikko Kaido…
                </p>

                <p>
                    Walking the Nikko Kaido
                </p>
            </div>
        </div>
    );

}

export default nikkokaido_index;