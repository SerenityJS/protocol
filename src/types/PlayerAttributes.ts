import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import type { Attributes } from '../enums';

interface PlayerAttribute {
	current: number;
	default: number;
	max: number;
	min: number;
	modifiers: PlayerAttributeModifier[];
	name: Attributes;
}

interface PlayerAttributeModifier {
	amount: number;
	id: string;
	name: string;
	operand: number;
	operation: number;
	serializable: boolean;
}

class PlayerAttributes extends DataType {
	public static read(stream: Encapsulated): PlayerAttribute[] {
		const attributes: PlayerAttribute[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const min = stream.readFloat32(Endianness.Little);
			const max = stream.readFloat32(Endianness.Little);
			const current = stream.readFloat32(Endianness.Little);
			const default_ = stream.readFloat32(Endianness.Little);
			const name = stream.readBigString();
			const modifiers: PlayerAttributeModifier[] = [];
			const modifierLenght = stream.readVarInt();
			for (let i = 0; i < modifierLenght; i++) {
				const id = stream.readBigString();
				const name = stream.readBigString();
				const amount = stream.readFloat32(Endianness.Little);
				const operation = stream.readInt32(Endianness.Little);
				const operand = stream.readInt32(Endianness.Little);
				const serializable = stream.readBool();
				modifiers.push({ id, name, amount, operation, operand, serializable });
			}

			attributes.push({ min, max, current, default: default_, name: name as Attributes, modifiers });
		}

		return attributes;
	}
	public static write(stream: Encapsulated, value: PlayerAttribute[]): void {
		stream.writeVarInt(value.length);
		for (const attribute of value) {
			stream.writeFloat32(attribute.min, Endianness.Little);
			stream.writeFloat32(attribute.max, Endianness.Little);
			stream.writeFloat32(attribute.current, Endianness.Little);
			stream.writeFloat32(attribute.default, Endianness.Little);
			stream.writeBigString(attribute.name);
			stream.writeVarInt(attribute.modifiers.length);
			for (const modifier of attribute.modifiers) {
				stream.writeBigString(modifier.id);
				stream.writeBigString(modifier.name);
				stream.writeFloat32(modifier.amount, Endianness.Little);
				stream.writeInt32(modifier.operation, Endianness.Little);
				stream.writeInt32(modifier.operand, Endianness.Little);
				stream.writeBool(modifier.serializable);
			}
		}
	}
}

export { PlayerAttributes, type PlayerAttribute, type PlayerAttributeModifier };
