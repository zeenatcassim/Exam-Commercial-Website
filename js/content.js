//This contains all the content that is added on the website through JavaScript

//Nav
export const buttons = [
    { id: "data-nav-btn", url: "./data viz.html" },
    { id: "theory-nav-btn", url: "./theory.html" },
    { id: "design-nav-btn", url: "./design.html" },
    { id: "api-nav-btn", url: "./about.html" },
    { id: "hm-nav-btn", url: "/Exam-Commercial-Website/index.html" }
];

export const homeButtons = [
    { id: "data-nav-btn", url: "/Exam-Commercial-Website/html/data viz.html" },
    { id: "theory-nav-btn", url: "/Exam-Commercial-Website/html/theory.html" },
    { id: "design-nav-btn", url: "/Exam-Commercial-Website/html//design.html" },
    { id: "api-nav-btn", url: "/Exam-Commercial-Website/html//about.html" },
    { id: "hm-nav-btn", url: "/Exam-Commercial-Website/index.html" }
];

//Design:

//Wireframe theory Sections
export const wireframeSections =[
    {
        title: 'Mid-Fidelity Wireframes',
        paragraph:'These are the mid fidelity wireframes for the exam',
    },
    {
        title: 'High-Fidelity Wireframes',
        paragraph:'These are the high fidelity wireframes for the exam',
    },
];

//wireframe images

export const wireframeImages =[
    {//../images/low-img-1.png
      image1: '../images/HM-1.png',
      image2: '../images/HM-2.png',
      image3: '../images/HM-3.png',
      image4: '../images/T-1.png',
      image5: '../images/T-2.png',
      image6: '../images/T-3.png',
      image7: '../images/D-1.png',
      image8: '../images/D-2.png',
      image9: '../images/D-3.png',
      image10: '../images/A-1.png',
      image11: '../images/A-2.png',
    
    },
    {
        image1: '../images/H-HM-1',
        image2: '../images/H-HM-2',
        image3: '../images/H-HM-3',
        image4: '../images/H-HM-4',
    }
];


//Style Guide

export const styleGuide = [
    {
        title: 'Typography',
        paragraphs: ['The websites I used for research all mostly had simple and easy to read fonts; like sans seriff or gill sans. I wanted to use this convention and therefore used the font ‘inter’ for the website. It has a high readability, easy on the user’s eyes but also looks aesthetically pleasing for the text. The theme of the website is currency rates thus there was no need to use a fancy font but just an easy to read but decent looking font.'],
    },
    {
        title:'Visual Hierarchy and Styling Design Decisions' ,
        paragraphs: [
            'Using the feedback from Assignment 3, I changed the styling and user interface. For the homepage, the content is structured towards the centre but for the other webpages, the content is aligned from the left to the right. ',
             'The feedback suggested that I centre the homepage content and when I tried the centre layout, I realised that it was much easier to read the headings and paragraphs compared to having it structured on the left. The aim of the homepage is to capture the user’s attention with brief sentences thus when the content is in the centre, it looks more attention grabbing instead of them being forced to read from the left corner to the right. ',
             'I decided to keep the left alignment for the other webpages but only after I went to do some research. For my research, I looked at how current currency rate exchanges and forex trade websites, such as Oanda, Xe and Avatrade structured their content. They have important information that needs to be explained centred from the left but keep lots of white space between paragraphs and headings to rest the user’s eyes. Following the same principle, the structure I planned for the other webpages was to have a big heading, on the left followed by a brief paragraph with an image next to it. ',
             'In the feedback, the problem of navigating through content heavy webpages was brought up. To solve this, I decided to have a small table of contents after the first heading so that instead of scrolling down, the user can click on what they want to read instantly. After they are done reading, they can click on the up arrow on the bottom right corner of the screen and go back up to look for something else. ', 
            ],
    }, {
        title:'Colour Palette',
        paragraphs: [
            'To improve the UI and layout of the website, I did a lot of research looking at forex websites. Most of them used blue, black and sometimes grey as their primary colours. The backgrounds are in white and interaction points are mostly blue to grab the user’s attention. I also decided to use this convention but settled on a blue colour palette with a light shade of beige and a light beige grey. ',
            'These are mostly soft but muted bright colours. They work well with the colour white. The user’s eyes won’t hurt when they see these colours and I used them as backgrounds for the webpage’s headings and footer. To relax the user’s eyes while reading text, I kept most of the backgrounds as white. The colours were used for points of interaction to grab the user’s attention to avoid overwhelming the user.  ', 
           
        ]
    }, {
        title: 'Branding (iconography)',
        paragraphs:[
            'From the feedback from assignment 3, it was pointed out that the website was minimalistic and the theme was unclear. For the exam, I decided to add more images to reinforce the theme along with the text. Therefore, I added images to the data visualization interaction points and for the other webpages. For example, the first data visualization is a graph for the latest rates thus I added an image of bars with currency rates below it.'],
    }, {
        title: 'Interactive Elements',
        paragraphs:[
            'In assignment 3, it was also pointed out that the points of interaction lacked visual feedback, not communicating that this can be clicked. Therefore, I made the colours of the buttons or interactable words a bright blue shade and hovering above it would change the background and text colour. The buttons all have a border radius to give it a rounded shape and look friendly to interactive with. The table of contents at the top of the content heavy webpages are also coloured blue to match their corresponding headings that are also coloured blue. Hovering on the navigation interactive text, changes the colour of the text and also displays a panel with more options to choose from. '],
    },
]

