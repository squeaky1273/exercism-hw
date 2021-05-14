export default class Pangram {
    private word: string
    private regexp = new RegExp('^[a-zA-Z]$');

    constructor(word: string) {
        this.word = word;
    }

    isPangram(): boolean {
        const abc = new Set<string>();
        this.word.split("")
            .filter(l => this.regexp.test(l))
            .forEach(l =>
                abc.add(l.toLowerCase())
            );
        return abc.size === 26;
    }
}