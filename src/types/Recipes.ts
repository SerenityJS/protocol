import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import { ItemLegacy, RecipeIngredient } from '.';
import type { IRecipeIngredient, IItemLegacy } from '.';

enum RecipeType {
	Shapeless,
	Shaped,
	Furnace,
	FurnaceWithMetadata,
	Multi,
	ShulkerBox,
	ShapelessChemistry,
	ShapedChemistry,
	SmithingTransform,
	SmithingTrim,
}
type Recipe =
	| {
			recipe: {
				addition: IRecipeIngredient;
				base: IRecipeIngredient;
				networkId: number;
				recipeId: string;
				result: IItemLegacy;
				tag: string;
				template: IRecipeIngredient;
			};
			type: RecipeType.SmithingTransform;
	  }
	| {
			recipe: {
				addition: IRecipeIngredient;
				block: string;
				input: IRecipeIngredient;
				networkId: number;
				recipeId: string;
				template: IRecipeIngredient;
			};
			type: RecipeType.SmithingTrim;
	  }
	| {
			recipe: {
				block: string;
				height: number;
				input: IRecipeIngredient[][];
				networkId: number;
				output: IItemLegacy[];
				priority: number;
				recipeId: string;
				uuid: string;
				width: number;
			};
			type: RecipeType.Shaped | RecipeType.ShapedChemistry;
	  }
	| {
			recipe: {
				block: string;
				input: IRecipeIngredient[];
				networkId: number;
				output: IItemLegacy[];
				priority: number;
				recipeId: string;
				uuid: string;
			};
			type: RecipeType.Shapeless | RecipeType.ShapelessChemistry | RecipeType.ShulkerBox;
	  }
	| {
			recipe: {
				block: string;
				inputId: number;
				inputMetadata: number;
				output: IItemLegacy;
			};
			type: RecipeType.FurnaceWithMetadata;
	  }
	| {
			recipe: {
				block: string;
				inputId: number;
				output: IItemLegacy;
			};
			type: RecipeType.Furnace;
	  }
	| {
			recipe: {
				networkId: number;
				uuid: string;
			};
			type: RecipeType.Multi;
	  };

