import React, { Component } from 'react'
import NewsItem from './NewsItem/NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Nicole Wetsman",
            "title": "Oura adds period prediction and heart rate to its next-gen smart ring",
            "description": "Oura’s Generation 3 smart ring will have new features, including period prediction and heart rate. The device adds more sensors and will move to a subscription model.",
            "url": "https://www.theverge.com/2021/10/26/22740187/oura-period-prediction-heart-rate-smart-ring",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/MMAoDOF7VfAOE07mWRKqbafCKxc=/0x132:600x446/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22947269/HERO_Oura_Ring_Gen3___LEDs_Zoomed.png",
            "publishedAt": "2021-10-26T13:00:00Z",
            "content": "It reflects the companys focus on health, the CEO says \r\nOura\r\nOuras Generation 3 smart ring will have a whole new slate of features, including period prediction, blood oxygen monitoring, and real-ti… [+3274 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Ashley Carman",
            "title": "Amazon is building a Clubhouse competitor that turns hosts into DJs",
            "description": "Amazon is working on a new live audio app, internally called Project Mic. The app will allow hosts and listeners to interact, and show hosts can build programming around music.",
            "url": "https://www.theverge.com/2021/10/26/22744585/amazon-project-mic-launch-live-audio-app",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/bJHLWH-k-S9cXaT5jWBHiRZhUM4=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22954158/acastro_211024_1777_amazonMusic_0001.jpg",
            "publishedAt": "2021-10-26T12:30:00Z",
            "content": "A new app is in the works\r\nIllustration by Alex Castro\r\nAmazon is next on the list of companies getting into the live audio game. The company is building a new app, codenamed Project Mic, that gives … [+2808 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Nilay Patel",
            "title": "Adobe’s Scott Belsky on how NFTs will change creativity",
            "description": "Scott Belsky, chief product officer at Adobe, talks about bringing Photoshop to the web and how it could boost creative collaboration. He also tackles the verification problem surrounding NFTs.",
            "url": "https://www.theverge.com/22740442/adobe-scott-belsky-interview-nft-photoshop-blockchain-creator-economy",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/HHIpyq4-IS44SiJLKty-f8AzTlQ=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22956251/VRG_ILLO_Decoder_Adobe_s.jpg",
            "publishedAt": "2021-10-26T13:00:00Z",
            "content": "‘Prepare as NFT’ coming to Photoshop Adobe is one of those companies that I don’t think we pay enough attention to — it’s been around since 1982, and the entire creative economy runs through its soft… [+60562 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Andrew Liszewski",
            "title": "You'll Want to Keep Your Doritos-Dusted Fingers Off These Luxurious $450 Lambskin Gaming Headphones",
            "description": "If there was ever any doubt that video games are a lucrative business, the fact that Master & Dynamic—a company known for its beautifully crafted headphones that sound amazing and cost a small fortune—is introducing its first set of wireless gaming headphones…",
            "url": "https://gizmodo.com/youll-want-to-keep-your-doritos-dusted-fingers-off-thes-1847775226",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/65e57363cc960a573a3ccf6f93771137.png",
            "publishedAt": "2021-10-26T12:00:00Z",
            "content": "If there was ever any doubt that video games are a lucrative business, the fact that Master &amp; Dynamica company known for its beautifully crafted headphones that sound amazing and cost a small for… [+2558 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cisco creates Apple-specific development team for collaboration software - Reuters",
            "description": "Cisco Systems Inc <a href=\"https://www.reuters.com/companies/CSCO.O\" target=\"_blank\">(CSCO.O)</a> has created a team dedicated to developing its Webex collaboration software for Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAP…",
            "url": "https://www.reuters.com/technology/cisco-creates-apple-specific-development-team-collaboration-software-2021-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/LTOcQITPbEdXEU0-YlMebP7Imyg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7O6RYBEFZFPORIGBIVH5CUC3RU.jpg",
            "publishedAt": "2021-10-26T17:17:00Z",
            "content": "The Cisco Systems logo is seen as part of a display at the Microsoft Ignite technology conference in Chicago, Illinois, U.S., May 4, 2015. REUTERS/Jim YoungOct 26 (Reuters) - Cisco Systems Inc (CSCO.… [+1645 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Devik Jain",
            "title": "US STOCKS-S&P, Dow futures hit record highs as investors eye tech earnings - Reuters",
            "description": "The S&P 500 and Dow futures hit record highs on Tuesday as Facebook rose after its quarterly results and a share buyback plan, turning the spotlight on its technology peers set to report later in the day.",
            "url": "https://www.reuters.com/article/usa-stocks-idUSKBN2HG1FM",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20211026&t=2&i=1579129964&r=LYNXMPEH9P0P9&w=800",
            "publishedAt": "2021-10-26T11:37:00Z",
            "content": "(Reuters) - The S&amp;P 500 and Dow futures hit record highs on Tuesday as Facebook rose after its quarterly results and a share buyback plan, turning the spotlight on its technology peers set to rep… [+2397 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Staff",
            "title": "Nikkei tracks Wall Street higher amid earnings optimism - Reuters",
            "description": "Japan's Nikkei share average rallied strongly on Tuesday amid earnings optimism, and following gains on Wall Street overnight that took the Dow and S&P 500 to record highs.",
            "url": "https://www.reuters.com/article/japan-stocks-midday-idUSL4N2RM12L",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-10-26T03:47:00Z",
            "content": "By Reuters Staff\r\nTOKYO, Oct 26 (Reuters) - Japans Nikkei share average rallied strongly on Tuesday amid earnings optimism, and following gains on Wall Street overnight that took the Dow and S&amp;P … [+1193 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "S&P, Dow futures hit record highs as investors eye tech earnings - Reuters",
            "description": "The S&P 500 and Dow futures hit record highs on Tuesday as Facebook rose after its quarterly results and a share buyback plan, turning the spotlight on its technology peers set to report later in the day.",
            "url": "https://www.reuters.com/business/sp-dow-futures-hit-record-highs-investors-eye-tech-earnings-2021-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/GIH9oGtqSKeT3HbLn6_knyLeX-w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6GKXXXR4JVOXHCPFOSABQ7KCWA.jpg",
            "publishedAt": "2021-10-26T11:41:00Z",
            "content": "Traders work on the floor of the New York Stock Exchange (NYSE) in New York City, U.S., October 21, 2021. REUTERS/Brendan McDermidOct 26 (Reuters) - The S&amp;P 500 and Dow futures hit record highs o… [+2699 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Staff",
            "title": "Nikkei rises on Wall Street gains, earnings optimism - Reuters",
            "description": "Japan's Nikkei share average rallied strongly on Tuesday, fuelled by earnings optimism and following overnight Wall Street gains that took the Dow and S&P 500 to record highs.",
            "url": "https://www.reuters.com/article/japan-stocks-close-idUSL4N2RM1WB",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-10-26T07:23:00Z",
            "content": "By Reuters Staff\r\nTOKYO, Oct 26 (Reuters) - Japans Nikkei share average rallied strongly on Tuesday, fuelled by earnings optimism and following overnight Wall Street gains that took the Dow and S&amp… [+1683 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Trillion-dollar Tesla - Reuters",
            "description": "A look at the day ahead from Sujata Rao",
            "url": "https://www.reuters.com/technology/trillion-dollar-tesla-2021-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/MAiZTthDP3BpGDtYOJQQowe5mZY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6E5RM36BUVPQ3EN47Q6SRO6EAQ.jpg",
            "publishedAt": "2021-10-26T07:31:00Z",
            "content": "A Tesla logo is seen at the Tesla Shanghai Gigafactory in Shanghai, China January 7, 2019. REUTERS/Aly SongLONDON, Oct 26 (Reuters) - A look at the day ahead from Sujata Rao\r\nApple, Amazon, Microsoft… [+2562 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Kane Wu",
            "title": "GLOBAL MARKETS-Asia stocks catch Wall St cheer but China caps gains - Reuters",
            "description": "Asian stocks inched higher on Tuesday, as upbeat Wall Street earnings lifted the broader economic outlook though fresh worries about China's property sector hit Hong Kong and mainland markets.",
            "url": "https://www.reuters.com/article/global-markets-idUSKBN2HG07H",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20211026&t=2&i=1579077062&r=LYNXMPEH9P02Y&w=800",
            "publishedAt": "2021-10-26T02:27:00Z",
            "content": "HONG KONG (Reuters) - Asian stocks inched higher on Tuesday, as upbeat Wall Street earnings lifted the broader economic outlook though fresh worries about Chinas property sector hit Hong Kong and mai… [+2638 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Asia stocks catch Wall St cheer but China caps gains - Reuters",
            "description": "Asian stocks inched higher on Tuesday, as upbeat Wall Street earnings lifted the broader economic outlook though fresh worries about China's property sector hit Hong Kong and mainland markets.",
            "url": "https://www.reuters.com/business/global-markets-wrapup-1-2021-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/pCgeNzGzQ-9jzrlG5OqWPGVYjVs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FY2KWACJBZOLNGFZ6UMJB24GCY.jpg",
            "publishedAt": "2021-10-26T02:30:00Z",
            "content": "A man walks past in front of a stock quotation board showing the price of the SoftBank Corp. and Nikkei share average outside a brokerage in Tokyo, Japan December 19, 2018. REUTERS/Issei KatoHONG KON… [+2879 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Kane Wu",
            "title": "GLOBAL MARKETS-Stocks rally in Asia, China property sector worries dampen sentiment - Reuters",
            "description": "Asian stocks largely rallied on Tuesday, following Wall Street's record highs overnight, though fresh worries about China's property sector weighed on investors' sentiments.",
            "url": "https://www.reuters.com/article/global-markets-idUSL4N2RM1D9",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-10-26T06:12:00Z",
            "content": "HONG KONG, Oct 26 (Reuters) - Asian stocks largely rallied on Tuesday, following Wall Streets record highs overnight, though fresh worries about Chinas property sector weighed on investors sentiments… [+3619 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Taiwan seen growing 4% in Q3 on pandemic hit, but exports help - Reuters",
            "description": "Taiwan's trade-reliant economy is expected to have expanded at a slower pace in the third quarter due to the island's COVID-19 outbreak, a Reuters poll showed, though supported by export growth and healthy global demand for semiconductors.",
            "url": "https://www.reuters.com/world/asia-pacific/taiwan-seen-growing-4-q3-pandemic-hit-exports-help-2021-10-26/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53",
            "publishedAt": "2021-10-26T05:02:00Z",
            "content": "TAIPEI, Oct 26 (Reuters) - Taiwan's trade-reliant economy is expected to have expanded at a slower pace in the third quarter due to the island's COVID-19 outbreak, a Reuters poll showed, though suppo… [+2624 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Tom Wilson, Kane Wu",
            "title": "GLOBAL MARKETS-Stocks across the world buoyant on upbeat earnings - Reuters",
            "description": "Shares made slim gains around the world on Tuesday, with upbeat corporate earnings buoying European shares and outweighing recurring worries about China's property sector.",
            "url": "https://www.reuters.com/article/global-markets-idUSL1N2RM0HW",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-10-26T08:27:00Z",
            "content": "* Euro STOXX 600 up 0.3%\r\n* UBS, financials lead more upbeat earnings\r\n* China property sector worries still worry investors\r\n* Dollar steady\r\nLONDON/HONG KONG, Oct 26 (Reuters) - Shares made slim ga… [+3639 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Stocks rally in Asia, China property sector worries dampen sentiment - Reuters",
            "description": "Asian stocks largely rallied on Tuesday, following Wall Street's record highs overnight, though fresh worries about China's property sector weighed on investors' sentiments.",
            "url": "https://www.reuters.com/business/global-markets-wrapup-2-2021-10-26/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53",
            "publishedAt": "2021-10-26T06:23:00Z",
            "content": "HONG KONG, Oct 26 (Reuters) - Asian stocks largely rallied on Tuesday, following Wall Street's record highs overnight, though fresh worries about China's property sector weighed on investors' sentime… [+4001 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Global stocks buoyant on upbeat earnings - Reuters",
            "description": "Shares around the world gained on Tuesday, with upbeat corporate earnings buoying European shares, though investor concerns lingered over supply chain problems sparked by the coronavirus pandemic.",
            "url": "https://www.reuters.com/business/global-markets-wrapup-4-pix-2021-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/H7u-i0b4FlKQscmOL3c3COEIhPA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5GWEVVUIRJOFPOV4633LJ5TAME.jpg",
            "publishedAt": "2021-10-26T11:43:00Z",
            "content": "A man shelters under an umbrella as he walks past the London Stock Exchange in London, Britain, August 24, 2015. REUTERS/Suzanne PlunkettLONDON, Oct 26 (Reuters) - Shares around the world gained on T… [+4042 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Derrek Lee",
            "title": "New Oura Ring Gen3 packs more advanced health sensors into a small package",
            "description": "The third time might be the charm with the new Oura Ring.\n\n\n\nWhat you need to know\n\n\nOura Health launches its third-generation health tracking ring.\nThe new Oura Ring features enhanced sleep monitoring and SpO2 sensing.\nThe ring also has temperature sensors t…",
            "url": "https://www.androidcentral.com/oura-ring-gen3-announce",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/oura-ring-gen3-activity-lifestyle-1.jpg",
            "publishedAt": "2021-10-26T13:00:02Z",
            "content": "When you think of wearables, rings don't usually come to mind, but Oura Health is still trying to make it a thing with the third-generation Oura Ring.\r\nThe wearable offers many of the features you'd … [+2634 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Michael L Hicks",
            "title": "Coros Pace 2 review: A Garmin Forerunner rival that never quits",
            "description": "30 hours of GPS activity and a 1-ounce design make the Pace 2 a proper workhorse.\n\nMost hardcore runners, cyclists, and triathletes tend to stick with Garmin smartwatches; that brand gives you quality hardware, tons of metrics for various sports, suggested wo…",
            "url": "https://www.androidcentral.com/coros-pace-2-review",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/coros-pace-2-review-3.jpg",
            "publishedAt": "2021-10-26T17:00:02Z",
            "content": "Source: Michael Hicks / Android Central\r\nMost hardcore runners, cyclists, and triathletes tend to stick with Garmin smartwatches; that brand gives you quality hardware, tons of metrics for various sp… [+13699 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nigel Slater",
            "title": "Nigel Slater’s recipe for apple and sultana pastries",
            "description": "A spicy warming midweek treatSet the oven at 220C/gas mark 8. Line a baking sheet with parchment. Peel and core 750g of apples, then roughly chop them. Place the pieces in a medium-sized deep saucepan with 2 tbsp of water. Bring them to the boil, then lower t…",
            "url": "https://amp.theguardian.com/food/2021/oct/26/nigel-slater-midweek-recipe-apple-and-sultana-pastries-a-warming-spicy-treat",
            "urlToImage": "https://i.guim.co.uk/img/media/4a6151dfcb6c66169f46e6560717ba8303b987ca/188_188_7209_4326/master/7209.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=fc32748c7171ba91f869407b4b373325",
            "publishedAt": "2021-10-26T09:30:04Z",
            "content": "Set the oven at 220C/gas mark 8. Line a baking sheet with parchment. Peel and core 750g of apples, then roughly chop them. Place the pieces in a medium-sized deep saucepan with 2 tbsp of water. Bring… [+1444 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles : this.articles
        }
    }

    render() {
        return (
            <div className="container">
                <h3>Top headlines</h3>
                <div className="row">
                    <div className="col-md-3 mx-3">
                        <NewsItem title="myTitle" disc="myDisc" imgUrl="https://cdn.vox-cdn.com/thumbor/MMAoDOF7VfAOE07mWRKqbafCKxc=/0x132:600x446/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22947269/HERO_Oura_Ring_Gen3___LEDs_Zoomed.png"/>
                    </div>
                    <div className="col-md-3 mx-3">
                        <NewsItem title="myTitle" disc="myDisc" imgUrl="https://cdn.vox-cdn.com/thumbor/MMAoDOF7VfAOE07mWRKqbafCKxc=/0x132:600x446/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22947269/HERO_Oura_Ring_Gen3___LEDs_Zoomed.png"/>
                    </div>
                    <div className="col-md-3 mx-3">
                        <NewsItem title="myTitle" disc="myDisc" imgUrl="https://cdn.vox-cdn.com/thumbor/MMAoDOF7VfAOE07mWRKqbafCKxc=/0x132:600x446/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22947269/HERO_Oura_Ring_Gen3___LEDs_Zoomed.png"/>
                    </div>
                </div>
            </div>
        )
    }
}
