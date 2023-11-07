import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface ResourcePack {
	contentIdentity: string;
	contentKey: string;
	hasScripts: boolean;
	rtxEnabled: boolean;
	size: number;
	subPackName: string;
	uuid: string;
	version: string;
}

class ResourcePackInfo extends DataType {
	public static read(stream: Encapsulated): ResourcePack[] {
		const packs: ResourcePack[] = [];
		const length = stream.readInt16(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const uuid = stream.readBigString();
			const version = stream.readBigString();
			const size = stream.readUint32(Endianness.Little);
			const contentKey = stream.readBigString();
			const subPackName = stream.readBigString();
			const contentIdentity = stream.readBigString();
			const hasScripts = stream.readBool();
			const rtxEnabled = stream.readBool();
			packs.push({ contentIdentity, contentKey, hasScripts, size, subPackName, uuid, version, rtxEnabled });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: ResourcePack[]): void {
		stream.writeInt16(value.length, Endianness.Little);
		for (const pack of value) {
			stream.writeBigString(pack.uuid);
			stream.writeBigString(pack.version);
			stream.writeUint32(pack.size, Endianness.Little);
			stream.writeBigString(pack.contentKey);
			stream.writeBigString(pack.subPackName);
			stream.writeBigString(pack.contentIdentity);
			stream.writeBool(pack.hasScripts);
			stream.writeBool(pack.rtxEnabled);
		}
	}
}

export { ResourcePackInfo, type ResourcePack };
