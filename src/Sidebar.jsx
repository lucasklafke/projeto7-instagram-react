const suggestionList = [{
    userName: "bad.vibes.memes",
    userImage: "instagram/assets/img/bad.vibes.memes.svg",
    reason: 'Segue você'
}, {
    userName: "chibirdart",
    userImage: "instagram/assets/img/chibirdart.svg",
    reason: 'Segue você'
}, {
    userName: "razoesparaacreditar",
    userImage: "instagram/assets/img/razoesparaacreditar.svg",
    reason: 'Novo no Instagram'
}, {
    userName: 'adorable_animals',
    userImage: "instagram/assets/img/adorable_animals.svg",
    reason: 'Segue você'
}, {
    userName: 'smallcutecats',
    userImage: "instagram/assets/img/smallcutecats.svg",
    reason: 'Segue você'
}
]
export default function Sidebar() {
    return (
        <div class="sidebar">
            <User image="instagram/assets/img/catanacomics.svg" name="catanacomics" subname="Catana" />
            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
function User(props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.name}</strong>
                {props.subname}
            </div>
        </div>
    )
}
function Suggestions() {
    return (
        < div class="sugestoes" >
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {
                suggestionList.map((element) => {
                    return (
                        <div class="sugestao">
                            <div class="usuario">
                                <img src={element.userImage} />
                                <div class="texto">
                                    <div class="nome">{element.userName}</div>
                                    <div class="razao">{element.reason}</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
                    )
                })
            }

        </div >
    )
}