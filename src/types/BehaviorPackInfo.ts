import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface BehaviorPack {
	contentIdentity: string;
	contentKey: string;
	hasScripts: boolean;
	size: number;
	subPackName: string;
	uuid: string;
	version: string;
}

class BehaviorPackInfo extends DataType {
	public static read(stream: Encapsulated): BehaviorPack[] {
		const packs: BehaviorPack[] = [];
		const length = stream.readInt16(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const uuid = stream.readBigString();
			const version = stream.readBigString();
			const size = stream.readUint32(Endianness.Little);
			const contentKey = stream.readBigString();
			const subPackName = stream.readBigString();
			const contentIdentity = stream.readBigString();
			const hasScripts = stream.readBool();
			packs.push({ contentIdentity, contentKey, hasScripts, size, subPackName, uuid, version });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: BehaviorPack[]): void {
		stream.writeInt16(value.length, Endianness.Little);
		for (const pack of value) {
			stream.writeBigString(pack.uuid);
			stream.writeBigString(pack.version);
			stream.writeUint32(pack.size, Endianness.Little);
			stream.writeBigString(pack.contentKey);
			stream.writeBigString(pack.subPackName);
			stream.writeBigString(pack.contentIdentity);
			stream.writeBool(pack.hasScripts);
		}
	}
}

export { BehaviorPackInfo, type BehaviorPack };
