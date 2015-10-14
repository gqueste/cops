angular.module('cops').

    factory('EntreeCopsService', [function(){

        var entrees = {
            academie : {
                nom : "Académie de police",
                description : "Après des études plus ou moins brillantes à l'Académie de police de Barstow, le personnage a intégré le LAPD. C'est le cursus le plus courant et le plus noble. Pour les meilleurs, c'est celui qui assure les plus rapides promotions (la hiérarchie est souvent issue de l'Académie et préfère en favoriser les membres).",
                consequences : "Le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations dans un parti politique, chez les cadres ou dans d’autres services du LAPD (techniciens de labo, médecins légistes…).",
                options : [
                    {
                        description : "Le personnage débute la partie avec 2 Points d’ancienneté et 0 Point d’adrénaline.",
                        anciennete : 2,
                        adrenaline : 0
                    }
                ]
            },
            armee : {
                nom : "Armée ou forces spéciales",
                description : "Le personnage est issu de l'armée ou des forces spéciales. Il a peut-être même servi dans l'US Army ou les Marines et il a certainement participé à la guerre de Corée ou à des coups tordus en Amérique Centrale. Après sa période, il a choisi de rempiler au LAPD, toujours à la recherche d'hommes à poigne pleins de cran. Son passé pourrait le gêner dans sa carrière, surtout s'il a servi les USA et on pourrait le considérer avec méfiance, voire comme une taupe de la CIA. Sa réputation et son attitude d'ancien militaire pourraient aussi lui attirer quelques soucis et problèmes de compréhension auprès des travailleurs sociaux ou des flics « libéraux. »",
                consequences : "Le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations dans l’administration, chez les cadres ou dans d’autres services du LAPD (techniciens de labo, médecins légistes…).",
                options : [
                    {
                        description : "Le personnage débute la partie avec 1 Point d’ancienneté et 1 Point d’adrénaline.",
                        anciennete : 1,
                        adrenaline : 1
                    }
                ]
            },
            concours : {
                nom : "Concours ou recrutement de terrain",
                description : "Certainement désœuvré, le personnage a un jour participé par hasard à l'un des multiples tests d'évaluation que pratique le LAPD lors de ses campagnes de recrutement. Jugé apte physiquement et intellectuellement, il a suivi une rapide formation pluridisciplinaire avant d'intégrer le corps des officiers en uniforme de la police de la route. Après s'en être plutôt bien tiré, il a obtenu une mutation interne au service COPS. N'étant pas issu du moule académique standard, le personnage risque de rencontrer quelques problèmes avec sa hiérarchie lorsqu'il s'agira de demander des faveurs ou de monter en grade. De même, son statut d'ancien agent de la circulation pourrait nuire à ses relations avec quelques collègues sarcastiques pour qui la solidarité entre services n'est plus qu'un vieux souvenir",
                consequences : "Le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations chez les criminels (voir le chapitre Relations et informateurs), chez les cadres ou dans d’autres services du LAPD (techniciens de labo, médecins légistes…).",
                options : [
                    {
                        description : "Le personnage débute la partie avec 1 Point d’ancienneté et 1 Point d’adrénaline.",
                        anciennete : 1,
                        adrenaline : 1
                    }
                ]
            },
            federale : {
                nom : "Équivalence fédérale",
                description : "Le personnage travaillait à la DEA, à l'ATF, au FBI ou dans toute autre administration US, présente en Californie avant l'indépendance. Grâce à un système d'équivalence, il a pu trouver un poste au LAPD, non sans avoir subi quelques enquêtes de moralité très serrées. Son passé lui attire la méfiance de sa hiérarchie, et il pourrait bien être surveillé par le gouvernement. Au moindre doute sur ses actes, le soupçon d'espionnage pourrait bien ressortir…",
                consequences : "Le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations chez les criminels (reportez-vous au chapitre Relations et informateurs), dans d’autres services du LAPD (techniciens de labo, médecins légistes…) ou dans un parti politique",
                options : [
                    {
                        description : "Le personnage débute la partie avec 1 Point d’ancienneté et 1 Point d’adrénaline.",
                        anciennete : 1,
                        adrenaline : 1
                    },
                    {
                        description : "Le personnage débute la partie avec 2 Points d’ancienneté et 0 Point d’adrénaline.",
                        anciennete : 2,
                        adrenaline : 0
                    }
                ]
            },
            sportif : {
                nom : "Sportif",
                description : "Le personnage est un ancien sportif de haut niveau universitaire. Peut-être n’a-t-il tout simplement pas été drafté lors des sélections professionnelles ou peut-être a-til eu la chance de jouer quelque temps dans une équipe professionnelle avant de se blesser suffisamment gravement pour devoir mettre un terme à ses espoirs de gloire et de fortune",
                consequences : "le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations chez les journalistes, dans le milieu de la finance ou dans un parti politique.",
                options : [
                    {
                        description : "Le personnage débute la partie avec 0 Point d’ancienneté et 2 Points d’adrénaline",
                        anciennete : 0,
                        adrenaline : 2
                    }
                ]
            },
            piston : {
                nom : "Piston",
                description : "Malgré sa bonne volonté, le personnage a échoué à tous les concours d'entrée (la faute à pas de chance, car il avait travaillé) et il a fait appel à une connaissance haut placée pour intégrer le LAPD, son rêve de gosse. Ce genre de petit coup de pouce se sait vite et a plutôt mauvaise presse. Le personnage est perçu comme « le fils à papa, » et on jase beaucoup sur les avantages présumés dont il dispose.",
                consequences : "Le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations dans un parti politique, chez les cadres ou dans d’autres services du LAPD (techniciens de labo, médecins légistes…).",
                options : [
                    {
                        description : "Le personnage débute la partie avec 2 Points d’ancienneté et 0 Point d’adrénaline.",
                        anciennete : 2,
                        adrenaline : 0
                    }
                ]
            },
            exotique : {
                nom : "Exotique",
                description : "Le personnage fait partie de Scotland Yard et il a été détaché au LAPD pour en étudier les méthodes de travail ou bien il a été engagé contre sa volonté, n'ayant pu résister à un père / mère / oncle / etc. haut placé et souhaitant absolument le voir entrer dans la police. Bref, c'est à vous d'imaginer et de choisir, en accord avec le meneur de jeu qui saura ensuite évaluer les conséquences de vos propositions.",
                consequences : "Le personnage dispose de 2 points lui permettant d’augmenter une relation déjà existante ou d’acheter une ou deux nouvelles relations.",
                options : [
                    {
                        description : "Le personnage débute la partie avec 2 Points à répartir entre ancienneté et adrénaline.",
                        anciennete : 0,
                        adrenaline : 0
                    }
                ]
            }
        };

        var entreeSelectionnee = entrees['academie'];

        return{
            getEntrees : getEntrees,
            getEntreeSelectionnee : getEntreeSelectionnee,
            setEntreeSelectionnee : setEntreeSelectionnee
        };

        function getEntrees(){
            return entrees;
        }

        function getEntreeSelectionnee(){
            return entreeSelectionnee;
        }

        function setEntreeSelectionnee(entree){
            entreeSelectionnee = entree;
        }


    }]);