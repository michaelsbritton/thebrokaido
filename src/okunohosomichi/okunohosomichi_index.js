// import react from 'react';

const okunohosomichi_index = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                Matsuo Basho's 
                <br />
                Oku no Hosomichi
            </div>
            <div className='ArticleImage'>
                <img src={require('../assets/okunohosomichi/Oku-no-hosomichi.png')} alt='Oku no Hosomichi' width="100%"/>
            </div>
            <div className='ArticleBody'>
                <p>
                    Matsuo Basho’s legendary haiku collection/travel journal is a must read for anybody considering taking a 
                    journey like ours. Starting in Tokyo, he went as far North as Hiraizumi, Iwate Prefecture (veering all over 
                    the place with his travel companion and fellow haiku poet, Sora, to see famous beauty spots, religious artefacts 
                    and local legends along the way). He then turned his eye West, heading (again, in a very roundabout way) to 
                    Kisakata, Akita Prefecture. Finally he made his way down the Japan Coast to Tsuruga, Fukui Precture, before 
                    veering inland and stopping in Ogaki, Gifu Precture.
                </p>

                <p>This is the currently ongoing project of ours, and will take a long time to complete, and not only because it’s 
                    total distance is about 600km longer than the entire Go-Kaido combined. Basho’s route (he didn’t stick to the 
                    Kaidos) requires lots of research, using both Oku no Hosomichi and Sora’s diary. Paul and Michael like to fancy 
                    themselves as a modern-day Basho and Sora, but in reality their adventures are probably a lot more akin to the 
                    hijinks of Yaji and Kita, the two Tokaido travellers in Jippenshu Ikku’s comedy travel guide “Shank’s Mare.”
                </p>

                <p>
                    Below are links to all Oku no Hosomichi-related fare…
                </p>
            </div>
        </div>
    );

}

export default okunohosomichi_index;