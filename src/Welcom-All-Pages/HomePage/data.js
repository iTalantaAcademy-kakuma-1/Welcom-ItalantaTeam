const reviews = [
  {
    id: 1,
    name: 'Kambale Kibeho',
    job: 'the boss',
    image:
      'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/140520950_2863271427247567_6260941214539036242_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEyp-QLmWS9O9tHyJcA48qXWmJUBY2ItidaYlQFjYi2JxRExNYeUf9yu9XvzQbvrU71EstufE3zAvVewbY6wypm&_nc_ohc=71-7ujHG9DEAX84byAR&_nc_ht=scontent.fmba5-1.fna&oh=00_AT_m7AxOGp9PTh_EGtSfC8q6wmju7rMrAVNE-j37A5pBAg&oe=62B64E1E',

    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    
  },
  {
    id: 2,
    name: 'Angathanga Ochalla',
    job: 'web designer',
    image:
      'https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/271444933_1499657267075673_8967674032682323755_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEKNnYJcl36rTNwYrqNJ_LZp8_Xh67iDEinz9eHruIMSPAUzO6GJEfYWAzDV56zfQYy_NY25qx5zshDVfJTHnZ9&_nc_ohc=rrYEB--JNiIAX-j-4rI&tn=IY5Chl1swJgQw5rr&_nc_ht=scontent.fmba5-1.fna&oh=00_AT9WskSW1_iRGbvNnMTwTgLjemOAw4hGJYkunca0HijO6g&oe=62934D10',
    text:
      'An event like this cannot happen overnight. The wheels start rolling weeks ago. The wheels start rolling weeks ago. It requires planning and a bird’s eye for details. We have been fortunate enough to be backed by a team of very proactive and dedicated staff of our institution who are well versed in their job.I am short of words for their involvement and their willingness to take on the completion of tasks beyond their comfort zones. I would also like to thank the people who worked behind the scene to make this event happen, our CEO Jente Rosseel, technical arrangement team  and all the innovators behind our technology. God bless you all.',
  },
  {
    id: 3,
    name: 'Chuol Tayar',
    job: 'junior web developer',
    image:
      'https://avatars.githubusercontent.com/u/93642845?v=4',
    text:
      "It's great thanks to Microsoft ADC, Elewa and Windle International-Kenya for the revival of fading hopes and dreams. Before this program I was in vulnerable place and almost given up hopes on my tech career but my recruitment into the program has escalated my hope for the future and reignited my vision. And also a big thanks to my coaches, Noella and Alamin for their unconditional support throughout the course. I give my humble gratitude to everyone playing role in this program. It's all appreciated!.",
  },
  {
    
      id: 4,
    name: 'Lotiang',
    job: 'web developer',
    image:
      'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.18169-9/18740032_1038722656259667_7125627160059408390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHN-dCtnpf-2p8xk5MdZ6g-F2G_T2rEvZIXYb9PasS9khUe6KXtaLNAX3TNhZU4V9VAYasm7tZJUw750x_Jn3OE&_nc_ohc=YuKi_Bc4OyEAX-uDGyf&tn=IY5Chl1swJgQw5rr&_nc_ht=scontent.fmba5-1.fna&oh=00_AT-g9VW4nJE07iOF1bg5RnjukNa_6Q36RKTFaIjjVFLoKg&oe=62B413BC',
    text:
      "Am glad and greatful to be in this program and i have really feel the impact of the training and i would like to give thanks to Elewa and Windle for the program.",
  },
  
  {
    id: 5,
    name: 'Abri Yusif',
    job: 'Frontend developer',
    image:
      'https://scontent.fmba5-1.fna.fbcdn.net/v/t1.6435-9/132315738_1833687116808212_3548247831650570978_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFtRjUa_YRnFwWt1RPsNlQbp_gp_D2e3eSn-Cn8PZ7d5CFdfuufaBNtfzEoKBKY44-f81kcAp6bltHh5R37-zVS&_nc_ohc=oG6xBnz4WH0AX84H2ff&_nc_ht=scontent.fmba5-1.fna&oh=00_AT_GxuaCk_NEYpoqku3Zlix3ruhdoRwmjgtq8WPWoC8nmA&oe=62B5572C',
    text:
      'Great appreciation to Elewa, Windle International Kenya and microsoft for the opportunity given. I must say I gained a lot from this training. Through this training, I am able to recall what I had already forgotten while advancing on what I did not know. Thanks to coaches and my classmates for the support.',
  },
  {
    id: 6,
    name: 'Shukri Ibrahim Mohamed',
    job: 'Frontend developer',
    image:
      'https://avatars.githubusercontent.com/u/93643041?s=400&u=019541dbde498e46c106fb8ce2f40b9c5028eff2&v=4',
    text:
      'I am writing to express my sincere gratitude to you for making the Italanta Scholarship possible. and I am deeply appreciative of your support, thank you for giving me the chance to be one of Italanta scholars. I am really grateful for your everything.',
  },
  {
    id: 7,
    name: 'Ahmed Mohamud',
    job: 'Frontend developer',
    image:
      'https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/284430630_5451494424943387_7093843668677007667_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH_FgVr4Rn-nhm9z9TjwoEGgIWe6lQuHkqAhZ7qVC4eSkqNHwSjcVBBhmvmdt1I5aKwXkC9jQKhmP-VY1Cd8o7P&_nc_ohc=cy2-8VfeZocAX_pW7gN&_nc_ht=scontent.fmba5-1.fna&oh=00_AT8tWDxSYaulXt5qxH3InQ9jeedXF7dJ8pyF9q7hCy0k1g&oe=6295DDC5',
    text:
      'I am here by writing to appreciate you as ITalanta Team for the scholarship of ICT offered to me. I sincerely wish to express my gratitude for being granted the chance. Personally I have benefited a lot and I have equipped myself with skills that will enable me to become self reliant person the near future. If the program continues to the successful end, it will really mentor us into valuable assets.',
  },
  {
    id: 8,
    name: 'Ohisa Franco Obiala',
    job: 'Frontend developer',
    image:
      'https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/239259596_1332728830462456_5367863178575343617_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFSFMtL5QISQSJTQ26rCoNGYE7V9oHQ21xgTtX2gdDbXOqgHSEU9gsuiHeg_OgpQOlX9rCEGQLGvWge6PzmvIJ-&_nc_ohc=hyuTY62AZE4AX8Oonwg&_nc_ht=scontent.fmba5-1.fna&oh=00_AT_HUDwmJxwyxGVEjx69-7PQ9hJjYp72obvCzLZUwdH0Mw&oe=62952723',
    text:
      'I personally want to Thank the sponsors of this program, who work intensively to have this ICT technical skills delivered to us. To me in a refugee context, iTALANTA Academy,  Elewa and other partners means resilience, because  refugees like us after acquiring sustainable ICT skills of being a software Engineers, will enable  us, out of depression ,trauma and bad experience back in their countries of origin. I believe with hard work and connection we are going to link up, it is an opportunity for every individual to secure sustainable jobs. Scholarships like this, raise the bar of Education technically in the Camp. No more feeling of Scoundrel.',
  },
  {
    id: 9,
    name: 'Babikir Baballa ',
    job: 'Frontend developer',
    image:
      'https://avatars.githubusercontent.com/u/93642730?v=4',
    text:
      'Its with absolute pleasure that am writing to thank you for offering me a chance to pursue software development with ITALANTA ..it had been my dreams and passion to learn programming and having given this chance made my dreams come to pass. honestly before joining this program i never had knowledge in programming but with the hard work and support that was bestowed by the coaches am now a different person . i could create website and write codes which i found a great fun. as we are approaching our final projects i hope you will get to see some of the application that we will develop from the knowledge that we acquired so far. once again thank you.',
  },
  {
    id: 10,
    name: 'Chan Peter',
    job: 'Frontend developer',
    image:
      'https://avatars.githubusercontent.com/u/93641986?v=4',
    text:
      "As a recipient of italanta scholarship,  I wanted to express my gratitude for helping to alleviate  and started my passion for software engineering. I feel extremely fortunate to have been selected to receive a scholarship and your generous contribution will help me achieve my dreams. It is great to know that my patience since I completed my High school has not gone unnoticed.  I am thrilled to learn computer languages: HTML, Css , JavaScript and some React Bootstraps .  I hope one day I will give back the skills and knowledge gained to my community.Again, please accept my sincere gratitude for your contribution toward my education. Myself and my other italanta students are very fortunate that there are altruistic people like you who arecommitted to helping students achieve their educational goals.",
  },
  {
    id: 11,
    name: 'Achiek Ayuen',
    job: ' Junior Web Developer',
    image:
      'https://avatars.githubusercontent.com/u/93641682?s=400&u=62cad30c016b454d3ff78fb229f3d73de0b7a9b2&v=4',
    text:
      'Through this co-pilot program, I have gain some basic skills in programming. Therefore, on a serious note, I would like to thank our donors for initiating this project. I am looking forward to other good projects as such. To Alamin and Noella, thank you for being instrumental since day one. We shall be forerver grateful',
  },
  {
    id: 12,
    name: 'Elie Migisha Bavon',
    job: 'Frontend developer',
    image:
      'https://avatars.githubusercontent.com/u/66333199?v=4',
    text:
      'It has been Great Opportunity for me to be part of the Atlanta Academy , for the purpose of gaining knowledge and skill of Wed developer, being a web dev was my dream of become the greatest for the aim of impowering and building my community; with the skills and knowledge that I have gain during this is 6 month of study, a lot of things has change by learning : HTML, CSS, JavaScript, Firebase And React it has create an affection feel in me and open my mind that i have a duty to bring changes and development of community to promote ITC for girls so that they can be able to depend on themselves and create self-resilience among themselves. A lot for Thanks goes to Elewa, Windle Trust International And Microsoft for the Opportunity that has given to us. also Big Thanks To our Dearest smartest Coaches Mr. Alamin Juma And Mrs. Noella for sharing their knowledge with Us And makes value asset that can bring changes in the future .',
  },
  {
    id: 13,
    name: 'Faiso Abdirisak',
    job: 'Frontend developer',
    image:
      'https://avatars.githubusercontent.com/u/91128983?v=4',
    text:
      'I am writing to appreciate you elewa, Microsoft as well as the windle international Kenya for the scholarship you have given and sincerely I benefited as I got a lot of skills related to  IT, and now am able to create webites, fetch data from API and make applications. I am able to solve the existing problems through use of texgnologies.',
  },
  
];

export default reviews;