//Essay A2


export const essayContents = [
    {
        id:1,
        title:'Project Overview:',
        p1:'The data journalism piece I have chosen is ‘Can You Make Winter Less Dark?’ (FiveThirtyEight, 2022). The authors are Ryan Best, Monica Potts, Kaleigh Rogers, Paroma Soni and Amelia Thomson-DeVeaux. The source of this data journalism comes from the website ‘FiveThirtyEight’ and it was published on 22 December 2022. ',
        p2: 'The primary story of the data journalism is regarding the experience of using standard time and daylight-saving time in alternating months in America. Connected to this is a brief debate as to whether standard time or daylight-saving time should be permanently used, including the advantages and disadvantages that both have.  Before ending with a conclusion that discusses how and why, both daylight-saving time and standard time was introduced and the impact of changing clock settings to fit people’s schedules. ',

    },
    {
        id:2,
        title:'Data Visualization Techniques:',
        p1:'The data visualization consists of a heatmap but instead of using a table, it uses a map of America to show the values of time for sunrise and sunset for an area. The map separates all the different areas by its counties to give specific values for an area. The counties are all local governments in the different states of America',
        img1:'../images/img 1.png',
        p2:'Figure 1. Data Visualization that uses a heatmap over the region of the United States of America',
        p3:'This is extremely helpful since it gives detailed information about specific areas and the user can search for specific counties or hover over specific points of the map. ',
        img2:'../images/img 2.png',
        p4:'Figure 2. The information that gets displayed when user hovers above the map',
        p5:'Hovering over a point on the map shows the outline of the county, gives the name of it and the percentage of days that have sunrises at/before 7:30 am and sunsets at 5:30 pm along with the times for the recorded latest sunrises and earliest sunsets. ',
        p6:'However, this information changes depending on what filter options the user chooses to view.',
        img3:'../images/img 3.1.png',
        p7:'There is also an option to search for specific counties and find their information.',
        img4:'../images/img 4.png',
        p8:'The map also uses colour saturation between blue and yellow to denote sunrise and sunset. The shift in colour saturation correlates to the amount of daylight. Lighter yellows indicate more hours with daylight; later sunsets and earlier sunrises. Darker blues indicate fewer daylight hours, earlier sunsets and later sunrises. ',
        img5:'../images/img 5.png',
        p9:'Figure 4. The colour saturation system that denotes days that ranges from decreased to  increased hours of daylight', 
        p10:'This is useful because when clicking on a specific option, the data visualization filters the values and shows the user what they want to see. It helps to give detailed information about the area and what time it will be for sunrise and/or sunset according to the filtered time schedules. ',
        p11:'In addition to this is another heatmap that uses a table format, showing the effects of using daylight-saving time permanently throughout the year. Because it uses the same colour saturation system as above, the table allows users to easily understand how daylight distribution is affected under different clock settings.',
        img6:'../images/img 6.png',
        p12:'Figure 5. The Second Data Visualization uses a heatmap in a table format with same colour saturation system',
        p13:'Using heatmaps for this data visualization was a good choice. The decision to use a colour saturation system of yellow and blue to represent the different amounts of daylight visually communicates the distribution of daylight across different clock settings. The format of the map and table presents this data that can be easily understood by the user.',
        img7:'../images/img 7.png',
        p14:'Figure 6. Image showing the entire first data visualization that shows data with specific filter options chosen',
    },
    {
        id:3,
        title:'Interactivity and User Engagement:',
        p1:'The interactive elements of the visualization include hovering above points or areas of the map that results in a pop up appearing with the necessary information on the screen, refer to figure 2. The user can also filter the data to find specific details that they are looking for, refer to figures 3.1, 3.2 and 3.3.',
        p2:'Looking at the context of the data journalism piece, these interactive elements are suitable and appropriate. They are effective in the sense that the data gets filtered by the choices that the user makes. This is the interactivity; the user has a choice to hover above a certain colour of the map or to look specifically for counties with specific conditions, that causes the data visualization to change to show the user what they are looking for. This is effective because the user gets the information they are looking for in a clear and detailed format. ',
        p3:'After interaction, the user can process the data swiftly and interpret it to give it a meaning. It is necessary to be able to interact and process the data but the required data needs to be abstracted and presented clearly for the user to comprehend it (Li, 2020: 19). ',
        p4:'It is beneficial for the user’s interpretation that the convention of using the colours blue and yellow to denote days with longer hours of daylight is utilized in the data. This helps to better engage and comprehend the data effortlessly since the colour yellow is associated with the sun. The user then understands that areas on the map that is coloured yellow are days with longer hours of daylight and the opposite is true for the colour blue since blue is associated with night. Conventions are shared practices (Mailloux, 1983: 399) and they help with giving meanings to concepts which, in turn allows interpretation to occur (Mailloux, 1983:404). ',
        p5:'From my own experience with data visualizations, they all present data that the user is looking for in a manner that is clearly formatted. This has extended some influence on my analysis which leads me to believe that the data visualization effectively communicates with the user and encourages them to engage with it. ', 
    },
    {
        id:4,
        title:'UI/UX Design Principles:',    
        p1:'The visual structure of the data visualization has a map with filter options and a colour saturation bar above it and another table below it accompanied by few paragraphs. The map and table uses colour to signify values of the data. This is important to the visual structure because the contrast directs the user’s attention around the information. ',
        p2:'The design is simple and easy to understand. Because there is a map coloured in different shades of blue and yellow, the user understands that those values are applicable to those specifically coloured areas. This offers a reduced cognitive load since the information is presented as short headings and precise sentences that includes percentages or time values to explain details. This is also applicable to the hover function; the user does not get overwhelmed since they just need to hover above areas to get data about them. ',
        p3:'These User Interface principles have been applied in an effective manner to the visualization since it contributes to the data being presented in a clear and attractive format',
        p4:'Interacting with the visualization produces an experience, emerging from the visuals and functional aspects of it. Feedback occurs rapidly as user interacts with the data and this produces a positive emotion within the user (Hassenzahl & Tractinsky, 2006: 93 & 94). There is also a heavy reliance on colour to visualize data but the varying saturation of blue and yellow makes the visualization look attractive. This contributes to the aesthetics and feeds into the emotional usability aspect of User Experience (Hassenzahl & Tractinsky, 2006: 92 & 93). ',
        p5:'By not only grabbing attention, the user feels a satisfaction from looking at the different colours. In addition, the visualization responds and gives the user what they are looking for. Thus, the user experiences a range of positive emotions from looking at the visualization. ', 

    },
    {
        id:5,
        title:'Data driven storytelling:', 
        p1:'Narrative elements such as beginning, middle, end of a story structure and flow of story are present and they successfully communicate complex information that is being conveyed. This is vital for the user to understand the data and interpret it to gain new knowledge:',
        p2:'Beginning: The first paragraph introduces the setting and main conflict that explains the struggles changing clock settings during different months in an attempt to have days with longer hours of daylight to accommodate people’s schedules.',
        p3:'Middle: This is when the first data visualization is introduced to the user to interact with which leads them to understand the conflict. This visualization demonstrates the effects of different clock settings and informs what the actual times for sunrise and sunset are. Along with imparting an understanding, the interactivity can lead the user to look for specific details to try and solve the conflict on their own. This is effective since there should be a chance given to the user to try solving the problem on their own (Knaflic, 2015 :173). ',
        p4:'The situation is further developed by more additional contextual background information, such as advantages and disadvantages and much more. This includes another data visualization of a table, that strengthens the narrative since it shows what is currently happening and the possibilities of what can happen.',
        p5:'End: The narrative concludes without a definite solution instead commenting on the consequences of trying to restructure time. Importantly it ties back to the begging and imparts the user with new knowledge (Knaflic, 2015 :174).',
        p6:'Flow of story: There is a chronological order to the flow of story but the narrative is expressed in the manner that is contextually important such as having the conflict present first, then the visualization, lastly the advantages and disadvantages of both clock settings before it moves to the ending note of. ',
        p7:'Lessons learned: Data is understood clearly when it utilizes conventions and is present in a clear and precise manner',

    },
    {
        id:6,
        title:'Emotional Impact:',
        p1:'The tone is neutral and objective since it is not arguing for a point and the message is just to present information and spread awareness about the problem. This is made up by the layout in which content is centred in the middle. With the font being small and having the same weight. The only colour used is for the data visualizations and illustrations. Due to there not being many visual elements, there is more focus on the seriousness and factual information of the contents. ', 
    },
    {
        id:7,
        title:'Reference List:',
        p1:'Best, R., Potts, M., Rogers, K., Soni, P. & Thomas-DeVeaux, A. 2022. FiveThirtyEight. Can You Make Winter Less Dark?. Online. URL: https://projects.fivethirtyeight.com/daylight-saving-time/. 29 August 2024. ',
        p2:'Hassenzahl, M. and Tractinsky, N., 2006. User experience-a research agenda. Behaviour & information technology, 25(2), pp.91-97.',
        p3:'Knaflic, C.N., 2015. Chapter Seven: Lessons in Storytelling: Storytelling with data: A data visualization guide for business professionals. John Wiley & Sons, pp. 165 – 185.',
        p4:'Li, Q., 2020. Overview of data visualization. Embodying data: Chinese aesthetics, interactive visualization and gaming technologies, pp.17-47.',
        p5:'Mailloux, S., 1983. Convention and context. New Literary History, 14(2), pp.399-407.',
    }
]

