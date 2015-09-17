angular.module('cops').

    factory('CompetencesService', [function(){

        var minValue = 2;
        var maxValue = 9;

        var pointsDisponibles = 10;
        var cout = 1;
        var pointsDisponiblesBase = 5;
        var limiteDepenseParCompetenceBase = 2;
        var limiteNiveauOption = 8;

        var choixBaseFait = false;
        var choixBaseNiveau = 7;

        var competences = {
            armeEpaule : {
                nom : "Arme d'épaule",
                niveau : 'base',
                caracteristique : 'Coordination',
                description : "Posséder cette compétence vous pose un bonhomme. Outre votre pratique du tir au fusil (acquise à l'armée, en chassant ou en tirant sur des boîtes de conserve dans le désert), vous avez appris à entretenir correctement une arme et à en tirer le meilleur rendement. Les véritables passionnés auront même pu acquérir une connaissance approfondie du monde des armes, en se tenant au courant des dernières innovations et nouveautés.",
                points : 8,
                specialisation : {
                    niveau : 5,
                    specialitesPossibles : ["Fusil à lunette", "Fusil", "Fusil à pompe"]
                }
            },
            armeContact : {
                nom: "Arme de contact",
                niveau : 'base',
                caracteristique : "Réflexes",
                description : "Que ce soit dans la rue, à l'armée, ou en suivant un enseignement martial, vous avez appris à vous battre avec une arme de contact (couteau, matraque, batte de base-ball, kryss...) ou tout autre type d'arme improvisée (queue de billard, bouteille de bourbon, barreau de chaise...). Dans le cas d’une arme exotique, on doit préciser de quelle arme il s’agit.",
                points : 8,
                specialisation : {
                    niveau : 6,
                    specialitesPossibles : ["Couteau", "Matraque", "Arme exotique"]
                }
            },
            armePoing : {
                nom : "Arme de poing",
                niveau : 'base',
                caracteristique : "Coordination",
                description : "Cette compétence gouverne l'utilisation des pistolets et revolvers. Il s'agit bien sûr de tirer, mais aussi d'entretenir correctement votre arme, de connaître ses conditions optimales d'utilisation et les règles de sécurité dont il faut faire preuve en la manipulant. Un niveau élevé ne dénotera pas seulement une extrême habileté au tir, mais pourra aussi figurer une passion aiguë pour les armes. Le personnage s'intéressera aux derniers modèles sortis et pourra évaluer une arme, sa provenance et son type de fabrication.",
                points : 7
            },
            armeLourde : {
                nom : "Arme lourde",
                niveau : 'option',
                caracteristique : 'Carrure',
                description : "Ce genre de compétence n'est pas vraiment réservée aux personnages qui veulent faire de la broderie. Vous avez appris à mettre en batterie et à utiliser un certain type d'armes lourdes (mitrailleuse, lance-roquettes...). La spécialisation intervient dès l'apprentissage de la compétence afin de refléter la technicité spécifique de chaque type d'arme.",
                points : 0,
                specialisation : {
                    niveau: 9,
                    specialitesPossibles : ["Mitrailleuse", "Lance-roquettes", "Lance-flammes"]
                }
            },
            athletisme : {
                nom : "Athlétisme",
                niveau : 'base',
                caracteristique : "Carrure",
                description : "Plus haut, plus vite, plus fort. Vous avez fait vôtre la devise du baron de Coubertin et grâce à un entraînement rigoureux, vous savez exploiter au mieux vos possibilités physiques. Vous savez nager, vous courrez vite et/ou longtemps, et vous pouvez tenter des sauts difficiles ou hasardeux, bref, rien de ce qui est physique ne vous échappe.",
                points : 7
            },
            bureaucratie : {
                nom : "Bureaucratie",
                niveau : 'base',
                caracteristique : "Sang-froid",
                description : "Cette compétence sera bien utile à ceux qui veulent se mesurer aux pesanteurs administratives. Vous êtes au courant des us et coutumes de l'administration. Vous connaissez son fonctionnement et savez vous adresser à la bonne personne pour obtenir ce que vous désirez. Qu'il s'agisse d'obtenir rapidement un formulaire (ou une autorisation) ou de remplir correctement un rapport, cette compétence s'avérera vite essentielle.",
                points : 8
            },
            conduite : {
                nom : "Conduite",
                niveau : 'base',
                caracteristique : "Coordination",
                description : "Vous avez appris à conduire et à manœuvrer un véhicule terrestre. Vous connaissez les manœuvres de base et avez quelques notions du fonctionnement et de l'entretien de l'engin.",
                points : 7,
                specialisation : {
                    niveau : 5,
                    specialitesPossibles: ["Moto", "Camion", "Chenillé"],
                    specialitesObtenues : ["Voiture"]
                }
            },
            connaissance : {
                nom : "Connaissance",
                niveau : "option",
                caracteristique : "Éducation",
                description : "Cette compétence comprend tous types de connaissances générales, scientifiques, artistiques ou autres que pourrait avoir acquis un personnage. Sélectionnez votre champ de connaissance immédiatement après avoir choisi cette compétence. Vous pourrez piocher du côté des sciences (physique, chimie, biologie...), avoir des connaissances plus générales (médias, gangs, politique, droit...), liées aux sciences humaines (géographie, histoire, économie...), aux différentes pratiques mystiques des sociétés tribales (gangs jamaïcains, vaudou et magie noire pour les plus fêlés) ou même aux arts (littérature, histoire de l’art, cinéma...).",
                points : 0,
                specialisation : {
                    niveau : 9,
                    specialitesPossibles: []
                }
            },
            corpsACorps : {
                nom : "Corps à corps",
                niveau : 'base',
                caracteristique : "Réflexes",
                description : "Vous avez appris à vous battre à mains nues en utilisant toutes les armes que vous a données la nature. Vous distribuez les coups de poing, les coups de pied ou les coups de boule (que ce soit au singulier ou au pluriel), vous mordez, tordez, déboîtez, dans un style bien peu académique mais qui sait être diablement efficace. À partir du niveau 7+, vous devrez choisir une spécialisation entre les projections, les immobilisations et les coups portés.",
                points : 7,
                specialisation : {
                    specialitesPossibles : ["Coups", "Projections", "Immobilisations"]
                }
            },
            deguisement : {
                nom : "Déguisement",
                niveau : "option",
                caracteristique : "Perception",
                description : "Vous savez vous grimer, que ce soit pour tenter de prendre l’apparence de quelqu’un ou pour masquer votre véritable identité. Outre une certaine compétence pour vous maquiller ou vous habiller de la manière la plus adaptée, vous pourrez aussi tenter de singer les attitudes (physiques ou verbales) de quelqu’un ou d’imiter sa voix.",
                points : 0
            },
            discretion : {
                nom : "Discrétion",
                niveau : 'base',
                caracteristique : "Coordination",
                description : "Vous avez appris à vous déplacer ou à agir furtivement. Vous savez vous déplacer avec calme et circonspection et tirer parti de l’environnement qui vous entoure pour ne pas être vu ou entendu. Outre cette capacité de discrétion dans vos mouvements, vous pouvez utiliser cette compétence pour masquer certains de vos faits et gestes.",
                points : 7
            },
            electronique : {
                nom : "Électronique",
                niveau : "option",
                caracteristique : "Éducation",
                description : "Avec cette compétence, vous avez acquis un certain savoir dans les domaines de l’électricité et l’électronique. De même, la réparation de certains appareils (avec le matériel adéquat) ou le diagnostic des pannes seront parfaitement à votre portée. Le versant illicite de cette compétence vous permettra de fracturer les serrures électroniques, de triturer les alarmes, de démarrer des voitures sans avoir la clé... Bien évidemment, si des flics utilisent ainsi cette compétence, il est alors probable qu’ils s’attireront les bonnes grâces et les regards langoureux du SAN (les affaires internes).",
                points : 0
            },
            eloquence : {
                nom : "Éloquence",
                niveau : 'optionBase',
                caracteristique : "Charme",
                description : "Pour qui sait la manier avec habileté, la parole peut être une arme dévastatrice. Cette compétence vous permettra d’en user avec aisance, et grâce à elle, vous pourrez frapper votre auditoire là où il risque d'avoir vraiment mal, sur le terrain des sentiments et des passions. Un bon jet d’Éloquence, et c'est un public hostile qui pourra être retourné, des amis galvanisés ou un auditoire convaincu. Surtout, lors d'un interrogatoire, cette compétence vous permettra d'attaquer la corde sensible d'un prévenu et de le prendre par les sentiments (le flic gentil et le flic méchant par exemple). Cette compétence est l’une des trois qui seront utilisées dans le cadre d’une procédure d’interrogatoire.",
                points : 0
            },
            falsification : {
                nom : "Falsification",
                niveau : "option",
                caracteristique : "Perception",
                description : "Cette compétence vous permettra de déceler des faux documents ou des faux papiers. Certains faux seront si grossiers qu’un simple coup d’œil permettra de les confondre, tandis que pour d’autres, il faudra plusieurs heures et un matériel plus sophistiqué. Pour déceler un faux il vous faudra réussir un jet d’opposition contre le faussaire que l’on essaie de démasquer. Le versant illicite de cette compétence permettra de fabriquer et de concevoir des faux documents et des faux papiers, voire, avec des moyens importants, de la fausse monnaie. Bien évidemment, les flics devront faire très attention à rester discret s’ils souhaitent utiliser le côté illicite de cette compétence.",
                points : 0
            },
            informatique : {
                nom : "Informatique",
                niveau : 'base',
                caracteristique : "Éducation",
                description : "Difficile de se passer de l’informatique de nos jours. Que ce soit pour conduire sa voiture, taper un rapport, rechercher de la documentation ou se détendre après une journée de boulot, l’utilisation des ordinateurs est quotidienne, alors mieux vaut en connaître le fonctionnement. Avec cette compétence, vous saurez installer un ordinateur, vous pourrez le dépanner, l’entretenir, formater des disques durs, en rajouter, réparer la base de registre, ajouter ou changer des pilotes, bref, mettre les mains dans le cambouis. Un niveau plus élevé (à partir de 5+) cette compétence dénotera une connaissance approfondie de l’architecture des machines et la capacité à les programmer.",
                points : 7,
                specialisation : {
                    niveau : 5,
                    specialitesPossibles : ["Piratage", "Programmation"]
                }
            },
            instinctFlic : {
                nom : "Instinct de flic",
                niveau : 'base',
                caracteristique : "Perception",
                description : "Nul ne sait mieux qu’un flic percevoir la vie de la rue. Avec le temps, les flics en patrouille finissent par acquérir ce que tous nomment les yeux de flic, cette perception aiguë et presque surnaturelle, ce mélange de perspicacité, d’intuition, d’acuité des sens et de l’esprit qui permet aux flics de repérer un pickpocket au milieu d’une foule, de remarquer un commerçant au comportement troublant, de repérer une crack house en passant simplement devant. Cette compétence ne s’applique pas sur les scènes de crimes et elle ne remplace pas une utilisation classique de la caractéristique de Perception. Elle représente simplement ce don que peuvent avoir les vieux flics en patrouille à repérer les problèmes peu de temps avant qu’ils n’arrivent.",
                points : 9
            },
            intimidation : {
                nom : "Intimidation",
                niveau : 'optionBase',
                caracteristique : "Sang-Froid",
                description : "Face à certains esprits récalcitrants, montrer les dents pourra parfois être bien utile pour obtenir des renseignements, des aveux ou un laisser passer. L’intimidation n’est pas forcément physique, elle peut être composée d’un subtil éventail de menaces, de sous-entendus ou d’allusions à un châtiment qui pourrait s’abattre sur le réfractaire. Certains puristes de l'interrogatoire jugent l'usage de cette compétence comme un manque définitif de finesse et de discernement. Pourtant, elle est souvent couronnée de succès. Force est aussi de constater que c’est cette compétence qui permettra de gérer les interrogatoires les plus « physiques. »",
                points : 0
            },
            jeu : {
                nom : "Jeu",
                niveau : "option",
                caracteristique : "Sang-Froid",
                description : "Cette compétence offre un vaste panel de possibilités à celui qui la maîtrise. Non-content de connaître parfaitement les règles, le fonctionnement et le folklore des jeux (jeux de casino, poker, bingo, loterie, bonneteau...), le personnage a appris à connaître les différentes méthodes de triche ou de fraude couramment pratiquées. S’il n’était pas un flic intègre doublé d’un honnête homme, il pourrait même mettre en pratique ces connaissances pour lui-même tricher.",
                points : 0
            },
            lancer : {
                nom : "Lancer",
                niveau : "option",
                caracteristique : "Coordination",
                description : "À force de regarder les World Series de baseball à la télé, le personnage a développé une technique efficace de lancer. Il est maintenant à même de jeter avec précision et puissance un objet quelconque avec, peut-être, une légère préférence pour les grenades.",
                points : 0
            },
            mecanique : {
                nom : "Mécanique",
                niveau : "option",
                caracteristique : "Coordination",
                description : "Le personnage a développé des connaissances approfondies en mécanique. Il sait diagnostiquer une panne et la réparer (à condition d’avoir le matériel idoine), quitte à bricoler des pièces de fortune. Cette compétence n’est pas seulement limitée à l’automobile, mais peut aussi s’envisager pour toute machine que le personnage ne connaît pas forcément mais dont le mode de fonctionnement est évident (moto, machine-outil, machine à laver...)",
                points : 0
            },
            medecine : {
                nom : "Médecine",
                niveau : "option",
                caracteristique : "Éducation",
                description : "Bercé par les épisodes d’Urgence, tandis que maman contemplait le beau Georges et papa les jolies infirmières, vous ne rêviez déjà que d’intubation, d’iono et de chimie standard (sans d’ailleurs véritablement savoir ce que cela voulait dire). Adolescent vous ne rêviez que de virus (les petites bêtes qui font du mal, pas les sexes masculins d’origine soviétique), de fractures (physiques et pas sociales) et de plaies ouvertes. Les personnages disposant d’une telle compétence sont à la fois des experts en théorie (suite à de longues études) et en pratique (après de nombreux stages en médecine d’urgence). En fonction du niveau de compétence, il est possible de réduire des fractures, de stopper des hémorragies, de pratiquer des opérations chirurgicales lourdes et de maintenir en vie des patients en état critique.",
                points : 0,
                specialisation : {
                    niveau : 6,
                    specialitesPossibles : ["Chirurgie", "Pharmacologie", "Médecine légale"]
                }
            },
            pilotage : {
                nom : "Pilotage",
                niveau : "option",
                caracteristique : "Coordination",
                description : "Le personnage a développé un savoir assez technique, lui permettant le pilotage d’un engin au maniement complexe comme un avion, un hovercraft, un hélico ou une vedette moderne. Il sait effectuer toutes les manœuvres de base permettant d’assurer le fonctionnement optimal de l’appareil en préservant la sécurité des passants et il a appris à superviser la maintenance de l’engin.",
                points : 0,
                specialisation : {
                    niveau : 9,
                    specialitesPossibles : ["Patrouilleur maritime", "Hélicoptère", "Hovecraft", "Avion"]
                }
            },
            premiersSecours : {
                nom : "Premiers secours",
                niveau : 'base',
                caracteristique : "Coordination",
                description : "Le personnage a appris les gestes qui sauvent. Lorsqu’il se trouve face à une situation d’urgence, en présence d’un blessé, il sait réagir avec efficacité et rapidité pour stabiliser l’état du patient, soulager sa souffrance et l’empêcher de mourir, en attendant que des moyens plus « lourds » n’arrivent. Ces manœuvres simples passent par un contrôle du pouls et de la respiration du patient, et une intervention rapide s’ils sont déficients (massage cardiaque, respiration artificielle, etc.). Le personnage ne sera pas qualifié pour des tâches plus complexes comme la réduction d’une fracture ou le diagnostic précis d’un traumatisme ou d’une maladie.",
                points : 8
            },
            psychologie : {
                nom : "Psychologie",
                niveau : "option",
                caracteristique : "Perception",
                description : "Cette compétence permettra au personnage d’évaluer la psychologie et le comportement d’un individu. Elle permettra de comprendre son fonctionnement mental et d’anticiper ses réactions à un stimulus donné. Le personnage peut avoir développé empiriquement un sens inné de l’observation des caractères et comportements, ou bien avoir acquis un savoir plus académique à force de lectures et d’études. Cette compétence ne permet pas d’établir le profil psychologique d’un tueur en série (passe-temps favori des profileurs) – il faudra pour cela participer à un stage spécifique. Lors d’un interrogatoire, cette compétence permettra de connaître les points forts et les points faibles du prévenu que l’on questionne.",
                points : 0
            },
            rhetorique : {
                nom : "Rhétorique",
                niveau : 'optionBase',
                caracteristique : "Éducation",
                description : "Vous avez appris à raisonner et surtout à mettre en parole de manière argumentée et précise votre cheminement intellectuel. Vous pouvez tenter d'amener votre interlocuteur à vous écouter ou à vous parler, en lui démontrant rationnellement pourquoi il doit le faire. Là ou l'Éloquence et l'Intimidation frappent la passion et la sensibilité humaine, la Rhétorique choisit d'attaquer froidement sur le terrain du jugement, de la logique et de la raison. Cette compétence est l’une des trois qui seront utilisées dans le cadre d’une procédure d’interrogatoire.",
                points : 0
            },
            sceneCrime : {
                nom : "Scène de crime",
                niveau : 'base',
                caracteristique : "Perception",
                description : "Lors de l’arrivée sur les lieux d’un crime, il est vital de protéger l’environnement des agressions extérieures afin d’éviter que de gros pieds crottés n’écrasent stupidement tous les indices. Cette compétence permettra au personnage de savoir ce qu’il faut faire pour préserver et récolter aussi rapidement que sûrement tous les indices présents sur les lieux d’un crime. Le flic saura quoi chercher et où le chercher, et surtout, saura recueillir les indices sans compromettre irrémédiablement leurs chances d’utilisation par les limiers de la police médico-légale.",
                points : 7
            },
            tirRafales : {
                nom : "Tir en rafales",
                niveau : "option",
                caracteristique : "Coordination",
                description : "Manier le revolver ou le pompeux, c’est bien beau, mais c’est à son habileté à faire feu avec des armes automatiques que l’on reconnaîtra le véritable homme de terrain ! Cette compétence permettra l’utilisation et la mise en œuvre optimale d’une arme tirant en rafales, ainsi que son entretien. Le contrôle du recul et de la visée sont deux éléments importants qui ne seront jamais négligés par le tireur professionnel, surtout s’ils s’agit de faire feu au milieu d’innocents. Il est impossible de posséder une compétence de Tir en rafales d’un meilleur niveau que la compétence d’arme qui s’y rapporte (exemple : un personnage qui possède la compétence Arme de poing 6+ ne peut pas posséder la compétence Tir en rafales [arme de poing] au niveau 5+).",
                points : 0,
                specialisation : {
                    niveau : 7,
                    specialitesPossibles : ["Arme d'épaule", "Arme de poing"]
                }
            }

        };

        return{
            getCompetences : getCompetences
        };

        function getCompetences(){
            return competences;
        }



    }]);