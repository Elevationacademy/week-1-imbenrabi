// your instructions for healing your patient:
// Create a new strand of genes (a new array) based off the genes strand above. You cannot create new genes*, only copy the existing ones above. 

// That means that if you want to access the "GLMN" gene, you must access genes[1], for example.
// *Except for "FXT", explained below

// The new strand should be built like this:

// The first two genes should be the same as those in genes
// Replace "RLF" with "CRYZ" and "CRYZ" with "RLF" (swap their places)
// Remove "AZIN2" from where it is, and insert two of these "AZIN2"s at the end of the strand
// Once you've done all of the above, add the gene "FXT" to the beginning of the strand
// The "FXT" gene is unstable so you may only add it once the other genes are in place!

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];

genes.splice(2, 0, genes.splice(4, 1)[0]);
genes.push(genes[4]);
genes.unshift('FXT');
console.log(genes);