//Critical Essay

export const criticalEssayContents = [
    {
        id:1,
        title:'Global Economics and Artistic Implications',
        p1:'The theme of my website is forex but for simplicity sake, I didn’t add the trading aspect. I limited the website to inform the user of the latest currency rates, value if they convert it and a graph to show historical data for a currency of their choice. The aim of the website is to inform the user of the value of their money, by comparing it to other currencies, converting them to see if they get value and check the historical data of their preferred currency. This reflects the current global economic conditions by displaying real-time currency rates. ',
        p2: 'The user can find out which currencies are stronger or have higher value compared to others. This is helpful to tourists who want to travel around the world and need help planning how much money they will need to pay for their travel, food, accommodation and many other expenses. This is also helpful to people who are working abroad and wish to send money back home. They can keep track of which days the currency of their money has more value so that when they send it back home, their families will get a higher amount than normal. ',
        p3:'I used a blue colour scheme with light shades of beige and grey with white for the website since using blue as the primary colour is a convention for the forex websites I found in my research. The layouts for forex websites are simple to get as much as information across to the user. I used this layout form because this is most effective to get information across.    ',
        p4:'Users do not want to sit and read through a lot of information. They want to find what they are looking for immediately. This is why my website follows a simple layout of having a heading with content below it. At the top of most webpages, I added a small table of contents to direct the user to what they are looking for and also to inform them if the webpage contains what they want to see. ',
        p5:'The graphs and data visualizations in these sites have a lot of white space around them and white backgrounds behind them. This makes the data stand out and easy to read or understand. Bar graphs utilised to highlight the differences between many rates for a specific duration while line graphs are used to show progression over time. This is the reason why I used bar graphs to show the latest rates and to highlight the difference between the two currencies when the user wants to do a conversion. The line graph was used for the historical data visualization because the user must take notice of the value of the currency rate over the duration they want to see. ',
    },
    {
        id:2,
        title:'UI/UX Decisions and Data Visualizations',
        p1:'The website has a minimalistic layout but with the addition of few images to reinforce the theme. The simple layout helps users to understand how the website is laid out and they can easily navigate through it. The visual structure is thus easy to understand, the headings are in blue and the text that follows is black but the colourful headings help to keep the user interested.    ',      
        p2:'For the data visualizations, I did not add a lot of text to avoid overwhelming the user. Instead, I laid out the dropdowns first and then presented the visualizations in efforts that the user will recognize that their actions has a meaning and/or effect on the visualizations. They need to interact with it to receive information that is most suited to them. That is the reason why I placed the interactive dropdowns before the visualizations.',
        p3:'The aim to communicate to the user what they need to do. This is best achieved through a simple visual hierarchy. There is no overwhelming text to confuse the user. There is a brief heading to communicate what the user can do and the dropdowns reinforce this concept that is put forth thus when the user clicks to generate the conversion chart or historical graph, the result is produced and the user is able to understand what is happening. ',
    },
    {
        id:3,
        title:'Role of Interactivity',
        p1:'The interactive elements in the data visualizations include dropdowns to select currencies, number inputs or date inputs. The user is meant to input values into these to filter the values on the data visualization thus receiving updated information on the visualization. This enhances the user’s experience and understanding of the visualization. Users can also interact with the bars of the first visualization by hovering above them and a tooltip showing the exact values will get displayed towards the top right-hand corner. ',
        p2:'The function of the dropdowns is to filter the data, user gets specific information that they are looking for and this also gives them an opportunity to look for more and other data by inputting specific values in the dropdowns. Users can find what they are looking, make sense of the data and input different values to gain new perspectives on the data. ',

     },
    {
        id:4,
        title:'Data Visualization One',    
        p1:'The currency that the user selected in the dropdown, the bar representing it gets highlighted with a different colour to direct the user towards it and to compare this value to the other bars. Hovering above the bars displays a tooltip with specific rate values and specific rate names, this allows users to understand the data without only relying on the x-axis. The selected bar gets highlighted as red, hovering above bars gets highlighted as yellow and after inputting a rate, the bars all get coloured as blue. ',

    },
    {
        id:5,
        title:'Data Visualization Two ', 
        p1:'The user can type in any amount of their choice and choose the two currencies they want to convert from and into. A chart showing the two currencies gets displayed and their values get compared with other each to inform the user if whether their money will have more or less value in another currency. They can do this with many different rates since the dropdowns are populated with currencies the API contains. ',


    },
    {
        id:6,
        title:'Data Visualization Three',
        p1:'The user is given two inputs; a starting point and ending point. These represent the historical dates that the user can choose the range of their data, from when the API should start collecting data and till when it should end. As a result, the user can choose the time frame from which they want to see the data. If they want to know if whether the United Arab Emirates Dirham gained value or lost value from the beginning of the year up to June or July.   ', 
    },
    {
        id:7,
        title:'Challenges and Solutions',
        p1:'Challenges involved with making the data visualizations include handling the dataset of the Fixer API, issues with svg containers clashing with tooltips and displaying the values on the y-axis to provide accurate data ranges for the latest rates bar graph. ',
        p2:'I solved these challenges by having to convert the data object from the API to convert it to an object array and join the values together to use them for the bar graph. I had to separate the tooltips into their own divs and place these above the svg element so that the information would get displayed above and close to the graph. ',
        p3:'I also had to use scaleLog instead of scaleLinear for the y-axis values since scale Linear was distorting the data. Values with decimals were not being displayed thus only one rate was being displayed and the amount was very large. This did not communicate anything about the data and thus had to instead use scaleLog. I tried to keep the scale consistent with using custom tick values that contains decimals but also ranges up to hundreds and thousands to give some form of consistency for the data values.    ',

    }, 
    {
        id:8,
        title:'Alignment with Professional Practices',
        p1:'In my code, I tried to use consistent naming conventions to name variables, classes and ids. I used camelCase for JavaScript variables but for classes and ids, I settled on separating the words with a dash to differentiate between the two types of variables. ',
        p2:'For many of the text webpages, I used loops to go through the appropriate arrays to display the content on the webpage. One js file contains all the content arrays and by exporting them, I was able to import the arrays and use it for the loops. This functionality allows me to add information to the arrays without having to manually add it on the html and repeat code. ',
        p3:'This website is designed to be responsive as the screen size gets smaller. The images and text gets smaller so that they are still viewable and can be interacted with on different screen sizes. The media queries come into effect when the width is between the values 400px and 1000px and the website changes to accommodate this.',
        p4:'To get the API data, I used fetch and catch statements. I placed console log statements within these to check if state of the data being passed through and if errors did appear, the reason for it appearing would should up in the console. ',
        p5:'The inspect tool helped me a lot with debugging errors and styling issues. I was able to see what code was running, which elements were being added and what css styling was affecting it. If there were any styling issues then using the inspect tool, I was about to test out the css and then go into visual studio to add the correct styling to the elements. ',
        p6:'For the exam, the website had to be loaded onto Github as a repository. I regularly pushed commits to the origin to keep track of what code, functionality and styling I added for the website. This helped me organise my work and when I had to deploy the website, it was easy to manage since the commits were already regularly pushed. ',
    }
]

