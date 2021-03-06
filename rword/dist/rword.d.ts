export interface GenerateOptions {
    /**
     * A length or range of lengths that a word must match for it to have a
     *  chance of being randomly chosen
     * @example 5
     * @example "3-10"
     */
    length?: string | number;
    /**
     * Regex words must match to have a chance of being randomly chosen
     * @example "word"
     * @example /ing$/
     */
    contains?: RegExp | string;
    /**
     * Sets the capitalization of the randomly chosen words
     */
    capitalize?: 'none' | 'first' | 'all';
}
export declare class rword {
    static globalPool: string[];
    static readonly words: string[];
    /**
     * Randomly generates words from the words array
     */
    static generate(count?: number, opt?: GenerateOptions): string | string[];
    /**
     * A simple generator that pulls words from a prefilled global pool. Should
     *  be preferred over `rword.generate()` if custom filters are not needed as
     *  this method can in certain instances be many times faster.
     * @param count - Words to return. Throws error if greater than `10`
     */
    static generateFromPool(count?: number): string | string[];
    /**
     * Shuffles words and globalPool arrays
     */
    static shuffle(): void;
    /**
     * Load and shuffle word list
     */
    static load(list: 'big_en-US' | 'small_en-US' | 'small_pt-BR'): void;
}
