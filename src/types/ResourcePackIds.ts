import { BinaryStream, Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

class ResourcePackIds extends DataType {
	public static read(stream: Encapsulated): string[] {
		const packs: string[] = [];
		const length = stream.readInt16(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const id = stream.readBigString();
			packs.push(id);
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: string[]): void {
		const buffer = new BinaryStream();
		buffer.writeInt16(value.length, Endianness.Little);
		for (const pack of value) {
			stream.writeBigString(pack);
		}

		stream.writeBuffer(buffer.getBuffer());
	}
}

export { ResourcePackIds };
