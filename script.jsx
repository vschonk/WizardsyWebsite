const wizards = [
    {
        id: 1,
        name: "Gandalf",
        imagesrc: "wizardimages/gandalf.gif",
        known: "Guiding the Fellowship of the Ring. Being -the- archetypal wizard.",
        source: "Middle-Earth"
    },
    {
        id:2,
        name: "Wise Old Man",
        imagesrc: "wizardimages/wiseoldman.jpg",
        known: "The most powerful wizard in Runescape, famous for the Draynor bank heist.",
        source: "Runescape"
    },
    {
        id:3,
        name: "Elminster",
        imagesrc: "wizardimages/elminster.jpg",
        known: "Escaping from hell. One of the most powerful wizards in D&D. Being a bit of Ed Greenwoods self insert.",
        source: "Dungeons and Dragons, Forgotten Realms"
    },
    {
        id:4,
        name: "Noita",
        imagesrc: "wizardimages/noita.jpg",
        known: "Dying in ways that are totally avoidable. Skill issue personified.",
        source: "The videogame Noita"
    },
    {
        id:5,
        name: "Merlin",
        imagesrc: "wizardimages/merlin.jpg",
        known: "The mentor of King Arthur. Also being the other archetypal wizard.",
        source: "The saga of King Arthur."
    }
]

const Wizard = (props) =>{
    return(
        <div className="wizardcontainer poppins">
            <h1 className="datatextheader">{props.name}</h1>
            <img className="wizardcontainerimage" src={props.imagesrc} alt="Image cannot be found." />
            <p>Known for: <span className="lightbluetext">{props.orangejustice}</span></p>
            <p>Source: <span className="lightbluetext">{props.inadream}</span></p>
        </div>
        )
}

const BigHeader = () => {
    return(
        <header id="bigheader" className="bigheader poppins reallybigtext">
            <div className="reallybigtextcontainer">
            <h1>Ranked: <span className="reallyreallybigtext poppinsbold">The top 5 wizards</span> of the world!</h1>
            </div>
        </header>
    )
}

const Wizardlijst = () => {
    return (
        <div className="container wizardlijst">
            {
                wizards.map(oudeman =>
                    <Wizard
                        imagesrc={oudeman.imagesrc}
                        name={oudeman.name}
                        orangejustice={oudeman.known}
                        inadream={oudeman.source}
                    />)
            }
        </div>
    )
}

ReactDOM.render(
    <BigHeader />,
    document.getElementById('bigheader')
)
ReactDOM.render(
    <Wizardlijst />,
    document.getElementById('content')
)