// import react from 'react';

const koshukaido_index = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                The Koshukaido
            </div>
            <div className='ArticleImage'>
                <img src={require('../assets/koshukaido/Koshu-Kaido.png')} alt='Koshu-Kaido' width='100%'/>
            </div>
            <div className='ArticleBody'>
                <p>
                    Totaling a distance of 212km (132 mi), the Koshu Kaido starts on Nihonbashi Bridge, Tokyo, and heading west 
                    ends in Shimo Suwa on the northern banks of Lake Suwa, Nagano. Some tough mountain passes reward you with 
                    beautiful views, and really make the Koshu Kaido stand out. This was the first and one of only 2 of the Kaidos 
                    that Paul and Michael completed entirely in tandem.
                </p>

                <p>
                    Below you will find all articles concerning the Koshu Kaido…
                </p>

                <p>
                    Pablo and Miguel on the Koshu Kaido Day 1- Nihonbashi to Fuchu-Hommachi
                </p>
            </div>
        </div>
    );

}

export default koshukaido_index;