import { Packet, Serialize, VarInt, VarLong, ZigZag } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x2c, VarInt)
class Animate extends Encapsulated {
	@Serialize(ZigZag) public actionId!: number; // enum?
	@Serialize(VarLong) public runtimeId!: bigint;

	// TODO: if action ID is 128 or 129 then set boat_rowing_time LF32
}

export { Animate };
