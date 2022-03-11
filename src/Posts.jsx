export default function Posts() {
    const listaPosts = [{
        userImage: "instagram/assets/img/meowed.svg",
        userName: 'meowed',
        postImage: "instagram/assets/img/gato-telefone.svg"
    },{
        userImage: "instagram/assets/img/barked.svg",
        userName: 'barked',
        postImage: "instagram/assets/img/dog.svg"
    }
    
    ]
    return (
        <div class="posts">
            {listaPosts.map((element) => {
                return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={element.userImage} />
                                {element.userName}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src={element.postImage} />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src="instagram/assets/img/respondeai.svg" />
                                <div class="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
