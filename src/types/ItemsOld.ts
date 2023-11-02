import { DataType, Endianness, BinaryStream } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface ItemOld {
	entryId: number;
	item: ItemLagacyOld;
}

interface ItemLagacyOld {
	blockRuntimeId: number; // if 0, then it's has no info
	count: number;
	metaData: number;
	networtId: number;
}
// TODO: implement this
class ItemsOld extends DataType {
	public static read(stream: Encapsulated): ItemOld[] {
		const packs: ItemOld[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {}

		return packs;
	}
	public static write(stream: Encapsulated, value: ItemOld[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);

		stream.write(buffer.getBuffer());
	}
}

export { ItemsOld, type ItemOld };
