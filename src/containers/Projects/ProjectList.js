import recipeBox from '../../images/recipe_box.png';
import recipeBoxView from '../../images/recipe_box_mobile.png';
import calculator from '../../images/calculator.jpg';
import calculatorView from '../../images/calculator_mobile.png';
import weather from '../../images/local_weather.jpg';
import weatherView from '../../images/local_weather_mobile.png';
import simon from '../../images/simon.jpg';
import simonView from '../../images/simon_mobile.png';
import pomodoro from '../../images/pomodoro_timer_1.png';
import pomodoroView from '../../images/pomodoro_timer_2.png';
import heatmap from '../../images/heat_map.png';
import heatmapView from '../../images/heat_map_mobile.png';
import heatmapView2 from '../../images/heat_map_mobile_2.png';
import bicycle from '../../images/scatter_plot.jpg';
import markdown from '../../images/markdown.png';
import markdownView from '../../images/markdown_mobile.png';
import leaderboard from '../../images/leaderboard.png';
import leaderboardView from '../../images/leaderboard_mobile.png';
import wikipedia from '../../images/wikipedia_viewer.png';
import api_1 from '../../images/api_images/api_3.jpg';
import api_2 from '../../images/api_images/api_8.jpg';


const projectList = [
    {
        name: 'Calculator',
        description: 'Calculator built w/ javascript and css',
        link: 'https://andrbutler.github.io/calculator',
        views: [calculatorView],
        image: calculator
    },
    {
        name: 'Local Weather',
        description: 'Fetches local weather data. Displays temperature and changes background image depending on the result.',
        link: 'https://andrbutler.github.io/local_weather',
        views: [weatherView],
        image: weather
    },
    {
        name: 'Simon',
        description: 'Clone of classic electronic game simon. Repeat sequence to advance, turn on strict mode to reset progress with each mistake.',
        link: 'https://andrbutler.github.io/simon',
        views: [simonView],
        image: simon
    },
    {
        name: 'Pomodoro Timer',
        description: 'Interval timer that allows you to set work and rest times in minutes, color gradually changes throughout interval, alarm sound on interval completion.',
        link: 'https://andrbutler.github.io/pomodoro',
        views: [pomodoroView],
        image: pomodoro
    },
    {
        name: 'Heat Map',
        description: 'Heat map made with d3.js that shows the global surface temperature by month from 1753 - 2015.',
        link: 'https://andrbutler.github.io/heatmap',
        views: [heatmapView, heatmapView2],
        image: heatmap
    },
    {
        name: 'Doping Allegations Chart',
        description: 'Scatterplot graph made with d3.js showing the fastest times and doping allegations against various athletes.',
        link: 'https://andrbutler.github.io/Bicycle_chart',
        image: bicycle
    },
    {
        name: 'Wikipedia Viewer',
        description: 'Wikipedia Viewer shows first 10 results for a search term, or returns a random article.',
        link: 'https://andrbutler.github.io/wikipedia_viewer',
        image: wikipedia
    },
    {
        name: 'Markdown Previewer',
        description: 'Markdown Previewer built with react. Type text with github-flavored-markdown into input, App renders it in output.',
        link: 'https://andrbutler.github.io/markdown_previewer',
        views: [markdownView],
        image: markdown
    },
    {
        name: 'Free Code Camp Leaderboard',
        description: 'Leaderboard for Free Code Camp built with react. Shows the top 100 campers of either the last 3 months or all time.',
        link: 'https://andrbutler.github.io/fcc_leaderboard',
        views: [leaderboardView],
        image: leaderboard
    },
    {
        name: 'Recipe Box',
        description: 'Recipe box built with react and redux, stores recipes in local storage. design inspired by the "Better Homes and Gardens Cookbook" that I used to teach myself how to cook as a child.',
        link: 'https://andrbutler.github.io/recipe_box',
        views: [recipeBoxView],
        image: recipeBox
    },
    {
        name: 'Image Serach Metadata Api',
        description: 'Api that returns metadata of a google image search, returns 10 results at a time. Can also return the last 10 queries',
        link: 'https://fcc-img-abstraction.herokuapp.com/',
        image: api_1
    },
    {
        name: 'URL Shortner Api',
        description: 'Api that returns a shortened URL for an input URL',
        link: 'https://fccback-url-short.herokuapp.com',
        image: api_2
    }
];

export default projectList;