class Recipes extends DataType {
	public static read(stream: Encapsulated): Recipe[] {
		const recipes: Recipe[] = [];
		const length = stream.readZigZag();

		for (let i = 0; i < length; i++) {
			const type = stream.readZigZag();

			switch (type) {
				case RecipeType.Shapeless:
				case RecipeType.ShulkerBox:
				case RecipeType.ShapelessChemistry: {
					const recipeId = stream.readBigString();

					const input: IRecipeIngredient[] = [];
					const inputLength = stream.readVarInt();
					for (let j = 0; j < inputLength; j++) {
						const ingredient = RecipeIngredient.read(stream);
						input.push(ingredient);
					}

					const output: IItemLegacy[] = [];
					const outputLength = stream.readVarInt();
					for (let j = 0; j < outputLength; j++) {
						const item = ItemLegacy.read(stream);
						output.push(item);
					}

					const uuid = stream.readUuid();
					const block = stream.readBigString();
					const priority = stream.readZigZag();
					const networkId = stream.readVarInt();

					recipes.push({ type, recipe: { recipeId, input, output, uuid, block, priority, networkId } });
					break;
				}

				case RecipeType.Shaped:
				case RecipeType.ShapedChemistry: {
					const recipeId = stream.readBigString();

					const width = stream.readZigZag();
					const height = stream.readZigZag();

					const input: IRecipeIngredient[][] = [];
					for (let j = 0; j < width; j++) {
						const ingredientRow: IRecipeIngredient[] = [];

						for (let k = 0; k < height; k++) {
							const ingredient = RecipeIngredient.read(stream);
							ingredientRow.push(ingredient);
						}

						input.push(ingredientRow);
					}

					const output: IItemLegacy[] = [];
					const outputLength = stream.readVarInt();
					for (let j = 0; j < outputLength; j++) {
						const item = ItemLegacy.read(stream);
						output.push(item);
					}

					const uuid = stream.readUuid();
					const block = stream.readBigString();
					const priority = stream.readZigZag();
					const networkId = stream.readVarInt();

					recipes.push({ type, recipe: { recipeId, width, height, input, output, uuid, block, priority, networkId } });
					break;
				}

				case RecipeType.Furnace: {
					const inputId = stream.readZigZag();
					const output = ItemLegacy.read(stream);
					const block = stream.readBigString();

					recipes.push({ type, recipe: { inputId, output, block } });
					break;
				}

				case RecipeType.FurnaceWithMetadata: {
					const inputId = stream.readZigZag();
					const inputMetadata = stream.readZigZag();
					const output = ItemLegacy.read(stream);
					const block = stream.readBigString();

					recipes.push({ type, recipe: { inputId, inputMetadata, output, block } });
					break;
				}

				case RecipeType.Multi: {
					const uuid = stream.readUuid();
					const networkId = stream.readVarInt();

					recipes.push({ type, recipe: { uuid, networkId } });
					break;
				}

				case RecipeType.SmithingTransform: {
					const recipeId = stream.readBigString();
					const template = RecipeIngredient.read(stream);
					const base = RecipeIngredient.read(stream);
					const addition = RecipeIngredient.read(stream);
					const result = ItemLegacy.read(stream);
					const tag = stream.readBigString();
					const networkId = stream.readVarInt();

					recipes.push({ type, recipe: { recipeId, template, base, addition, result, tag, networkId } });
					break;
				}

				case RecipeType.SmithingTrim: {
					const recipeId = stream.readBigString();
					const template = RecipeIngredient.read(stream);
					const input = RecipeIngredient.read(stream);
					const addition = RecipeIngredient.read(stream);
					const block = stream.readBigString();
					const networkId = stream.readVarInt();

					recipes.push({ type, recipe: { recipeId, template, input, addition, block, networkId } });
					break;
				}
			}
		}

		return recipes;
	}

	public static write(stream: Encapsulated, value: Recipe[]): void {
		stream.writeVarInt(value.length);

		for (const { type, recipe } of value) {
			stream.writeZigZag(type);

			switch (type) {
				case RecipeType.Shapeless:
				case RecipeType.ShulkerBox:
				case RecipeType.ShapelessChemistry: {
					stream.writeBigString(recipe.recipeId);

					stream.writeVarInt(recipe.input.length);
					for (const ingredient of recipe.input) RecipeIngredient.write(stream, ingredient);

					stream.writeVarInt(recipe.output.length);
					for (const item of recipe.output) ItemLegacy.write(stream, item);

					stream.writeUuid(recipe.uuid);
					stream.writeBigString(recipe.block);
					stream.writeZigZag(recipe.priority);
					stream.writeVarInt(recipe.networkId);

					break;
				}

				case RecipeType.Shaped:
				case RecipeType.ShapedChemistry: {
					stream.writeBigString(recipe.recipeId);
					stream.writeZigZag(recipe.width);
					stream.writeZigZag(recipe.height);

					for (const row of recipe.input) {
						for (const item of row) {
							RecipeIngredient.write(stream, item);
						}
					}

					stream.writeVarInt(recipe.output.length);
					for (const item of recipe.output) ItemLegacy.write(stream, item);

					stream.writeUuid(recipe.uuid);
					stream.writeBigString(recipe.block);
					stream.writeZigZag(recipe.priority);
					stream.writeVarInt(recipe.networkId);

					break;
				}

				case RecipeType.Furnace:
				case RecipeType.FurnaceWithMetadata: {
					stream.writeZigZag(recipe.inputId);
					if (type === RecipeType.FurnaceWithMetadata) stream.writeZigZag(recipe.inputMetadata);
					ItemLegacy.write(stream, recipe.output);
					stream.writeBigString(recipe.block);

					break;
				}

				case RecipeType.Multi: {
					stream.writeUuid(recipe.uuid);
					stream.writeVarInt(recipe.networkId);

					break;
				}

				case RecipeType.SmithingTransform: {
					stream.writeBigString(recipe.recipeId);
					RecipeIngredient.write(stream, recipe.template);
					RecipeIngredient.write(stream, recipe.base);
					RecipeIngredient.write(stream, recipe.addition);
					ItemLegacy.write(stream, recipe.result);
					stream.writeBigString(recipe.tag);
					stream.writeVarInt(recipe.networkId);

					break;
				}

				case RecipeType.SmithingTrim: {
					stream.writeBigString(recipe.recipeId);
					RecipeIngredient.write(stream, recipe.template);
					RecipeIngredient.write(stream, recipe.input);
					RecipeIngredient.write(stream, recipe.addition);
					stream.writeBigString(recipe.block);
					stream.writeVarInt(recipe.networkId);

					break;
				}
			}
		}
	}
}