//Workflow

export const workFlow = [
    {
        h3: 'Mid-fidelity wireframes',
        p: 'Using the feedback, I received from assignment 3, I started working on the mid fidelity wireframes to start designing the html pages. After doing research on forex websites online, I took inspiration from their layouts, colour choices and conventions for the exam’s visual hierarchy, UI and navigation',
    },
    {
        h3: 'JS implementation',
        p: 'Using most of the code from assignment 3, I started adding the required html elements to webpages so that once I add the content arrays in the content js file then it can display on the webpages',
    },
    {
        h3: 'Data Visualizations',
        p: 'I improved the two data visualizations from assignment 3. The user can now choose their currency that will get highlighted amongst other rates in the bar graph that shows the latest rates. The converter chart now displays if whether the user will make a profit or loss if they convert to another currency rate. The new data visualization for the exam lets the user choose two dates and a currency rate to see the fluctuations in the currency, which days did it have high value and which days it didn’t.',
    },
    {
        h3: 'Essay and other theory work',
        p: 'Using the wireframes and work I done so far, I started working on the write up for the style guide and for the essay before integrating it through JS on the website',
    },
    {
        h3: 'Last minute styling',
        p: 'Before submitting, I changed few aspects of the styling to make the website look aesthetically pleasing',
    },
   
]