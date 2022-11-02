function DNAStrand(dna){
    //your code here
    //output - string- all ca
    //inputs- string- only A,T,G,C
    //constraint- STRING- 
    //example/edge case- 
    let NewDNA = ""
    for(let i = 0; i < dna.length; i++){
        if(dna[i] == "A"){
            NewDNA += "T"
        }
        else if(dna[i] == "T"){
            NewDNA += "A"
        }
        else if(dna[i] == "C"){
            NewDNA += "G"
        }
        else{
            NewDNA += "C"
        }

    }
    return NewDNA;
}
DNAStrand("GTAT")