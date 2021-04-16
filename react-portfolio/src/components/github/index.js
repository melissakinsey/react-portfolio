import GithubProject from "./GithubProject.jsx"

const ProjectsArray = [
    {
        title: "Quarantinis",
        src: "./imgs/quarantinis.png",
        alt: "Screenshot of Quarantinis website",
        gitUrl: "https://github.com/melissakinsey/Quarantinis/blob/main/README.MD"
    },
    {
        title: "Weather Dashboard",
        src: "./imgs/weather-api-dashboard.png",
        alt: "Screenshot of weather dashboard",
        gitUrl: "https://melissakinsey.github.io/weather-api/"
    },
    {
        title: "Password Generator",
        src: "./imgs/password-generator.png",
        alt: "Screenshot of password generator",
        gitUrl: "https://melissakinsey.github.io/password-generator/"
    },
    {
        title: "README Generator",
        src: "./imgs/readme-generator.png",
        alt: "Screenshot of a README document",
        gitUrl: ""
    },
    {
        title: "Team Profile Generator",
        src: "./imgs/white-rose-eng.png",
        alt: "Screenshot of an engineering team roster",
        gitUrl: "https://youtu.be/Gdccs8iHxyw"
    }
]

export default function Github()
{
    return (
        <div className="container-fluid bg-3 text-center logo-container">
            <div id="logo">
                <img src="./imgs/name-5.png" alt='name' width='40%' />
            </div>
            <div>
                <h1 className="special">GitHub Projects</h1>
            </div>
            <div className="row">
                {ProjectsArray.map((item,key) =>
                    <GithubProject item={item} key={key}/>
                )
                }
            </div>
        </div>
    )
}