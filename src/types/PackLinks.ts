import { BinaryStream } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface PackLink {
	id: string;
	url: string;
}

class PackLinks extends DataType {
	public static read(stream: Encapsulated): PackLink[] {
		const packs: PackLink[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const id = stream.readBigString();
			const url = stream.readBigString();
			packs.push({ id, url });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: PackLink[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const pack of value) {
			stream.writeBigString(pack.id);
			stream.writeBigString(pack.url);
		}

		stream.writeBuffer(buffer.getBuffer());
	}
}

export { PackLinks, type PackLink };
