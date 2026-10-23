const nom = "Awa";
const produit = "ordinateur";
const prix_unitaire = 250000; // FCFA
const quantité = 2;
const frais_de_livraison = 5000; // FCFA
const TVA = 18; // en %
const montant_total_produit = prix_unitaire * quantité;
const montant_total_TVA = (montant_total_produit * TVA) / 100;
const montant_total_TTC = montant_total_produit + montant_total_TVA;
const montant_total_à_payer = montant_total_TTC + frais_de_livraison;
const prix_moyen_par_produit = montant_total_TTC / quantité;

console.log("===FACTURE DE COMMANDE===");
console.log("client :", nom);
console.log("produit :", produit);
console.log("prix unitaire :", prix_unitaire, "FCFA");
console.log("quantité :", quantité);
console.log("");
console.log("montant des produits :", montant_total_produit, "FCFA");
console.log("TVA (18%) :", montant_total_TVA, "FCFA");
console.log("montant TTC :", montant_total_TTC, "FCFA");
console.log("livraison :", frais_de_livraison, "FCFA");
console.log("TOTAL À PAYER :", montant_total_à_payer, "FCFA");
console.log("prix moyen TTC par produit :", prix_moyen_par_produit, "FCFA");
console.log("")
console.log("type du nom :", typeof nom);
console.log("type du prix :", typeof prix_unitaire);
console.log("type du produit :", typeof produit);
console.log("type de la quantité :", typeof quantité);
console.log("type du frais de livraison :", typeof frais_de_livraison);
console.log("type du taux de TVA :", typeof TVA);
console.log("type du montant total des produits :", typeof montant_total_produit);



