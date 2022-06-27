interface bunga{
    jenisBunga: string;
    namaBunga: string;
    warnaBunga: string;
}
class Bunga implements bunga{
    jenisBunga: string;
    namaBunga: string;
    warnaBunga: string;
    constructor(jenisBunga: string, namaBunga: string, warnaBunga: string){
        this.jenisBunga = jenisBunga;
        this.namaBunga = namaBunga;
        this.warnaBunga = warnaBunga;
    }
}