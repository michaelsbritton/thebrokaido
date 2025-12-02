// import react from 'react';

const oshukaido_index = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                The Oshukaido
            </div>
            <div className='ArticleImage'>
                <img src={require('../assets/oshukaido/Oshu-Kaido.png')} alt='Oshu Kaido' width='100%' />
            </div>
            <div className='ArticleBody'>
                <p>
                    Clocking in at about 180 km (112 mi) the official Oshu Kaido heads North from Nihonbashi Bridge, Tokyo, 
                    and ends at the gates of Komine Castle in Shirakawa, Fukushima Prefecture. The first three days of hiking 
                    follow the same route as the Nikko Kaido as far as Utsunomiya, and once out of Tokyo there is very little 
                    in terms of stand-out beauty or preserved Kaido history. This makes the second run a bit of a slog meant 
                    only for completists like us. Once you get North of Utsunomiya, though, the Oshu Kaido quickly establishes 
                    its own flavor, with many beautiful river crossings and not-too-extreme ups and downs through tiny 
                    countryside towns. Komine Castle is an impressive and welcoming finish line. This was the second of the two 
                    that Paul and Michael finished completely in tandem over a 6-day hike.
                </p>

                <p>
                    Below are links to all articles on the Oshu Kaido…
                </p>

                <p>
                    Brokaido Documentary – The Oshu Kaido Edition (Day 1)
                </p>
            </div>
        </div>
    );

}

export default oshukaido_index;