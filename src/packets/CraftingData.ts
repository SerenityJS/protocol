import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import type { MaterialReducer, PotionContainerRecipe, PotionRecipe, Recipe } from '../types';
import { MaterialReducers, PotionContainerRecipes, PotionRecipes, Recipes } from '../types';

@Packet(0x34, VarInt)
class CraftingData extends Encapsulated {
	@Serialize(Recipes) public recipes!: Recipe[];
	@Serialize(PotionRecipes) public potionTypeRecipes!: PotionRecipe[];
	@Serialize(PotionContainerRecipes) public potionContainerRecipes!: PotionContainerRecipe[];
	@Serialize(MaterialReducers) public materialReducers!: MaterialReducer[];
	@Serialize(Bool) public clearRecipes!: boolean;
}

export { CraftingData };
