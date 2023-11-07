import { VarInt, VarLong, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x71, VarInt)
class SetLocalPlayerAsInitialized extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
}

export { SetLocalPlayerAsInitialized };
