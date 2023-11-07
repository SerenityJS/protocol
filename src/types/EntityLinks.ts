import { BinaryStream } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface EntityLink {
	immediate: boolean;
	riddenEntityId: bigint;
	riderEntityId: bigint;
	riderInitiated: boolean;
	type: number;
}

class EntityLinks extends DataType {
	public static read(stream: Encapsulated): EntityLink[] {
		const links: EntityLink[] = [];
		const length = stream.readVarInt();
		for (let i = 0; i < length; i++) {
			const riddenEntityId = stream.readZigZong();
			const riderEntityId = stream.readZigZong();
			const type = stream.readUint8();
			const immediate = stream.readBool();
			const riderInitiated = stream.readBool();
			links.push({ riddenEntityId, riderEntityId, type, immediate, riderInitiated });
		}

		return links;
	}
	public static write(stream: Encapsulated, value: EntityLink[]): void {
		const buffer = new BinaryStream();
		buffer.writeVarInt(value.length);
		for (const link of value) {
			buffer.writeZigZong(link.riddenEntityId);
			buffer.writeZigZong(link.riderEntityId);
			buffer.writeUint8(link.type);
			buffer.writeBool(link.immediate);
			buffer.writeBool(link.riderInitiated);
		}

		stream.writeBuffer(buffer.getBuffer());
	}
}

export { EntityLinks, type EntityLink };
