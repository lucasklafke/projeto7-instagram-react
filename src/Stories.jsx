
export default function Stories() {
    const listtories = [{
        image: "instagram/assets/img/9gag.svg",
        user: '9gag'
    }, {
        image: "instagram/assets/img/meowed.svg",
        user: 'meowed'
    }, {
        image: "instagram/assets/img/9gag.svg",
        user: '9gag'
    },
    {
        image: "instagram/assets/img/barked.svg",
        user: 'barked'
    },
    {
        image: "instagram/assets/img/nathanwpylestrangeplanet.svg",
        user: 'nathanwpylestrangeplanet'
    }, {
        image: "instagram/assets/img/wawawicomics.svg",
        user: 'wawawicomics'
    }, {
        image: "instagram/assets/img/respondeai.svg",
        user: 'respondeai'
    }, {
        image: "instagram/assets/img/filomoderna.svg",
        user: 'filomoderna'
    }, {
        image: "instagram/assets/img/memeriagourmet.svg",
        user: 'memeriagourmet'
    },
    ]
    return (
        <div class="stories">
            {listtories.map((element) => <Storie image={element.image} user={element.user} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}
