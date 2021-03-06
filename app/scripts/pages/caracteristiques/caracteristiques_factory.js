angular.module('cops').

    factory('CaracteristiquesService', [function(){

        var pointsDisponibles = 7;
        var minValue = 2;
        var maxValue = 5;
        var maxAchieved = false;
        var adrenaline = 0;
        var anciennete = 0;
        var caracteristiques = {
            carrure:{
                nom:'Carrure',
                description:"Cette caractéristique représente la force physique, l’endurance et, dans un sens plus général, la condition physique du personnage. Notez cependant qu’un personnage qui possède une Carrure de 5 n’est pas obligatoirement grand ; il peut tout simplement être petit mais trapu.",
                points:2,
                placeFiche:1
            },
            charme:{
                nom:'Charme',
                description:"Cette caractéristique représente le charisme du personnage, son empathie et son attitude vis-à-vis des autres. Une haute valeur de Charme peut signifier que le personnage est beau mais ce n’est pas toujours le cas, loin de là.",
                points:2,
                placeFiche:3
            },
            coordination:{
                nom:'Coordination',
                description:"Cette caractéristique représente la dextérité manuelle et la synchronisation entre les gestes et les sens.",
                points:2,
                placeFiche:5
            },
            education:{
                nom:'Éducation',
                description:"Cette caractéristique représente le niveau d’étude qu’a atteint le personnage ainsi que sa culture générale. Il est possible qu’un personnage ayant une haute Éducation ait étudié tout seul dans son coin et n’ait donc aucun réel diplôme, mais c’est plutôt rare.",
                points:2,
                placeFiche:7
            },
            perception:{
                nom:'Perception',
                description:"Cette caractéristique représente l’usage des cinq sens du personnage. Elle est, par exemple, utilisée lorsque le personnage souhaite entendre ou voir quelque chose.",
                points:2,
                placeFiche:2
            },
            reflexes:{
                nom:'Réflexes',
                description:"Cette caractéristique représente la vitesse de réaction et la rapidité du personnage.",
                points:2,
                placeFiche:4
            },
            sangFroid:{
                nom:'Sang-Froid',
                description:"Cette caractéristique représente le courage, la témérité et la bravoure du personnage. Elle représente aussi la capacité à rester froid et imperturbable dans des situations délicates (interrogatoire, scène de crime...).",
                points:2,
                placeFiche:6
            }
        };

        return{
            getCaracteristiques: getCaracteristiques,
            getPointsDisponibles: getPointsDisponibles,
            setPointsDisponibles: setPointsDisponibles,
            getMinimumValue : getMinimumValue,
            getMaximumValue : getMaximumValue,
            getMaximumAchieved : getMaximumAchieved,
            setMaximumAchieved : setMaximumAchieved,
            getPointsDeVie : getPointsDeVie,
            getPointsAdrenaline : getPointsAdrenaline,
            setPointsAdrenaline : setPointsAdrenaline,
            getPointsAnciennete : getPointsAnciennete,
            setPointsAnciennete : setPointsAnciennete
        };

        function getCaracteristiques(){
            return caracteristiques;
        }

        function getPointsDisponibles(){
            return pointsDisponibles;
        }

        function setPointsDisponibles(points){
            pointsDisponibles = points;
        }

        function getMinimumValue(){
            return minValue;
        }

        function getMaximumValue(){
            return maxValue;
        }

        function getMaximumAchieved(){
            return maxAchieved;
        }

        function setMaximumAchieved(max){
            maxAchieved = max;
        }

        function getPointsDeVie(){
            return 20 + getCaracteristiques()['carrure'].points * 3;
        }

        function getPointsAdrenaline(){
            return adrenaline;
        }

        function setPointsAdrenaline(points){
            adrenaline = points;
        }

        function getPointsAnciennete(){
            return anciennete;
        }

        function setPointsAnciennete(points){
            anciennete = points;
        }

    }]);