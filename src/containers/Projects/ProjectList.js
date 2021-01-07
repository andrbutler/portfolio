import recipeBox from '../../images/recipe_box.png';
import recipeBoxView from '../../images/recipe_box_mobile.png';
import tourism from '../../images/tourism.png';
import tourismView from '../../images/tourism_view.png';
import gym from '../../images/gym.png';
import gymView1 from '../../images/gym_view1.png';
import gymView2 from '../../images/gym_view2.png';
import gymView3 from '../../images/gym_view3.png';
import gymView4 from '../../images/gym_view4.png';
import gymView5 from '../../images/gym_view5.png';
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
import gameOfLife from '../../images/game_of_life.png';
import gameOfLifeView from '../../images/game_of_life_mobile.png';
import wikipedia from '../../images/wikipedia_viewer.png';
import androidScheduler from '../../images/android_scheduler1.png';
import androidScheduler2 from '../../images/android_scheduler2.png';
import androidScheduler3 from '../../images/android_scheduler3.png';


const projectList = [
    {
        name: 'Gym Managment Application',
        description: 'Full stack Spring boot and Vue application, for managing members and online services of a local gym \nfrontend repo can be found at: https://github.com/andrbutler/gymFrontend \n backend Repo can be found at https://github.com/andrbutler/GymBackend',
        link: 'https://andrbutler.github.io/gymFrontend/',
        views: [gymView1, gymView2, gymView3, gymView4, gymView5],
        image: gym
    },
    {
        name: 'Android Class Scheduling Application',
        description: 'Android application for managing student classes, terms, and assignments',
        link: 'https://github.com/andrbutler/class_scheduler',
        views: [androidScheduler2, androidScheduler3],
        image: androidScheduler
    },
    {
        name: 'Tourism Site',
        description: 'Site that provides tourist information, for a fictional island',
        link: 'https://andrbutler.github.io/tourism_site/',
        views: [tourismView],
        image: tourism
    },
    {
        name: 'Local Weather',
        description: 'Fetches local weather data. Displays temperature and changes background image depending on the result.',
        link: 'https://andrbutler.github.io/local_weather/',
        views: [weatherView],
        image: weather
    },
    {
        name: 'Simon',
        description: 'Clone of classic electronic game simon. Repeat sequence to advance, turn on strict mode to reset progress with each mistake.',
        link: 'https://andrbutler.github.io/simon/',
        views: [simonView],
        image: simon
    },
    {
        name: 'Pomodoro Timer',
        description: 'Interval timer that allows you to set work and rest times in minutes, color gradually changes throughout interval, alarm sound on interval completion.',
        link: 'https://andrbutler.github.io/pomodoro/',
        views: [pomodoroView],
        image: pomodoro
    },
    {
        name: 'Heat Map',
        description: 'Heat map made with d3.js that shows the global surface temperature by month from 1753 - 2015.',
        link: 'https://andrbutler.github.io/heatmap/',
        views: [heatmapView, heatmapView2],
        image: heatmap
    },
    {
        name: 'Doping Allegations Chart',
        description: 'Scatterplot graph made with d3.js showing the fastest times and doping allegations against various athletes.',
        link: 'https://andrbutler.github.io/Bicycle_chart/',
        image: bicycle
    },
    {
        name: 'Wikipedia Viewer',
        description: 'Wikipedia Viewer shows first 10 results for a search term, or returns a random article.',
        link: 'https://andrbutler.github.io/wikipedia_viewer/',
        image: wikipedia
    },
    {
        name: 'Markdown Previewer',
        description: 'Markdown Previewer built with react. Type text with github-flavored-markdown into input, App renders it in output.',
        link: 'https://andrbutler.github.io/markdown_previewer/',
        views: [markdownView],
        image: markdown
    },
    {
        name: 'Game of Life',
        description: 'Implementation of Conway\'s Game of life in React',
        link: 'https://andrbutler.github.io/game_of_life/',
        views: [gameOfLifeView],
        image: gameOfLife
    },
    {
        name: 'Recipe Box',
        description: 'Recipe box built with react and redux, stores recipes in local storage. design inspired by the "Better Homes and Gardens Cookbook" that I used to teach myself how to cook as a child.',
        link: 'https://andrbutler.github.io/recipe_box/',
        views: [recipeBoxView],
        image: recipeBox
    }
];

export default projectList;
