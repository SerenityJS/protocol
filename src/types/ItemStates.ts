import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface ItemState {
	componentBased: boolean;
	name: string;
	runtimeId: number;
}

class ItemStates extends DataType {
	public static read(stream: Encapsulated): ItemState[] {
		const itemStates: ItemState[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const name = stream.readBigString();
			const runtimeId = stream.readInt16(Endianness.Little);
			const componentBased = stream.readBool();
			itemStates.push({ componentBased, name, runtimeId });
		}

		return itemStates;
	}
	public static write(stream: Encapsulated, value: ItemState[]): void {
		stream.writeVarInt(value.length);
		for (const ItemState of value) {
			stream.writeBigString(ItemState.name);
			stream.writeInt16(ItemState.runtimeId, Endianness.Little);
			stream.writeBool(ItemState.componentBased);
		}
	}
}

export { ItemStates, type ItemState };
