const recipes = [
    {
        "id": 1,
        "image": "Recette01.jpg",
        "name": "Limonade de Coco",
        "servings": 1,
        "ingredients": [
            {
                "name": "Lait de coco",
                "quantity": 400,
                "unit": "ml",
            },
            {
                "name": "Jus de citron",
                "quantity": 2,
            },
            {
                "name": "Crème de coco",
                "quantity": 2,
                "unit": "cuillères à soupe",
            },
            {
                "name": "Sucre",
                "quantity": 30,
                "unit": "gramme",
            },
            {
                "name": "Glaçons",
            },
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliances": ["Blender"],
        "utensils": ["cuillère à Soupe", "verres", "presse citron"],
    },
    {
        "id": 2,
        "image": "Recette02.jpg",
        "name": "Poisson Cru à la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "name": "Thon Rouge (ou blanc)",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Concombre",
                "quantity": 1,
            },
            {
                "name": "Tomate",
                "quantity": 2,
            },
            {
                "name": "Carotte",
                "quantity": 1,
            },
            {
                "name": "Citron Vert",
                "quantity": 5,
            },
            {
                "name": "Lait de Coco",
                "quantity": 100,
                "unit": "ml",
            },
        ],
        "time": 60,
        "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouvez ajouter 1 à 2 cuillères à soupe de Crème de coco",
        "appliances": ["Saladier"],
        "utensils": ["presse citron"],
    }, {
        "id": 3,
        "image": "Recette03.jpg",
        "name": "Poulet coco réunionnais",
        "servings": 4,
        "ingredients": [
            {
                "name": "Poulet",
                "quantity": 1,
            },
            {
                "name": "Lait de coco",
                "quantity": 400,
                "unit": "ml",
            },
            {
                "name": "Coulis de tomate",
                "quantity": 25,
                "unit": "cl",
            },
            {
                "name": "Oignon",
                "quantity": 1,
            },
            {
                "name": "Poivron rouge",
                "quantity": 1,
            },
            {
                "name": "Huile d'olive",
                "quantity": 1,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 80,
        "description": "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliances": ["Cocotte"],
        "utensils": ["couteau"],
    }, {
        "id": 4,
        "image": "Recette04.jpg",
        "name": "Salade de riz",
        "servings": 4,
        "ingredients": [
            {
                "name": "Riz blanc",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Thon en miette",
                "quantity": 200,
                "unit": "gramme",
            }, {
                "name": "Tomate",
                "quantity": 2,
            },
            {
                "name": "Oeuf dur",
                "quantity": 2,
            },
            {
                "name": "Maïs",
                "quantity": 300,
                "unit": "gramme",
            },
            {
                "name": "Vinaigrette",
                "quantity": 5,
                "unit": "cl",
            },
        ],
        "time": 50,
        "description": "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
        "appliances": ["Cuiseur de riz"],
        "utensils": ["saladier", "passoire"],
    },
    {
        "id": 5,
        "image": "Recette05.jpg",
        "name": "Tarte au thon",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pâte feuilletée",
                "quantity": 1,
            },
            {
                "name": "Thon en miette",
                "quantity": 130,
                "unit": "gramme",
            },
            {
                "name": "Tomate",
                "quantity": 2,
            },
            {
                "name": "Crème fraîche",
                "quantity": 2,
                "unit": "cuillères à soupe",
            },
            {
                "name": "gruyère râpé",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Moutarde de Dijon",
                "quantity": 1,
                "unite": "cuillères à soupe",
            },
        ],
        "time": 45,
        "description": "Étaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
        "appliances": ["Four"],
        "utensils": ["moule à tarte", "râpe à fromage", "couteau"],
    },
    {
        "id": 6,
        "image": "Recette06.jpg",
        "name": "Tarte aux pommes",
        "servings": 6,
        "ingredients": [
            {
                "name": "Pâte brisée",
                "quantity": 1,
            },
            {
                "name": "Pomme",
                "quantity": 3,
            },
            {
                "name": "Oeuf",
                "quantity": "2",
            },
            {
                "name": "Crème fraîche",
                "quantity": 25,
                "unit": "cl",
            },
            {
                "name": "Sucre en Poudre",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachet",

            },
        ],
        "time": 50,
        "description": "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finalement verser la préparation à base d'oeufs et de crème fraîche. Laisser cuire au four pendant 30 minutes",
        "appliances": ["Four"],
        "utensils": ["moule à tarte", "saladier", "fourchette"],
    }, {
        "id": 7,
        "image": "Recette07.jpg",
        "name": "Tartelettes au chocolat et aux fraises",
        "servings": 6,
        "ingredients": [
            {
                "name": "Pâte sablée",
                "quantity": 1,
            },
            {
                "name": "Chocolat au lait",
                "quantity": 300,
                "unit": "gramme",
            },
            {
                "name": "Crème liquide",
                "quantity": 80,
                "unit": "cl",
            },
            {
                "name": "Beurre",
                "quantity": "30",
                "unit": "gramme",
            },
            {
                "name": "Fraise",
                "quantity": 6,
            },
        ],
        "time": 50,
        "description": "Étaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
        "appliances": ["Four"],
        "utensils": ["moule à tartelettes (6)", "casserole"],
    }, {
        "id": 8,
        "image": "Recette08.jpg",
        "name": "Brownie",
        "servings": 10,
        "ingredients": [
            {
                "name": "Noix",
                "quantity": "180",
                "unit": "gramme",
            },
            {
                "name": "Chocolat noir",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 120,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 2,
            },
            {
                "name": "Sucre en Poudre",
                "quantity": "110",
                "unit": "gramme",
            },
            {
                "name": "farine",
                "quantity": 90,
                "unit": "gramme",
            },

        ],
        "time": 60,
        "description": "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
        "appliances": ["Four"],
        "utensils": ["moule à gateaux", "casserole"],
    },
    {
        "id": 9,
        "image": "Recette09.jpg",
        "name": "Salade Méditerannéene fraîche au chèvre",
        "servings": 4,
        "ingredients": [
            {
                "name": "Concombre",
                "quantity": 1,
            },
            {
                "name": "Olive",
            },
            {
                "name": "Fromage de chèvre",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Vinaigre Balsamic",
            },
            {
                "name": "Huile d'olive",
            },
            {
                "name": "Basilic",
            },
        ],
        "time": 15,
        "description": "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
        "appliances": ["Saladier"],
        "utensils": ["cuillère en bois", "couteau"],
    },
    {
        "id": 10,
        "image": "Recette10.jpg",
        "name": "Tartiflette",
        "servings": 4,
        "ingredients": [
            {
                "name": "Reblochon",
                "quantity": "1",
            },
            {
                "name": "Pommes de terre",
                "quantity": 4.5,
                "unit": "kg",
            },
            {
                "name": "Jambon fumé",
                "quantity": 2,
                "unit": "tranche",
            },
            {
                "name": "Oignon",
                "quantity": 300,
                "unit": "gramme",
            },
            {
                "name": "Vin blanc sec",
                "quantity": 30,
                "unit": "cl",
            },
        ],
        "time": 60,
        "description": "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
        "appliances": ["Four"],
        "utensils": ["plat à gratin", "couteau", "Économe"],
    }, {
        "id": 11,
        "image": "Recette11.jpg",
        "name": "Salade tomate, mozzarella et pommes",
        "servings": 4,
        "ingredients": [
            {
                "name": "Tomate cerise",
                "quantity": 250,
                "unit": "gramme",
            },
            {
                "name": "Mozzarella",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Jambon de parme",
                "quantity": 4,
                "unit": "tranche",
            },
            {
                "name": "Pomme",
                "quantity": 1,
            },
            {
                "name": "Salade Verte",
                "quantity": 1,
            },
            {
                "name": "Vinaigrette",
                "quantity": 5,
                "unit": "cl",
            },
        ],
        "time": 10,
        "description": "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
        "appliances": ["Saladier"],
        "utensils": ["couteau", "cuillère à melon"],
    }, {
        "id": 12,
        "image": "Recette12.jpg",
        "name": "Compote pomme rhubarbe",
        "servings": 4,
        "ingredients": [
            {
                "name": "Rhubarbe",
                "quantity": 160,
                "unit": "gramme",
            },
            {
                "name": "Pomme",
                "quantity": 8,
            },
            {
                "name": "Sucre vanillé",
                "quantity": 6,
                "unit": "sachet",
            },
            {
                "name": "Eau",
                "quantity": "0.5",
                "unit": "tasses",
            },
        ],
        "time": 40,
        "description": "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
        "appliances": ["Casserole"],
        "utensils": ["couteau", "économe"],
    },
    {
        "id": 13,
        "image": "Recette13.jpg",
        "name": "Salade mâchée de patates",
        "servings": 2,
        "ingredients": [
            {
                "name": "Mâche",
                "quantity": 60,
                "unit": "gramme",
            },
            {
                "name": "Pommes de terre",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Échalote",
                "quantity": 2,

            },
            {
                "name": "Vinaigre de cidre",
                "quantity": 1,
                "unit": "cuillère à soupe",
            },
            {
                "name": "huile d'olive",
                "quantity": 2,
                "unit": "cuillère à soupe",
            },
        ],
        "time": 40,
        "description": "Cuire les pommes de terre environ 30 minutes. Découper les échalotes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
        "appliances": ["Casserole"],
        "utensils": ["couteau", "saladier", "cuillère en bois"],
    },
    {
        "id": 14,
        "image": "Recette14.jpg",
        "name": "Galette Bretonne Saucisse et Fromage à raclette",
        "servings": 2,
        "ingredients": [
            {
                "name": "Saucisse bretonne ou de Toulouse",
                "quantity": 2,
            },
            {
                "name": "Farine de blé noir",
                "quantity": 130,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 1,

            },
            {
                "name": "Fromage à raclette",
                "quantity": 300,
                "unit": "gramme",
            },
            {
                "name": "Oignon",
                "quantity": 1,
            },
            {
                "name": "Beurre",
                "quantity": 75,
                "unit": "gramme",
            },

        ],
        "time": 100,
        "description": "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
        "appliances": ["Four"],
        "utensils": ["poêle à frire", "couteau"],
    },
    {
        "id": 15,
        "image": "Recette15.jpg",
        "name": "Crêpes Chocolat Banane",
        "servings": 10,
        "ingredients": [
            {
                "name": "Oeuf",
                "quantity": 3,
            },
            {
                "name": "Farine",
                "quantity": 250,
                "unit": "gramme",
            },
            {
                "name": "Lait",
                "quantity": 600,
                "unit": "ml",
            },
            {
                "name": "Beurre salé",
                "quantity": 30,
                "unit": "gramme",
            },
            {
                "name": "Chocolat au lait",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Banane",
                "quantity": 4,
            },
        ],
        "time": 60,
        "description": "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
        "appliances": ["Poêle à crêpe"],
        "utensils": ["saladier", "louche", "cuillère en bois"],
    },
    {
        "id": 16,
        "image": "Recette16.jpg",
        "name": "Gratin de pâtes à la tomate",
        "servings": 2,
        "ingredients": [
            {
                "name": "Tomate",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Mozzarella",
                "quantity": 250,
                "unit": "gramme",
            },
            {
                "name": "Penne",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Basilic",
                "quantity": 1,
                "unit": "tiges",
            },
            {
                "name": "huile d'olive",
                "quantity": 2,
                "unit": "cuillère à soupe",
            },
        ],
        "time": 45,
        "description": "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
        "appliances": ["Four"],
        "utensils": ["plat à gratin", "couteau", "râpe à fromage"],
    },
    {
        "id": 17,
        "image": "Recette17.jpg",
        "name": "Smoothie à la fraise",
        "servings": 6,
        "ingredients": [
            {
                "name": "Fraise",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Pastèque",
                "quantity": 0.5,
            },
            {
                "name": "Jus de citron",
                "quantity": 1,
                "unit": "cuillères à soupe",
            },
            {
                "name": "Glaçons",
                "quantity": 8,
            },
            {
                "name": "Menthe",
            },
        ],
        "time": 15,
        "description": "Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillère à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques feuilles de menthe pour plus de fraîcheur. Mixez le tout. Servir et déguster.",
        "appliances": ["Blender"],
        "utensils": ["verres", "couteau", "presse citron"],
    },
    {
        "id": 18,
        "image": "Recette18.jpg",
        "name": "Smoothie ananas et vanille",
        "servings": 5,
        "ingredients": [
            {
                "name": "Ananas",
                "quantity": 1,
            },
            {
                "name": "Glace à la vanille",
                "quantity": 500,
                "unit": "ml",
            },
            {
                "name": "Lait",
                "quantity": 50,
                "unit": "cl",
            },
        ],
        "time": 10,
        "description": "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
        "appliances": ["Blender"],
        "utensils": ["verres", "couteau"],
    },
    {
        "id": 19,
        "image": "Recette19.jpg",
        "name": "Shake Banane Kiwi",
        "servings": 4,
        "ingredients": [
            {
                "name": "Kiwi",
                "quantity": 4,
            },
            {
                "name": "Citron",
                "quantity": 1,
            },
            {
                "name": "Lait",
                "quantity": 1,
                "unit": "litres",
            },
            {
                "name": "Sucre glace",
                "quantity": 30,
                "unit": "gramme",
            },
            {
                "name": "Banane",
                "quantity": 1,
            },
        ],
        "time": 0,
        "description": "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
        "appliances": ["Blender"],
        "utensils": ["couteau", "verres", "presse citron"],
    },
    {
        "id": 20,
        "image": "Recette20.jpg",
        "name": "Pates Carbonara",
        "servings": 5,
        "ingredients": [
            {
                "name": "Tagliatelle",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Lardons",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Crème fraîche",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Parmesan",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "huile d'olive",
                "quantity": 1,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 30,
        "description": "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
        "appliances": ["Sauteuse"],
        "utensils": ["râpe à fromage", "cuillère en bois"],
    },
    {
        "id": 21,
        "image": "Recette21.jpg",
        "name": "Spaghettis à la bolognaise",
        "servings": 4,
        "ingredients": [
            {
                "name": "Spaghettis",
                "quantity": 400,
                "unit": "gramme",
            },
            {
                "name": "Oignon",
                "quantity": 2,
            },
            {
                "name": "Coulis de tomate",
                "quantity": 300,
                "unit": "gramme",
            },
            {
                "name": "Viande hachée 1% de matière grasse",
                "quantity": 400,
                "unit": "gramme",
            },
            {
                "name": "Vin rouge",
                "quantity": 20,
                "unit": "cl",
            },
            {
                "name": "Crème fraîche",
                "quantity": 1,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 30,
        "description": "Cuisiner la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oignons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraîche à la viande hachée. Servir.",
        "appliances": ["Casserole"],
        "utensils": ["Cuillère en bois", "louche", "couteau"],
    },
    {
        "id": 22,
        "image": "Recette22.jpg",
        "name": "Fondant au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "name": "Beurre",
                "quantity": 160,
                "unit": "gramme",
            },
            {
                "name": "Chocolat noir",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Farine",
                "quantity": 50,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 4,
            },
            {
                "name": "Sucre",
                "quantity": 150,
                "unit": "gramme",
            },
        ],
        "time": 30,
        "description": "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert.",
        "appliances": ["Four"],
        "utensils": ["moule à gateaux", "fouet", "casserole"],
    },
    {
        "id": 23,
        "image": "Recette23.jpg",
        "name": "Quiche lorraine",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pâte brisée",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Lardons",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 30,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 3,
            },
            {
                "name": "Crème Fraîche",
                "quantity": 20,
                "unit": "cl",
            },
            {
                "name": "Lait",
                "quantity": 20,
                "unit": "cl",
            },
        ],
        "time": 60,
        "description": "Étaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
        "appliances": ["Four"],
        "utensils": ["moule à gateaux", "rouleau à patisserie", "fouet"],
    },
    {
        "id": 24,
        "image": "Recette24.jpg",
        "name": "Salade de pâtes",
        "servings": 4,
        "ingredients": [
            {
                "name": "Thon en miette",
                "quantity": 160,
                "unit": "gramme",
            },
            {
                "name": "Maïs",
                "quantity": 60,
                "unit": "gramme",
            },
            {
                "name": "Tomate",
                "quantity": 1,
            },
            {
                "name": "Concombre",
                "quantity": 0.5,
            },
            {
                "name": "Macaronis",
                "quantity": 300,
                "unit": "gramme",
            },
            {
                "name": "Mayonnaise",
                "quantity": 2,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 40,
        "description": "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
        "appliances": ["Saladier"],
        "utensils": ["couteau", "cuillère en bois"],
    },
    {
        "id": 25,
        "image": "Recette25.jpg",
        "name": "Cookies",
        "servings": 4,
        "ingredients": [
            {
                "name": "Sucre",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Farine",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Chocolat noir en pépite",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 1,
            },
        ],
        "time": 30,
        "description": "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumeaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
        "appliances": ["Four"],
        "utensils": ["fouet", "saladier", "plaque de cuisson"],
    },
    {
        "id": 26,
        "image": "Recette26.jpg",
        "name": "Soupe de tomates",
        "servings": 2,
        "ingredients": [
            {
                "name": "Tomate",
                "quantity": 6,
            },
            {
                "name": "Pommes de terre",
                "quantity": 1,
            },
            {
                "name": "Huile d'olive",
            },
            {
                "name": "Oignon",
                "quantity": 1,
            },
            {
                "name": "Ail",
                "quantity": 1,
                "unit": "gousses",
            },
        ],
        "time": 25,
        "description": "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
        "appliances": ["Mixer"],
        "utensils": ["cocotte minute", "couteau"],
    },
    {
        "id": 27,
        "image": "Recette27.jpg",
        "name": "Soupe à l'oseille",
        "servings": 4,
        "ingredients": [
            {
                "name": "Oseille",
                "quantity": 2,
            },
            {
                "name": "Oeuf",
                "quantity": 1,
            },
            {
                "name": "Crème fraîche",
                "quantity": 4,
                "unit": "cuillère à soupe",
            },
            {
                "name": "Vermicelle",
                "quantity": 1,
                "unit": "verres",
            },
            {
                "name": "Beurre salé",
                "quantity": 50,
                "unit": "gramme",
            },
        ],
        "time": 15,
        "description": "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
        "appliances": ["Casserole"],
        "utensils": ["couteau", "cuillère en bois"],
    },
    {
        "id": 28,
        "image": "Recette28.jpg",
        "name": "Soupe de poireaux",
        "servings": 4,
        "ingredients": [
            {
                "name": "Poireau",
                "quantity": 3,
            },
            {
                "name": "Pommes de terre",
                "quantity": 400,
                "unit": "gramme",
            },
            {
                "name": "Oseille",
                "quantity": 75,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 50,
                "unit": "gramme",
            },
            {
                "name": "Crème fraîche",
                "quantity": 10,
                "unit": "cl",
            },
        ],
        "time": 80,
        "description": "Émincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
        "appliances": ["Mixer"],
        "utensils": ["casserole", "couteau"],
    },
    {
        "id": 29,
        "image": "Recette29.jpg",
        "name": "Houmous Express",
        "servings": 2,
        "ingredients": [
            {
                "name": "Pois chiche",
                "quantity": 1,
                "unit": "boite",
            },
            {
                "name": "Ail",
                "quantity": 2,
                "unit": "gousse",
            },
            {
                "name": "Citron",
                "quantity": 2,
            },
            {
                "name": "Huile d'olive",
            },
            {
                "name": "Paprika",
            },
        ],
        "time": 30,
        "description": "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
        "appliances": ["Mixer"],
        "utensils": ["cuillère en bois", "presse citron"],
    },
    {
        "id": 30,
        "image": "Recette30.jpg",
        "name": "Purée de pois cassés",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pois Cassé",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Oignon",
                "quantity": 1,
            },
            {
                "name": "Ail",
                "quantity": 2,
                "unit": "gousses",
            },
        ],
        "time": 60,
        "description": "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuire à petit feu pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
        "appliances": ["Mixer"],
        "utensils": ["casserole", "cuillère en bois"],
    },
    {
        "id": 31,
        "image": "Recette31.jpg",
        "name": "Jardinière de légumes",
        "servings": 4,
        "ingredients": [
            {
                "name": "Carotte",
                "quantity": 2,
            },
            {
                "name": "Pommes de terre",
                "quantity": 2,
            },
            {
                "name": "Haricot vert",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Petits pois",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Lardons",
                "quantity": 150,
                "unit": "gramme",
            },
        ],
        "time": 60,
        "description": "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
        "appliances": ["Poêle"],
        "utensils": ["Couteau", "économe"],
    },
    {
        "id": 32,
        "image": "Recette32.jpg",
        "name": "Croque Monsieur à la dinde",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pain de mie",
                "quantity": 8,
                "unit": "tranche",
            },
            {
                "name": "Blanc de dinde",
                "quantity": 4,
                "unit": "tranche",
            },
            {
                "name": "Emmental",
                "quantity": 8,
                "unit": "tranche",
            },
            {
                "name": "Gruyère",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Lait",
                "quantity": 5,
                "unit": "cl",
            },
            {
                "name": "Noix de muscade",
                "quantity": 1,
                "unit": "pincées",
            },
        ],
        "time": 20,
        "description": "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d’emmental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieur. Placer au four durant 10 minutes.",
        "appliances": ["Four"],
        "utensils": ["râpe à fromage", "cuillère à Soupe", "couteau"],
    },
    {
        "id": 33,
        "image": "Recette33.jpg",
        "name": "Sandwich au saumon fumé",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pain de mie",
                "quantity": 8,
                "unit": "tranche",
            },
            {
                "name": "Saumon Fumé",
                "quantity": 4,
                "unit": "tranche",
            },
            {
                "name": "Feuilles de laitue",
                "quantity": 4,
            },
            {
                "name": "Fromage blanc",
                "quantity": 4,
                "unit": "cuillères à soupe",
            },
            {
                "name": "Jus de citron",
                "quantity": 1,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 5,
        "description": "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
        "appliances": ["Four"],
        "utensils": ["couteau", "cuillère en bois"],
    },
    {
        "id": 34,
        "image": "Recette34.jpg",
        "name": "Purée de patate douce",
        "servings": 4,
        "ingredients": [
            {
                "name": "Patate douce",
                "quantity": 800,
                "unit": "gramme",
            },
            {
                "name": "Crème fraîche",
                "quantity": 20,
                "unit": "cl",
            },
            {
                "name": "Huile d'olive",
            },
            {
                "name": "Orange",
                "quantity": 1,
            },
        ],
        "time": 25,
        "description": "Éplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserole d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
        "appliances": ["Mixer"],
        "utensils": ["couteau", "économe", "cuillère en bois"],
    },
    {
        "id": 35,
        "image": "Recette35.jpg",
        "name": "Purée de carottes",
        "servings": 2,
        "ingredients": [
            {
                "name": "Carotte",
                "quantity": 6,
            },
            {
                "name": "Pommes de terre",
                "quantity": 1,
            },
            {
                "name": "Beurre",
                "quantity": 20,
                "unit": "gramme",
            },
            {
                "name": "Crème fraîche",
                "quantity": 2,
                "unit": "cuillères à soupe",
            },
            {
                "name": "Cumin",
                "quantity": 1,
                "unit": "cuillères à café",
            },
            {
                "name": "Noix de muscade",
                "quantity": 1,
                "unit": "pincées",
            },
        ],
        "time": 25,
        "description": "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumin et la noix de muscade.",
        "appliances": ["Mixer"],
        "utensils": ["cocotte minute", "couteau", "cuillère en bois"],
    },
    {
        "id": 36,
        "image": "Recette36.jpg",
        "name": "Lasagne Courgettes et Chèvre",
        "servings": 2,
        "ingredients": [
            {
                "name": "Courgette",
                "quantity": 2,
            },
            {
                "name": "Fromage de chèvre",
                "quantity": 4,
            },
            {
                "name": "Lait",
                "quantity": 25,
                "unit": "cl",
            },
            {
                "name": "Lasagne",
                "quantity": 5,
                "unit": "feuilles",
            },
            {
                "name": "Gruyère",
                "quantity": 40,
                "unit": "gramme",
            },
            {
                "name": "Maïzena",
                "quantity": 1,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 35,
        "description": "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamel avec le lait et la maïzena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruyère. Passer au four à 180° durant 20 à 25 minutes.",
        "appliances": ["Four"],
        "utensils": ["plat à gratin", "râpe à fromage", "fouet"],
    },
    {
        "id": 37,
        "image": "Recette37.jpg",
        "name": "Courgettes farcies au boeuf",
        "servings": 2,
        "ingredients": [
            {
                "name": "Courgette",
                "quantity": 2,
            },
            {
                "name": "Viande hachée",
                "quantity": 600,
                "unit": "gramme",
            },
            {
                "name": "Huile d'olive",
                "quantity": 25,
                "unit": "cl",
            },
            {
                "name": "Oignon",
                "quantity": 1,
            },
            {
                "name": "Coulis de tomate",
                "quantity": 20,
                "unit": "cl",
            },
            {
                "name": "Gruyère",
                "quantity": 50,
                "unit": "gramme",
            },

        ],
        "time": 60,
        "description": "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage râpé",
        "appliances": ["Four"],
        "utensils": ["couteau", "cuillère en bois", "Poêle à frire"],
    },
    {
        "id": 38,
        "image": "Recette38.jpg",
        "name": "Pain Perdu",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pain",
                "quantity": 6,
                "unit": "tranche",
            },
            {
                "name": "Lait",
                "quantity": 25,
                "unit": "cl",
            },
            {
                "name": "Oeuf",
                "quantity": 3,
            },
            {
                "name": "Sucre roux",
                "quantity": 75,
                "unit": "gramme",
            },
        ],
        "time": 20,
        "description": "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir",
        "appliances": ["Four"],
        "utensils": ["fouet", "bol", "Cuillère à Soupe"],
    },
    {
        "id": 39,
        "image": "Recette39.jpg",
        "name": "Crumble aux pommes",
        "servings": 40,
        "ingredients": [
            {
                "name": "Pomme",
                "quantity": 2,
            },
            {
                "name": "Farine",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 50,
                "unit": "gramme",
            },
            {
                "name": "Sucre roux",
                "quantity": 80,
                "unit": "gramme",
            },
        ],
        "time": 40,
        "description": "Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
        "appliances": ["Four"],
        "utensils": ["saladier", "couteau", "fouet"],
    },
    {
        "id": 40,
        "image": "Recette40.jpg",
        "name": "Limonade",
        "servings": 4,
        "ingredients": [
            {
                "name": "Eau",
                "quantity": 1,
                "unit": "Litres",
            },
            {
                "name": "Citron Vert",
                "quantity": 3,
            },
            {
                "name": "Sucre en poudre",
                "quantity": 4,
                "unit": "cuillères à café",
            },
            {
                "name": "Bicarbonate",
                "quantity": 1,
                "unit": "cuillères à café",
            },
        ],
        "time": 10,
        "description": "Dans un saladier mettre l'eau, le jus des citrons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
        "appliances": ["Saladier"],
        "utensils": ["cuillère en bois"],
    },
    {
        "id": 41,
        "image": "Recette41.jpg",
        "name": "Mousse au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "name": "Oeuf",
                "quantity": 3,
            },
            {
                "name": "Chocolat noir",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachet",
            },
        ],
        "time": 20,
        "description": "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
        "appliances": ["Casserole"],
        "utensils": ["fouet", "spatule", "verres"],
    },
    {
        "id": 42,
        "image": "Recette42.jpg",
        "name": "Charlotte au poires",
        "servings": 3,
        "ingredients": [
            {
                "name": "Chocolat",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 3,
            },
            {
                "name": "Poires au jus",
                "quantity": 0.5,
                "unit": "boite",
            },
            {
                "name": "Boudoir",
                "quantity": 15,
            },
        ],
        "time": 60,
        "description": "Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
        "appliances": ["Moule à charlotte"],
        "utensils": ["saladier", "couteau", "fouet"],
    },
    {
        "id": 43,
        "image": "Recette43.jpg",
        "name": "Tarte au citron",
        "servings": 6,
        "ingredients": [
            {
                "name": "Pâte brisée",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Sucre",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Beurre fondu",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 3,
            },
            {
                "name": "Citron",
            },
        ],
        "time": 50,
        "description": "Préchauffez le fours à 200°. Étaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
        "appliances": ["Four"],
        "utensils": ["rouleau à patisserie", "moule à tarte", "presse citron"],
    },
    {
        "id": 44,
        "image": "Recette44.jpg",
        "name": "Crème dessert au chocolat",
        "servings": 6,
        "ingredients": [
            {
                "name": "Lait",
                "quantity": 1,
                "unit": "litres",
            },
            {
                "name": "Chocolat",
                "quantity": 200,
                "unit": "gramme",
            },
            {
                "name": "Sucre",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 50,
                "unit": "gramme",
            },
            {
                "name": "farine",
                "quantity": 40,
                "unit": "gramme",
            },
        ],
        "time": 15,
        "description": "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres",
        "appliances": ["Casserole"],
        "utensils": ["cuillère en bois"],
    },
    {
        "id": 45,
        "image": "Recette45.jpg",
        "name": "Crème pâtissière",
        "servings": 8,
        "ingredients": [
            {
                "name": "Lait",
                "quantity": 50,
                "unit": "cl",
            },
            {
                "name": "Oeuf",
                "quantity": 2,
            },
            {
                "name": "Farine",
                "quantity": 30,
                "unit": "gramme",
            },
            {
                "name": "Sucre",
                "quantity": 80,
                "unit": "gramme",
            },
        ],
        "time": 30,
        "description": "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
        "appliances": ["Casserole"],
        "utensils": ["fouet", "saladier"],
    },
    {
        "id": 46,
        "image": "Recette46.jpg",
        "name": "Far breton",
        "servings": 6,
        "ingredients": [
            {
                "name": "Farine",
                "quantity": 250,
                "unit": "gramme",
            },
            {
                "name": "Sucre",
                "quantity": 150,
                "unit": "gramme",
            },
            {
                "name": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachet",
            },
            {
                "name": "Oeuf",
                "quantity": 4,
            },
            {
                "name": "Lait",
                "quantity": 1,
                "unit": "litre",
            },
            {
                "name": "Pruneaux",
                "quantity": 100,
                "unit": "gramme",
            },
        ],
        "time": 60,
        "description": "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
        "appliances": ["Four"],
        "utensils": ["fouet", "moule", "verres"],
    },
    {
        "id": 47,
        "image": "Recette47.jpg",
        "name": "Mousse au citron",
        "servings": 6,
        "ingredients": [
            {
                "name": "Jus de citron",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Mascarpone",
                "quantity": 250,
                "unit": "gramme",
            },
            {
                "name": "Sucre",
                "quantity": 100,
                "unit": "gramme",
            },
            {
                "name": "Crème Fraîche",
                "quantity": 20,
                "unit": "cl",
            },
        ],
        "time": 5,
        "description": "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
        "appliances": ["Saladier"],
        "utensils": ["fouet", "verres", "cuillère en bois"],
    },
    {
        "id": 48,
        "image": "Recette48.jpg",
        "name": "Pizza",
        "servings": 4,
        "ingredients": [
            {
                "name": "Pâte à pizza",
                "quantity": 1,
            },
            {
                "name": "Tomate pelée",
                "quantity": 1,
                "unit": "boite",
            },
            {
                "name": "Lardons",
                "quantity": 1,
                "unit": "barquette",
            },
            {
                "name": "Champignons de paris",
                "quantity": 1,
                "unit": "boite",
            },
            {
                "name": "Gruyère",
                "quantity": 200,
                "unit": "gramme",
            },
        ],
        "time": 40,
        "description": "Étaler la pate a pizza. Écraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes",
        "appliances": ["Four"],
        "utensils": ["rouleau à patisserie", "râpe à fromage", "couteau"],
    },
    {
        "id": 49,
        "image": "Recette49.jpg",
        "name": "Smoothie tropical",
        "servings": 4,
        "ingredients": [
            {
                "name": "Banane",
                "quantity": 2,
            },
            {
                "name": "Kiwi",
                "quantity": 3,
            },
            {
                "name": "Mangue",
                "quantity": 1,
            },
            {
                "name": "Ananas",
                "quantity": 4,
                "unit": "tranche",
            },
            {
                "name": "Miel",
                "quantity": 2,
                "unit": "cuillères à soupe",
            },
        ],
        "time": 0,
        "description": "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
        "appliances": ["Blender"],
        "utensils": ["couteau", "verres"],
    },
    {
        "id": 50,
        "image": "Recette50.jpg",
        "name": "Frangipane",
        "servings": 2,
        "ingredients": [
            {
                "name": "Pâte feuilletée",
                "quantity": 400,
                "unit": "gramme",
            },
            {
                "name": "Oeuf",
                "quantity": 6,
            },
            {
                "name": "Poudre d'amande",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Beurre",
                "quantity": 500,
                "unit": "gramme",
            },
            {
                "name": "Sucre glace",
                "quantity": 500,
                "unit": "gramme",
            },
        ],
        "time": 60,
        "description": "Préparer la frangipane : Mélanger le sucre la poudre d'amandes, le beurre et les oeufs. Étaler la moitié de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
        "appliances": ["Four"],
        "utensils": ["rouleau à patisserie", "fouet"],
    },
]
