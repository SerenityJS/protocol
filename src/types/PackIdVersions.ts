import { BinaryStream } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface PackIdVersion {
	name: string;
	uuid: string;
	version: string;
}

class PackIdVersions extends DataType {
	public static read(stream: Encapsulated): PackIdVersion[] {
		const packs: PackIdVersion[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const uuid = stream.readBigString();
			const version = stream.readBigString();
			const name = stream.readBigString();
			packs.push({ name, uuid, version });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: PackIdVersion[]): void {
		stream.writeVarInt(value.length);
		for (const pack of value) {
			stream.writeBigString(pack.uuid);
			stream.writeBigString(pack.version);
			stream.writeBigString(pack.name);
		}
	}
}

export { PackIdVersions, type PackIdVersion };
