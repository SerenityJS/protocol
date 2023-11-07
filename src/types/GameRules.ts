import { BinaryStream, Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface GameRule {
	editable: boolean;
	name: string;
	type: number; // 0 = bool, 1 = int, 2 = float
	value: boolean | number | string;
}

class GameRules extends DataType {
	public static read(stream: Encapsulated): GameRule[] {
		const packs: GameRule[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const name = stream.readBigString();
			const editable = stream.readBool();
			const type = stream.readVarInt();
			let value: boolean | number | string;
			switch (type) {
				case 1:
					value = stream.readBool();
					break;
				case 2:
					value = stream.readZigZag();
					break;
				case 3:
					value = stream.readFloat32(Endianness.Little);
					break;
				default:
					console.log(`Unknown game rule type: ${type}`);
					return [];
			}

			packs.push({ editable, name, type, value });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: GameRule[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const pack of value) {
			buffer.writeBigString(pack.name.toLowerCase());
			buffer.writeBool(pack.editable);
			switch (pack.type) {
				case 1:
					buffer.writeVarInt(1);
					buffer.writeBool(pack.value as boolean);
					break;
				case 2:
					buffer.writeVarInt(2);
					buffer.writeZigZag(pack.value as number);
					break;
				case 3:
					buffer.writeVarInt(3);
					buffer.writeFloat32(pack.value as number, Endianness.Little);
					break;
				default:
					throw new Error(`Unknown game rule type: ${pack.type}`);
			}
		}

		stream.writeBuffer(buffer.getBuffer());
	}
}

export { GameRules, type GameRule };
