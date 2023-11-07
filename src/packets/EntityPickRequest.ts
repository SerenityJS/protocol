import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, Bool, UInt64, UInt8, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x23, VarInt)
class EntityPickRequest extends Encapsulated {
	@Serialize(UInt64, Endianness.Little) public runtimeId!: bigint;
	@Serialize(UInt8) public selectedSlot!: number;
	@Serialize(Bool) public withData!: boolean;
}

export { EntityPickRequest };
