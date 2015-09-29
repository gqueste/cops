angular.module('cops').

    factory('OrigineService', [function(){

        var origines = {
            enfant_ghetto : {
                nom : 'Enfant du ghetto',
                description : "Le personnage est né à South Central, ou dans tout autre ghetto (Compton, Watts, Montebello, etc.). Il est plutôt noir ou chicano. Grâce à des parents opiniâtres qui ont tout sacrifié pour lui, il a eu l'opportunité d'échapper à l'engrenage des gangs. S'il connaît parfaitement ce milieu, il n'y est pas pour autant à l'aise. C'est un pig et donc un traître à la solde des blancs. Malgré son emploi au LAPD, le personnage reste très pauvre (il doit notamment subvenir aux besoins de sa nombreuse famille) et rencontrera à coup sûr le mépris dans la rue et auprès de certains collègues indélicats, voire de sa hiérarchie.",
                consequences : "Le personnage dispose d’une relation de niveau 2 dans un gang, dans un organisme social ou dans un petit commerce de quartier. Il peut s’agir d’un ami (ou d’une amie) d’enfance, d’un mentor ou encore d’un guide qui a aidé le personnage à quitter le ghetto.",
                possessionsPossibles :
                    [
                        "D’un Ruger Falcon 041 (n’ayant jamais servi et dont le numéro de série a été effacé). Il peut l’avoir trouvé sur un cadavre, l’avoir récupéré chez le grand frère d’un pote ou se l’être fait refourguer à l’école.",
                        "De 10 000$ en pièces usagées. Il peut s’agir du cadeau d’un ami gangbanger en remerciement d’un service rendu, d’une mallette récupérée sur le lieu d’une fusillade… Quoi qu’il en soit, il est peu probable que l’origine de cet argent soit très claire.",
                        "De trois grenades incendiaires (phosphore blanc). Peut-être que votre grand frère arrondissait ses fins de mois en mettant le feu à des entrepôts.",
                        "D’un lance-roquettes antichar jetable (LAW). Ne me demandez pas comment vous l’avez trouvé… Vous préférez ne pas savoir."
                    ]
            },
            fils_ouvrier : {
                nom : "Fils d'ouvrier",
                description : "Papa travaillait à la chaîne et maman faisait des ménages. Bref, ce personnage n'a pas eu une enfance idyllique et n’a pas été couvert de cadeaux. Pour peu que maman soit une junkie ou papa un alcoolique violent… Le personnage est très pauvre, souffre d'un flagrant manque d'éducation et de culture et son manque de bonnes manières risque de lui causer un peu de tort en société.",
                consequences : "Le personnage dispose d’une relation de niveau 2 dans un syndicat, dans un organisme social ou dans un petit commerce de quartier. Il peut s’agir d’un ami (ou d’une amie) d’enfance, du patron d’un café où le personnage a passé une partie de sa vie, d’un pote garagiste…",
                possessionsPossibles :
                    [
                        "D’un box qui n’apparaît pas sur les relevés du cadastre. Le personnage ne paye pas de loyer et personne ne sait qu’il lui appartient. De plus, ce box se trouvant dans un quartier pauvre, il est peu probable que quiconque s’y intéresse tant qu’un nouveau plan d’urbanisation ne sera pas lancé.",
                        "D’un petit coin de désert. Le personnage a hérité d’un morceau de désert (un vrai de vrai, avec cailloux, sable et serpents à sonnette) sur lequel stationne de manière permanente un vieux mobile home. Un vrai petit coin de paradis en quelque sorte.",
                        "D’une vieille voiture apparemment un peu pourrie (une oldsmobile 440 « Deluxe »). Toutefois, ce véhicule a été soigneusement préparé par un fou de F1. Moralité, votre vieux tas de ferraille est capable de déposer les intercepteurs des brigades autoroutières (cela ne veut bien évidemment pas dire que vous vous amusez le soir sur les autoroutes, n’est ce pas ?).",
                        "D’une yes card. Il s’agit d’une carte magnétique qui ne vous permet pas d’obtenir de l’argent (pas de bol !) mais qui permet d’ouvrir la plupart des portes fermées par un code et une carte. Cette carte ouvre toutes les portes de ce type demandant 3 réussites ou moins sur un jet d’Électronique. Bien sûr, cet objet est parfaitement illégal."
                    ]
            },
            fils_papa : {
                nom : "Fils à papa",
                description : "Papa et Maman sont des modèles de réussite tranquille à l'américaine. Le personnage a reçu une éducation normale et a grandi paisiblement, en n'ayant jamais manqué de rien.",
                consequences : "Le personnage dispose d’une relation de niveau 2 dans un parti politique, dans une grosse entreprise ou dans l’administration. Il s’agit généralement d’un ami (ou d’une amie) qui a réussi (lui !).",
                possessionsPossibles :
                    [
                        "D’un appartement dans un quartier aisé. Le personnage en est propriétaire (ce qui devrait lui permettre de faire d’importantes économies chaque mois). Pour la taille de votre home sweet home, voyez avec votre meneur tout en gardant à l’esprit que plus le quartier sera huppé, plus votre appartement sera petit.",
                        "D’un véhicule très haut de gamme (voiture – une BMW M8 « GranTurismo » par exemple, une moto ou même un camion (?!)). Vous pouvez toujours vous en servir à vos risques et périls pour aller « chauffer » les malades de vitesse des quartiers pauvres mais, généralement, ce véhicule vous permet surtout d’aller draguer aux sorties des boîtes.",
                        "D’un portefeuille d’actions d’une très grosse entreprise florissante. Cela permet au personnage de disposer chaque mois de ressources supplémentaires égales à 20% de son revenu normal. Bien évidemment, si une enquête devait prouver certaines malversations effectuées par cette entreprise, les actions baisseraient singulièrement. Reste à savoir comment agira le personnage si c’est lui qui doit enquêter…",
                        "D’un contrat de clonage. Ne rêvez pas, vous ne pourrez pas revenir à la vie. En revanche, vous pourrez vous faire greffer un membre si, d’aventure, vous veniez à avoir un petit accident."
                    ]
            },
            gosse_de_riches : {
                nom : "Gosse de riches",
                description : "Le personnage est issu de la bonne société. Il est né avec une cuillère en argent dans la bouche, n'a jamais manqué de rien et a reçu une très bonne éducation. Malheureusement, ce statut un peu particulier risque de lui causer quelques problèmes. Sa famille espérait autre chose pour lui qu'une simple position de flic et ses collègues sont prompts à jalouser sa fortune et à se moquer de ses bonnes manières un peu guindées",
                consequences : "Le personnage dispose d’une relation de niveau 2 dans un parti politique, dans le milieu branché (mode, showbiz…) ou dans le milieu de la finance. Il peut s’agir d’un ami (ou d’une amie) d’enfance ou d’une relation qu’il est de bon ton de garder.",
                possessionsPossibles :
                    [
                        "D’un véhicule digne de figurer au top parade des véhicules les plus recherchés par les voleurs (Ferrari (la S850 « Ronaldo IV » est un must), Rolls Royce, Porsche, Lamborghini Cela ne sert pas à grand chose, mais c’est définitivement très classe.",
                        "D’un gigantesque appartement situé dans les plus beaux quartiers (ou d’une maison avec un jardin). Le personnage en est propriétaire.",
                        "De 10 000$ de revenus mensuels annexes. C’est un cadeau de papa et maman ou d’une riche tante (homme ou femme). Attention, si le personnage n’est pas très gentil (participation à la vie sociale de la famille) cette source de revenus pourrait très bien se tarir.",
                        "D’une poule de luxe. Le personnage a claqué tout son argent pour réussir à sortir avec un top modèle. Le bon côté de l’affaire c’est que c’est désormais votre petite copine qui vous entretient (vous pouvez compter sur un bonus de 5 000 à 7 000$ par mois) et que vous pouvez frimer devant les collègues lorsqu’elle vient vous chercher à la sortie du boulot. Le mauvais côté, c’est que si elle vous quitte, vous êtes bon pour l’hôtel miteux et les rires gras des collègues. En terme technique vous disposez d’une relation de rang 4 avec votre douce. Il peut s’agir d’un mannequin, d’une star de la télé, du cinéma (classique ou porno)…"
                    ]
            },
            exotique : {
                nom : "Exotique",
                description : "Le personnage vient d'un autre pays ou est issu d'une autre culture. Il a peut-être été élevé dans un temple Shaolin, rue Popincourt à Paris, ou à Soweto. Tout est question de cohérence et d'accord avec le meneur de jeu, tant pour sa provenance que pour les bénéfices qui en découlent.",
                consequences : "Le personnage dispose d’une relation au niveau 2 (avec maître Li Ping Pong Si Cool 65e Dan de Jeet Fu Te Do ou avec le roi du Yemen…).",
                possessionsPossibles :
                    [
                        " Il possède aussi un objet spécifique à son origine : le vieux kimono de Jacky Chan, un katana magique +2/+2 (pour pouvoir frapper les portoricains de grande taille qui ne peuvent être touchés que par des armes magiques), un mortier de 81 ou un jet privé…"
                    ]
            }
        };

        var origineSelectionnee = undefined;

        return{
            getOrigines : getOrigines,
            getOrigineSelectionnee : getOrigineSelectionnee,
            setOrigineSelectionnee : setOrigineSelectionnee
        };

        function getOrigines(){
            return origines;
        }

        function getOrigineSelectionnee(){
            return origineSelectionnee;
        }

        function setOrigineSelectionnee(origine){
            origineSelectionnee = origine;
        }

    }]);