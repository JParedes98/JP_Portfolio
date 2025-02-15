import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './Main.vue'
import HomePage from './pages/HomePage.vue'
import ProjectsPage from "./pages/ProjectsPage.vue";
import ExperiencePage from "./pages/ExperiencePage.vue";

const Routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: "",
                name: "home",
                component: HomePage
            },
            {
                path: "projects",
                name: "projects",
                component: ProjectsPage
            },
            {
                path: "experience",
                name: "experience",
                component: ExperiencePage
            },
        ]
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes: Routes,
})
