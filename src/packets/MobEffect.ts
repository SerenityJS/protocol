import { Packet, Serialize, Bool, UInt8, VarInt, VarLong, ZigZag } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x1c, VarInt)
class MobEffect extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(UInt8) public eventId!: number; // enum? 1 = Add, 2 = Update, 3 = Remove
	@Serialize(ZigZag) public effectId!: number;
	@Serialize(ZigZag) public amplifier!: number;
	@Serialize(Bool) public particles!: boolean;
	@Serialize(ZigZag) public duration!: number;
}

export { MobEffect };
