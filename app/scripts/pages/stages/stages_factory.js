angular.module('cops').

    factory('StagesService', [function(){

        var stagesDisponibles = 2;
        var stages = {
            cohesion : {
                nom : "Stage de cohésion – « Stage grande gueule »",
                description : "Au cours de cette formation le personnage apprend à gérer une équipe. Il est formé à la gestion de conflits et on lui enseigne la meilleure manière de donner des directives à des flics sous ses ordres. Ce stage est généralement destiné aux sergents, chefs de patrouilles et jeunes loups aux dents longues qui veulent se faire bien voir par la hiérarchie",
                carac_min : {
                    anciennete : 1,
                    adrenaline : 1
                },
                comp_min : {
                    bureaucratie : 7,
                    psychologie : 7
                },
                cumul : false,
                bonus : "",
                capacites : [
                    {
                        nom : "Commandement",
                        description : "lorsqu’il est chef de groupe (et uniquement dans ce cas), le personnage dispose de 1 Point d’ancienneté et de 1 Point d’adrénaline supplémentaires qu’il peut donner normalement à ses équipiers (c’est-à-dire en utilisant les règles normales de chef de groupe). Il lui est impossible d’utiliser ces points de bonus pour luimême. Ces points supplémentaires sont renouvelés à chaque nouvelle séance de jeu. Ils ne sont pas cumulables d’une séance sur l’autre"
                    }
                ]
            },
            conduite : {
                nom : "Stage de conduite niveau 1 – « Stage autotamponneuse»",
                description : "Considéré comme une récréation par la plupart des flics, ce stage permet d’apprendre à contrôler une voiture sur route humide ou dans des conditions légèrement délicates (route défoncée, pneu crevé…).",
                carac_min : {
                    coordination : 3
                },
                comp_min : {
                    conduite : 6
                },
                cumul : false,
                bonus : "",
                capacites : [
                    {
                        nom : "As de la route",
                        description : "le personnage peut ignorer la perte du premier dé lorsqu’il est engagé dans une poursuite. Il perdra normalement son deuxième dé durant la même poursuite (et les dés suivants !)."
                    }
                ]
            },
            criminalistique : {
                nom : "Stage de criminalistique niveau 1 – « Stage crâne d’œuf »",
                description : "Ce stage est particulièrement difficile à obtenir. En effet, il est rare que les enquêteurs scientifiques acceptent de passer quelques-uns de leurs précieux moments de temps libre à éduquer de pauvres flics incultes.",
                carac_min : {
                    perception : 3
                },
                comp_min : {
                    sceneCrime : 6
                },
                cumul : false,
                bonus : "lorsqu’il fait un jet de compétence scientifique ou de connaissance (Connaissance [au choix], Électronique, Informatique, Mécanique, Scène de crime), le personnage transforme un de ses dés en un dé bleu. Si ce dé indique 1 réussite, il compte alors comme 2 réussites (si le dé est une réussite critique, il est relancé normalement mais il n’ajoutera de toute manière qu’une seule réussite supplémentaire du fait de cette capacité).",
                capacites : []
            },
            frappe : {
                nom : "Stage de frappe niveau 1- « Stage punching ball »",
                description : "Au cours de toute la durée de ce stage, le personnage va passer son temps à taper sur ses petits camarades et à se faire taper dessus… L’apprentissage par la douleur, il n’y a rien de mieux.",
                carac_min : {
                    carrure : 3
                },
                comp_min : {
                    corpsACorps : 6
                },
                cumul : true,
                bonus : "le personnage apprend à frapper plus fort. À chaque fois qu’il suit ce stage, le personnage gagne un bonus potentiel de +1 aux dommages qu’il inflige avec ses poings (en aucun cas lors d’une projection ou d’une immobilisation). La valeur de ce bonus ne peut en aucun cas dépasser la marge de réussite de l’attaque au corps à corps en question",
                capacites : []
            },
            geopolitique : {
                nom : "Stage de géopolitique globale – « Sucer des huîtres, lécher des moules »",
                description : "Ce stage est généralement réservé aux flics issus de bonne famille, aux gosses de riches, aux jolies gueules appréciées par les médias. Il consiste en une immersion dans les plus hautes sphères de la politique et de la finance de Los Angeles. Les flics qui suivent ce stage apprennent à bien se comporter au cours des repas de charité, ils apprennent à manger des petits fours, à faire de beaux discours et à sauter de vieilles veuves riches et perverses tout en restant dignes et raides (comme la justice).",
                carac_min : {
                    operateur : 'or',
                    charme : 4,
                    education : 4
                },
                comp_min : {},
                cumul : true,
                bonus : "lorsqu’il fait un jet de Connaissance du milieu spécifique (culture spécifique : haute finance, politique, showbiz…), le personnage transforme un de ses dés en un dé bleu. Si ce dé indique 1 réussite, il compte alors comme 2 réussites (si le dé est une réussite critique, il est relancé normalement mais il n’ajoutera de toute manière qu’une seule réussite supplémentaire du fait de cette capacité).",
                capacites : [
                    {
                        nom: "Culture mondaine [choisir un milieu spécifique – haute finance, politique, showbiz…]",
                        description: "le personnage est considéré comme disposant d’un niveau de relation 1 avec tous les représentants du milieu choisi. Le meneur de jeu peut tout à fait décider que des individus particuliers ne sont pas soumis aux effets de cette capacité. Elle ne représente que le fait que le personnage est généralement apprécié des membres d’une communauté, il ne s’agit en aucun cas d’un super pouvoir."
                    }
                ]
            },
            gestionFoules : {
                nom : "Stage de gestion des foules – « Stage matraquage »",
                description : "Au cours de ce stage, le flic apprend à résister à des charges de manifestants et à contre-charger lorsque l’ordre est donné. Il apprend à garder le contrôle de soi et à éviter de se laisser envahir par ses émotions.",
                carac_min : {
                    sangFroid : 3
                },
                comp_min : {
                    intimidation : 6
                },
                cumul : true,
                bonus : "à chaque fois qu’il suit ce stage, le personnage gagne un bonus potentiel de +1 aux dommages qu’il inflige avec une arme de contact. La valeur de ce bonus ne peut en aucun cas dépasser la marge de réussite de l’attaque au corps à corps en question.",
                capacites : [
                    {
                        nom : "Imperturbable",
                        description : "le personnage dispose d’un bonus de 1 dé à tous les jets de Sang-froid qu’il doit effectuer pour garder son calme dans une situation stressante (émeute, interrogatoire, intimidation…)."
                    }
                ]
            },
            procComm : {
                nom : "Stage de gestion des procédures de communication au sein du LAPD niveau 1 – « J’embrasse… »",
                description : "Au cours de ce stage, le flic va commencer à découvrir les rouages les plus secrets et les plus mystérieux du LAPD. Quelques semaines durant son travail consistera essentiellement à porter le café aux officiers et à bavarder avec les secrétaires. Rapidement le flic apprendra ainsi comment récupérer les formations les plus intéressantes (cours de tir, de conduite…), comment obtenir du matériel de meilleure qualité…",
                carac_min : {
                    sangFroid : 3
                },
                comp_min : {
                    bureaucratie : 6
                },
                cumul : false,
                bonus : "à l’issue de chaque séance, le personnage peut effectuer un jet de Bureaucratie/Charme (4). Il gagnera alors 1 point d’expérience supplémentaire par point de marge de réussite obtenu (une réussite normale n’apportera donc aucun point supplémentaire). Il est bien évidemment impossible d’utiliser des Points d’adrénaline sur ce jet de dés.",
                capacites : [
                    {
                        nom : "Suceur",
                        description : "le personnage disposera d’un dé supplémentaire pour tous ses jets lors d’interactions sociales avec des membres du personnel administratif du LAPD (secrétaires, armuriers, garagistes, officiers supérieurs…). En revanche, et de manière permanente, il subira un malus de 1 dé pour tous ses jets lors d’interactions sociales avec des flics de la rue (enquêteurs, flics de patrouille…). Les relations du personnage avec le personnel scientifique du LAPD ne sont pas affectées. Il est important que le meneur de jeu se souvienne que, même si aucun jet de dés n’est demandé, cette capacité restera active en permanence et affectera de manière sensible la réaction des interlocuteurs du flic."
                    }
                ]
            },
            protectionPersonnalites : {
                nom : "Stage de protection des personnalités et de surveillance des biens publics niveau 1 – « Stage pot de fleurs »",
                description : "Ce stage est bien souvent considéré comme une sanction plus que comme une réelle opportunité d’avancement. Le flic qui suit ce stage va se retrouver plusieurs jours durant à faire le pot de fleur devant un bâtiment administratif, une école ou la demeure d’un homme important",
                carac_min : {
                    charme : 3
                },
                comp_min : {},
                cumul : true,
                bonus : "lorsqu’il fait un jet de Connaissance du quartier spécifique où il a effectué son stage, le personnage transforme un de ses dés en un dé bleu. Si ce dé indique 1 réussite, il compte alors comme 2 réussites (si le dé est une réussite critique, il est relancé normalement mais il n’ajoutera de toute manière qu’une seule réussite supplémentaire du fait de cette capacité).",
                capacites : [
                    {
                        nom : "Ami du patron",
                        description : "lorsqu’il se trouve dans un quartier dans lequel il a effectué un de ces stages, le personnage peut manger gratuitement dans divers petits restaurants, il bénéficie de tarifs avantageux dans des magasins divers et variés (électronique, alimentaire et peut-être même une armurerie). Le meneur de jeu peut considérer que les petits services sont offerts (un repas, une chambre pour la nuit, un verre ou deux…). Pour ce qui est des achats plus onéreux, le personnage bénéficiera d’une réduction de 15%. L’usage et l’abus de cette capacité peut rapidement faire passer le personnage pour un ripou"
                    }
                ]
            },
            ressourcesHumaines : {
                nom : "Stage de ressources humaines – « Stage rond-de-cuir »",
                description : "Au cours de toute la durée de ce stage, le personnage va travailler au département des ressources humaines du LAPD. Il y apprendra rapidement un certain nombre de techniques développées par ses collègues ronds-de-cuir pour survivre dans l’enfer de la jungle administrative.",
                carac_min : {
                    charme : 3
                },
                comp_min : {
                    bureaucratie : 6
                },
                cumul : false,
                bonus : "le salaire du personnage est majoré de manière permanente d’un bonus représentant 10% de sa valeur de base (avant prime)",
                capacites : [
                    {
                        nom : "Carambole",
                        description : "le personnage a appris à utiliser au mieux les rouages de l’administration. Lorsqu’un autre PJ parvient à obtenir du matériel ou une promotion du LAPD, le personnage peut effectuer un jet de Bureaucratie/Sangfroid contre un niveau de difficulté variable choisi par le meneur de jeu (généralement entre 3 et 5) afin de bénéficier du matériel ou de la promotion. L’autre personnage se verra simplement signifier une fin de non recevoir en ce qui concerne sa ou ses demandes. Le meneur de jeu est libre d’apprécier la possibilité ou l’impossibilité d’utiliser cette capacité lors d’une demande particulière. Il a enfin la possibilité d’autoriser le personnage à utiliser cette capacité contre un flic PNJ notable de la campagne. Cette capacité peut aussi être utilisé pour « subtiliser » un stage de niveau 1 ou 2 à une autre équipe de flics (autant dire que le personnage ne s’en fera pas des amis) mais il est tout de même nécessaire de dépenser les points d’expérience nécessaires à l’obtention du stage."
                    }
                ]
            },
            sensibilisationCulturelle : {
                nom : "Stage de sensibilisation culturelle niveau 1 – « Serrer des mains… »",
                description : "De bien des manières ce stage est proche de celui de géopolitique globale. Le flic va ici passer quelque temps avec des associations de quartier, en compagnie des petits élus locaux, des bénévoles qui luttent contre la pauvreté, l’insalubrité et la délinquance. Il ouvre aussi la possibilité de se spécialiser plus précisément sur la vie des petites communautés qui forment le patchwork coloré de la population de Los Angeles. Il est important de noter que depuis le « revival » spirituel du Little One, de plus en plus de flics suivent ce stage pour se familiariser avec les nouvelles religions, doctrines, sectes et croyances à la mode en Californie",
                carac_min : {
                    charme : 3
                },
                comp_min : {
                    connaissance : 7
                },
                cumul : true,
                bonus : "lorsqu’il fait un jet de Connaissance du milieu spécifique (les Latinos de Venice Beach, les AfroAméricains de Beverly Hills, les musulmans de South Central…), le personnage transforme un de ses dés en un dé bleu. Si ce dé indique 1 réussite, il compte alors comme 2 réussites (si le dé est une réussite critique, il est relancé normalement mais il n’ajoutera de toute manière qu’une seule réussite supplémentaire du fait de cette capacité).",
                capacites : [
                    {
                        nom : "Oreille de la rue",
                        description : "de manière informelle (pas de jet à effectuer), à chaque séance, le meneur se chargera de communiquer au flic les rumeurs particulières aux quartiers et aux communautés avec lesquelles il a eu l’occasion de travailler. Bien évidemment ces rumeurs seront un mélange d’informations très utiles et parfaitement inutiles. Les informations utiles ainsi divulguées seront celles normalement accessibles auprès d’indics de niveau 1."
                    }
                ]
            },
            techniqueInterrogatoire : {
                nom : "Stage de technique d’interrogatoire – « Le bon, la brute et le truand »",
                description : "Ces stages permettent aux flics de perfectionner leurs techniques d’interrogatoire. Assistés par des psychologues et d’anciens inspecteurs se consacrant désormais à l’enseignement, ils apprennent à lire le comportement de leur interlocuteur et à évaluer ses futures réactions.",
                carac_min : {},
                comp_min : {
                    operateur: "or",
                    intimidation : 6,
                    eloquence : 6,
                    rhetorique : 6
                },
                cumul : true,
                bonus : "lorsqu’il effectue un jet utilisant la compétence d’interrogatoire pour laquelle il a suivi un stage, le personnage peut relancer une fois, par jet, un dé qui indiquait un échec (pas d’effet si tous les dés indiquaient des réussites et cela ne fonctionne pas sur les dés relancés après une réussite critique)",
                capacites : []
            },
            tir : {
                nom : "Stage de tir niveau 1 – « Stage Pat Garrett »",
                description : "Ce stage n’est pas grand chose d’autre qu’une version un peu plus poussée des cours de tir suivis quotidiennement par les flics.",
                carac_min : {
                    coordination : 3
                },
                comp_min : {
                    operateur : "or",
                    armeEpaule : 6,
                    armePoing: 6
                },
                cumul : true,
                bonus : "à chaque fois qu’il suit ce stage, le personnage gagne un bonus potentiel de +1 aux dommages qu’il inflige avec la compétence appropriée. La valeur de ce bonus ne peut en aucun cas dépasser la marge de réussite du tir en question",
                capacites : [
                    {
                        nom : "Tir dissuasif",
                        description : "lorsque le personnage tente d’effectuer un tir de couverture, il le fait avec un bonus de +2 dés."
                    },
                    {
                        nom : "Tir instinctif",
                        description : "le personnage peut, si sa seule action du tour est d’utiliser son arme à feu, choisir une initiative minimale de –2, même s’il ne possède pas des Réflexes de 5. S’il dégaine une arme, l’initiative minimale est d’un point inférieure à celle normalement prévue par la manière dont il la porte (avec un minimum de –2). De plus, en cas d’égalité lors de la détermination de l’initiative, un tel personnage l’emporte toujours, même si son ou ses adversaires possèdent une agressivité et des Réflexes supérieurs. Si les deux personnages possèdent cette capacité spéciale, ils font feu en même temps"
                    }
                ]
            },
            tonfa : {
                nom : "Stage de tonfa – « Stage tonton bâton »",
                description : "Au cours de ce stage les flics apprennent à utiliser les nombreuses possibilités martiales offertes par le tonfa et pas seulement à s’en servir comme d’une vulgaire matraque.",
                carac_min : {
                    reflexes : 3
                },
                comp_min : {
                    armeContact : 6
                },
                cumul : true,
                bonus : "à chaque fois qu’il suit ce stage, le personnage gagne un bonus potentiel de +1 aux dommages qu’il inflige avec un tonfa. La valeur de ce bonus ne peut en aucun cas dépasser la marge de réussite de l’attaque au corps à corps en question.",
                capacites : [
                    {
                        nom : "Immobilisation",
                        description : "sur un jet d’attaque réussi avec son tonfa (donc avec une marge de réussite au moins égale à 1), l’attaquant immobilise son adversaire (aucun dommage, pas de Force d’arrêt). Pour réaliser cette attaque, le personnage reçoit un bonus de 1 dé. Chaque tour suivant, le personnage immobilisé peut choisir de perdre 2 Points de vie pour pouvoir tenter de se libérer. On effectue alors un nouveau jet d’opposition de Arme de contact [matraque]/Corps à corps (avec un bonus de 1 dé pour l’utilisateur du tonfa). Il faut vaincre le personnage qui maintient la prise pour se libérer (en cas d’égalité, la prise est donc maintenue)."
                    },
                    {
                        nom : "Parade",
                        description : "lorsque le personnage combat au corps à corps avec un tonfa et que son adversaire remporte l’opposition avec une marge de réussite de 1 ou de 2 on estime que l’attaque a été parée : elle ne cause aucun dommage (mais le personnage ne peut pas causer des dommages à son adversaire pour autant)."
                    }
                ]
            },
            sportif : {
                nom : "Stage sportif – « Stage gonflette »",
                description : "",
                carac_min : {
                    carrure : 3
                },
                comp_min : {},
                cumul : true,
                bonus : "le personnage gagne un bonus permanent de 3 points de vie (jusqu’à un maximum de +6 pour deux stages).",
                capacites : [
                    {
                        nom : "Bonne condition physique",
                        description : "le personnage augmente sa Carrure de 1 point (jusqu’à un maximum de 5) s’il prend le temps d’entretenir sa forme en passant au moins 2 heures par jour à faire du sport. S’il arrête son entraînement pendant une semaine, il perd son bonus de Carrure mais peut à nouveau l’obtenir au bout d’un mois de séances de sport journalières."
                    }
                ]
            }
        };

        var stagesObtenus = [];

        return{
            getNombreStagesDisponibles: getNombreStagesDisponibles,
            setNombreStagesDisponibles: setNombreStagesDisponibles,
            getStages : getStages,
            addStageObtenu : addStageObtenu,
            getStagesObtenus : getStagesObtenus,
            removeStageObtenu : removeStageObtenu
        };

        function getNombreStagesDisponibles(){
            return stagesDisponibles;
        }

        function setNombreStagesDisponibles(nbr){
            stagesDisponibles = nbr;
        }

        function getStages(){
            return stages;
        }

        function getStagesObtenus(){
            return stagesObtenus;
        }

        function addStageObtenu(stage){
            stagesObtenus.push(stage);
            stagesDisponibles --;
        }

        function removeStageObtenu(stage){
            //remove le premier stage de ce nom
            var arr = [];
            var supprDone = false;
            for(var i = 0; i < stagesObtenus.length; i++){
                if(supprDone){
                    arr.push(stagesObtenus[i]);
                }
                else{
                    if(stagesObtenus[i].nom != stage.nom){
                        arr.push(stagesObtenus[i]);
                    }
                    else{
                        supprDone = true;
                    }
                }
            }
            stagesObtenus = arr;
            stagesDisponibles ++;
        }

    }]);