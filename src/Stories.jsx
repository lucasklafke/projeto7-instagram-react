const listatories = [{
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

export default function Stories() {
    const listatories = [{
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
            {listatories.map((elemento) =>{
                return (

                    <div class="story">
                        <div class="imagem">
                            <img src={elemento.image} />
                        </div>
                        <div class="usuario">
                            {elemento.user}
                        </div>
                    </div>
                    )
            })}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

// function Storie(elemento) {
//     return (

//     <div class="story">
//         <div class="imagem">
//             <img src={elemento.image} />
//         </div>
//         <div class="usuario">
//             {elemento.user}
//         </div>
//     </div>
//     )
// }
