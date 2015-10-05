angular.module('cops').

    factory('EtudesService', [function(){

        var etudes = {
            rue : {
                nom : "La rue",
                description : "Le personnage a été à l'école juste pour apprendre à lire, à écrire et à compter. Pour le reste, il est totalement inculte et s'il est parvenu à entrer au LAPD, c'est peut-être en combinant chance et piston, parce que côté dictée, ce ne fut pas fameux !",
                consequences : "Le personnage peut acquérir une relation de niveau 1 dans un gang, dans un organisme social ou dans un petit commerce de quartier. À la place, il peut choisir d’augmenter de 1 niveau une relation déjà eexistante. Le personnage dispose aussi de 2 points de compétence à utiliser sur une ou deux des quatre suivantes :",
                competences : [
                    'armeContact',
                    'armePoing',
                    'athletisme',
                    'mecanique'
                ]
            },
            education_min : {
                nom : "Éducation minimale",
                description : "Le personnage a reçu une éducation basique et n'a pas été beaucoup plus loin qu'un vague niveau de collège. Il a certainement passé de justesse les tests d'entrée au LAPD",
                consequences : "Le personnage peut acquérir une relation de niveau 1 dans une administration, dans une association de quartier (amicale d’autodéfense, le cercle des amateurs de pizzas tibétaines…) ou dans un petit commerce de quartier. À la place, il peut choisir d’augmenter de 1 niveau une relation déjà existante. Le personnage dispose aussi de 2 points de compétence à utiliser sur une ou deux des quatre suivantes",
                competences : [
                    'athletisme',
                    'conduite',
                    'connaissance',
                    'corpsACorps'
                ]
            },
            lycee : {
                nom : "Lycée",
                description : "Le personnage a suivi le cursus normal d'un élève moyen. Il a acquis quelques connaissances de base et a préféré se lancer dans la « vie active » au lieu de continuer plus avant ses études. C'est le niveau le plus couramment rencontré au LAPD.",
                consequences : "Le personnage peut acquérir une relation de niveau 1 avec un avocat, un journaliste ou un membre d’une administration. À la place, il peut choisir d’augmenter de 1 niveau une relation déjà existante. Le personnage dispose aussi de 2 points de compétence à utiliser sur une ou deux des quatre suivantes :",
                competences : [
                    'athletisme',
                    'connaissance',
                    'informatique',
                    'rhetorique'
                ]
            },
            etudes_sup : {
                nom : "Études supérieures",
                description : "Le personnage a mené à bien de brillantes études, sanctionnées par un diplôme de haut niveau. Sa réussite et son côté « crâne d'œuf » lui attirent parfois la jalousie et les sarcasmes de ses collègues. Quant à sa hiérarchie, elle n'hésite pas à utiliser ce fort en thème pour les tâches trop compliquées pour le flic de base (cela peut aller de la rédaction du discours du capitaine pour la fête des roses de Pasadena, à l'élaboration d'un rapport sur les disparités ethniques et la concordance anthropologique dans le secteur d’Inglewood Nord). Plus grave, la hiérarchie aura plus facilement tendance à lui attribuer les stages « scientifiques » et à garder les stages physiques pour les flics un peu moins dotés en matière grise.",
                consequences : "Le personnage peut acquérir une relation de niveau 1 dans le milieu de la haute finance, dans un cabinet d’avocat ou à la direction d’un organe de presse. À la place, il peut choisir d’augmenter de 1 niveau une relation déjà existante. Le personnage dispose aussi de 2 points de compétence à utiliser sur une ou deux des cinq suivantes :",
                competences : [
                    'connaissance',
                    'electronique',
                    'informatique',
                    'medecine',
                    'psychologie'
                ]
            },
            exotique : {
                nom : "Exotique",
                description : "Le personnage a reçu une éducation très exotique. Peut-être a-t-il reçu l'enseignement des maîtres ninja de la montagne sacrée ou bien a-t-il fréquenté l'école élémentaire du 24 de la rue Popincourt, à moins qu'il n'ait tout appris dans une école coranique d'Islamabad. Bref, c'est à vous d'inventer quelque chose d'exotique, en accord et en partenariat avec le meneur de jeu qui décidera de la nature des conséquences de ces études.",
                consequences : "Le personnage peut acquérir une relation de niveau 1. À la place, il peut choisir d’augmenter de 1 niveau une relation déjà existante. Le personnage dispose aussi de 2 points à utiliser sur une ou deux compétences (au choix du meneur de jeu).",
                competences : []
            }
        };

        var etudeSelectionnee = undefined;

        return{
            getEtudes : getEtudes,
            getEtudeSelectionnee : getEtudeSelectionnee,
            setEtudeSelectionnee : setEtudeSelectionnee
        };

        function getEtudes(){
            return etudes;
        }

        function getEtudeSelectionnee(){
            return etudeSelectionnee;
        }

        function setEtudeSelectionnee(etude){
            etudeSelectionnee = etude;
        }

    }]);