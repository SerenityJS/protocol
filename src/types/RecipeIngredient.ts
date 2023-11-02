import { DataType, Endianness } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

enum RecipeIngredientType {
	Invalid,
	DefaultItem,
	MolangItem,
	ItemTag,
	DeferredItem,
	ComplexAlias,
}

type IRecipeIngredient = {
	count: number;
} & (
	| {
			expression: string;
			type: RecipeIngredientType.MolangItem;
			version: number;
	  }
	| {
			metadata: number;
			name: string;
			type: RecipeIngredientType.DeferredItem;
	  }
	| {
			metadata?: number;
			networkId: number;
			type: RecipeIngredientType.DefaultItem;
	  }
	| {
			name: string;
			type: RecipeIngredientType.ComplexAlias;
	  }
	| {
			tag: string;
			type: RecipeIngredientType.ItemTag;
	  }
	| {
			type: RecipeIngredientType.Invalid;
	  }
);

class RecipeIngredient extends DataType {
	public static read(stream: Encapsulated): IRecipeIngredient {
		const type: RecipeIngredientType = stream.readUInt8();

		let recipe: IRecipeIngredient;

		switch (type) {
			case RecipeIngredientType.DefaultItem: {
				const networkId = stream.readInt16(Endianness.Little);

				let metadata;
				if (networkId !== 0) metadata = stream.readInt16(Endianness.Little);

				const count = stream.readZigZag();
				recipe = { type, networkId, metadata, count };

				break;
			}

			case RecipeIngredientType.MolangItem: {
				const expression = stream.readBigString();
				const version = stream.readUInt8();

				const count = stream.readZigZag();
				recipe = { type, expression, version, count };

				break;
			}

			case RecipeIngredientType.ItemTag: {
				const tag = stream.readBigString();

				const count = stream.readZigZag();
				recipe = { type, tag, count };

				break;
			}

			case RecipeIngredientType.DeferredItem: {
				const name = stream.readBigString();
				const metadata = stream.readInt16(Endianness.Little);

				const count = stream.readZigZag();
				recipe = { type, name, metadata, count };

				break;
			}

			case RecipeIngredientType.ComplexAlias: {
				const name = stream.readBigString();

				const count = stream.readZigZag();
				recipe = { type, name, count };

				break;
			}

			case RecipeIngredientType.Invalid: {
				const count = stream.readZigZag();
				recipe = { type, count };

				break;
			}
		}

		return recipe;
	}
	public static write(stream: Encapsulated, value: IRecipeIngredient): void {
		stream.writeUInt8(value.type);

		switch (value.type) {
			case RecipeIngredientType.DefaultItem: {
				stream.writeInt16(value.networkId, Endianness.Little);
				if (value.networkId !== 0) stream.writeInt16(value.metadata!, Endianness.Little);
				break;
			}

			case RecipeIngredientType.MolangItem: {
				stream.writeBigString(value.expression);
				stream.writeUInt8(value.version);
				break;
			}

			case RecipeIngredientType.ItemTag: {
				stream.writeBigString(value.tag);
				break;
			}

			case RecipeIngredientType.DeferredItem: {
				stream.writeBigString(value.name);
				stream.writeInt16(value.metadata, Endianness.Little);
				break;
			}

			case RecipeIngredientType.ComplexAlias: {
				stream.writeBigString(value.name);
				break;
			}

			case RecipeIngredientType.Invalid: {
				break;
			}
		}

		stream.writeZigZag(value.count);
	}
}

export { RecipeIngredient, type IRecipeIngredient };
