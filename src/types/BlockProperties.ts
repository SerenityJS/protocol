import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import { NBT } from './NBT';

interface BlockProperty {
	name: string;
	state: any; // nbt
}

class BlockProperties extends DataType {
	public static read(stream: Encapsulated): BlockProperty[] {
		const blockProperties: BlockProperty[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const name = stream.readBigString();
			const state = NBT.read(stream);
			blockProperties.push({ name, state });
		}

		return blockProperties;
	}
	public static write(stream: Encapsulated, value: BlockProperty[]): void {
		stream.writeVarInt(value.length);
		for (const blockProperty of value) {
			stream.writeBigString(blockProperty.name);
			NBT.write(stream);
		}
	}
}

export { BlockProperties, type BlockProperty };
