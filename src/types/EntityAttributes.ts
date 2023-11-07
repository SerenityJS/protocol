import { BinaryStream, Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface EntityAttribute {
	max: number;
	min: number;
	name: string;
	value: number;
}

class EntityAttributes extends DataType {
	public static read(stream: Encapsulated): EntityAttribute[] {
		const attributes: EntityAttribute[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const name = stream.readBigString();
			const min = stream.readFloat32(Endianness.Little);
			const value = stream.readFloat32(Endianness.Little);
			const max = stream.readFloat32(Endianness.Little);
			attributes.push({ name, min, value, max });
		}

		return attributes;
	}
	public static write(stream: Encapsulated, value: EntityAttribute[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const attribute of value) {
			buffer.writeBigString(attribute.name);
			buffer.writeFloat32(attribute.min, Endianness.Little);
			buffer.writeFloat32(attribute.value, Endianness.Little);
			buffer.writeFloat32(attribute.max, Endianness.Little);
		}

		stream.writeBuffer(buffer.getBuffer());
	}
}

export { EntityAttributes, type EntityAttribute };
