import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface Metadata {
	flag?: boolean;
	key: number;
	type: number;
	value: bigint | boolean | number | string | null;
}

class MetadataDictionary extends DataType {
	public static read(stream: Encapsulated): Metadata[] {
		const metadata: Metadata[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const key = stream.readVarInt();
			const type = stream.readVarInt();
			let value: bigint | boolean | number | string | null = null;
			switch (type) {
				case 0:
					value = stream.readUint8();
					break;
				case 1:
					value = stream.readInt16(Endianness.Little);
					break;
				case 2:
					value = stream.readZigZag();
					break;
				case 3:
					value = stream.readFloat32(Endianness.Little);
					break;
				case 4:
					value = stream.readBigString();
					break;
				case 5:
					value = null; // TODO: read NBT
					break;
				case 6:
					value = null; // TODO: read vector3i
					break;
				case 7:
					value = stream.readZigZong();
					break;
				case 8:
					value = null; // TODO: read vector3f
					break;
			}

			metadata.push({ key, type, value, flag: key >= 64 });
		}

		return metadata;
	}
	public static write(stream: Encapsulated, value: Metadata[]): void {
		stream.writeVarInt(value.length);
		let flagKey = 0n;
		for (const metadata of value) {
			if (metadata.flag) {
				const key = metadata.key >= 64 ? 94 : 0;
				const flagId = BigInt(metadata.key % 64);
				stream.writeVarInt(key);
				stream.writeVarInt(7);
				const val = flagKey ^ (1n << flagId);
				stream.writeZigZong(flagKey ^ (1n << flagId));
				flagKey = val;
			} else {
				stream.writeVarInt(metadata.key);
				stream.writeVarInt(metadata.type);
				switch (metadata.type) {
					case 0:
						stream.writeUint8(metadata.value as number);
						break;
					case 1:
						stream.writeInt16(metadata.value as number, Endianness.Little);
						break;
					case 2:
						stream.writeZigZag(metadata.value as number);
						break;
					case 3:
						stream.writeFloat32(metadata.value as number, Endianness.Little);
						break;
					case 4:
						stream.writeBigString(metadata.value as string);
						break;
					case 5:
						break; // TODO: write NBT
					case 6:
						break; // TODO: write vector3i
					case 7:
						stream.writeZigZong(metadata.value as bigint);
						break;
					case 8:
						break; // TODO: write vector3f
				}
			}
		}
	}
}

export { MetadataDictionary, type Metadata };
