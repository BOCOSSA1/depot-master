export class Contact {
    id: number;
    description: String;
    favori:Boolean;

    constructor(id: number,

        description: String,
        favori:Boolean
    ) {

        this.description = description;
        this.favori = favori;

    }
}
