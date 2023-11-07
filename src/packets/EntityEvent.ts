import { UInt8, VarInt, VarLong, ZigZag, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x1b, VarInt)
class EntityEvent extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(UInt8) public eventId!: number; // TODO: enum
	@Serialize(ZigZag) public data!: number;
}

export { EntityEvent };
