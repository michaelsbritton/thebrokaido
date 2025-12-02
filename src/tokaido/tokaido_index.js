// import react from 'react';

import '../shared/entryStyles.css';

const tokaido_index = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                The Tokaido
            </div>
            <div className='ArticleImage'>
                <img src={require('../assets/tokaido/Tokaido.png')} alt='Tokaido' width='100%' />
            </div>
            <div className='ArticleBody'>
                <p>
                    The Tokaido is the Golden Boy of the five routes, and the only one with a shinkansen line named after it. 
                    The Tokaido also received the most in terms of government and private funding, which means that lots of its 
                    post town history has been beautifully preserved. Clocking in at an impressive 514 km (319 mi), the Tokaido 
                    is only 20km short of the Nakasendo. The route it takes along the coast is generally easier than the 
                    Nakasendo (with a few challenging exceptions – notably the mountain pass hike into and out of the Hakone 
                    basin). The Tokaido was the final of the five for both Paul and Michael, and marked a very impressive ending 
                    to the challenge of a lifetime.
                </p>

                <p>
                    Below are links to all our Tokaido-related goodness…
                </p>

                <p>
                    The Tokaido has begun!
                </p>

                <p>
                    Tokaido – Totsuka to Oiso (Tuesday, December 28th, 2021)
                </p>

                <p>
                    And here’s a list of all 53 stations on the Tokaido (followed by the distance to the next station – Shinagawa 
                    is 7.8km from Nihonbashi Bridge)…
                </p>

                <p>
                    <ol>
                        <li>Shinagawa <span className="JapaneseText">品川宿</span> (9.8km)</li>
                        <li>Kawasaki <span className="JapaneseText">川崎宿 </span>(9.7km)</li>
                        <li>Kanagawa <span className="JapaneseText">神奈川宿 </span>(4.9km)</li>
                        <li>Hodogaya <span className="JapaneseText">保土ヶ谷宿 </span>(8.8km)</li>
                        <li>Totsuka <span className="JapaneseText">戸塚宿 </span>(7.8km)</li>
                        <li>Fujisawa <span className="JapaneseText">藤沢宿 </span>(13.7km)</li>
                        <li>Hiratsuka <span className="JapaneseText">平塚宿 </span>(2.9km)</li>
                        <li>Oiso <span className="JapaneseText">大磯宿 </span>(15.6km)</li>
                        <li>Odawara <span className="JapaneseText">小田原宿 </span>(16.5km)</li>
                        <li>Hakone <span className="JapaneseText">箱根宿 </span>(14.7km)</li>
                        <li>Mishima <span className="JapaneseText">三島宿 </span>(5.8km)</li>
                        <li>Numazu <span className="JapaneseText">沼津宿 </span>(5.9km)</li>
                        <li>Hara <span className="JapaneseText">原宿 </span>(11.7km)</li>
                        <li>Yoshiwara <span className="JapaneseText">吉原宿 </span>(11.1km)</li>
                        <li>Kanbara <span className="JapaneseText">蒲原宿 </span>(3.9km)</li>
                        <li>Yui <span className="JapaneseText">由比宿 </span>(9.1km)</li>
                        <li>Okitsu <span className="JapaneseText">興津宿 </span>(4.1km)</li>
                        <li>Ejiri <span className="JapaneseText">江尻宿 </span>(10.5km)</li>
                        <li>Fuchu <span className="JapaneseText">府中宿 </span>(5.6km)</li>
                        <li>Mariko <span className="JapaneseText">丸子宿 </span>(7.8km)</li>
                        <li>Okabe <span className="JapaneseText">岡部宿 </span>(6.7km)</li>
                        <li>Fujieda <span className="JapaneseText">藤枝宿 </span>(8.6km)</li>
                        <li>Shimada <span className="JapaneseText">島田宿 </span>(3.9km)</li>
                        <li>Kanaya <span className="JapaneseText">金谷宿 </span>(6.5km)</li>
                        <li>Nissaka <span className="JapaneseText">日坂宿 </span>(7.0km)</li>
                        <li>Kakegawa <span className="JapaneseText">掛川宿 </span>(9.5km)</li>
                        <li>Fukuroi <span className="JapaneseText">袋井宿 </span>(5.8km)</li>
                        <li>Mitsuke <span className="JapaneseText">見付宿 </span>(16.4km)</li>
                        <li>Hamamatsu <span className="JapaneseText">浜松宿 </span>(10.8km)</li>
                        <li>Maisaka <span className="JapaneseText">舞阪宿 </span>(5.9km)</li>
                        <li>Arai <span className="JapaneseText">新居 </span>(5.9km)</li>
                        <li>Shirasuka <span className="JapaneseText">白須賀宿 </span>(5.7km)</li>
                        <li>Futagawa <span className="JapaneseText">二川宿 </span>(6.1km)</li>
                        <li>Yoshida <span className="JapaneseText">吉田宿 </span>(10.2km)</li>
                        <li>Goyu <span className="JapaneseText">御油宿 </span>(1.7km)</li>
                        <li>Akasaka <span className="JapaneseText">赤坂宿 </span>(8.8km)</li>
                        <li>Fujikawa <span className="JapaneseText">藤川宿 </span>(6.6km)</li>
                        <li>Okazaki <span className="JapaneseText">岡崎宿 </span>(14.9km)</li>
                        <li>Chiryu <span className="JapaneseText">知立宿 </span>(11.0km)</li>
                        <li>Narumi <span className="JapaneseText">鳴海宿 </span>(6.5km)</li>
                        <li>Miya <span className="JapaneseText">宮宿 </span>(24.0km)</li>
                        <li>Kuwana <span className="JapaneseText">桑名宿 </span>(12.5km)</li>
                        <li>Yokkaichi <span className="JapaneseText">四日市宿 </span>(10.7km)</li>
                        <li>Ishiyakushi <span className="JapaneseText">石薬師宿 </span>(2.7km)</li>
                        <li>Shono <span className="JapaneseText">庄野宿 </span>(7.8km)</li>
                        <li>Kameyama <span className="JapaneseText">亀山宿 </span>(5.8km)</li>
                        <li>Seki <span className="JapaneseText">関宿 </span>(6.5km)</li>
                        <li>Sakashita <span className="JapaneseText">坂下宿 </span>(9.7km)</li>
                        <li>Tsuchiyama <span className="JapaneseText">土山宿 </span>(10.5km)</li>
                        <li>Minaguchi <span className="JapaneseText">水口宿 </span>(13.7km)</li>
                        <li>Ishibe <span className="JapaneseText">石部 </span>(11.7km)</li>
                        <li>Kusatsu <span className="JapaneseText">草津宿 </span>(14.4km)</li>
                        <li>Otsu <span className="JapaneseText">大津宿 </span>(11.8km to Sanjo Ohashi Bridge)</li>
                    </ol>
                </p>

    

            </div>
        </div>
    );

}

export default tokaido_index;