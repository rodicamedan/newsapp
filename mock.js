document.addEventListener("DOMContentLoaded", function () {
  const mockResponse = {
    totalArticles: 7765,
    articles: [
      {
        title:
          "French police injured during clashes with protesters at ExxonMobil oil refinery",
        description:
          "Protests at the refinery marked the latest example of growing social unrest against Macron’s plans to increase the retirement age",
        content:
          "French riot police look on as oil worker gather outside the refinery after the government announced the first requisition of oil workers since the beginning of strikes against pension reform, at the Fos-sur-Mer fuel depot, southeastern France, on Mar... [619 chars]",
        url: "https://www.theglobeandmail.com/world/article-french-police-injured-during-clashes-with-protesters-at-exxonmobil-oil/",
        image:
          "https://www.theglobeandmail.com/resizer/nDpamJf-_9bt2IYHDkAP6hnLUZc=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/32KDUNKDRVMG3IFZVWVBGW3YGE.jpg",
        publishedAt: "2023-03-21T12:49:24Z",
        source: {
          name: "The Globe and Mail",
          url: "https://www.theglobeandmail.com",
        },
      },
      // add more articles here if needed
      {
        title:
          "Laura Woods hopes news about Martin Odegaard's Arsenal contract is true",
        description:
          "Arsenal fan Laura Woods is buzzing to hear about a possible new deal for captain Martin Odegaard.The 24-year-old has led the Gunners by example during",
        content:
          "Arsenal fan Laura Woods is buzzing to hear about a possible new deal for captain Martin Odegaard.\nThe 24-year-old has led the Gunners by example during their unlikely title charge – and many consider him the 2022/23 season’s standout player.\nAFP 2 Od... [2053 chars]",
        url: "https://talksport.com/football/1368699/laura-woods-martin-odegaard-arsenal-contract/",
        image:
          "https://talksport.com/wp-content/uploads/sites/5/2023/03/arsenal-woods.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
        publishedAt: "2023-03-21T10:26:30Z",
        source: {
          name: "talkSPORT.com",
          url: "https://talksport.com",
        },
      },
      {
        title:
          "Why are we still paying lip service to child protection after a string of abuse scandals stretching back decades?",
        description:
          "How many more reports do we need before we demand that our Government, once and for all, take our children and youth seriously? Dr Geoffrey Shannon’s recent report on the abuse of children in St John Ambulance is yet again another damning example of how we as a country are not taking child protection as seriously as is necessary.",
        content:
          "How many more reports do we need before we demand that our Government, once and for all, take our children and youth seriously? Dr Geoffrey Shannon’s recent report on the abuse of children in St John Ambulance is yet again another damning example of ... [4059 chars]",
        url: "https://www.independent.ie/opinion/comment/why-are-we-still-paying-lip-service-to-child-protection-after-a-string-of-abuse-scandals-stretching-back-decades-42396278.html",
        image:
          "https://www.independent.ie/opinion/comment/3ccb0/42396277.ece/AUTOCROP/w1240h700/and%20Baby%20homes%20Tuam",
        publishedAt: "2023-03-21T00:00:00Z",
        source: {
          name: "Independent.ie",
          url: "https://www.independent.ie",
        },
      },
      {
        title:
          "“This Brought a Tear to My Eye”: Pastor Jenkins Lauding Muhammad Ali’s Daughter Laila Ali Leaves Boxing World Inspired",
        description:
          "Muhammad Ali's daughter and former world champion, Laila Ali's life is used as example by a renowned pastor to invigorate the congregation.",
        content:
          "Published 03/20/2023, 6:35 AM PDT\nLOS ANGELES, CA – JUNE 26: An image of late boxer Muhammad Ali is projected onto a screen as retired boxer Laila Ali speaks onstage during the 2016 BET Awards at the Microsoft Theater on June 26, 2016 in Los Angeles,... [3999 chars]",
        url: "https://www.essentiallysports.com/boxing-news-this-brought-a-tear-to-my-eye-pastor-jenkins-lauding-muhammad-alis-daughter-laila-ali-leaves-boxing-world-inspired/",
        image:
          "https://image-cdn.essentiallysports.com/wp-content/uploads/GettyImages-543241254.jpg",
        publishedAt: "2023-03-20T13:35:41Z",
        source: {
          name: "Essentially Sports",
          url: "https://www.essentiallysports.com",
        },
      },
      {
        title:
          "Ryan Baird a classic example of how Farrell’s faith in squad underwrote Grand Slam win",
        description:
          "‘I thought he was immense in that second half … figuring out how to put his stamp on the game,’ says Ireland coach",
        content:
          "Ryan Baird with ball in hand makes ground against the England defence at the Aviva Stadium on Saturday. Photograph: Billy Stickland/Inpho\nThe nature of Ryan Baird’s superb display in the victory over England symbolised, or perhaps more accurately hig... [5839 chars]",
        url: "https://www.irishtimes.com/sport/rugby/2023/03/20/ryan-baird-a-classic-example-of-how-farrells-faith-in-squad-underwrote-grand-slam-win/",
        image:
          "https://www.irishtimes.com/resizer/oN2D8Yb26iwq2Gx_Fq78q35JeMo=/1200x630/filters:format(jpg):quality(70):focal(2135x1532:2145x1542)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/E7L633MZDHCZ45NHWHBEVFD5GQ.jpg",
        publishedAt: "2023-03-20T08:00:00Z",
        source: {
          name: "The Irish Times",
          url: "https://www.irishtimes.com",
        },
      },
      {
        title:
          "Wilfried Zaha urged to avoid Cristiano Ronaldo mistake with Aston Villa transfer",
        description:
          "Latest Aston Villa transfer news from BirminghamLive as Stan Collymore urges Wilfried Zaha to sign from Crystal Palace and ignore the example set by Cristiano Ronaldo and Lionel Messi",
        content:
          'Something went wrong, please try again later.\nInvalid email Something went wrong, please try again later.\nStan Collymore has urged Wilfried Zaha to join "Newcastle or an Aston Villa" instead of moving to Saudi Arabia this summer.\nThe Crystal Palace w... [1268 chars]',
        url: "https://www.birminghammail.co.uk/sport/football/transfer-news/wilfried-zaha-urged-avoid-cristiano-26506944",
        image:
          "https://i2-prod.birminghammail.co.uk/incoming/article26382164.ece/ALTERNATES/s1200/0_GettyImages-1246427315.jpg",
        publishedAt: "2023-03-19T10:15:46Z",
        source: {
          name: "Birmingham Live",
          url: "https://www.birminghammail.co.uk",
        },
      },
      {
        title:
          "Time for Celtics coach Joe Mazzulla to turn to Jaylen Brown and others late when Jayson Tatum struggles",
        description:
          "Saturday night's loss to the Jazz was just the latest example. Tatum had been held scoreless since late in the second quarter.",
        content:
          "Coach Joe Mazzulla said the final play was designed as a dribble-handoff to Jayson Tatum, who actually languished near the midcourt line and never got involved. Malcolm Brogdon inbounded the ball and just stood there. Jaylen Brown slipped. Sam Hauser... [5513 chars]",
        url: "https://www.bostonglobe.com/2023/03/19/sports/time-celtics-coach-joe-mazzulla-turn-jaylen-brown-others-late-when-jayson-tatum-struggles/",
        image:
          "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/NkMd06XTzRcP7K91pa1Awm1NIXQ=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/EQXHO7PPQOMIM4G63DQMU6OA6U.jpg",
        publishedAt: "2023-03-19T04:00:00Z",
        source: {
          name: "The Boston Globe",
          url: "https://www.bostonglobe.com",
        },
      },
      {
        title:
          "“Why Am I Crying”: Michael B. Jordan Gifting ‘Creed III’ Crew Member Leaves Fans Awestruck",
        description:
          "The hero behind Creed III's success Michael B Jordan presented a great example of humbleness. Fans left awestruck on his gesture.",
        content:
          "Published 03/18/2023, 6:22 AM PDT\nThe ninth installment of epic American Sports drama Rocky, Creed III lived up to its expectations. After parting ways with the face of Rocky, the brainchild of Sylvester Stallone, due to production rights and directi... [2025 chars]",
        url: "https://www.essentiallysports.com/boxing-news-why-am-i-crying-michael-b-jordan-gifting-creed-iii-crew-member-leaves-fans-awestruck/",
        image:
          "https://image-cdn.essentiallysports.com/wp-content/uploads/imago0203436803h.jpg",
        publishedAt: "2023-03-18T13:22:57Z",
        source: {
          name: "Essentially Sports",
          url: "https://www.essentiallysports.com",
        },
      },
      {
        title: "Samsung champions diversity, equity and inclusion",
        description:
          "As a global leader in technology and innovation, Samsung aims to lead by example and advocate for gender equality and the empowerment of all women in the workplace. What’s more, research shows that workplaces that excel in diversity, equity and inclusion (DEI) drive better outcomes for businesses, including better employee engagement talent retention and higher financial achievements.",
        content:
          "As a global leader in technology and innovation, Samsung aims to lead by example and advocate for gender equality and the empowerment of all women in the workplace. What’s more, research shows that workplaces that excel in diversity, equity and inclu... [1331 chars]",
        url: "https://manilastandard.net/business/biz-plus/314315061/samsung-champions-diversity-equity-and-inclusion.html",
        image:
          "https://manilastandard.net/wp-content/uploads/2023/03/SamsungWomen.jpg",
        publishedAt: "2023-03-18T11:40:00Z",
        source: {
          name: "manilastandard.net",
          url: "https://manilastandard.net",
        },
      },
    ],
  };

  const articles = mockResponse.articles;
  const newsList = document.querySelector(".news-list");
  newsList.style.listStyleType = "none"; // set list-style-type to none

  articles.forEach((article) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${article.url}">
        <div class="article-container">
          <img src="${article.image}" alt="${article.title}" class="article-image">
          <div class="article-content">
            <h2 class="article-title">${article.title}</h2>
            <p class="article-description">${article.description}</p>
            <p class="article-source">Source: ${article.source.name}</p>
          </div>
        </div>
      </a>
    `;
    newsList.appendChild(li);
  });
});