interface PotionRecipe {
	ingredientId: number;
	ingredientMeta: number;
	inputItemId: number;
	inputItemMeta: number;
	outputItemId: number;
	outputItemMeta: number;
}

class PotionRecipes extends DataType {
	public static read(stream: Encapsulated): PotionRecipe[] {
		const recipes: PotionRecipe[] = [];
		const length = stream.readVarInt();

		for (let i = 0; i < length; i++) {
			const inputItemId = stream.readZigZag();
			const inputItemMeta = stream.readZigZag();
			const ingredientId = stream.readZigZag();
			const ingredientMeta = stream.readZigZag();
			const outputItemId = stream.readZigZag();
			const outputItemMeta = stream.readZigZag();

			recipes.push({ inputItemId, inputItemMeta, ingredientId, ingredientMeta, outputItemId, outputItemMeta });
		}

		return recipes;
	}

	public static write(stream: Encapsulated, value: PotionRecipe[]): void {
		stream.writeVarInt(value.length);
		for (const recipe of value) {
			stream.writeZigZag(recipe.inputItemId);
			stream.writeZigZag(recipe.inputItemMeta);
			stream.writeZigZag(recipe.ingredientId);
			stream.writeZigZag(recipe.ingredientMeta);
			stream.writeZigZag(recipe.outputItemId);
			stream.writeZigZag(recipe.outputItemMeta);
		}
	}
}

interface PotionContainerRecipe {
	ingredientId: number;
	inputItemId: number;
	outputItemId: number;
}

class PotionContainerRecipes extends DataType {
	public static read(stream: Encapsulated): PotionContainerRecipe[] {
		const recipes: PotionContainerRecipe[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const inputItemId = stream.readZigZag();
			const ingredientId = stream.readZigZag();
			const outputItemId = stream.readZigZag();

			recipes.push({ inputItemId, ingredientId, outputItemId });
		}

		return recipes;
	}

	public static write(stream: Encapsulated, value: PotionContainerRecipe[]): void {
		stream.writeVarInt(value.length);
		for (const recipe of value) {
			stream.writeZigZag(recipe.inputItemId);
			stream.writeZigZag(recipe.ingredientId);
			stream.writeZigZag(recipe.outputItemId);
		}
	}
}

interface MaterialReducer {
	item: {
		count: number;
		networkId: number;
	};
	mix: number;
}

class MaterialReducers extends DataType {
	public static read(stream: Encapsulated): MaterialReducer[] {
		const reducers: MaterialReducer[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const mix = stream.readZigZag();
			const networkId = stream.readZigZag();
			const count = stream.readZigZag();

			reducers.push({ mix, item: { networkId, count } });
		}

		return reducers;
	}

	public static write(stream: Encapsulated, value: MaterialReducer[]): void {
		stream.writeVarInt(value.length);

		for (const reducer of value) {
			stream.writeZigZag(reducer.mix);
			stream.writeZigZag(reducer.item.networkId);
			stream.writeZigZag(reducer.item.count);
		}
	}
}

export {
	Recipes,
	PotionRecipes,
	PotionContainerRecipes,
	MaterialReducers,
	type Recipe,
	type PotionRecipe,
	type PotionContainerRecipe,
	type MaterialReducer,
};
