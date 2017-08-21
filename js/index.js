var document = window.document,
    $_window = $( window ),

    _results = [
        'ALBERVILLE'
        'AGDE'
        'AIGUILLES'
        'AIGUINES'
        'AIX-EN-PROVENCE'
        'AIX-LES-BAINS'
        'AJACCIO'
        'ALBA-LA-ROMAINE'
        'ALBERTVILLE'
        'ALENCON'
        'ALERIA'
        'ALES'
        'ALISE-SAINTE-REINE'
        'ALLEVARD-LES-BAINS'
        'ALPE D HUEZ'
        'ALTKIRCH'
        'AMBIERLE'
        'AMBOISE'
        'AMBRIERES-LES-VALLEES'
        'AMIENS'
        'AMPLEPUIS'
        'ANDILLAC'
        'ANGERS'
        'ANGOULEME'
        'ANNECY'
        'ANNONAY'
        'ANTIBES'
        'ANZIN'
        'AOSTE'
        'APT'
        'ARBOIS'
        'ARGENTEUIL'
        'ARGENTON-SUR-CREUSE'
        'ARLANC'
        'ARLES'
        'ARRAS'
        'ARROMANCHES'
        'RTENAY'
        'ARUDY'
        'AUBUSSON'
        'AUCH'
        'AUNEUIL'
        'AURIGNAC'
        'AURILLAC'
        'AUTUN'
        'AUVILLAR'
        'AUXERRE'
        'AUXONNE'
        'AVALLON'
        'AVESNES-SUR-HELPE'
        'AVIGNON'
        'AVRANCHES'
        'AZAY-LE-FERRON'
        'BAGNERES-DE-BIGORRE'
        'BAGNERES-DE-LUCHON'
        'BAGNOLS-SUR-CEZE'
        'BAILLEUL'
        'BARBIZON'
        'BARCELONNETTE'
        'BARENTIN'
        'BARENTON'
        'BAR-LE-DUC'
        'BARR'
        'BAR-SUR-AUBE'
        'BASTIA'
        'BATZ-SUR-MER'
        'BAUGE'
        'BAVAY'
        'BAYEUX'
        'BAYONNE'
        'BAZEILLES'
        'BEAUCAIRE'
        'BEAUCOURT'
        'BEAUFORT-EN-VALLEE'
        'BEAUGENCY'
        'BEAUJEU'
        'BEAUMONT-EN-AUGE'
        'BEAUNE'
        'BEAUVAIS'
        'BELFORT'
        'BERCK-SUR-MER'
        'BERGERAC'
        'BERGUES'
        'BERNAY'
        'BESANCON'
        'BETHUNE'
        'BETSCHDORF'
        'BEZIERS'
        'BIESHEIM'
        'BIEVRES'
        'BIOT'
        'BISCARROSSE'
        'BLAIN'
        'BLANZY'
        'BLASIMON'
        'BLAYE'
        'BLERANCOURT'
        'BLOIS'
        'BONNEVAL'
        'BORDEAUX'
        'BORMES-LES-MIMOSAS'
        'BOUCHAIN'
        'BOUGON'
        'BOULOGNE-BILLANCOURT'
        'BOULOGNE-SUR-MER'
        'BOURBON-LANCY'
        'BOURBONNE-LES-BAINS'
        'BOURDEILLES'
        'BOURG-EN-BRESSE'
        'BOURGES'
        'BOURGNEUF-EN-RETZ'
        'BOURGOIN-JALLIEU'
        'BOURG-SAINT-MAURICE'
        'BOURG-SUR-GIRONDE'
        'BOUSSY-SAINT-ANTOINE'
        'BOUXWILLER'
        'BOUZIGUES'
        'BRAM'
        'BRANTOME'
        'BRECH'
        'BRESSUIRE'
        'BREST'
        'BRICQUEBEC'
        'BRIENNE-LE-CHATEAU'
        'BRIGNOLES'
        'BRIORD'
        'BRIVE-LA-GAILLARDE'
        'BRUNOY'
        'BRY-SUR-MARNE'
        'BUFFON'
        'CABRERETS'
        'CAEN'
        'CAGNES-SUR-MER'
        'CAHORS'
        'CALAIS'
        'CAMBO-LES-BAINS
        'CAMBRAI'
        'CANNES'
        'CANTELEU'
        'CARCASSONNE'
        'CARNAC'
        'CARPENTRAS'
        'CASSEL'
        'CASSIS'
        'CASTELNAUDARY'
        'CASTRES'
        'CAUDEBEC-EN-CAUX'
        'CAVAILLON'
        'CAYENNE'
        'CAYENNE - GUYANE'
        'CERET'
        'CERILLY'
        'CERISY-LA-FORET'
        'CERNAY'
        'CHALONS-EN-CHAMPAGNE'
        'CHALON-SUR-SAONE'
        'CHAMBERY'
        'CHAMONIX'
        'CHAMPAGNOLE'
        'CHAMPIGNY-SUR-MARNE'
        'CHAMPLITTE'
        'CHARAVINES'
        'CHARLEVILLE-MEZIERES'
        'CHARLIEU'
        'CHAROLLES'
        'CHARTRES'
        'CHARTRES-MAINVILLIERS'
        'CHATEAUBRIANT'
        'CHATEAU-CHINON'
        'CHATEAU-DU-LOIR'
        'CHATEAUDUN'
        'CHATEAU-GONTIER'
        'CHATEAUMEILLANT'
        'CHATEAUNEUF-SUR-LOIRE'
        'CHATEAUPONSAC'
        'CHATEAUROUX'
        'CHATEAU-THIERRY'
        'CHATELLERAULT'
        'CHATILLON-COLIGNY'
        'CHATILLON-SUR-SEINE'
        'CHAUMONT'
        'CHAUMONT-EN-VEXIN'
        'CHAUNY'
        'CHAUVIGNY
        'CHAZELLES-SUR-LYON'
        'CHELLES'
        'CHERBOURG-EN-COTENTIN'
        'CHILHAC'
        'CHINON'
        'CHOLET'
        'CIVRAY'
        'CLAMART'
        'CLAMECY'
        'CLERMONT-FERRAND'
        'CLUNY'
        'COGNAC'
        'COLLIOURE'
        'COLMAR'
        'COLOMBES'
        'COMMANA'
        'COMMERCY'
        'COMPIEGNE'
        'CONCARNEAU'
        'CONCHES-EN-OUCHE'
        'CONDOM'
        'CONFLANS-SAINTE-HONORINE'
        'CORDES-SUR-CIEL'
        'CORTE'
        'COSNE-SUR-LOIRE'
        'COSSE-LE-VIVIEN'
        'COULOMMIERS'
        'COUPVRAY'
        'COURBEVOIE'
        'COUTANCES'
        'CRECY-LA-CHAPELLE'
        'CREIL'
        'CREPY-EN-VALOIS'
        'CREYSSE'
        'CUCURON'
        'DAX '
        'DECAZEVILLE'
        'DENAIN'
        'DENEUVRE'
        'DESCARTES'
        'DESVRES'
        'DIE'
        'DIEPPE'
        'DIGNE-LES-BAINS'
        'DIJON'
        'DINAN'
        'DOLE'
        'DOMME'
        'DOUAI'
        'DOUARNENEZ'
        'DOULLENS'
        'DOURDAN'
        'DRAGUIGNAN'
        'DREUX'
        'DUNKERQUE'
        'EAUZE'
        'ECHIROLLES'
        'ECOUEN'
        'ELBEUF'
        'EPERNAY'
        'EPINAL'
        'EQUEURDREVILLLE-HAINNEVILLE'
        'ERNEE'
        'ESCAUDAIN'
        'ESNANDES'
        'ESPALION'
        'ESTIVAREILLES'
        'ETAMPES'
        'ETAPLES-SUR-MER'
        'ETUEFFONT'
        'EU'
        'EVREUX'
        'FAYMOREAU'
        'FECAMP'
        'FERRIERES'
        'FEURS'
        'FIGEAC'
        'FIXIN'
        'FLERS'
        'FOIX'
        'FONTAINEBLEAU'
        'FONTAINE-DE-VAUCLUSE'
        'FONTENAY-LE-COMTE'
        'FONTVIEILLE'
        'FORCALQUIER'
        'FORT-DE-FRANCE'
        'FORT-DE-FRANCE - MARTINIQUE-'
        'FORT-DE-FRANCE TERRE-SAINVILLE'
        'FOUGEROLLES'
        'FOURAS'
        'FOURMIES'
        'FREJUS'
        'FRESNES'
        'FRONTIGNAN-LA-PEYRADE'
        'GAILLAC'
        'GANNAT'
        'GAP'
        'GEVREY-CHAMBERTIN - Reulle Vergy'
        'GIEN'
        'GIVET'
        'GRAND-BOURG de MARIE-GALANTE'
        'GRANVILLE'
        'GRASSE'
        'GRAVELINES'
        'GRAVELOTTE'
        'GRAY'
        'GRENOBLE'
        'GREZOLLES'
        'GRIGNAN'
        'GRISOLLES'
        'GUEBWILLER'
        'GUERANDE'
        'GUERET'
        'GUETHARY'
        'GUIRY-EN-VEXIN'
        'GUISE'
        'HAGUENAU'
        'HARFLEUR'
        'HARNES'
        'HASTINGUES'
        'HAZEBROUCK'
        'HEREPIAN'
        'HIERES SUR AMBY'
        'HIRSON'
        'HONFLEUR'
        'HONFLEUR'
        'HUNINGE'
        'HYERES'
        'ILE D AIX'
        'ILE DE GROIX'
        'ILLIERS-COMBRAY'
        'INZINZAC-LOCHRIST'
        'ISSOUDUN'
        'ISSY-LES-MOULINEAUX'
        'ISTRES'
        'IZERNORE'
        'IZEURE'
        'JARVILLE-LA-MALGRANGE'
        'JOUY-EN-JOSAS'
        'JUBLAINS'
        'KAYSERSBERG'
        'KIENTZHEIM'
        'LA BARRE-DE-MONTS'
        'LA CHARITE-SUR-LOIRE'
        'LA CHATRE'
        'LA CIOTAT'
        'LA COUTURE-BOUSSEY'
        'LA FERE'
        'LA FERTE-MACE'
        'LA GUERINIERE'
        'LA MACHINE'
        'LA MURE'
        'LA REOLE'
        'LA ROCHELLE'
        'LA ROCHE-SUR-YON'
        'LA TRONCHE'
        'LA VARENNE-SAINT-HILAIRE'
        'LABASTIDE MURAT'
        'LA-BASTIDE-ROUAIROUX'
        'LA-CHAIZE-LE-VICOMTE'
        'LA-COTE-SAINT-ANDRE'
        'LAGNY-SUR-MARNE'
        'L AIGLE'
        'LAMBALLE'
        'LAMBESC'
        'LANEUVEVILLE-DEVANT-NANCY'
        'LANGE'
        'LANGRES'
        'LAON'
        'LASTOURS'
        'LATTES Cédex'
        'LAVAL'
        'LAVAUDIEU'
        'LAVAUR'
        'LAVELANET'
        'LE BLANC'
        'LE BOURGET'
        'LE CANNET'
        'LE CAP D AGDE'
        'LE CATEAU-CAMBRESIS'
        'LE CREUSOT'
        'LE FAOUET'
        'LE GRAND PRESSIGNY'
        'LE HAUT-DU-THEM'
        'LE HAVRE'
        'LE MANS'
        'LE MAS D AZIL'
        'LE MEE-SUR-SEINE'
        'LE MOLAY-LITTRY'
        'LE MOULE'
        'LE PALLET'
        'LE PETIT-COURONNE'
        'LE PONT DE MONTVERT'
        'LE POUVEREL LA GARDE'
        'LE PUY-EN-VELAY'
        'LE TOUQUET-PARIS-PLAGE'
        'LE VIGAN'
        'LECTOURE'
        'LENS'
        'LES ANDELYS'
        'LES BAUX DE PROVENCE'
        'LES EYZIES-DE-TAYAC'
        'LES LUCS-SUR-BOULOGNE'    
        'LES MATELLES'
        'LES SABLES D OLONNE'
        'LES TROIS ILETS'
        'LES VANS'
        'LES-BAUX-DE-PROVENCE'
        'LEVIE'
        'LEWARDE'
        'LEZOUX'
        'LIBOURNE'
        'LILLE'
        'LILLEBONNE'
        'LIMOGES'
        'LIMOUX'
        'LISIEUX'
        'L ISLE JOURDAIN'
        'L ISLE-ADAM'
        'LISLE-SUR-TARN'
        'LIVRY-GARGAN'
        'LOCHES'
        'LOCHIEU'
        'LODEVE'
        'LONGWY'
        'LONS-LE-SAUNIER'
        'LOUDUN'
        'LOUHANS'
        'LOUMARIN - CADENET'
        'LOURDES'
        'LOUVECIENNES'
        'LOUVRES'
        'LOVAGNY'
        'LUCCIANA'
        'LUNEVILLE'
        'LUSSAC-LES-CHATEAUX'
        'LUXEUIL-LES-BAINS'
        'LUXEY'
        'LUZECH'
        'LUZ-SAINT-SAUVEUR'
        'LYON'
        'MACON'
        'MAGNY-LES-HAMEAUX'
        'MAILLANE'
        'MAISONS-ALFORT'
        'MALICORNE-SUR-SARTHE'
        'MANE'
        'MANTES-LA-JOLIE'
        'MARANS'
        'MARCHIENNES'
        'MARCIAC'
        'MARCIGNY'
        'MARMANDE'
        'MARSAC-EN-LIVRADOIS'
        'MARSAL'
        'MARSEILLE'
        'MARTAINVILLE-EPREVILLE'
        'MARTEL'
        'MARTIGUES'
        'MARTRES-TOLOSANE'
        'MAULE'
        'MAUVEZIN'
        'MAYENNE'
        'MAZAN'
        'MEAUX'
        'MEDAN'
        'MEHUN-SUR-YEVRE'
        'MEISENTHAL'
        'MELUN'
        'MENAT'
        'MENDE'
        'MENTON'
        'MER'
        'MERU'
        'METZ'
        'MEUDON'
        'MEUNG-SUR-LOIRE'
        'MEZIN'
        'MILLAU'
        'MINERVE'
        'MIRANDE'
        'MOIRANS-EN-MONTAGNE'
        'MOISSAC'
        'MOLSHEIM'
        'MONTARGIS'
        'MONTAUBAN'
        'MONTBARD'
        'MONTBELIARD'
        'MONTBRISON'
        'MONT-DE-MARSAN'
        'MONTELIMAR'
        'MONTFORT-EN-CHALOSSE'
        'MONTFORT-LAMAURY'
        'MONTFORT-SUR-MEU'
        'MONTGAILHARD'
        'MONTIGNAC'
        'MONTIGNY LE BRETONNEUX'
        'MONTLUCON'
        'MONTMEDY'
        'MONTMORENCY'
        'MONTMORILLON'
        'MONTPELLIER'
        'MONTREUIL-SOUS-BOIS'
        'MONTREUIL-SOUS-PEROUSE'
        'MONTREUIL-SUR-MER'
        'MONTSEGUR'
        'MONTVILLE'
        'MORET-SUR-LOING'
        'MOREZ HAUTS DE BIENNE'
        'MORLAIX'
        'MOROSAGLIA'
        'MORTAGNE-AU-PERCHE'
        'MOUILLERON-EN-PAREDS'
        'MOULINS'
        'MOURS SAINT-EUSEBE'
        'MOUSTIERS-STE-MARIE'
        'MOÛTIERS'
        'MOUZON'
        'MOZAC'
        'MULHOUSE'
        'MUROL'
        'MURVIEL-LES-MONTPELLIER'
        'MUSSIDAN'
        'MUSSY-SUR-SEINE'
        'NANCRAY'
        'NANCY'
        'NANTES'
        'NANTUA'
        'NAVEIL'
        'NEMOURS'
        'NERAC'
        'NERIS-LES-BAINS'
        'NEUF-BRISACH'
        'NEUFCHATEL-EN-BRAY'
        'NEUFCHEF'
        'NEUILLY-SUR-SEINE'
        'NEVERS'
        'NICE'
        'NIEDERBRONN-LES-BAINS'
        'NIMES'
        'NIORT'
        'NOGENT'
        'NOGENT-LE-ROTROU'
        'NOGENT-SUR-MARNE'
        'NOIRMOUTIER EN L ILE'
        'NOIRMOUTIER-EN-L ILE'
        'NONTRON'
        'NOTRE-DAME-DE-BLIQUETUIT'
        'NOTRE-DAME-DE-BONDEVILLE'
        'NOYERS-SUR-SEREIN'
        'NOYON'
        'NUITS-SAINT-GEORGES'
        'OLTINGUE'
        'ORANGE'
        'ORBEC'
        'ORGNAC-L AVEN'
        'ORIGNY-EN-THIERACHE'
        'ORLEANS'
        'ORNANS'
        'OUESSANT'
        'OYONNAX'
        'PARAY-LE-MONIAL'
        'PARCAY-LES-PINS'
        'PARIS'
        'PARTHENAY'
        'PAU'
        'PERIGUEUX'
        'PERONNE Cédex'
        'PEROUGES'
        'PERPIGNAN'
        'PETITE-ROSSELLE'
        'PEZENAS'
        'PFAFFENHOFFEN'
        'PHALSBOURG'
        'PIERRE-DE-BRESSE'
        'PITON-SAINT-LEU'
        'PLOMBIERES-LES-BAINS'
        'POINTE-A-PITRE'
        'POINTE-A-PITRE -GUADELOUPE'
        'POISSY'
        'POITIERS'
        'POLIGNY'
        'POMMIERS-EN-FOREZ'
        'PONT-A-MOUSSON'
        'PONTARLIER'
        'PONT-AUDEMER'
        'PONT-AVEN'
        'PONT-DE-VAUX'
        'PONTECOULANT'
        'PONTOISE'
        'PONT-SAINT-ESPRIT'
        'PORT-LOUIS'
        'PORT-VENDRES'
        'POUILLY-SUR-LOIRE'
        'POURCY'
        'PRAHECQ'
        'PRIVAS'
        'PROVINS'
        'PUGET-ROSTANG'
        'PUYLOUBIER'
        'QUIMPER'
        'QUINSON'
        'RABASTENS'
        'RAMBOUILLET'
        'REGINA'
        'REICHSHOFFEN'
        'REIMS'
        'REMIREMONT'
        'RENAZE'
        'RENNES'
        'RETHEL'
        'RETOURNAC'
        'RICHELIEU
        'RIEZ-LA-ROMAINE'
        'RIOM'
        'RIORGES'
        'RIQUEWIHR'
        'RIVIERE-PILOTE'
        'RIVOAL'
        'ROANNE'
        'ROCAMADOUR'
        'ROCHECHOUART'
        'ROCHEFORT'
        'ROCHETAILLEE-SUR-SAONE'
        'RODEZ'
        'ROMANECHE-THORINS'
        'ROMANS'
        'ROMENAY'
        'ROQUEFORT-SUR-SOULZON'
        'ROUBAIX'
        'ROUEN'
        'RUEIL-MALMAISON'
        'RUMILLY'
        'RUYNES-EN-MARGERIDE'
        'SABRES'
        'SACHE'
        'SAINT ARCONS D ALLIER'
        'SAINT LAMBERT-DU-LATTAY'
        'SAINT-AMAND-EN-PUISAYE'
        'SAINT-AMAND-LES-EAUX'
        'SAINT-AMAND-MONTROND'
        'SAINT-ANTONIN-NOBLE-VAL'
        'SAINT-AVIT-SENIEUR'
        'SAINT-BERTRAND-DE-COMMINGES
        'SAINT-BRIEUC'
        'SAINT-CALAIS'
        'SAINT-CANNAT'
        'SAINT-CHAMAS'
        'SAINT-CLAUDE'
        'SAINT-CLOUD'
        'SAINT-CYR LA ROSIERE'
        'SAINT-CYR-SUR-MENTHON'
        'SAINT-CYR-SUR-MORIN'
        'SAINT-DENIS'
        'SAINT-DENIS DE LA REUNION'
        'SAINT-DIE-DES-VOSGES'
        'SAINT-DIZIER'
        'SAINTE-LEOCADIE'
        'SAINTE-MAURE-DE-TOURAINE'
        'SAINTE-MENEHOULD'
        'SAINTE-MERE-EGLISE'
        'SAINT-EMILION'
        'SAINTES'
        'SAINTES-MARIES-DE-LA-MER'
        'SAINT-ETIENNE'
        'SAINT-FARGEAU'
        'SAINT-FLOUR'
        'SAINT-GAUDENS
        'SAINT-GERMAIN-EN-LAYE'
        'SAINT-GERMAIN-LAVAL'
        'SAINT-GILLES-DU-GARD'
        'SAINT-GILLES-LES-HAUTS'
        'SAINT-HILAIRE-DE-RIEZ'
        'SAINT-JEAN DU GARD'
        'SAINT-JEAN-D ANGELY'
        'SAINT-JOACHIM'
        'SAINT-JUST-SAINT-RAMBERT'
        'SAINT-LIZIER'
        'SAINT-LO'
        'SAINT-LOUIS'
        'SAINT-LYPHARD'
        'SAINT-MALO DE GUERSAC'
        'SAINT-'
        'SAINT-MARCEL - MALESTROIT'
        'SAINT-MARTIN-DE-RE'
        'SAINT-MICHEL-DE-MONTJOIE'
        'SAINT-MICHEL-EN-THIERACHE'
        'SAINT-MIHIEL'
        'SAINT-NAZAIRE'
        'SAINT-NICOLAS-D ALIERMONT'
        'SAINT-OMER'
        'SAINT-OUEN'
        'SAINT-PAUL-DE-VARAX'
        'SAINT-PIERRE'
        'SAINT-PIERRE ET MIQUELON'
        'SAINT-PIERRE-DE-CHARTREUSE'
        'SAINT-PIERRE-SUR-DIVES'
        'SAINT-PONS-DE-THOMIERES'
        'SAINT-QUENTIN'
        'SAINT-RAPHAËL'
        'SAINT-REMY-DE-PROVENCE'
        'SAINT-REMY-LES-CHEVREUSE'
        'SAINT-ROMAIN-EN-GAL'
        'SAINT-SAUVEUR-EN-PUISAYE'
        'SAINT-SAUVEUR-LE-VICOMTE'
        'SAINT-SEVER'
        'SAINT-TROPEZ'
        'SAINT-VAAST-LA-HOUGUE'
        'SAINVILLE'
        'SALINS-LES-BAINS'
        'SALLELES D AUDE'
        'SALLES-LA-SOURCE'
        'SALMIECH'
        'SALON-DE-PROVENCE'
        'SAMADET'
        'SAMER'
        'SAMPIGNY'
        'SANGUINET'
        'SARLAT-LA-CANEDA'
        'SARRAN'
        'SARREBOURG'
        'SARREGUEMINES'
        'SARS-POTERIES'
        'SARTENE'
        'SARZEAU'
        'SAULIAC-SUR-CELE'
        'SAULIEU'
        'SAULT'
        'SAUMUR'
        'SAUVETERRE-LA-LEMANCE'
        'SAVERNE'
        'SAVIGNE-SUR-LATHAN'
        'SAVIGNY-EN-VERON'
        'SAVIGNY-LE-TEMPLE'
        'SCEAUX'
        'SEES'
        'SEMUR-EN-AUXOIS'
        'SENLIS'
        'SENS'
        'SERRIERES'
        'SETE'
        'SEUILLY'
        'SEVRES'
        'SEYSSEL'
        'SIGEAN'
        'SISTERON'
        'SOISSONS'
        'SOLLIES-VILLE'
        'SOLUTRE-POUILLY'
        'SOUILLAC'
        'SOULLANS'
        'SOUVIGNY'
        'SOYONS'
        'STENAY'
        'ST-PIERRE D OLERON'
        'STRASBOURG'
        'SURESNES'
        'TARBES'
        'TAUTAVEL'
        'TENDE'
        'TERGNIER'
        'THANN'
        'THESEE'
        'THIERS'
        'THIZY LES BOURGS'
        'THONES'
        'THONON-LES-BAINS'
        'THOUARS'
        'TILLY-SUR-SEULLES'
        'TONNERRE'
        'TORIGNI-SUR-VIRE'
        'TOUL'
        'TOULON'
        'TOULOUSE'
        'TOURCOING'
        'TOURNON-SUR-RHÔNE'
        'TOURNUS'
        'TOURS'
        'TREFFORT-CUISIAT'
        'TREGARVAN'
        'TRELAZE'
        'TROUVILLE-SUR-MER'
        'TROYES'
        'TULLE'
        'UNGERSHEIM'
        'USSEL'
        'USSON-EN-FOREZ'
        'VACHERES'
        'VAISON-LA-ROMAINE'
        'VALENCE'
        'VALENCIENNES'
        'VALLAURIS'
        'VALOGNES'
        'VALREAS'
        'VANNES'
        'VARENNES-EN-ARGONNE'
        'VARZY'
        'VASSIEUX-EN-VERCORS'
        'VAUCOULEURS'
        'VAUJANY'
        'VAYRAC'
        'VENDEUIL-CAPLY'
        'VENDOME'
        'VERDUN'
        'VERDUN-SUR-LE-DOUBS'
        'VERNON'
        'VERSAILLES'
        'VERVINS'
        'VESOUL'
        'VEZELAY'
        'VICHY'
        'VIC-SUR-SEILLE'
        'VIENNE'
        'VIERZON'
        'VIEUX'
        'VIEUX FERRETTE'
        'VILLANDRAUT'
        'VILLARS DE LA DOMBES'
        'VILLEDIEU-LES-POELES-ROUFFIGNY'
        'VILLEFRANCHE-DE-LONCHAT'
        'VILLEFRANCHE-DE-ROUERGUE'
        'VILLEFRANCHE-SUR-MER'
        'VILLEFRANCHE-SUR-SAONE'
        'VILLENEUVE-D ASCQ'
        'VILLENEUVE-LES-AVIGNON'
        'VILLENEUVE-SUR-LOT'
        'VILLENEUVE-SUR-YONNE'
        'VILLEQUIER'
        'VILLERS COTTERETS'
        'VILLERS-SUR-MER'
        'VILLIERS-SAINT-BENOIT'
        'VILLIERS-SUR-MARNE'
        'VITRE'
        'VITRY SUR SEINE'
        'VIZILLE'
        'VOIRON'
        'VOITEUR'
        'VOLVIC'
        'VULAINES-SUR-SEINE'
        'WALDERSBACH'
        'WINGEN-SUR-MODER'
        'WISSEMBOURG'
        'WOERTH'
        'YVETOT'
        'YZEURES-SUR-CREUSE'

    ],

      _rEscapeChars = /\/|\\|\.|\||\*|\&|\+|\(|\)|\[|\]|\?|\$|\^/g,
      _rMatch = /[A-Z]?[a-z]+|[0-9]+/g,

      _keys = [
      13,
      9
    ],

      _length = _results.length,

      $_result = $( '.result' ),
      $_search = $( '.search-bar' ),
      $_searchContainer = $( '.search-container' ),

      _resultPlaceholder = $_result.val();

$_search.on( "keydown", function ( e ) {

  if ( _keys.indexOf( e.keyCode ) !== -1 ) {

    $_search.val( $_result.val() );

    return false;

  }

}).on( "keyup", function () {

  var value = $_search.val().replace( _rEscapeChars, "" ),
      regex = new RegExp( "^"+value, "i" ),
      matches = [];


  if ( value ) {

    for ( var i = _length; i--; ) {

      if ( regex.test( _results[ i ] ) ) {

        matches.push( _results[ i ] );

      } else {

        $_result.val( "" );

      }

    }

    if ( matches.length ) {

      for ( var i = matches.length; i--; ) {

        $_result.val( matches[ i ] );

      }

    }

  } else {

    $_result.val( _resultPlaceholder );

  }
})