// import react from 'react';

import './NeedToKnowTerminology.css';

const needToKnowTerminology = () => {

    return(
        <div className='MainArticle'>
            <div className='ArticleTitle'>
                Need to Know Terminology
            </div>

            <div className='ArticleBody'>
                <p>
                    As you read this blog, you’ll come across many terms that you’ve probably never heard before, and 
                    we’ve decided rather than continually translate these names into clunky English, we’re usually going 
                    to use the romanised version of the Kanji. While their meaning should often be apparent through 
                    context, below are some more detailed explanations to help you understand life on the Kaidos more easily 
                    (listed in alphabetical order). Some of them will come up frequently; some rarely or not at all, but we 
                    still feel that knowing about them will be useful. Also there are some non-Kaido Japanese terms that might 
                    come in handy.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Chaya
                <span className="JapaneseText">(茶屋)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/chaya2.jpg')} alt='Chaya' width='100%'/>
                <div className='ArticleImageCaption'>
                    Kagiya Osen by Harunobu Suzuki
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Traditional tea houses that served as resting sites for travelers, they were also places for feasting 
                    and entertainment, with tea and sake in ready supply. Here, geisha would play instruments like the 
                    shamisen (a type of Japanese three-stringed guitar) for patrons, and perform dances. The Amazake Chaya 
                    in Hakone on the Tokaido has been in business for over 400 years.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Daimyo 
                <span className='JapaneseText'>(大名)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/nobunaga.jpg')} alt='Oda Nobunaga' width='100%'/>
                <div className='ArticleImageCaption'>
                    Oda Nobunaga, perhaps the most famous of the daimyo
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The kanji here mean “big” and “name” (referring to “named land” or privately-owned land), daimyo were 
                    powerful landholding magnates of Japan controlling each of the former provinces. These lords were 
                    constantly fighting, leading to much bloodshed, and the prominent among them were constantly vying for 
                    control. In 1600, Ieyasu Tokugawa became shogun and united Japan under him by both wiping out those daimyo 
                    who had stood against him, and, with his system of sankinkotai, ensuring the others stayed in line.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Daimyo-gyoretsu 
                <span className='JapaneseText'>(大名行列)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/gyoretsu.jpg')} alt='Daimyo Gyoretsu' width='100%'/>
                <div className='ArticleImageCaption'>
                    “Procession of Tokugawa Shogun” by Chikanobu Toyohara
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    While making the journey to and from Edo for sankinkotai, a daimyo lord’s procession was a chance for 
                    them to show off their wealth and prestige on their way to Edo, with samurai, retainers, various other 
                    attendants, and sometimes even さくら (Sakura) hangers-on paid to simply boost a daimyo’s numbers and 
                    make his procession all the more impressive. As such the processions took a large slice of the daimyo’s 
                    wealth, leaving them much less powerful than they would have been, which was just how Ieyasu wanted it.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Edo 
                <span className='JapaneseText'>(江戸)</span>
            </div>
            {/* <div className='ArticleImage'>
                <img src={require('./assets/terminology/edo.jpg')} alt='EDO' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div> */}

            <div className='ArticleBody'>
                <p>
                    In 1603, when Ieyasu Tokugawa wrested power away from the Emperor in Kyoto, he established his 
                    seat in what is now Tokyo, but was at that time named Edo, after the clan who created it. This 
                    transfer of the seat of power away from Kyoto was also the inspiration for the name of what is 
                    now known as the Edo period (1603-1867), the most widely-known period in Japanese history, when 
                    Japan was ruled by the Tokugawa Shogunate.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Gokaido 
                <span className='JapaneseText'>(五街道)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/gokaido.gif')} alt='Gokaido' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The Gokaido, the most famous of all Kaido, were the heart of Ieyasu Tokugawa’s sankinkotai system 
                    of duel residence, and were central in ensuring that the Tokugawa dynasty ruled Japan for over 260 
                    years. This was due to the rigid standards that Ieyasu ensured that each shuku followed to guarantee 
                    that each daimyo lord and his procession could successfully make the trip to and from their castles 
                    in strategic provinces to Edo. The route of each can be followed exactly still today, and some shuku 
                    have been immaculately preserved.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Hatago 
                <span className='JapaneseText'>(旅籠)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/hatago.png')} alt='Hatago' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Most often translated to “tavern”, Hatago were inns for ordinary folk who travelled the Kaido. 
                    Usually more numerous and boisterous than the more classy inns for official travelers. The kanji 
                    means “travel” and “basket”. Originally a name for a horse-feed container when traveling, it came 
                    to mean that meals were provided (at least breakfast and dinner, sometimes a lunchbox, too). 
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Honjin 
                <span className='JapaneseText'>(本陣)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/honjin.png')} alt='Honjin' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The primary inn in a Post Town, and usually the largest building. This is where the big boys 
                    stayed. Designated for the use of daimyo and other top-ranking officials such as court nobles, 
                    Imperial envoys, princes and princesses, messengers from parliament, head priests, and important 
                    families. It was expected that the honjin would be up to the lavish standards of the important 
                    people who stayed there. Usually bang in the centre of the Shuku, this was the beating heart of 
                    any post-town; its reason for being. Shrines and temples were often deliberately placed behind 
                    the honjin as evacuation sites, and the kanji in the name is derived from that of a general’s 
                    tent on a field of battle.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Ichirizuka 
                <span className='JapaneseText'>(一里塚)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/ichirizuka.png')} alt='Ichirizuka' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The kanji in this name means “one ri mound”, with a ri being a measure of distance, equal to 3.927 
                    kilometers. The Tokugawa shogunate decreed that a distance marker and rest spot must be placed on 
                    each side of the road at every ri from Nihonbashi (as a reminder of where the seat of power in 
                    Japan now was). These would be a pair of rounded earthen mounds, topped with trees, so that at any 
                    point in the day travelers would be able to find shade in which to rest, and know how far they’d 
                    come. Some ichirizuka (like the one above) have been lovingly preserved, and are great places to 
                    stop for a break.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Ieyasu Tokugawa 
                <span className='JapaneseText'>(徳川家康)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/tokugawa.jpg')} alt='Tokugawa' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The great unifier of Japan, Ieyasu Tokugawa officially ended the warring states period of Japanese 
                    history, and kicked off the Edo period by establishing the seat of power in Edo (now Tokyo). Though 
                    “appointed” by the Emperor as shogun – the military leader of Japan, everybody knew who was in charge, 
                    and it would stay that way until the Meiji restoration of power to the Emperor some 260 years later in 
                    1868. Ieyasu established the shuku system on the Gokaido, solidifying his seat and ensuring that his 
                    family would rule Japan for generations to come.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Izakaya
                <span className='JapaneseText'>(居酒屋)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/izakaya.png')} alt='Izakaya' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    A type of Japanese restaurant that specializes in serving plenty of food and alcohol, many with 
                    options for all-you-can-drink. A typical place for celebrations, group gatherings, dates, informal 
                    meanings, and the like.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Kaido 
                <span className='JapaneseText'>(街道)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/kaido.jpg')} alt='Kaido' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    While the kanji is just basically two different ways of expressing the word “street” or “road”, 
                    together they mean so much more. The Kaidos are the highways, the main roads, the veins and arteries 
                    that pumped the economic lifeblood around Edo period Japan (and were the basis for most of the current 
                    highways in modern Japan). While there are (to coin a technical phrase) fookin loads of Kaidos, they 
                    are most famously exemplified by the Gokaido – the five main routes to the new capital in Edo (Tokyo), 
                    which form the basis for Michael and Paul’s journey around Japan.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Kichinyado
                <span className='JapaneseText'>(木賃宿)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/kichinyado.jpg')} alt='Kichinyado' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Affordable lodging for the average traveler. The first two kanji here mean “wood” and “fee.” As 
                    meals were not provided, travelers wishing to eat would have to pay for firewood to cook. Usually 
                    located on the very outside of the Post town, just inside the Mitsuke.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Kosatsuba 
                <span className='JapaneseText'>(高札場)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/kosatsuba.jpg')} alt='Kosatsuba' width='100%'/>
                <div className='ArticleImageCaption'>
                    Photo credit: Paul Ewen (Nissaka-juku, Shizuoka Prefecture, Tokaido)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Notice boards, usually built on either or both entrances to a post town. These notice boards 
                    displayed both the national laws and prohibitions set forth by the shogun, and the local laws 
                    of the town. These laws were painted on flat wooden boards (“satsu”: 札)and affixed to the 
                    kosatsuba itself. The kanji “kou” (高), meaning “high” is thought to have been used here because 
                    these official announcements were placed in conspicuous places, many of them high in stature. 
                    Nowadays, many Kosatsuba have been restored as easy to recognize symbols of a post town’s heritage.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Masugata
                <span className='JapaneseText'>(枡形)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/masugata.png')} alt='Masugata' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Literally “measuring box” “shape” (because it’s the same shape as a “Masu” wooden box, which 
                    was used to measure rice in those days). In a castle or some of the bigger, more strategically-placed 
                    shukus, this was a squarish space between the inner and outer gates. This was a defence against enemy 
                    invasion, as it prevented enemy troops from advancing in a straight line. In smaller shukus it might 
                    be a sharp curve in the road, or a sudden steep incline, deliberately set to prevent ne’er-do-wells 
                    from seeing the way ahead clearly.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Mitsuke 
                <span className='JapaneseText'>(見附)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/mitsuke.jpg')} alt='Mitsuke' width='100%'/>
                <div className='ArticleImageCaption'>
                    Photo credit: Paul Ewen (Fujikawa Shuku, Aichi Prefecture, Tokaido)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The gateway of a Shuku, all comings and goings would be through here. In many cases, gates 
                    and guard houses were raised. Marking the Mitsuke would be either a Kido 
                    <span className='JapaneseText'>(木戸)</span>, a big wooden gate for large parties with horse 
                    and cart, also containing a smaller wicket gate for foot passengers to pass through; or a 
                    Boubana <span className='JapaneseText'>(棒鼻)</span>, a wooden stake stuck in the earth with the 
                    name of the Shuku on it.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Nihonbashi 
                <span className='JapaneseText'>(日本橋)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/nihonbashi.jpg')} alt='Nihonbashi' width='100%'/>
                <div className='ArticleImageCaption'>
                    In Edo Period Japan, all roads led to and from Nihonbashi Bridge (photo credit: Paul Ewen)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Completed in 1603, the original wooden Nihonbashi bridge (originally 江戸橋 – Edobashi) is the 
                    official starting point of all of the Gokaido, and was the zero mile marker for all distances 
                    around Japan from when Ieyasu came into power. It was the core of Edo’s downtown area, and was 
                    a hive of trade. In 1911, the current stone-on-steel bridge was completed.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Nomihodai
                <span className='JapaneseText'>(飲み放題)</span>
            </div>
            {/* <div className='ArticleImage'>
                <img src={require('./assets/terminology/oiwake.jpg')} alt='Oiwake' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div> */}

            <div className='ArticleBody'>
                <p>
                    All-you-can-drink option at restaurants and izakayas, usually including alcoholic and non-alcoholic drinks.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Oiwake 
                <span className='JapaneseText'>(追分)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/oiwake.jpg')} alt='Oiwake' width='100%'/>
                <div className='ArticleImageCaption'>
                    Photo credit: Paul Ewen (Oiwake-Juku, Nagano Prefecture, Nakasendo)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The kanji in this name comes from the fact that when the Kaido branched left and right, farmers 
                    would use the intersection to “chase” and “divide” cattle and horses, but over time, it has come 
                    to more simply mean “a forked road.” However, there are also often tea houses here, and they 
                    have become a kind of designated rest stop.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Rekijo
                <span className='JapaneseText'>(歴女)</span>
            </div>
            {/* <div className='ArticleImage'>
                <img src={require('./assets/terminology/XXX.jpg')} alt='ALT TEXT' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div> */}

            <div className='ArticleBody'>
                <p>
                    A female history buff.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Sanjo Ohashi 
                <span className='JapaneseText'>(三条大橋)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/sanjo-ohashi.jpg')} alt='Sanjo Ohashi' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Kyoto is divided into ten jō (a counter for thin things, in this case streets or strips of 
                    land going across Kyoto from East to West). Starting from the 1st jō in the North to the 
                    10th jō in the South, Ieyasu Tokugawa’s Kyoto residence was in 二条城 (2nd jō castle), and 
                    just to the South of the castle was 三条大橋 (3rd jō’s big bridge), which is the official 
                    end point of the Nakasendo and the Tokaido. Like it’s counterpart in Edo, Sanjo Ohashi 
                    Bridge was a hive of trade. These days, the bridge still retains wooden side beams and a 
                    lively atmosphere late into the evening, and is the perfect place to end a hike.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Sankinkotai 
                <span className='JapaneseText'>(参勤交代)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/sankinkotai.jpg')} alt='Sankinkotai' width='100%'/>
                <div className='ArticleImageCaption'>
                    “En masse Attendance of Daimyo at Edo Castle on a Festive Day” from the “Tokugawa Seiseiroku”. National Museum of Japanese History.
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    This was Ieyasu Tokugawa’s ingenious system of “requesting” that daimyo lords (infamously 
                    restless and against central control) come to Edo to furnish the capital with soldiers, 
                    usually using a 1 year in Edo, 1 year in your home province system of dual residence. The 
                    system was so ingenious because the round trip for each lord and their massive daimyo-gyoretsu 
                    entourage ate away massively at each lords’ wealth, leaving them without enough money to amass 
                    an army against Ieyasu (if they had been so inclined); and so fiendish because the daimyo’s family 
                    (including wife and children) were forced to remain in Edo as “guests” to ensure their loyalty. 
                    It was also a chance for each daimyo lord to flaunt their wealth, and the shuku on each Kaido 
                    prospered because of their constant back and forth. With hundreds of daimyo making trips, the 
                    arrival of daimyo-gyoretsu entourages in Edo was an almost daily occurrence.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Shuku or Shukuba 
                <span className='JapaneseText'>(宿) or (宿場)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/shukuba.jpg')} alt='Shuku / Shukuba' width='100%'/>
                <div className='ArticleImageCaption'>
                    Photo credit: Paul Ewen (Niekawa-juku, Nagano Prefecture, Nakasendo)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Shuku were Post Towns along the road to Edo, and were the heart of the Shogunate’s station 
                    system. Their main purpose was to provide food, lodgings, entertainment, and rest for people 
                    traveling along the road to either Edo or Kyoto. The rules of each were determined by the 
                    Shogunate. At the height of traffic along the roads, post-towns were hives of trade and 
                    activity. The reading “Shuku” changes to “Juku” when paired with a Post-Town’s name (like in 
                    the caption below the above photo). So when talking about Post-Town’s in general it will be 
                    Shuku, but when talking about a specific post town it will be, for example, “Okazaki-juku.”
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Sukegou
                <span className='JapaneseText'>(助郷)</span>
            </div>
            {/* <div className='ArticleImage'>
                <img src={require('./assets/terminology/XXX.jpg')} alt='ALT TEXT' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div> */}

            <div className='ArticleBody'>
                <p>
                    The more common shortened form of Sukegoumura <span className='JapaneseText'>(助郷村)</span> 
                    meaning “helper village.” The shogunate obliged each post town to have a certain number of horses 
                    on hand, but on the occasion that a daimyo’s procession was too big to be properly cared for, the 
                    people in the farmland surrounding the Shuku were legally obligated to supplement the shuku’s 
                    wholesaler and provide additional packhorses.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Tateba 
                <span className='JapaneseText'>(立場)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/tateba.png')} alt='Tateba' width='100%'/>
                <div className='ArticleImageCaption'>
                    Hiroshige’s depiction of 草津宿 (Kusatsu, Post Town no. 52 on the Tokaido) depicting a famous Tateba
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    A resting place meant for traveling officials, however, there are many “tateba Chaya” 
                    <span className='JapaneseText'>(立場茶屋)</span> – tea houses serving tea and local specialities, 
                    so many ordinary travelers often stopped here for a short break, too.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Toge 
                <span className='JapaneseText'>(峠)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/toge.jpg')} alt='Toge' width='100%'/>
                <div className='ArticleImageCaption'>
                    Photo credit: Paul Ewen (Usui Toge, Gunma Prefecture, Nakasendo)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    A mountain pass. This can be anything from zigzagging concrete roads, to loose rocks or dirt 
                    paths. The height of each Toge also varies massively, so you never really know what you’re 
                    getting into when you see that kanji. These are the toughest parts of each Kaido, so back in 
                    the day the Shuku on both sides of a Toge were usually crammed with people either getting 
                    ready for the push or recovering from the push.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Tonya / Toiya 
                <span className='JapaneseText'>(問屋)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/toiya.png')} alt='Toiya / Tonya' width='100%'/>
                <div className='ArticleImageCaption'>

                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    Shops or warehouses owned by larger wholesalers or traders. These guys were more into 
                    logistics than the average store. They dealt in trading, selling, and also shipping. They 
                    managed porters and pack-horses, especially for high-ranking officials, and arranged for the 
                    handing over of luggage to the next shuku, much like modern-day train stations. The role of the 
                    wholesaler often fell to the owner of the honjin, basically putting them in charge of the whole 
                    post-town (at least locally). In Edo (modern-day Tokyo), stores and their owners were referred to 
                    as Tonya, and outside of Edo, they were Toiba.
                </p>
            </div>

            <div className='TerminologyEntryTitle'>
                Wakihonjin
                <span className='JapaneseText'>(脇本陣)</span>
            </div>
            <div className='ArticleImage'>
                <img src={require('./assets/terminology/wakihonjin.jpg')} alt='Wakihonjin' width='100%'/>
                <div className='ArticleImageCaption'>
                    (Tsumago-Juku, Nagano Prefecture, Nakasendo)
                </div>
            </div>

            <div className='ArticleBody'>
                <p>
                    The waki-honjin was the secondary inn in a post-town, providing lodgings to second ranking official 
                    travelers. Often there was more than one waki-honjin, depending on the volume of traffic through the 
                    town. These would usually be very close to the Honjin. On the modern Kaidos, some Shuku have preserved 
                    their Waki-honjin much better than their Honjin, so we made them our focal point as we passed through.
                </p>
            </div>
        </div>
    );

}

export default needToKnowTerminology;