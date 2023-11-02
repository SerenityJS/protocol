import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, Short, Bool, UInt8, Float, Int32, Long, VarLong, ZigZag } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x2c, VarInt)
class Animate extends Encapsulated {
	@Serialize(ZigZag) public actionId!: number; // enum?
	@Serialize(VarLong) public runtimeId!: bigint;

	// TODO: if action ID is 128 or 129 then set boat_rowing_time LF32
}

export { Animate };
