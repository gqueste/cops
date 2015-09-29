angular.module('cops').

    factory('OrigineService', [function(){

        var origines = {
            enfant_ghetto : {
                nom : 'Enfant du ghetto',
                description : "Le personnage est n� � South Central, ou dans tout autre ghetto (Compton, Watts, Montebello, etc.). Il est plut�t noir ou chicano. Gr�ce � des parents opini�tres qui ont tout sacrifi� pour lui, il a eu l'opportunit� d'�chapper � l'engrenage des gangs. S'il conna�t parfaitement ce milieu, il n'y est pas pour autant � l'aise. C'est un pig et donc un tra�tre � la solde des blancs. Malgr� son emploi au LAPD, le personnage reste tr�s pauvre (il doit notamment subvenir aux besoins de sa nombreuse famille) et rencontrera � coup s�r le m�pris dans la rue et aupr�s de certains coll�gues ind�licats, voire de sa hi�rarchie.",
                consequences : "Le personnage dispose d�une relation de niveau 2 dans un gang, dans un organisme social ou dans un petit commerce de quartier. Il peut s�agir d�un ami (ou d�une amie) d�enfance, d�un mentor ou encore d�un guide qui a aid� le personnage � quitter le ghetto.",
                possessionsPossibles :
                    [
                        "D�un Ruger Falcon 041 (n�ayant jamais servi et dont le num�ro de s�rie a �t� effac�). Il peut l�avoir trouv� sur un cadavre, l�avoir r�cup�r� chez le grand fr�re d�un pote ou se l��tre fait refourguer � l��cole.",
                        "De 10 000$ en pi�ces usag�es. Il peut s�agir du cadeau d�un ami gangbanger en remerciement d�un service rendu, d�une mallette r�cup�r�e sur le lieu d�une fusillade� Quoi qu�il en soit, il est peu probable que l�origine de cet argent soit tr�s claire.",
                        "De trois grenades incendiaires (phosphore blanc). Peut-�tre que votre grand fr�re arrondissait ses fins de mois en mettant le feu � des entrep�ts.",
                        "D�un lance-roquettes antichar jetable (LAW). Ne me demandez pas comment vous l�avez trouv� Vous pr�f�rez ne pas savoir."
                    ]
            },
            fils_ouvrier : {
                nom : "Fils d'ouvrier",
                description : "Papa travaillait � la cha�ne et maman faisait des m�nages. Bref, ce personnage n'a pas eu une enfance idyllique et n�a pas �t� couvert de cadeaux. Pour peu que maman soit une junkie ou papa un alcoolique violent� Le personnage est tr�s pauvre, souffre d'un flagrant manque d'�ducation et de culture et son manque de bonnes mani�res risque de lui causer un peu de tort en soci�t�.",
                consequences : "Le personnage dispose d�une relation de niveau 2 dans un syndicat, dans un organisme social ou dans un petit commerce de quartier. Il peut s�agir d�un ami (ou d�une amie) d�enfance, du patron d�un caf� o� le personnage a pass� une partie de sa vie, d�un pote garagiste�",
                possessionsPossibles :
                    [
                        "D�un box qui n�appara�t pas sur les relev�s du cadastre. Le personnage ne paye pas de loyer et personne ne sait qu�il lui appartient. De plus, ce box se trouvant dans un quartier pauvre, il est peu probable que quiconque s�y int�resse tant qu�un nouveau plan d�urbanisation ne sera pas lanc�.",
                        "D�un petit coin de d�sert. Le personnage a h�rit� d�un morceau de d�sert (un vrai de vrai, avec cailloux, sable et serpents � sonnette) sur lequel stationne de mani�re permanente un vieux mobile home. Un vrai petit coin de paradis en quelque sorte.",
                        "D�une vieille voiture apparemment un peu pourrie (une oldsmobile 440 � Deluxe �). Toutefois, ce v�hicule a �t� soigneusement pr�par� par un fou de F1. Moralit�, votre vieux tas de ferraille est capable de d�poser les intercepteurs des brigades autorouti�res (cela ne veut bien �videmment pas dire que vous vous amusez le soir sur les autoroutes, n�est ce pas ?).",
                        "D�une yes card. Il s�agit d�une carte magn�tique qui ne vous permet pas d�obtenir de l�argent (pas de bol !) mais qui permet d�ouvrir la plupart des portes ferm�es par un code et une carte. Cette carte ouvre toutes les portes de ce type demandant 3 r�ussites ou moins sur un jet d��lectronique. Bien s�r, cet objet est parfaitement ill�gal."
                    ]
            },
            fils_papa : {
                nom : "Fils � papa",
                description : "Papa et Maman sont des mod�les de r�ussite tranquille � l'am�ricaine. Le personnage a re�u une �ducation normale et a grandi paisiblement, en n'ayant jamais manqu� de rien.",
                consequences : "Le personnage dispose d�une relation de niveau 2 dans un parti politique, dans une grosse entreprise ou dans l�administration. Il s�agit g�n�ralement d�un ami (ou d�une amie) qui a r�ussi (lui !).",
                possessionsPossibles :
                    [
                        "D�un appartement dans un quartier ais�. Le personnage en est propri�taire (ce qui devrait lui permettre de faire d�importantes �conomies chaque mois). Pour la taille de votre home sweet home, voyez avec votre meneur tout en gardant � l�esprit que plus le quartier sera hupp�, plus votre appartement sera petit.",
                        "D�un v�hicule tr�s haut de gamme (voiture � une BMW M8 � GranTurismo � par exemple, une moto ou m�me un camion (?!)). Vous pouvez toujours vous en servir � vos risques et p�rils pour aller � chauffer � les malades de vitesse des quartiers pauvres mais, g�n�ralement, ce v�hicule vous permet surtout d�aller draguer aux sorties des bo�tes.",
                        "D�un portefeuille d�actions d�une tr�s grosse entreprise florissante. Cela permet au personnage de disposer chaque mois de ressources suppl�mentaires �gales � 20% de son revenu normal. Bien �videmment, si une enqu�te devait prouver certaines malversations effectu�es par cette entreprise, les actions baisseraient singuli�rement. Reste � savoir comment agira le personnage si c�est lui qui doit enqu�ter�",
                        "D�un contrat de clonage. Ne r�vez pas, vous ne pourrez pas revenir � la vie. En revanche, vous pourrez vous faire greffer un membre si, d�aventure, vous veniez � avoir un petit accident."
                    ]
            },
            gosse_de_riches : {
                nom : "Gosse de riches",
                description : "Le personnage est issu de la bonne soci�t�. Il est n� avec une cuill�re en argent dans la bouche, n'a jamais manqu� de rien et a re�u une tr�s bonne �ducation. Malheureusement, ce statut un peu particulier risque de lui causer quelques probl�mes. Sa famille esp�rait autre chose pour lui qu'une simple position de flic et ses coll�gues sont prompts � jalouser sa fortune et � se moquer de ses bonnes mani�res un peu guind�es",
                consequences : "Le personnage dispose d�une relation de niveau 2 dans un parti politique, dans le milieu branch� (mode, showbiz�) ou dans le milieu de la finance. Il peut s�agir d�un ami (ou d�une amie) d�enfance ou d�une relation qu�il est de bon ton de garder.",
                possessionsPossibles :
                    [
                        "D�un v�hicule digne de figurer au top parade des v�hicules les plus recherch�s par les voleurs (Ferrari (la S850 � Ronaldo IV � est un must), Rolls Royce, Porsche, Lamborghini Cela ne sert pas � grand chose, mais c�est d�finitivement tr�s classe.",
                        "D�un gigantesque appartement situ� dans les plus beaux quartiers (ou d�une maison avec un jardin). Le personnage en est propri�taire.",
                        "De 10 000$ de revenus mensuels annexes. C�est un cadeau de papa et maman ou d�une riche tante (homme ou femme). Attention, si le personnage n�est pas tr�s gentil (participation � la vie sociale de la famille) cette source de revenus pourrait tr�s bien se tarir.",
                        "D�une poule de luxe. Le personnage a claqu� tout son argent pour r�ussir � sortir avec un top mod�le. Le bon c�t� de l�affaire c�est que c�est d�sormais votre petite copine qui vous entretient (vous pouvez compter sur un bonus de 5 000 � 7 000$ par mois) et que vous pouvez frimer devant les coll�gues lorsqu�elle vient vous chercher � la sortie du boulot. Le mauvais c�t�, c�est que si elle vous quitte, vous �tes bon pour l�h�tel miteux et les rires gras des coll�gues. En terme technique vous disposez d�une relation de rang 4 avec votre douce. Il peut s�agir d�un mannequin, d�une star de la t�l�, du cin�ma (classique ou porno)�"
                    ]
            },
            exotique : {
                nom : "Exotique",
                description : "Le personnage vient d'un autre pays ou est issu d'une autre culture. Il a peut-�tre �t� �lev� dans un temple Shaolin, rue Popincourt � Paris, ou � Soweto. Tout est question de coh�rence et d'accord avec le meneur de jeu, tant pour sa provenance que pour les b�n�fices qui en d�coulent.",
                consequences : "Le personnage dispose d�une relation au niveau 2 (avec ma�tre Li Ping Pong Si Cool 65e Dan de Jeet Fu Te Do ou avec le roi du Yemen�).",
                possessionsPossibles :
                    [
                        " Il poss�de aussi un objet sp�cifique � son origine : le vieux kimono de Jacky Chan, un katana magique +2/+2 (pour pouvoir frapper les portoricains de grande taille qui ne peuvent �tre touch�s que par des armes magiques), un mortier de 81 ou un jet priv�"
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