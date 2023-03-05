export default class RecipeData {
    constructor(name, ingredients, instructions ,id) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.favorite = false;
        this.id = id;
    }
}