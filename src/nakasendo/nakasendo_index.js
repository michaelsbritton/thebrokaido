//import react from 'react';

import '../shared/entryStyles.css';

const nakasendo_index = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                The Nakasendo
            </div>
            <div className='ArticleImage'>
                <img src={require('../assets/nakasendo/Nakasendo.png')} alt='Nakasendo' width='100%' />
            </div>
            <div className="ArticleBody"> 
                <p>
                    The Nakasendo, starting on Nihonbashi Bridge in Tokyo, and ending on Sanjo Ohashi Bridge in Kyoto, is the beast of 
                    the Go-Kaido in more ways than one. First, it’s the longest, clocking in at a whopping 534kilometers (332 miles)! 
                    Also, it’s the most mountainous with 7 toge (mountain passes), the tallest of which (The Wada Pass in Nagano) is a 
                    whopping 1,531 meters tall. Finally, it’s the most diverse of terrain, so you need to be ready for dirt paths, river 
                    crossings, paths marked by massive uneven stones that test the ankles, small paved roads, fields, and even walking 
                    on massive main roads with no footpath, being bore down on by high-speed 18-wheeler trucks. This does make for some 
                    of the most beautiful sites of the entire Go-Kaido, and a challanging and memorable quest.
                </p>
                <p>
                    Below are links to all articles pertaining to the Nakasendo –
                </p>

                <p>
                    On the Road Diary – Nakasendo (Prologue: Planning the trip)
                </p>

                <p>
                    On the Road Diary – Nakasendo (Day 1)
                </p>

                <p>
                    On the Road Diary – Nakasendo (Day 2)
                </p>

                <p>
                    On the Road Diary – Nakasendo (Day 3)
                </p>

                <p>
                    On the Road Diary – Nakasendo (Day 4)
                </p>
            </div>
        </div>
    );

}

export default nakasendo_index;