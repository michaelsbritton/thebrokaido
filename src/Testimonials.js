// import react from 'react';
import './Testimonials.css';

const testimonials = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                Walk with Us: Testimonials
            </div>
            <div className='ArticleBody'>
                <p>
                    Hey everyone! Paul and Michael here. After reading about our misadventures and shenanigans on the Kaidos, 
                    have you found yourself wondering what it would be like if you could walk the Kaidos yourself, see old 
                    Japan, wander through beautiful scenery which inspired centuries of artists and poets, and make your own 
                    once-in-a-lifetime memories on these amazing historical roads?
                </p>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Sanjo.jpg')} alt='Sanjo-Ohashi' width='100%' />
                <div className='ArticleImageCaption'>
                    Arriving on Sanjo Ohashi Bridge in Kyoto at the end of the Tokaido. This could be you!
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Well, you can!
                </p>

                <p>
                    Want to see the famously beautiful section of the Nakasendo from Tsumago to Magome? Want to spend days 
                    hiking in the shadow of Mount Fuji? Want to experience setting off from the hustle and bustle of Nihonbashi 
                    like travelers did in the old days, or walk down into the valley of Kyoto and arrive on Sanjo Ohashi Bridge 
                    as the sun goes down? How about everything in between?
                </p>
            </div>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Fuji_Wilds.jpg')} alt='Breathtaking Scenery' width='100%'/>
                <div className='ArticleImageCaption'>
                    Witness breathtaking scenery while walking through Japan’s rich history.
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Using years of experience in hiking and logistics, we’ll plan a trip at your pace. Whether you want a 
                    relaxing stroll or a leg-testing 45km day, we’ll go at your speed. Walking a Kaido should be enjoyable, 
                    above all else, and we’ll be with you to make sure you keep hitting your targets and seeing the things 
                    you want to see, all while having a good time.
                </p>
                <p>
                    No Japanese proficiency? No problem! Paul and Michael are both qualified to the N2 Level (Upper 
                    Intermediate) of the Japanese Language Proficiency Test, and have years of experience dealing with hotel 
                    staff, tour guides and locals to help solve any problems and answer any questions you might have.
                </p>
            </div>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Tsumago_Morning.jpg')} alt='Tsumago in the Morning' width='100%'/>
                <div className='ArticleImageCaption'>
                    Coming into Tsumago Post Town in the early morning.
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Walking a Kaido is truly the experience of a lifetime. Let us make it happen for you.
                </p>

                <p>
                    Here’s what some of our satisfied customers had to say on their Kaido experiences…
                </p>
            </div>

            <span className='TestimonialName'>Jun</span>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Testimonial_Jun.jpg')} alt='Testimonial Jun' width='100%'/>
                <div className='ArticleImageCaption'>
                    Jun – walked from Okazaki to Miya (Aichi Prefecture) along the Old Tokaido
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    We walked part of the Tokaido, about 30 kilometers from Okazaki to Atsuta. It was my first time walking 
                    30 kilometers in one day, and my first time walking the Gokaido. I would not have been able to achieve 
                    this amazing experience without my best friend and best Gokaido tour guide, Paul.
                </p>

                <p>
                    He has much more knowledge about the Tokaido than I, a Japanese person, and talks about the Tokaido and 
                    Japanese history from the unique perspective of a foreigner. It was perfect for me, a history lover who 
                    is a fan of Ryoma Sakamoto…
                </p>

                <p>
                    Due to my lack of regular exercise, I started to feel pain in my right leg early in the first half. My 
                    pace was clearly slowing down and I started to fall behind, but without him, who always looked out for 
                    me and made me feel happy, I wouldn’t have been able to make it to Atsuta.
                </p>

                <p>
                    I am grateful to Paul for giving us entertainment that transcends time and space, transcending nationality 
                    and race, and helping us to experience following in the footsteps of our predecessors across Japan.
                </p>

                <p className="JapaneseText">
                    東海道の一部、岡崎から熱田までの約30キロを一緒に歩きました。五街道を歩くことももちろん、1日で30キロもの距離を歩くこと
                    も初めてでしたが、熱田に着いた時の達成感はこれまでの人生でも経験したことがないほど大きなものでした。この素晴らしい体験
                    を達成することができたのは、私の親友であり、また最高の五街道のツアーガイドであるポールの存在なしでは語ることができません。
                </p>

                <p className="JapaneseText">
                    日本人である私よりもはるかに東海道に関する知識が豊富で、かつ、外国人ならではの視点で東海道や日本の歴史について語りながら、
                    歴史の先人たちが歩いた同じ道を、景色を感じながら歩く…坂本龍馬推しの歴史好きの私にとってなんと贅沢な時間だったか…
                </p>

                <p className="JapaneseText">
                    普段の運動不足がたたり、情けないことに前半の早い段階から右足が痛みが走り始め、ペースが明らかに落ち、遅れ始めた私に、常に
                    気配りをしてくれ、常に楽しい気持ちにしてくれた彼の存在がなければ、熱田まで辿り着けなかったでしょう。
                </p>

                <p className="JapaneseText">
                    国を超えて、人種を超えて、生まれた日本の歴史の先人たちの体験を経験する、時空を超えたエンターテイメントを与えてくれたポール
                    に感謝。
                </p>
            </div>

            <span className='TestimonialName'>Chelsea</span>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Testimonial_Chelsea.jpg')} alt='Testimonial Chelsea' width='100%'/>
                <div className='ArticleImageCaption'>
                    Chelsea – walked from Konosu to Fukaya (Saitama Prefecture) along the Old Nakasendo
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    “I did a short(?) half day Brokaido tour of about 17km along the Nakasendo. I’ve never been a huge long 
                    distance walker, my mind is willing but my feet usually protest, but Paul’s great at setting a decent 
                    pace for those who don’t have as long of legs as he does! Haha. We took a few breaks whenever I needed 
                    a rest which helped a lot. We walked through some beautiful temples which have always been one of my 
                    favourite things to see in Japan. Lots of opportunities to take some amazing photos!
                </p>

                <p>
                    It’s clear to see how passionate Paul is about the history of the Nakasendo and he told me a lot of 
                    fascinating stories and tidbits along the way. He’s genuinely a fun and friendly person to talk with 
                    which made the journey that much better! He’d answer all of the random questions I asked. I’d love to 
                    go on another Brokaido adventure in the future!
                </p>

            </div>

            <span className='TestimonialName'>Andrew</span>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Testimonial_Andrew.jpg')} alt='Testimonial Andrew' width='100%'/>
                <div className='ArticleImageCaption'>
                    Andrew – walked from Takasaki (Gunma Prefecture) to Karuizawa (Nagano Prefecture) on the Old Nakasendo, 
                    and conquered the Usui Mountain Pass.
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    “I went on a two day trip from Takasaki to Karizuwa with two of the best tour guides anyone could ask for. 
                    They were incredibly knowledgeable about the Nakasendo trail and the history behind it. We traveled many miles, 
                    including up and down a mountain, so it was a challenging trek. The views from the top of the mountain were 
                    definitely worth the effort, honestly incredible, and I got to experience Japanese history firsthand. The tour 
                    tested my endurance but the guides made sure to give regular breaks, which made it easier to push through and 
                    reach the end. An unforgettable experience.”
                </p>
            </div>

            <span className='TestimonialName'>Satsuki</span>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Testimonial_Satsuki.jpg')} alt='Testimonial Satsuki' width='100%'/>
                <div className='ArticleImageCaption'>
                    Satsuki – walked from Totsuka to Odawara (Kanagawa Prefecture) along the Old Tokaido
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    “My 2 day Brokaido experience was such a healing, fun and rewarding experience! The most challenging part 
                    was walking through the pain, but Paul managed to lighten the load with plenty of historical chatter, 
                    conbini pit stops, fun vending machine drinks and his own brand of cheerful nonsense haha. And following 
                    his tips on aftercare at the hotel definitely helped ease some of the muscle pain. Rather than specific 
                    sites, overall I enjoyed how the city-scapes blended into suburbs and coastal views, with historical and 
                    untouched sites popping up often in the most random places. Would love to try out a different kaido or route!”
                </p>
            </div>

            <span className='TestimonialName'>Junji</span>

            <div className='ArticleImage'>
                <img src={require('./assets/testimonials/Testimonial_Junji.webp')} alt='Testimonial Junji' width='100%'/>
                <div className='ArticleImageCaption'>
                    Junji has joined us on a plethora of walks including parts of the Oshu Kaido from Shirakawa to Sugita, 
                    the Nakasendo from Takasaki to Karuizawa, the Nakasendo from Kamisuwa to Shimosuwa, and on Oku no Hosomichi 
                    from Murayama to Dawa Sanzan.
                </div>
            </div>

            <div className='ArticleBody'>
                <p className="JapaneseText">
                    私は彼らと一緒に中山道や奥州街道の一部を歩きましたが、彼らの街道に関する知識は日本人である私より遥かに豊富で、
                    間違いなく最高の五街道ツアーガイドでした！旅路は時に厳しい道のりもありますが、彼らにその町の歴史や当時の様子
                    を聞きながら歩くことで、昔の旅人の気分を味わうことができたし、宿場町に着いた時の達成感は格別でした。
                </p>
                <p className="JapaneseText">
                    中山道で歩いた碓氷峠はとても厳しい道のりでしたが、その景色の美しさは努力に値するもので、私の心に焼き付いています。
                    とても素晴らしい体験ができました。
                </p>
                <p>
                    I walked together with these guys on parts of the Nakasendo and parts of the [northern] Oshu Kaido. 
                    Even as someone from Japan, I found their knowledge more than abundant—they made for wonderful tour guides 
                    of the Gokaido! The route itself was sometimes intense. While walking, I listened to Michael and Paul talk 
                    about the history and other information of the places we passed through, and I was able to get a taste of what 
                    travelers from times past experienced on the same routes. When we arrived at the post town (the place we were 
                    staying for the night), I had an exceptional feeling of accomplishment.
                </p>
                <p>
                    Crossing the Usui Toge on the Nakasendo was especially challenging, but it was a challenge that was rewarded 
                    with a stunning view that will be forever etched in my memory. I had a wonderful experience walking with these two.
                </p>
            </div>
        </div>
    );

}

export default testimonials;